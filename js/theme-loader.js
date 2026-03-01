/* ========================================
   Hikari Sushi — Theme Loader
   Resolves seasonal themes by date, applies CSS tokens
   ======================================== */

class ThemeLoader {
  constructor() {
    this.activeTheme = null;
    this.allThemes = [];
  }

  /* ---- Public API ---- */

  async init() {
    try {
      const config = await this._fetch('/theme-config.json');

      // Fetch all registered theme JSONs in parallel
      const results = await Promise.all(
        config.themes.map(id =>
          this._fetch(`/themes/${id}.json`).catch(() => null)
        )
      );
      this.allThemes = results.filter(Boolean);

      // Resolve which theme to activate
      const queryOverride = new URLSearchParams(window.location.search).get('theme');
      const theme = this._resolve(
        this.allThemes,
        this._today(),
        queryOverride,
        config.manualOverride,
        config.fallbackTheme
      );

      this._apply(theme);
    } catch (error) {
      console.error('Theme loader failed:', error);
    }
  }

  getInfo() {
    if (!this.activeTheme) return null;
    return {
      id: this.activeTheme.id,
      name: this.activeTheme.name,
      level: this.activeTheme.level,
      startDate: this.activeTheme.startDate,
      endDate: this.activeTheme.endDate
    };
  }

  /* ---- Resolver ---- */

  _resolve(themes, today, queryOverride, manualOverride, fallbackId) {
    // 1. ?theme= query param override
    if (queryOverride) {
      const match = themes.find(
        t => t.id === queryOverride && t.rules && t.rules.allowManualOverride
      );
      if (match) return match;
    }

    // 2. manualOverride from config
    if (manualOverride) {
      const match = themes.find(t => t.id === manualOverride);
      if (match) return match;
    }

    // 3. Filter by enabled + date range
    const active = themes.filter(t => {
      if (!t.rules || !t.rules.enabled) return false;
      if (!t.startDate || !t.endDate) return false;
      return today >= t.startDate && today <= t.endDate;
    });

    // 4. Sort: priority DESC, then startDate DESC (most recent wins ties)
    active.sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return b.startDate.localeCompare(a.startDate);
    });

    if (active.length > 0) return active[0];

    // 5. Fallback
    return themes.find(t => t.id === fallbackId) || themes[0];
  }

  /* ---- Applicator ---- */

  _apply(theme) {
    if (!theme) return;
    this.activeTheme = theme;

    // Set CSS custom properties
    const root = document.documentElement;
    if (theme.tokens) {
      Object.entries(theme.tokens).forEach(([prop, value]) => {
        root.style.setProperty(prop, value);
      });
    }

    // Set data-theme on body
    document.body.setAttribute('data-theme', theme.id);

    // Badge text
    if (theme.content && theme.content.badgeText) {
      const badge = document.querySelector('.theme-badge');
      if (badge) {
        badge.textContent = theme.content.badgeText;
      }
    }

    console.log(`Theme: ${theme.name} (${theme.id})`);
  }

  /* ---- Helpers ---- */

  _today() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  async _fetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
  }
}

// Auto-initialize
const themeLoader = new ThemeLoader();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => themeLoader.init());
} else {
  themeLoader.init();
}

// Console access
window.ThemeLoader = ThemeLoader;
window.themeLoader = themeLoader;
