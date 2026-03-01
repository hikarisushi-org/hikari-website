// Page detection — My Picks, onboarding, and search are /menu only
const isMenuPage = document.body.classList.contains('menu-page');

// Complete Menu Data extracted from index.html
const menuData = {
  'most-ordered': {
    title: 'Most Popular',
    items: [
      { name: 'Firefly Fusion', price: '$14.50', desc: 'Tempura shrimp, spicy crab, and jalapeño. Topped with tuna and lime slices. Finished with eel sauce, mango sauce, tobiko, and cilantro.', img: 'assets/images/menu/sushi/firefly_fussion_2.png' },
      { name: 'Citrus Mango Dream', price: '$14', desc: 'Tempura shrimp, cream cheese, and crab mix. Topped with fresh mango and lemon slices. Finished with mango sauce.', img: 'assets/images/menu/sushi/citrus_mango_dream.png' },
      { name: 'Hot Cheetos Roll', price: '$12', desc: 'Crushed Hot Cheetos on rice with spicy crab, cream cheese, and cucumber. Finished with eel sauce and spicy mayo.', img: 'assets/images/menu/sushi/hot_cheetos.png' },
      { name: 'Strawberry Blossom', price: '$14', desc: 'Kani crab, cream cheese, and cucumber. Topped with salmon, strawberries, mango sauce, crunchies, and sesame seeds.', img: 'assets/images/menu/sushi/strawberry_blossom.png' },
      { name: 'Avocado King', price: '$12', desc: 'Shrimp tempura, cucumbers, and radish sprouts. Topped with avocado, eel sauce, and crunchies.', img: 'assets/images/menu/sushi/avocado_king.png' },
      { name: 'Cowboy Roll', price: '$15', desc: 'Asparagus and crab mix inside. Topped with Wagyu beef, spicy eel sauce, green onions, and sesame seeds.', img: 'assets/images/menu/sushi/cowboy_roll.png' },
    ]
  },
  'appetizers': {
    title: 'Appetizers',
    items: [
      { name: 'Sushi Nachos', price: '$10.50', desc: 'Crispy wonton chips topped with spicy tuna, crab mix, creamy avocado, and a drizzle of spicy aioli.', img: 'assets/images/menu/appetizers/sushi_nachos.png', raw: true },
      { name: 'Jalapeño Bomb (4 pcs)', price: '$8', desc: 'Cream cheese and spicy tuna. Topped with eel sauce, spicy mayo, tobiko, green onions, and sesame seeds.', img: 'assets/images/menu/appetizers/jalapeno_bomb.png', raw: true },
      { name: 'Butterflied Garlic Shrimp', price: '$10', desc: '', img: 'assets/images/menu/appetizers/garlic_shrimp.png' },
      { name: 'Edamame (steamed w/ salt)', price: '$5', desc: '', img: 'assets/images/menu/appetizers/edamame.png' },
      { name: 'Miso Soup', price: '$3', desc: '', img: 'assets/images/menu/appetizers/miso.png' },
      { name: 'Shrimp & Vegetable Tempura', price: '$10', desc: 'Lightly battered and fried shrimp served with assorted seasonal vegetables.', img: 'assets/images/menu/appetizers/shrimp_&_veggie_tempura.png' },
      { name: 'Hikari Fire Crunch', price: '$8', desc: '', img: 'assets/images/menu/sushi/hikari_crunch.png' },
    ]
  },
  'traditional-rolls': {
    title: 'Traditional Rolls',
    items: [
      { name: 'Alaskan Roll', price: '$8', desc: 'Salmon, cucumber, and avocado.', raw: true },
      { name: 'Classic California Roll', price: '$8', desc: 'Crab, cucumber, and avocado.', img: 'assets/images/menu/sushi/california_roll.png' },
      { name: 'Philly Roll', price: '$8', desc: 'Cream cheese, smoked salmon, and avocado.', img: 'assets/images/menu/sushi/philly.png', raw: true },
      { name: 'Shrimp Tempura Roll', price: '$8', desc: 'Tempura shrimp, cucumber, sprouts, and eel sauce.', img: 'assets/images/menu/sushi/tempura_shrimp_roll.png' },
      { name: 'Spicy Hamachi Roll', price: '$8', desc: 'Spicy hamachi, sprouts, cucumber, and spicy mayo.', img: 'assets/images/menu/sushi/spicy_hamachi.jpg', raw: true },
      { name: 'Spicy Salmon Roll', price: '$9', desc: 'Salmon, avocado, sprouts, and spicy mayo.', img: 'assets/images/menu/sushi/spicy_salmon.jpg', raw: true },
      { name: 'Spicy Tuna Roll', price: '$9', desc: 'Spicy tuna mix, cucumber, avocado, radish sprouts, and spicy mayo.', img: 'assets/images/menu/sushi/spicy_tuna_roll.jpg', raw: true },
      { name: 'Sweet Potato Roll', price: '$7.50', desc: 'Sweet potato and eel sauce.', img: 'assets/images/menu/sushi/sweet_potato_roll.png' },
      { name: 'Unagi Maki Roll', price: '$9', desc: 'Broiled eel, avocado, and cucumber. Finished with eel sauce and sesame seeds.' },
      { name: 'Veggie Roll', price: '$7.50', desc: 'Avocado, cucumber, asparagus, and red bell pepper.', img: 'assets/images/menu/sushi/veggie_roll.png' },
      { name: 'Yaki Maguro', price: '$14', desc: 'Tempura shrimp and cucumber. Topped with seared tuna. Finished with ponzu sauce, spicy mayo, and togarashi.', img: 'assets/images/menu/sushi/yaki_maguro.png', raw: true },
    ]
  },
  'premium-rolls': {
    title: 'Premium Rolls',
    items: [
      { name: 'Citrus Mango Dream', price: '$14', desc: 'Tempura shrimp, cream cheese, and crab mix. Topped with fresh mango and lemon slices. Finished with mango sauce.', img: 'assets/images/menu/sushi/citrus_mango_dream.png' },
      { name: 'Emerald Dragon Roll', price: '$14', desc: 'Tempura shrimp, cucumber, and crab mix. Topped with eel and avocado. Finished with wasabi mayo, eel sauce, and sesame seeds.', img: 'assets/images/menu/sushi/emerald_dragon.png' },
      { name: 'Hikari Delight Roll', price: '$14.50', desc: 'Salmon, mango, spicy mayo, and jalapeño. Topped with hamachi. Finished with ponzu sauce, crunchies, and green onions.', img: 'assets/images/menu/sushi/hikari_delight.png', raw: true },
      { name: 'Salmon Sunrise Roll', price: '$13', desc: 'Grilled asparagus, crab mix, and avocado. Topped with salmon and lemon slices. Finished with ponzu sauce.', img: 'assets/images/menu/sushi/salmon_sunrise.png', raw: true },
      { name: 'Solar Flare Roll', price: '$14.50', desc: 'Spicy salmon, jalapeño, and cucumber. Topped with hamachi, ebi, and green onions. Finished with macha sauce.', img: 'assets/images/menu/sushi/solar_flare.png', raw: true },
      { name: 'Hot Cheetos Roll', price: '$12', desc: 'Crushed Hot Cheetos on rice with spicy crab, cream cheese, and cucumber. Finished with eel sauce and spicy mayo.', img: 'assets/images/menu/sushi/hot_cheetos.png' },
      { name: 'Playboy', price: '$12', desc: 'Shrimp tempura, crab mix, and cream cheese. Topped with tuna and avocado. Finished with eel sauce, spicy mayo, tobiko, and sesame seeds.', img: 'assets/images/menu/sushi/playboy.png', raw: true },
      { name: 'Lava Volcano Roll', price: '$12', desc: 'Broiled eel, crab mix, and avocado. Baked with spicy mayo. Finished with eel sauce, tobiko, and green onions.', raw: true },
      { name: 'Illuminated Fire Tuna', price: '$14', desc: 'Mango, tuna, and jalapeño. Topped with spicy tuna and lime slices. Finished with garlic ponzu, Thai chiles, and green onions.', img: 'assets/images/menu/sushi/illuminated_fire_tuna.png', raw: true },
      { name: 'Mt Fuji Roll', price: '$14.50', desc: 'Albacore, avocado, and cucumber. Topped with ebi and crab mix. Finished with eel sauce, crunch flakes, and green onions.', img: 'assets/images/menu/sushi/mt_fuji.png', raw: true },
      { name: 'Strawberry Blossom', price: '$14', desc: 'Kani crab, cream cheese, and cucumber. Topped with salmon, strawberries, mango sauce, crunchies, and sesame seeds.', img: 'assets/images/menu/sushi/strawberry_blossom.png' },
      { name: 'Diamond Roll', price: '$14.50', desc: 'Fresh tuna, spicy crab, and cilantro. Finished with Kampachi, lime slices, jalapeño slices, garlic ponzu, and tobiko.', img: 'assets/images/menu/sushi/diamond.png' },
      { name: 'The Forbidden Roll', price: '$13.50', desc: 'Apple, crab mix, and red bell peppers. Topped with cream cheese, fried banana, eel sauce, and lemon zest.', img: 'assets/images/menu/sushi/forbidden_roll.png' },
      { name: 'Firefly Fusion', price: '$14.50', desc: 'Tempura shrimp, spicy crab, and jalapeño. Topped with tuna and lime slices. Finished with eel sauce, mango sauce, tobiko, and cilantro.', img: 'assets/images/menu/sushi/firefly_fussion_2.png' },
      { name: 'Red Lantern', price: '$13.50', desc: 'Seaweed salad, red bell peppers, and shrimp tempura. Topped with tuna. Finished with eel sauce, spicy mayo sriracha, and crunchies.', img: 'assets/images/menu/sushi/red_lantern.png' },
      { name: 'Avocado King', price: '$12', desc: 'Shrimp tempura, cucumbers, and radish sprouts. Topped with avocado, eel sauce, and crunchies.', img: 'assets/images/menu/sushi/avocado_king.png' },
      { name: 'Cowboy Roll', price: '$15', desc: 'Asparagus and crab mix inside. Topped with Wagyu beef, spicy eel sauce, green onions, and sesame seeds.', img: 'assets/images/menu/sushi/cowboy_roll.png' },
      { name: 'Yaki Maguro Roll', price: '$14', desc: 'Tempura shrimp and cucumber. Topped with seared tuna. Finished with ponzu sauce, spicy mayo, and togarashi.', img: 'assets/images/menu/sushi/yaki_maguro.png', raw: true },
    ]
  },
  'heroes': {
    title: 'Heroes',
    items: [
      { name: 'Naruto Roll', price: '$14.50', desc: 'Seared tuna, shishito pepper, and lemon slices. Topped with ebi and fresh mango. Finished with eel sauce and crispy fried onions. A vibrant mix with unexpected punch — believe it!', img: 'assets/images/menu/sushi/naruto.png', raw: true },
    ]
  },
  'tempura-fried': {
    title: 'Tempura Fried',
    items: [
      { name: 'Cali Mex Roll', price: '$10', desc: 'Crab, avocado, and cucumber. Topped with eel sauce, spicy mayo, tobiko, cilantro, and sesame seeds.', img: 'assets/images/menu/sushi/calimex.png', raw: true },
      { name: 'Fire Spicy Tuna Roll', price: '$10', desc: 'Spicy tuna mix, cucumber, and jalapeño. Topped with eel sauce, sriracha sauce, green onions, and sesame seeds.', img: 'assets/images/menu/sushi/fire_spicy_tuna.png', raw: true },
      { name: 'Las Vegas Roll', price: '$12', desc: 'Salmon, crab mix, and cream cheese. Topped with spicy mayo and eel sauce.', img: 'assets/images/menu/sushi/las_vegas.png', raw: true },
      { name: 'Monument Roll', price: '$10', desc: 'Hamachi, salmon, tuna, ebi, and avocado. Topped with spicy eel sauce, green onions, and sesame seeds.', img: 'assets/images/menu/sushi/monument.png', raw: true },
    ]
  },
  'maki': {
    title: 'Maki',
    note: '(6 pcs)',
    heroImage: 'assets/images/menu/sushi/maki.png',
    compactList: true,
    items: [
      { name: 'Avocado Maki', price: '$4', desc: '' },
      { name: 'Hamachi Maki', price: '$5', desc: 'Yellowtail and sushi rice, wrapped in crisp nori. A clean, buttery finish.', raw: true },
      { name: 'Kappa Maki', price: '$5', desc: 'Thin cucumber and sushi rice, rolled in seaweed. A light, refreshing bite.' },
      { name: 'Negihama', price: '$5', desc: 'Yellowtail and scallions, wrapped in nori with rice. Fresh and bold with a gentle onion kick.', raw: true },
      { name: 'Sake Maki', price: '$5', desc: 'Salmon and sushi rice, wrapped in nori. Smooth, simple, and classic.', raw: true },
      { name: 'Tekka Maki', price: '$5', desc: 'Lean tuna and sushi rice, rolled in nori. Clean, umami-packed hosomaki.', raw: true },
    ]
  },
  'nigiri': {
    title: 'Nigiri',
    note: '(2 pcs)',
    heroImage: 'assets/images/menu/sushi/nigiri.png',
    compactList: true,
    items: [
      { name: 'Albacore Nigiri', price: '$5', desc: 'Albacore tuna over seasoned sushi rice. Finished with a touch of ponzu.', raw: true },
      { name: 'Ebi Nigiri', price: '$5', desc: 'Butterflied shrimp placed over sushi rice. Lightly sweet and chilled.' },
      { name: 'Eel Nigiri', price: '$5', desc: 'Grilled eel served over warm rice. Finished with house-made eel sauce.' },
      { name: 'Kampachi Nigiri', price: '$5', desc: 'Amberjack on seasoned sushi rice. Clean, buttery flavor with a firm bite.', raw: true },
      { name: 'Salmon Nigiri', price: '$5', desc: 'Fresh salmon over vinegared rice. Smooth, rich, and silky.', raw: true },
      { name: 'Tuna Nigiri', price: '$5', desc: 'Lean tuna on hand-formed sushi rice. Classic, clean, and savory.', raw: true },
      { name: 'Yellowtail Nigiri', price: '$5', desc: 'Yellowtail over sushi rice. Mild, slightly sweet, with a delicate finish.', raw: true },
    ]
  },
  'sashimi': {
    title: 'Sashimi',
    note: '(3 pcs)',
    heroImage: 'assets/images/menu/sushi/sashimi_new.png',
    compactList: true,
    items: [
      { name: 'Albacore Sashimi', price: '$5', desc: 'Lightly seared albacore tuna, served over crisp daikon. Accompanied by ponzu sauce.', raw: true },
      { name: 'Ebi Sashimi', price: '$5', desc: 'Chilled shrimp, delicately sliced. Served with soy sauce and wasabi.' },
      { name: 'Eel Sashimi', price: '$5', desc: 'Tender broiled eel, rich and silky. Finished with house-made eel sauce.' },
      { name: 'Kampachi Sashimi', price: '$5', desc: 'Fresh kampachi (amberjack), clean and buttery. Served with a hint of lemon.', raw: true },
      { name: 'Salmon Sashimi', price: '$5', desc: 'Premium salmon, smooth and luscious. Accompanied by soy sauce and wasabi.', raw: true },
      { name: 'Tuna Sashimi', price: '$5', desc: 'Lean tuna, vibrant and meaty. Served with traditional soy and wasabi.', raw: true },
      { name: 'Yellowtail Sashimi', price: '$5', desc: 'Yellowtail (hamachi), firm and mildly sweet. Finished with yuzu ponzu.', raw: true },
    ]
  },
  'entrees': {
    title: 'Bowls',
    items: [
      { name: 'Poke Bowl', price: '$9', desc: 'Cubed raw fish tossed with savory sauces over rice, topped with avocado, seaweed, and crunchy toppings.', img: 'assets/images/menu/bowls/poke_bowl.png', raw: true },
      { name: 'Chirashi Bowl', price: '$12', desc: 'An assorted selection of sashimi over seasoned sushi rice, served with fresh vegetables and garnish.', img: 'assets/images/menu/bowls/chirashi_bowl.png', raw: true },
    ]
  },
  'bento': {
    title: 'Bento Boxes',
    items: [
      { name: 'Crispy Chicken Bento Box', price: '$15', desc: '', img: 'assets/images/menu/food/bento_katsu.png' },
      { name: 'Salmon Bento Box', price: '$16', desc: '', img: 'assets/images/menu/food/bento_salmon.png' },
    ]
  },
  'kids': {
    title: 'Kids',
    items: [
      { name: 'Chicken Fingers & Fries', price: '$7', desc: '', img: 'assets/images/menu/food/popcorn_chicken.png' },
    ]
  },
  'beverages': {
    title: 'Beverages',
    items: [
      { name: 'Coke (12oz can)', price: '$2.50', desc: '' },
      { name: 'Sprite (12oz can)', price: '$2.50', desc: '' },
    ]
  }
};

