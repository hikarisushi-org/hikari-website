/* ========================================
   Hikari Sushi — Theme Loader
   Dynamically loads and applies holiday themes
   ======================================== */

class ThemeLoader {
  constructor() {
    this.currentTheme = null;
    this.config = null;
  }

  async init() {
    try {
      // Load theme configuration
      const configResponse = await fetch('/theme-config.json');
      this.config = await configResponse.json();

      // Load the active theme
      const themeId = this.config.activeTheme || this.config.fallbackTheme;
      await this.loadTheme(themeId);
    } catch (error) {
      console.error('Theme loader initialization failed:', error);
      // Fall back to default if loading fails
      await this.loadTheme(this.config?.fallbackTheme || 'default');
    }
  }

  async loadTheme(themeId) {
    try {
      const themeResponse = await fetch(`/themes/${themeId}.json`);
      const theme = await themeResponse.json();
      this.currentTheme = theme;

      console.log(`Loading theme: ${theme.metadata.name}`);

      // Apply theme in order
      this.applyColors(theme.colors);
      this.applyTypography(theme.typography);
      this.applyHero(theme.hero);
      this.applyBanner(theme.banner);
      this.applyFloatingElements(theme.floatingElements);
      this.applyQuoteGenerator(theme.quoteGenerator);

      // Add theme class to body for CSS targeting
      document.body.setAttribute('data-theme', themeId);

      console.log(`Theme "${theme.metadata.name}" loaded successfully`);
    } catch (error) {
      console.error(`Failed to load theme "${themeId}":`, error);
      throw error;
    }
  }

  applyColors(colors) {
    if (!colors) return;

    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }

  applyTypography(typography) {
    if (!typography) return;

    const root = document.documentElement;
    Object.entries(typography).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }

  applyHero(hero) {
    if (!hero) return;

    // Apply hero overlay gradient
    if (hero.overlayGradient) {
      const overlay = document.querySelector('.hero-overlay');
      if (overlay) {
        overlay.style.background = hero.overlayGradient;
      }
    }

    // Update hero video if specified (different from default)
    if (hero.videoPath) {
      const videoSource = document.querySelector('.hero-video source');
      if (videoSource && videoSource.src !== hero.videoPath) {
        videoSource.src = hero.videoPath;
        const video = document.querySelector('.hero-video');
        if (video) video.load();
      }
    }
  }

  applyBanner(banner) {
    if (!banner) return;

    const bannerSection = document.querySelector(`.${banner.sectionClass}`);

    if (banner.enabled && bannerSection) {
      // Show banner and update content
      bannerSection.style.display = 'block';

      // Update banner text elements
      const titleEl = bannerSection.querySelector('[class*="-text"]');
      if (titleEl && banner.title) {
        // Keep the star icons, just update text
        titleEl.innerHTML = `<span class="${banner.sectionClass.replace('banner', 'star')}">&#9733;</span> ${banner.title} <span class="${banner.sectionClass.replace('banner', 'star')}">&#9733;</span>`;
      }

      const subtitleEl = bannerSection.querySelector('[class*="-sub"]');
      if (subtitleEl && banner.subtitle) {
        subtitleEl.textContent = banner.subtitle;
      }

      const celebrationTextEl = bannerSection.querySelector('.celebration-text');
      if (celebrationTextEl && banner.celebrationText) {
        celebrationTextEl.textContent = banner.celebrationText;
      }

      const celebrationSubEl = bannerSection.querySelector('.celebration-subtitle');
      if (celebrationSubEl && banner.celebrationSubtext) {
        celebrationSubEl.textContent = banner.celebrationSubtext;
      }

      const inviteTitleEl = bannerSection.querySelector('[class*="dinner-title"]');
      if (inviteTitleEl && banner.inviteTitle) {
        inviteTitleEl.textContent = banner.inviteTitle;
      }

      const inviteSubEl = bannerSection.querySelector('[class*="dinner-sub"]');
      if (inviteSubEl && banner.inviteSub) {
        inviteSubEl.textContent = banner.inviteSub;
      }

      const inviteNoteEl = bannerSection.querySelector('[class*="dinner-note"]');
      if (inviteNoteEl && banner.inviteNote) {
        inviteNoteEl.textContent = banner.inviteNote;
      }
    } else if (bannerSection) {
      // Hide banner if not enabled
      bannerSection.style.display = 'none';
    }
  }

