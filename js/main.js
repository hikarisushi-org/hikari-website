/* ========================================
   Hikari Sushi — Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Hero Video Autoplay ----
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    // Force play the video (handles browser autoplay policies)
    const playPromise = heroVideo.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Autoplay started successfully
        console.log('Hero video playing');
      }).catch(error => {
        // Autoplay was prevented - try playing on user interaction
        console.warn('Hero video autoplay prevented:', error);
        document.addEventListener('click', function playOnClick() {
          heroVideo.play();
          document.removeEventListener('click', playOnClick);
        }, { once: true });
      });
    }
  }

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

  // ---- Reviews Carousel ----
  const reviewsTrack = document.getElementById('reviews-track');
  const reviewsDotsContainer = document.getElementById('reviews-dots');
  const reviewsPrev = document.getElementById('reviews-prev');
  const reviewsNext = document.getElementById('reviews-next');

  if (reviewsTrack) {
    const CACHE_KEY = 'hikari_reviews';
    const CACHE_DURATION = 60 * 60 * 1000; // 1 hour — reviews now rotate server-side
    let currentSlide = 0;
    let cardsPerView = 3;
    let totalCards = 0;

    function getCardsPerView() {
      if (window.innerWidth <= 768) return 1;
      return 2;
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

      // Update headline with rating and count
      var headline = document.getElementById('reviews-headline');
      if (headline && rating) {
        headline.innerHTML = rating.toFixed(1) + '&#9733; Google Reviews';
      }
      var sub = document.getElementById('reviews-sub');
      if (sub && totalReviews) {
        sub.textContent = totalReviews + '+ reviews from Hikari Sushi guests';
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
              '<div class="review-card-time">' + (review.publishTime ? new Date(review.publishTime).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : review.relativeTime) + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="review-card-stars"><span class="review-card-rating">' + review.rating.toFixed(1) + '</span> ' + renderStars(review.rating) + '</div>' +
          '<p class="review-card-text">' + review.text + '</p>';

        reviewsTrack.appendChild(card);

        // Add "Read more" toggle if text is clamped
        var textEl = card.querySelector('.review-card-text');
        if (textEl.scrollHeight > textEl.clientHeight) {
          var toggle = document.createElement('button');
          toggle.className = 'review-card-toggle';
          toggle.textContent = 'Read more';
          toggle.addEventListener('click', function() {
            var expanded = textEl.classList.toggle('expanded');
            toggle.textContent = expanded ? 'Read less' : 'Read more';
          });
          card.appendChild(toggle);
        }
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

      // Each card is 48% width; slide by 48% per step
      var cardPercent = window.innerWidth <= 768 ? 100 : 48;
      reviewsTrack.style.transform = 'translateX(-' + (currentSlide * cardPercent) + '%)';

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

});