// State
let currentFilter = 'all';
let searchQuery = '';
let allItems = [];
let myList = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (isMenuPage) {
    loadMyList();
  }
  renderMenu();
  setupFilters();
  if (isMenuPage) {
    setupSearch();
  }
  setupModal();
  if (isMenuPage) {
    setupMyList();
    updateMyListBadge();

    // Show onboarding after delay if first visit
    setTimeout(() => {
      showOnboardingIfNeeded();
    }, 1000);
  }
});

// Render menu items
function renderMenu() {
  const container = document.getElementById('menu-container');
  container.innerHTML = '';
  allItems = [];

  Object.keys(menuData).forEach(category => {
    const categoryData = menuData[category];
    const section = document.createElement('div');
    section.className = 'menu-category-section';
    section.dataset.category = category;

    // Category header
    const header = document.createElement('div');
    header.className = 'menu-category-header';
    header.innerHTML = `<h2>${categoryData.title}${categoryData.note ? ` <span class="menu-category-note">${categoryData.note}</span>` : ''}</h2>`;
    section.appendChild(header);

    // Hero image for compact list sections
    if (categoryData.heroImage) {
      const heroImg = document.createElement('img');
      heroImg.src = categoryData.heroImage;
      heroImg.alt = categoryData.title;
      heroImg.className = 'menu-category-hero-img';
      heroImg.loading = 'lazy';
      section.appendChild(heroImg);
    }

    // Items grid or compact list
    if (categoryData.compactList) {
      const list = document.createElement('div');
      list.className = 'menu-compact-list';

      categoryData.items.forEach((item, index) => {
        const itemEl = createCompactListItem(item, category, index);
        list.appendChild(itemEl);
        allItems.push({ element: itemEl.parentElement, category, item });
      });

      section.appendChild(list);
    } else {
      const grid = document.createElement('div');
      grid.className = 'menu-items-grid';

      categoryData.items.forEach((item, index) => {
        const itemEl = createMenuItem(item, category, index);
        grid.appendChild(itemEl);
        allItems.push({ element: itemEl, category, item });
      });

      section.appendChild(grid);
    }

    container.appendChild(section);
  });

  applyFilter();
  updateMyListBadge();
}

