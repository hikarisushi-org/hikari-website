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

      // Rebuild swipers after filter change (categories visibility changed)
      if (swiperActive) {
        destroyMenuSwipers();
        initMenuSwipers();
      }
    });
  });

  // ---- Menu Swiper Carousels (mobile only) ----
  const MIN_ITEMS_FOR_SWIPER = 3;
  const SWIPER_BREAKPOINT = 768;
  let menuSwipers = [];
  let swiperActive = false;

  function initMenuSwipers() {
    if (swiperActive) return;
    if (typeof Swiper === 'undefined') return;

    document.querySelectorAll('.menu-category:not(.hidden) .menu-grid').forEach(function(grid) {
      var items = grid.querySelectorAll('.menu-item');
      if (items.length < MIN_ITEMS_FOR_SWIPER) return;

      // Wrap items in swiper structure
      var wrapper = document.createElement('div');
      wrapper.className = 'swiper-wrapper';

      items.forEach(function(item) {
        var slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.appendChild(item);
        wrapper.appendChild(slide);
      });

      grid.innerHTML = '';
      grid.appendChild(wrapper);

      // Add pagination
      var pagination = document.createElement('div');
      pagination.className = 'menu-swiper-pagination';
      grid.parentNode.insertBefore(pagination, grid.nextSibling);

      grid.classList.add('swiper');

      var swiper = new Swiper(grid, {
        slidesPerView: 'auto',
        spaceBetween: 12,
        grabCursor: true,
        watchSlidesProgress: true,
        pagination: {
          el: pagination,
          clickable: true
        }
      });

      menuSwipers.push({ swiper: swiper, grid: grid, pagination: pagination });
    });

    swiperActive = true;
  }

  function destroyMenuSwipers() {
    if (!swiperActive) return;

    menuSwipers.forEach(function(entry) {
      entry.swiper.destroy(true, true);

      // Unwrap items back to grid children
      var grid = entry.grid;
      var slides = grid.querySelectorAll('.swiper-slide');
      var items = [];
      slides.forEach(function(slide) {
        while (slide.firstChild) {
          items.push(slide.firstChild);
          slide.removeChild(slide.firstChild);
        }
      });

      grid.innerHTML = '';
      items.forEach(function(item) {
        grid.appendChild(item);
      });

      grid.classList.remove('swiper');

      // Remove pagination
      if (entry.pagination && entry.pagination.parentNode) {
        entry.pagination.parentNode.removeChild(entry.pagination);
      }
    });

    menuSwipers = [];
    swiperActive = false;
  }

  function updateAllSwipers() {
    if (!swiperActive) return;
    menuSwipers.forEach(function(entry) {
      entry.swiper.update();
    });
  }

  function handleSwiperBreakpoint() {
    if (window.innerWidth <= SWIPER_BREAKPOINT) {
      if (!swiperActive) initMenuSwipers();
    } else {
      if (swiperActive) destroyMenuSwipers();
    }
  }

  var swiperResizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(swiperResizeTimer);
    swiperResizeTimer = setTimeout(handleSwiperBreakpoint, 200);
  });

  // Init on load
  handleSwiperBreakpoint();

  // ---- Scroll reveal animation ----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        // Update swiper after reveal animation completes
        if (entry.target.classList.contains('menu-category')) {
          setTimeout(updateAllSwipers, 850);
        }
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

  // ---- Presidents' Day Celebration ----
  // No countdown needed - it's Presidents' Day today!
  // The celebration badge is displayed via HTML/CSS

  // ---- Presidential Quote Auto-Rotation ----
  const presidentialMsg = document.getElementById('presidential-message');
  const presidentPortrait = document.getElementById('president-portrait');
  const presidentPhoto = document.getElementById('president-photo');

  if (presidentialMsg) {
    const quotes = [
      {
        text: "In any moment of decision, the best thing you can do is the right thing.",
        author: "Theodore Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/440px-President_Roosevelt_-_Pach_Bros.jpg"
      },
      {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/440px-FDR_1944_Color_Portrait.jpg"
      },
      {
        text: "Ask not what your country can do for you – ask what you can do for your country.",
        author: "John F. Kennedy",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/440px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg"
      },
      {
        text: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"
      },
      {
        text: "It is better to offer no excuse than a bad one.",
        author: "George Washington",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/440px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
      },
      {
        text: "Speak softly and carry a big stick.",
        author: "Theodore Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/440px-President_Roosevelt_-_Pach_Bros.jpg"
      },
      {
        text: "The buck stops here.",
        author: "Harry S. Truman",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg/440px-TRUMAN_58-766-06_%28cropped%29.jpg"
      },
      {
        text: "Government of the people, by the people, for the people, shall not perish from the earth.",
        author: "Abraham Lincoln",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"
      },
      {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/440px-FDR_1944_Color_Portrait.jpg"
      },
      {
        text: "Change will not come if we wait for some other person or some other time.",
        author: "Barack Obama",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg"
      },
      {
        text: "We cannot always build the future for our youth, but we can build our youth for the future.",
        author: "Franklin D. Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/440px-FDR_1944_Color_Portrait.jpg"
      },
      {
        text: "Associate yourself with men of good quality if you esteem your own reputation.",
        author: "George Washington",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/440px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
      },
      {
        text: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/440px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"
      },
      {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/440px-President_Roosevelt_-_Pach_Bros.jpg"
      },
      {
        text: "It is amazing what you can accomplish if you do not care who gets the credit.",
        author: "Harry S. Truman",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg/440px-TRUMAN_58-766-06_%28cropped%29.jpg"
      },
    ];

    let currentIndex = 0;

    function showQuote(index) {
      presidentialMsg.classList.add('fade');
      if (presidentPortrait) presidentPortrait.classList.add('fade');

      setTimeout(() => {
        const quote = quotes[index];
        presidentialMsg.textContent = '"' + quote.text + '" — ' + quote.author;
        if (presidentPhoto) {
          presidentPhoto.src = quote.photo;
          presidentPhoto.alt = quote.author;
        }

        presidentialMsg.classList.remove('fade');
        if (presidentPortrait) presidentPortrait.classList.remove('fade');
      }, 300);
    }

    function nextQuote() {
      currentIndex = (currentIndex + 1) % quotes.length;
      showQuote(currentIndex);
    }

    // Show first quote immediately
    showQuote(currentIndex);

    // Auto-rotate every 4 seconds
    setInterval(nextQuote, 4000);
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

  // ---- Floating Stars ----
  const starsContainer = document.querySelector('.floating-stars');
  if (starsContainer) {
    const starChars = ['\u2605', '\u2606', '\u2B50', '\u269C', '\u2726'];
    const starColors = [
      'rgba(26, 77, 143, 0.3)',    // blue — patriotic
      'rgba(198, 40, 40, 0.25)',   // red — patriotic
      'rgba(255, 215, 0, 0.4)',    // gold — stars
      'rgba(255, 255, 255, 0.35)', // white — visible on all backgrounds
      'rgba(184, 149, 106, 0.3)',  // bronze/gold
    ];

    function spawnStar() {
      const star = document.createElement('span');
      star.className = 'floating-star';
      star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
      star.style.left = Math.random() * 100 + '%';
      star.style.fontSize = (1.4 + Math.random() * 2.4) + 'rem';
      star.style.animationDuration = (5 + Math.random() * 6) + 's';
      star.style.color = starColors[Math.floor(Math.random() * starColors.length)];
      starsContainer.appendChild(star);
      star.addEventListener('animationend', () => star.remove());
    }

    setInterval(spawnStar, 700);
  }

});