  applyFloatingElements(floatingConfig) {
    if (!floatingConfig || !floatingConfig.enabled) {
      // Remove floating elements if disabled
      const container = document.querySelector(`.${floatingConfig?.containerClass || 'floating-elements'}`);
      if (container) {
        container.innerHTML = '';
        container.style.display = 'none';
      }
      return;
    }

    let container = document.querySelector(`.${floatingConfig.containerClass}`);
    if (!container) {
      container = document.createElement('div');
      container.className = floatingConfig.containerClass;
      container.setAttribute('aria-hidden', 'true');
      document.body.appendChild(container);
    }

    container.style.display = 'block';

    // Spawn floating elements
    const spawnElement = () => {
      const element = document.createElement('span');
      element.className = floatingConfig.elementClass;
      element.textContent = floatingConfig.characters[Math.floor(Math.random() * floatingConfig.characters.length)];
      element.style.left = Math.random() * 100 + '%';
      element.style.fontSize = (1.4 + Math.random() * 2.4) + 'rem';
      element.style.animationDuration = (5 + Math.random() * 6) + 's';
      element.style.color = floatingConfig.colors[Math.floor(Math.random() * floatingConfig.colors.length)];
      container.appendChild(element);
      element.addEventListener('animationend', () => element.remove());
    };

    // Clear any existing interval
    if (this._floatingInterval) {
      clearInterval(this._floatingInterval);
    }

    // Start spawning
    this._floatingInterval = setInterval(spawnElement, floatingConfig.interval || 700);
  }

  applyQuoteGenerator(quoteConfig) {
    if (!quoteConfig || !quoteConfig.enabled) {
      // Hide quote generator if disabled
      const messageBox = document.querySelector('.presidential-message-box, .quote-message-box');
      if (messageBox) {
        messageBox.style.display = 'none';
      }
      // Clear any existing interval
      if (this._quoteInterval) {
        clearInterval(this._quoteInterval);
      }
      return;
    }

    const messageBox = document.querySelector('.presidential-message-box, .quote-message-box');
    if (!messageBox) return;

    messageBox.style.display = 'block';

    const messageEl = document.getElementById('presidential-message') || document.getElementById('quote-message');
    const portraitEl = document.getElementById('president-portrait') || document.getElementById('quote-portrait');
    const photoEl = document.getElementById('president-photo') || document.getElementById('quote-photo');

    if (!messageEl || !quoteConfig.quotes || quoteConfig.quotes.length === 0) return;

    let currentIndex = 0;

    const showQuote = (index) => {
      if (messageEl) messageEl.classList.add('fade');
      if (portraitEl) portraitEl.classList.add('fade');

      setTimeout(() => {
        const quote = quoteConfig.quotes[index];
        if (messageEl) {
          messageEl.textContent = `"${quote.text}" — ${quote.author}`;
        }
        if (photoEl && quote.photo) {
          photoEl.src = quote.photo;
          photoEl.alt = quote.author;
        }

        if (messageEl) messageEl.classList.remove('fade');
        if (portraitEl) portraitEl.classList.remove('fade');
      }, 300);
    };

    const nextQuote = () => {
      currentIndex = (currentIndex + 1) % quoteConfig.quotes.length;
      showQuote(currentIndex);
    };

    // Show first quote
    showQuote(currentIndex);

    // Clear any existing interval
    if (this._quoteInterval) {
      clearInterval(this._quoteInterval);
    }

    // Auto-rotate quotes
    this._quoteInterval = setInterval(nextQuote, quoteConfig.interval || 4000);
  }

  getThemeInfo() {
    return this.currentTheme ? this.currentTheme.metadata : null;
  }
}

// Auto-initialize on page load
const themeLoader = new ThemeLoader();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => themeLoader.init());
} else {
  themeLoader.init();
}

// Export for console access
window.ThemeLoader = ThemeLoader;
window.themeLoader = themeLoader;