// Create menu item element (card format)
function createMenuItem(item, category, index) {
  const div = document.createElement('div');
  div.className = 'menu-page-item';
  div.dataset.category = category;
  div.dataset.index = index;
  div.onclick = () => openModal(item);

  // Only show image if available
  if (item.img) {
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.className = 'menu-page-item-img';
    img.loading = 'lazy';
    img.onerror = function() {
      this.parentElement.classList.add('no-image');
      this.style.display = 'none';
    };
    div.appendChild(img);
  } else {
    // No image - text only card
    div.classList.add('no-image');
  }

  // Add to list button (menu page only)
  if (isMenuPage) {
    const addBtn = document.createElement('button');
    addBtn.className = 'add-to-list-btn';
    addBtn.innerHTML = '<span class="checkmark">✓</span>';
    addBtn.onclick = (e) => {
      e.stopPropagation();
      addToList(item);
    };
    div.appendChild(addBtn);
  }

  // Info
  const info = document.createElement('div');
  info.className = 'menu-page-item-info';

  const header = document.createElement('div');
  header.className = 'menu-page-item-header';

  const name = document.createElement('span');
  name.className = 'menu-page-item-name';
  name.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">◼</span>' : '');

  const price = document.createElement('span');
  price.className = 'menu-page-item-price';
  price.textContent = item.price;

  header.appendChild(name);
  header.appendChild(price);
  info.appendChild(header);

  if (item.desc) {
    const desc = document.createElement('p');
    desc.className = 'menu-page-item-desc';
    desc.textContent = item.desc;
    info.appendChild(desc);
  }

  div.appendChild(info);
  return div;
}

