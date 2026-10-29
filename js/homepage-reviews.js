// Use the existing Denver-local daily rotation. Keep readable excerpts on network failure.
(async () => {
  const host = document.querySelector('#guest-reviews');
  if (!host) return;
  try {
    const response = await fetch('/.netlify/functions/reviews');
    if (!response.ok) throw new Error('Reviews unavailable');
    const { reviews } = await response.json();
    const entries = reviews.filter(review => review.text && review.author);
    if (!entries.length) return;
    let offset = 0;
    const render = () => {
      const cards = Array.from({ length: Math.min(2, entries.length) }, (_, n) => {
        const review = entries[(offset + n) % entries.length];
        const card = document.createElement('figure'); card.className = 'quote';
        const stars = document.createElement('div'); stars.className = 'stars';
        stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
        stars.textContent = '★'.repeat(Math.max(0, Math.min(5, Math.round(review.rating))));
        const quote = document.createElement('blockquote'); quote.textContent = review.text;
        const author = document.createElement('figcaption'); author.textContent = review.author;
        if (review.publishTime) author.textContent += ' · ' + new Date(review.publishTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        card.append(stars, quote, author); return card;
      });
      host.replaceChildren(...cards);
    };
    render();
    if (entries.length > 2) {
      const controls = document.createElement('div'); controls.className = 'review-controls';
      for (const [label, delta] of [['Previous reviews', -2], ['Next reviews', 2]]) {
        const button = document.createElement('button'); button.type = 'button'; button.textContent = label;
        button.addEventListener('click', () => { offset = (offset + delta + entries.length) % entries.length; render(); });
        controls.append(button);
      }
      host.after(controls);
      host.setAttribute('aria-live', 'polite');
    }
  } catch (error) { console.warn('Showing saved review excerpts:', error.message); }
})();
