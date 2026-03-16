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

    // Clean up previous floating elements
    if (this._floatingInterval) {
      clearInterval(this._floatingInterval);
      this._floatingInterval = null;
    }

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

    // Hero image swap (replaces video with static image)
    this._applyHeroImage(theme.content && theme.content.heroImageKey);

    // Floating elements
    this._applyFloatingElements(theme.floatingElements);

    console.log(`Theme: ${theme.name} (${theme.id})`);
  }

  _applyHeroImage(imagePath) {
    const video = document.querySelector('.hero-video');
    if (!video) return;

    if (!imagePath) {
      // No hero image — ensure video is visible
      video.style.display = '';
      const existingImg = document.querySelector('.hero-image');
      if (existingImg) existingImg.remove();
      return;
    }

    // Hide video, insert image
    video.style.display = 'none';
    let img = document.querySelector('.hero-image');
    if (!img) {
      img = document.createElement('img');
      img.className = 'hero-image hero-video'; // reuse hero-video styling
      video.parentNode.insertBefore(img, video);
    }
    img.src = imagePath;
    img.alt = 'Hikari Sushi';
  }

  _applyFloatingElements(config) {
    // If no config or disabled, hide container and stop spawning
    if (!config || !config.enabled) {
      const existing = document.querySelector('.floating-elements');
      if (existing) {
        existing.style.display = 'none';
        existing.innerHTML = '';
      }
      return;
    }

    // Find or create container
    let container = document.querySelector('.' + config.containerClass);
    if (!container) {
      container = document.createElement('div');
      container.className = config.containerClass;
      document.body.appendChild(container);
    }
    container.style.display = 'block';
    container.innerHTML = '';

    // Spawn floating elements on an interval
    this._floatingInterval = setInterval(() => {
      const el = document.createElement('span');
      el.className = config.elementClass;
      el.textContent = config.characters[Math.floor(Math.random() * config.characters.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.color = config.colors[Math.floor(Math.random() * config.colors.length)];
      el.style.fontSize = (1.2 + Math.random() * 1.8).toFixed(1) + 'rem';
      el.style.animationDuration = (5 + Math.random() * 6).toFixed(1) + 's';
      el.addEventListener('animationend', () => el.remove());
      container.appendChild(el);
    }, config.interval);
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