// Create compact list item (for Maki, Nigiri, Sashimi)
function createCompactListItem(item, category, index) {
  const div = document.createElement('div');
  div.className = 'menu-compact-item';
  div.dataset.category = category;
  div.dataset.index = index;
  div.onclick = () => openModal(item);

  const header = document.createElement('div');
  header.className = 'menu-compact-item-header';

  const name = document.createElement('span');
  name.className = 'menu-compact-item-name';
  name.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">◼</span>' : '');

  const price = document.createElement('span');
  price.className = 'menu-compact-item-price';
  price.textContent = item.price;

  header.appendChild(name);
  header.appendChild(price);
  div.appendChild(header);

  // Add to list button (menu page only)
  if (isMenuPage) {
    const addBtn = document.createElement('button');
    addBtn.className = 'add-to-list-btn';
    addBtn.innerHTML = '<span class="checkmark">✓</span>';
    addBtn.onclick = (e) => {
      e.stopPropagation();
      addToList(item);
    };
    div.appendChild(addBtn);
  }

  // No description for compact list items - just name and price

  return div;
}

// Setup filters
function setupFilters() {
  const filters = document.querySelectorAll('.menu-filter');
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      currentFilter = filter.dataset.filter;
      applyFilter();
    });
  });
}

// Setup search
function setupSearch() {
  const searchInput = document.getElementById('menu-search');
  const clearBtn = document.getElementById('search-clear');
  if (!searchInput || !clearBtn) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    applyFilter();

    // Show/hide clear button
    if (searchQuery) {
      clearBtn.style.display = 'flex';
    } else {
      clearBtn.style.display = 'none';
    }
  });

  // Clear search when button clicked
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    applyFilter();
    searchInput.focus();
  });
}

