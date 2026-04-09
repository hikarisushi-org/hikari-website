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
        var googleGSvg = '<svg class="reviews-overall-google-g" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">' +
          '<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>' +
          '<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>' +
          '<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>' +
          '<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>' +
          '</svg>';
        overallDiv.innerHTML =
          googleGSvg +
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

});
