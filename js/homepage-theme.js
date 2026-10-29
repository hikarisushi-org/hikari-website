// Seasonal accents may change, but the owner-selected homepage photograph stays fixed.
(() => {
  const update = () => {
    if (!document.body.dataset.theme || document.body.dataset.theme === 'default') return;
    const style = getComputedStyle(document.documentElement);
    for (const [target, source] of [['--red', '--color-accent'], ['--celadon', '--color-bg-alt']]) {
      const value = style.getPropertyValue(source).trim();
      if (value) document.documentElement.style.setProperty(target, value);
    }
  };
  new MutationObserver(update).observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
  update();
})();