// Apply filter and search
function applyFilter() {
  const sections = document.querySelectorAll('.menu-category-section');

  sections.forEach(section => {
    const category = section.dataset.category;

    // Check category filter
    const categoryMatches = currentFilter === 'all' || category === currentFilter;

    if (!categoryMatches) {
      section.classList.add('hidden');
      return;
    }

    // Hide "Most Popular" during search to avoid duplicates
    if (searchQuery && category === 'most-ordered') {
      section.classList.add('hidden');
      return;
    }

    // Check search query
    if (searchQuery) {
      const items = section.querySelectorAll('.menu-page-item, .menu-compact-item');
      let hasVisibleItems = false;

      items.forEach(item => {
        const name = item.querySelector('.menu-page-item-name, .menu-compact-item-name').textContent.toLowerCase();

        if (name.includes(searchQuery)) {
          item.style.display = '';
          hasVisibleItems = true;
        } else {
          item.style.display = 'none';
        }
      });

      // Hide section if no items match search
      if (hasVisibleItems) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    } else {
      // No search query - show all items in matching category
      const items = section.querySelectorAll('.menu-page-item, .menu-compact-item');
      items.forEach(item => item.style.display = '');
      section.classList.remove('hidden');
    }
  });
}

// Modal functionality
function setupModal() {
  const modal = document.getElementById('menu-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const modalContent = document.querySelector('.menu-modal-content');
  if (!modal || !overlay || !closeBtn || !modalContent) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Add swipe to dismiss
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  modalContent.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  modalContent.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    // Only allow swiping down
    if (deltaY > 0) {
      modalContent.style.transform = `translateY(${deltaY}px)`;
      modalContent.style.transition = 'none';
    }
  }, { passive: true });

  modalContent.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;

    const deltaY = currentY - startY;

    // If swiped down more than 100px, close modal
    if (deltaY > 100) {
      closeModal();
    } else {
      // Reset position
      modalContent.style.transform = '';
      modalContent.style.transition = 'transform 0.3s ease';
    }
  });
}

