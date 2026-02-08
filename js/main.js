/* ========================================
   Hikari Sushi — Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---- Menu category filtering ----
  const filters = document.querySelectorAll('.menu-filter');
  const categories = document.querySelectorAll('.menu-category');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      categories.forEach(cat => {
        if (filter === 'all' || cat.dataset.category === filter) {
          cat.classList.remove('hidden');
        } else {
          cat.classList.add('hidden');
        }
      });
    });
  });

  // ---- Scroll reveal animation ----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Valentine's Day Countdown ----
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');
  const countdownEl = document.getElementById('vday-countdown');

  if (cdDays) {
    const vday = new Date('2026-02-14T18:00:00').getTime();

    function updateCountdown() {
      const now = Date.now();
      const diff = vday - now;

      if (diff <= 0) {
        countdownEl.innerHTML = '<p style="color:#fff;font-family:var(--font-serif);font-size:1.4rem;">Happy Valentine\'s Day!</p>';
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      cdDays.textContent = String(d).padStart(2, '0');
      cdHours.textContent = String(h).padStart(2, '0');
      cdMins.textContent = String(m).padStart(2, '0');
      cdSecs.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ---- Love Message Generator ----
  const loveBtn = document.getElementById('love-btn');
  const loveMsg = document.getElementById('love-message');

  if (loveBtn && loveMsg) {
    const messages = [
      "Like our signature rolls, you're a perfect combination of everything wonderful.",
      "You're the wasabi to my sushi — a little kick that makes everything better.",
      "Our love is like fresh sashimi — simple, beautiful, and unforgettable.",
      "You had me at 'omakase.' Let the chef of love decide tonight.",
      "Life is raw and beautiful, just like our love and our tuna.",
      "You're the soy sauce to my rice — I'm better with you by my side.",
      "Like a perfect nigiri, some things are just meant to be together.",
      "You stole a pizza my heart... but tonight, let's do sushi instead.",
      "Roses are red, tuna is too, nothing on our menu is as sweet as you.",
      "Love, like sushi, is best when it's fresh — and ours is the freshest.",
      "You're more addictive than our Firefly Fusion, and that's saying something.",
      "I love you more than unlimited edamame, and that's a lot.",
      "Let's roll into forever together — one sushi date at a time.",
      "You're the ginger that cleanses my palate between life's tough bites.",
      "Our love story? Best served with chopsticks and a side of miso.",
    ];

    let lastIndex = -1;

    loveBtn.addEventListener('click', () => {
      loveMsg.classList.add('fade');
      setTimeout(() => {
        let idx;
        do { idx = Math.floor(Math.random() * messages.length); } while (idx === lastIndex);
        lastIndex = idx;
        loveMsg.textContent = '"' + messages[idx] + '"';
        loveMsg.classList.remove('fade');
      }, 300);
    });
  }

  // ---- Reviews Carousel ----
  const reviewsTrack = document.getElementById('reviews-track');
  const reviewsDotsContainer = document.getElementById('reviews-dots');
  const reviewsPrev = document.getElementById('reviews-prev');
  const reviewsNext = document.getElementById('reviews-next');

  if (reviewsTrack) {
    const CACHE_KEY = 'hikari_reviews';
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    let currentSlide = 0;
    let cardsPerView = 3;
    let totalCards = 0;

    function getCardsPerView() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function renderStars(rating) {
      let stars = '';
      for (let i = 0; i < 5; i++) {
        stars += i < rating ? '\u2605' : '\u2606';
      }
      return stars;
    }

    function renderReviews(data) {
      const { reviews, rating, totalReviews } = data;

      if (!reviews || reviews.length === 0) {
        showFallback();
        return;
      }

      // Show overall rating
      const carousel = document.getElementById('reviews-carousel');
      const overallDiv = document.createElement('div');
      overallDiv.className = 'reviews-overall';
      if (rating) {
        overallDiv.innerHTML =
          '<span class="reviews-overall-rating">' + rating.toFixed(1) + '</span>' +
          '<span class="reviews-overall-stars">' + renderStars(Math.round(rating)) + '</span>' +
          (totalReviews ? '<span class="reviews-overall-count">(' + totalReviews + ' reviews)</span>' : '');
        carousel.insertBefore(overallDiv, reviewsTrack);
      }

      // Render cards
      reviews.forEach(function(review) {
        const card = document.createElement('div');
        card.className = 'review-card';

        const initial = (review.author || 'G').charAt(0).toUpperCase();
        let avatarHTML;
        if (review.profilePhoto) {
          avatarHTML = '<img src="' + review.profilePhoto + '" alt="' + review.author + '" class="review-card-avatar" loading="lazy">';
        } else {
          avatarHTML = '<div class="review-card-avatar-placeholder">' + initial + '</div>';
        }

        card.innerHTML =
          '<div class="review-card-header">' +
            avatarHTML +
            '<div>' +
              '<div class="review-card-author">' + review.author + '</div>' +
              '<div class="review-card-time">' + review.relativeTime + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="review-card-stars">' + renderStars(review.rating) + '</div>' +
          '<p class="review-card-text">' + review.text + '</p>';

        reviewsTrack.appendChild(card);
      });

      totalCards = reviews.length;
      cardsPerView = getCardsPerView();
      buildDots();
      updateCarousel();
      setupSwipe();
    }

    function buildDots() {
      reviewsDotsContainer.innerHTML = '';
      const dotCount = Math.max(1, totalCards - cardsPerView + 1);
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
        dot.addEventListener('click', function() {
          currentSlide = i;
          updateCarousel();
        });
        reviewsDotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      const maxSlide = Math.max(0, totalCards - cardsPerView);
      if (currentSlide > maxSlide) currentSlide = maxSlide;
      if (currentSlide < 0) currentSlide = 0;

      const cardWidth = 100 / cardsPerView;
      reviewsTrack.style.transform = 'translateX(-' + (currentSlide * cardWidth) + '%)';

      // Update dots
      var dots = reviewsDotsContainer.querySelectorAll('.reviews-dot');
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function setupSwipe() {
      let startX = 0;
      let isDragging = false;

      reviewsTrack.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      reviewsTrack.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) currentSlide++;
          else currentSlide--;
          updateCarousel();
        }
      });

      // Mouse drag for desktop
      let mouseStartX = 0;
      let mouseDown = false;

      reviewsTrack.addEventListener('mousedown', function(e) {
        mouseStartX = e.clientX;
        mouseDown = true;
        reviewsTrack.style.cursor = 'grabbing';
      });

      document.addEventListener('mouseup', function(e) {
        if (!mouseDown) return;
        mouseDown = false;
        reviewsTrack.style.cursor = '';
        const diff = mouseStartX - e.clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) currentSlide++;
          else currentSlide--;
          updateCarousel();
        }
      });
    }

    if (reviewsPrev) {
      reviewsPrev.addEventListener('click', function() {
        currentSlide--;
        updateCarousel();
      });
    }
    if (reviewsNext) {
      reviewsNext.addEventListener('click', function() {
        currentSlide++;
        updateCarousel();
      });
    }

    // Recalculate on resize
    window.addEventListener('resize', function() {
      var newPerView = getCardsPerView();
      if (newPerView !== cardsPerView) {
        cardsPerView = newPerView;
        buildDots();
        updateCarousel();
      }
    });

    function showFallback() {
      reviewsTrack.innerHTML =
        '<div class="reviews-fallback">' +
          '<p>We\'d love to hear from you! Check out our reviews on ' +
          '<a href="https://www.google.com/maps/place/?q=place_id:ChIJZV0qzpqHUocR4SuU3IlrTsg" target="_blank" rel="noopener">Google Maps</a>.' +
          '</p>' +
        '</div>';
      if (reviewsPrev) reviewsPrev.style.display = 'none';
      if (reviewsNext) reviewsNext.style.display = 'none';
      reviewsDotsContainer.style.display = 'none';
    }

    // Fetch reviews — check localStorage cache first
    function fetchReviews() {
      try {
        var cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          var parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_DURATION) {
            renderReviews(parsed.data);
            return;
          }
        }
      } catch (e) { /* ignore cache errors */ }

      fetch('/.netlify/functions/reviews')
        .then(function(res) {
          if (!res.ok) throw new Error('API error');
          return res.json();
        })
        .then(function(data) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ data: data, timestamp: Date.now() }));
          } catch (e) { /* ignore storage errors */ }
          renderReviews(data);
        })
        .catch(function() {
          showFallback();
        });
    }

    fetchReviews();
  }

  // ---- Floating Hearts ----
  const heartsContainer = document.querySelector('.floating-hearts');
  if (heartsContainer) {
    const heartChars = ['\u2764', '\u2665', '\u2661', '\uD83D\uDC97', '\uD83D\uDC95'];
    const heartColors = [
      'rgba(198, 40, 40, 0.25)',   // red — visible on light sections
      'rgba(198, 40, 40, 0.18)',   // softer red
      'rgba(255, 255, 255, 0.35)', // white — visible on dark/red sections
      'rgba(255, 255, 255, 0.25)', // softer white
      'rgba(232, 160, 191, 0.30)', // rose pink — works on both
    ];

    function spawnHeart() {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (1.6 + Math.random() * 2.2) + 'rem';
      heart.style.animationDuration = (4 + Math.random() * 5) + 's';
      heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
      heartsContainer.appendChild(heart);
      heart.addEventListener('animationend', () => heart.remove());
    }

    setInterval(spawnHeart, 600);
  }

});