let modalScrollPosition = 0;

function openModal(item) {
  const modal = document.getElementById('menu-modal');
  const modalContent = document.querySelector('.menu-modal-content');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  if (!modal || !modalContent || !modalImg || !modalName || !modalPrice || !modalDesc) return;

  // Save current scroll position
  modalScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Set content
  modalName.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">◼</span>' : '');
  modalPrice.textContent = item.price;
  modalDesc.textContent = item.desc || 'A delicious menu item from Hikari Sushi.';

  // Handle image
  if (item.img) {
    modalImg.src = item.img;
    modalImg.alt = item.name;
    modalImg.style.display = 'block';
    modalImg.onerror = function() {
      this.style.display = 'none';
    };
  } else {
    modalImg.style.display = 'none';
  }

  // Reset transform
  modalContent.style.transform = '';
  modalContent.style.transition = '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('menu-modal');
  const modalContent = document.querySelector('.menu-modal-content');
  if (!modal || !modalContent) return;

  // Reset transform
  modalContent.style.transform = '';
  modalContent.style.transition = '';

  modal.classList.remove('active');
  document.body.style.overflow = '';

  // Restore scroll position after a brief delay to ensure modal is closed
  requestAnimationFrame(() => {
    window.scrollTo(0, modalScrollPosition);
  });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (isMenuPage) {
      closeMyListModal();
      dismissOnboarding();
    }
  }
});

// ============================================
// ONBOARDING POPOVER
// ============================================

function showOnboardingIfNeeded() {
  // Find the first visible checkmark button
  const firstCheckmark = document.querySelector('.add-to-list-btn');
  if (!firstCheckmark) {
    return;
  }

  const overlay = document.getElementById('onboarding-overlay');
  const popover = document.getElementById('onboarding-popover');
  const dismissBtn = document.getElementById('onboarding-dismiss');
  const finger = document.getElementById('onboarding-finger');

  // Position popover ABOVE the first checkmark to cover header area
  const rect = firstCheckmark.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isMobile = window.innerWidth < 768;

  // Position popover above the checkmark (use larger offset on mobile to avoid finger)
  const popoverOffset = isMobile ? 240 : 180;
  popover.style.top = `${rect.top + scrollTop - popoverOffset}px`;

  // Center the arrow over the checkmark button
  const checkmarkCenter = rect.left + (rect.width / 2);
  document.querySelector('.onboarding-arrow').style.left = `${checkmarkCenter - 20}px`;

  // Position finger above checkmark to point down at it
  // Position so just the tip of the finger is above the button
  const topOffset = isMobile ? 32 : 35;

  finger.style.top = `${rect.top - topOffset}px`;
  finger.style.left = `${rect.left + (rect.width / 2) - 20}px`; // Center over checkmark
  finger.style.bottom = 'auto';
  finger.style.right = 'auto';
  console.log('Finger position:', {
    top: rect.top - topOffset,
    left: rect.left + (rect.width / 2) - 20,
    isMobile: isMobile,
    rect: rect
  });

  // Add highlight to the first item
  const firstItem = firstCheckmark.closest('.menu-page-item, .menu-compact-item');
  if (firstItem) {
    firstItem.classList.add('onboarding-highlight');
  }

  // Show overlay and finger
  overlay.style.display = 'block';
  finger.style.display = 'block';
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  // Dismiss handlers
  dismissBtn.addEventListener('click', dismissOnboarding);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      dismissOnboarding();
    }
  });
}

function dismissOnboarding() {
  const overlay = document.getElementById('onboarding-overlay');
  const finger = document.getElementById('onboarding-finger');
  const firstItem = document.querySelector('.onboarding-highlight');
  if (!overlay) return;

  overlay.classList.remove('active');
  if (firstItem) {
    firstItem.classList.remove('onboarding-highlight');
  }

  setTimeout(() => {
    overlay.style.display = 'none';
    finger.style.display = 'none';
  }, 300);
}

// ============================================
// MY LIST FUNCTIONALITY
// ============================================

// Load My Picks from localStorage
function loadMyList() {
  const saved = localStorage.getItem('hikari-my-picks');
  if (saved) {
    try {
      myList = JSON.parse(saved);
      // Ensure all items have quantity field (migration from old data)
      myList = myList.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));
    } catch (e) {
      myList = [];
    }
  }
}

// Save My Picks to localStorage
function saveMyList() {
  localStorage.setItem('hikari-my-picks', JSON.stringify(myList));
}

// Add or remove item from My Picks (toggle)
function addToList(item) {
  const existingIndex = myList.findIndex(i => i.name === item.name);

  if (existingIndex !== -1) {
    // Item already in list - remove it (deselect)
    myList.splice(existingIndex, 1);
  } else {
    // Item not in list - add it with quantity 1
    myList.push({
      name: item.name,
      price: item.price,
      quantity: 1
    });
    showAddedFeedback();
  }

  saveMyList();
  updateMyListBadge();
}

// Remove item from My List
function removeFromList(itemName) {
  myList = myList.filter(item => item.name !== itemName);
  saveMyList();
  updateMyListBadge();
  renderMyListItems();
}

// Update My List badge and visibility
function updateMyListBadge() {
  const floatBtn = document.getElementById('my-list-float');
  const countBadge = document.getElementById('my-list-count');
  if (!floatBtn || !countBadge) return;

  const totalItems = myList.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    floatBtn.style.display = 'block';
    countBadge.textContent = totalItems;
  } else {
    floatBtn.style.display = 'none';
  }

  updatePickedHighlights();
}

// Update visual highlights for picked items
function updatePickedHighlights() {
  const pickedNames = myList.map(item => item.name);

  // Update all menu items
  document.querySelectorAll('.menu-page-item, .menu-compact-item').forEach(itemEl => {
    const nameEl = itemEl.querySelector('.menu-page-item-name, .menu-compact-item-name');
    const addBtn = itemEl.querySelector('.add-to-list-btn');

    if (nameEl) {
      const itemName = nameEl.textContent.replace(' ◼', '').trim();
      const isPicked = pickedNames.includes(itemName);

      if (isPicked) {
        itemEl.classList.add('picked');
        if (addBtn) addBtn.classList.add('selected');
      } else {
        itemEl.classList.remove('picked');
        if (addBtn) addBtn.classList.remove('selected');
      }
    }
  });
}

// Show visual feedback when item added
function showAddedFeedback() {
  const floatBtn = document.getElementById('my-list-float');
  if (!floatBtn) return;
  floatBtn.classList.add('pulse');
  setTimeout(() => floatBtn.classList.remove('pulse'), 300);
}

// Setup My List modal
function setupMyList() {
  const floatBtn = document.getElementById('my-list-btn');
  const closeBtn = document.getElementById('my-list-close');
  const overlay = document.getElementById('my-list-overlay');
  const clearBtn = document.getElementById('my-list-clear');
  if (!floatBtn || !closeBtn || !overlay || !clearBtn) return;

  floatBtn.addEventListener('click', openMyListModal);
  closeBtn.addEventListener('click', closeMyListModal);
  overlay.addEventListener('click', closeMyListModal);
  clearBtn.addEventListener('click', clearList);
}

// Open My List modal
function openMyListModal() {
  const modal = document.getElementById('my-list-modal');
  if (!modal) return;
  renderMyListItems();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close My List modal
function closeMyListModal() {
  const modal = document.getElementById('my-list-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Render My Picks items
function renderMyListItems() {
  const container = document.getElementById('my-list-items');
  if (!container) return;

  if (myList.length === 0) {
    container.innerHTML = '<p class="my-list-empty">No items yet! Tap the checkmark on menu items you\'d like to order. Show this list to your server when ready.</p>';
    return;
  }

  container.innerHTML = '';

  myList.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'my-list-item';

    const info = document.createElement('div');
    info.className = 'my-list-item-info';

    const name = document.createElement('span');
    name.className = 'my-list-item-name';
    name.textContent = item.name;

    info.appendChild(name);

    // Quantity controls
    const controls = document.createElement('div');
    controls.className = 'my-list-item-controls';

    const decreaseBtn = document.createElement('button');
    decreaseBtn.className = 'my-list-qty-btn';
    decreaseBtn.textContent = '−';
    decreaseBtn.onclick = () => decreaseQuantity(item.name);

    const quantity = document.createElement('span');
    quantity.className = 'my-list-qty';
    quantity.textContent = item.quantity;

    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'my-list-qty-btn';
    increaseBtn.textContent = '+';
    increaseBtn.onclick = () => increaseQuantity(item.name);

    controls.appendChild(decreaseBtn);
    controls.appendChild(quantity);
    controls.appendChild(increaseBtn);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'my-list-item-remove';
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = () => removeFromList(item.name);

    itemEl.appendChild(info);
    itemEl.appendChild(controls);
    itemEl.appendChild(removeBtn);
    container.appendChild(itemEl);
  });
}

// Increase item quantity
function increaseQuantity(itemName) {
  const item = myList.find(i => i.name === itemName);
  if (item) {
    item.quantity++;
    saveMyList();
    updateMyListBadge();
    renderMyListItems();
  }
}

// Decrease item quantity
function decreaseQuantity(itemName) {
  const item = myList.find(i => i.name === itemName);
  if (item) {
    if (item.quantity > 1) {
      item.quantity--;
      saveMyList();
      updateMyListBadge();
      renderMyListItems();
    } else {
      // If quantity is 1, remove the item (deselect)
      removeFromList(itemName);
    }
  }
}

// Clear all items from list
function clearList() {
  if (myList.length === 0) return;

  if (confirm('Clear all your picks?')) {
    myList = [];
    saveMyList();
    updateMyListBadge();
    renderMyListItems();
  }
}
