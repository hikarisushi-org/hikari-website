// Page detection — My Picks, onboarding, and search are /menu only
const isMenuPage = document.body.classList.contains('menu-page');

// MENU-DATA:START
const menuData = {
  "most-ordered": {
    "title": "Most Popular",
    "items": [
      {
        "name": "Gyoza",
        "price": "$8",
        "desc": "Golden fried pork dumplings with gyoza sauce.",
        "img": "assets/images/menu/appetizers/gyoza.png"
      },
      {
        "name": "Fire Cracker",
        "price": "$15",
        "desc": "Tempura shrimp, seared tuna, and avocado. Topped with spicy tuna, jalapeño, lemon slices, eel sauce, and crunchies.",
        "img": "assets/images/menu/sushi/firecracker_roll.png",
        "raw": true
      },
      {
        "name": "Naruto Roll",
        "price": "$15",
        "desc": "Seared tuna, shishito peppers, and lemon slices. Topped with ebi, fresh mango, eel sauce, and crispy fried onions.",
        "img": "assets/images/menu/sushi/naruto.png",
        "raw": true
      }
    ]
  },
  "appetizers": {
    "title": "Appetizers",
    "items": [
      {
        "name": "Edamame (Salted)",
        "price": "$4",
        "desc": "Steamed with sea salt.",
        "img": "assets/images/menu/appetizers/edamame_salted.png"
      },
      {
        "name": "Edamame (Spicy)",
        "price": "$5",
        "desc": "Tossed in mild chili oil, garlic, and peanuts.",
        "img": "assets/images/menu/appetizers/edamame_spicy.png",
        "peanuts": true
      },
      {
        "name": "Garlic Edamame",
        "price": "$5",
        "desc": "Tossed in garlic butter."
      },
      {
        "name": "Large Tempura",
        "price": "$12",
        "desc": "Four crispy tempura shrimp with lightly battered assorted vegetables.",
        "img": "assets/images/menu/appetizers/shrimp_&_veggie_tempura.png"
      },
      {
        "name": "Gyoza",
        "price": "$8",
        "desc": "Golden fried pork dumplings with gyoza sauce.",
        "img": "assets/images/menu/appetizers/gyoza.png"
      },
      {
        "name": "Jalapeño Bomb",
        "price": "$6",
        "desc": "Spicy tuna, cream cheese, spicy mayo, and eel sauce.",
        "img": "assets/images/menu/appetizers/jalapeno_bomb.png",
        "raw": true
      },
      {
        "name": "Sushi Nachos",
        "price": "$10",
        "desc": "Wonton chips, crab mix, spicy tuna, spicy mayo, and eel sauce.",
        "img": "assets/images/menu/appetizers/sushi_nachos.png",
        "raw": true
      },
      {
        "name": "Crab Rangoons",
        "price": "$8",
        "desc": "Filled with crab and cream cheese.",
        "img": "assets/images/menu/appetizers/crab_rangoons.png"
      },
      {
        "name": "Chicken Karaage",
        "price": "$10",
        "desc": "Japanese fried chicken served with sauce.",
        "img": "assets/images/menu/appetizers/chicken-karaage__square.png"
      },
      {
        "name": "Miso Soup",
        "price": "$4",
        "desc": "",
        "img": "assets/images/menu/appetizers/miso.png"
      },
      {
        "name": "Jalapeño Kampachi",
        "price": "$11",
        "desc": "Nobu-style kampachi slices with mango, jalapeño, red cosho, ponzu vinaigrette, and radish sprouts.",
        "img": "assets/images/menu/appetizers/jalapeno-kampachi__winter-2026.webp",
        "raw": true
      }
    ]
  },
  "traditional-rolls": {
    "title": "Classic Rolls",
    "items": [
      {
        "name": "California Roll",
        "price": "$8.50",
        "desc": "Crab, cucumber, and avocado.",
        "img": "assets/images/menu/sushi/california_roll.png"
      },
      {
        "name": "Alaskan Roll",
        "price": "$8.50",
        "desc": "Salmon, cucumber, and avocado.",
        "img": "assets/images/menu/sushi/alaskan__square.png",
        "raw": true
      },
      {
        "name": "Spicy Tuna Roll",
        "price": "$8.50",
        "desc": "Spicy tuna mix, cucumber, avocado, radish sprouts, and spicy mayo.",
        "img": "assets/images/menu/sushi/spicy_tuna_roll.jpg",
        "raw": true
      },
      {
        "name": "Spicy Salmon Roll",
        "price": "$8.50",
        "desc": "Salmon, avocado, sprouts, and spicy mayo.",
        "img": "assets/images/menu/sushi/spicy_salmon.jpg",
        "raw": true
      },
      {
        "name": "Philly Roll",
        "price": "$8.50",
        "desc": "Smoked salmon, cream cheese, and avocado.",
        "img": "assets/images/menu/sushi/philly.png",
        "raw": true
      },
      {
        "name": "Shrimp Tempura Roll",
        "price": "$8.50",
        "desc": "Tempura shrimp, cucumber, sprouts, and eel sauce.",
        "img": "assets/images/menu/sushi/tempura_shrimp_roll.png"
      },
      {
        "name": "Spicy Hamachi Roll",
        "price": "$8.50",
        "desc": "Spicy hamachi, sprouts, cucumber, and spicy mayo.",
        "img": "assets/images/menu/sushi/spicy_hamachi.jpg",
        "raw": true
      },
      {
        "name": "Veggie Roll",
        "price": "$8.50",
        "desc": "Avocado, cucumber, asparagus, and red bell pepper.",
        "img": "assets/images/menu/sushi/veggie_roll.png"
      },
      {
        "name": "Sweet Potato Roll",
        "price": "$8.50",
        "desc": "Tempura sweet potato finished with eel sauce and sesame seeds.",
        "img": "assets/images/menu/sushi/sweet_potato_roll.png"
      },
      {
        "name": "Avocado Maki",
        "price": "$4",
        "desc": "Avocado."
      },
      {
        "name": "Hamachi Maki",
        "price": "$5",
        "desc": "Yellowtail.",
        "raw": true
      },
      {
        "name": "Kappa Maki",
        "price": "$5",
        "desc": "Cucumber."
      },
      {
        "name": "Negihama",
        "price": "$5",
        "desc": "Yellowtail and green onions.",
        "raw": true
      },
      {
        "name": "Sake Maki",
        "price": "$5",
        "desc": "Salmon.",
        "raw": true
      },
      {
        "name": "Tekka Maki",
        "price": "$5",
        "desc": "Tuna.",
        "raw": true
      }
    ]
  },
  "premium-rolls": {
    "title": "Premium Rolls",
    "items": [
      {
        "name": "Pink Lotus Roll",
        "price": "$18",
        "desc": "Spicy tuna, tempura shrimp, tobiko, and lemon wrapped in soy paper. Topped with eel sauce and sesame seeds.",
        "img": "assets/images/menu/sushi/pink-lotus__winter-2026.webp",
        "raw": true
      },
      {
        "name": "Spider Roll",
        "price": "$14",
        "desc": "Tempura soft-shell crab, spicy crab, and fresh mango. Topped with eel sauce and sesame seeds."
      },
      {
        "name": "Coco Nirvana",
        "price": "$15",
        "desc": "Tempura shrimp, cucumber, and red curry sauce wrapped in soy paper. Topped with coconut mascarpone, coconut sauce, and coconut shavings.",
        "img": "assets/images/menu/sushi/coco-nirvana__winter-2026.webp"
      },
      {
        "name": "Red Ruby",
        "price": "$15",
        "desc": "Ebi, mango, mint, cucumber, and green onions. Topped with avocado, yum yum sauce, and pomegranate seeds."
      },
      {
        "name": "Kiwi Minaj",
        "price": "$15",
        "desc": "Cream cheese, spicy crab, and tempura green onions. Topped with kiwi, mascarpone cream, and sesame seeds."
      },
      {
        "name": "Shrimp Shady",
        "price": "$15",
        "desc": "Shrimp tempura and crab mix wrapped in soy paper. Topped with avocado, ebi, spicy mayo, eel sauce, and sesame seeds."
      },
      {
        "name": "Fire Cracker",
        "price": "$15",
        "desc": "Tempura shrimp, seared tuna, and avocado. Topped with spicy tuna, jalapeño, lemon slices, eel sauce, and crunchies.",
        "img": "assets/images/menu/sushi/firecracker_roll.png",
        "raw": true
      },
      {
        "name": "Naruto Roll",
        "price": "$15",
        "desc": "Seared tuna, shishito peppers, and lemon slices. Topped with ebi, fresh mango, eel sauce, and crispy fried onions.",
        "img": "assets/images/menu/sushi/naruto.png",
        "raw": true
      },
      {
        "name": "Hot Cheetos Roll",
        "price": "$13",
        "desc": "Spicy crab, cream cheese, and cucumber. Topped with crushed Hot Cheetos, spicy mayo, and eel sauce.",
        "img": "assets/images/menu/sushi/hot_cheetos.png"
      },
      {
        "name": "Emerald Dragon Roll",
        "price": "$15",
        "desc": "Tempura shrimp, cucumber, and crab mix. Topped with eel, avocado, wasabi mayo, and eel sauce.",
        "img": "assets/images/menu/sushi/emerald_dragon.png"
      },
      {
        "name": "Strawberry Blossom",
        "price": "$15",
        "desc": "Kani crab, cream cheese, and cucumber. Topped with salmon, strawberries, mango sauce, crunchies, and sesame seeds.",
        "img": "assets/images/menu/sushi/strawberry_blossom.png"
      },
      {
        "name": "Illuminated Fire Tuna",
        "price": "$15",
        "desc": "Mango, tuna, and jalapeño. Topped with spicy tuna, lime slices, Thai chiles, green onions, and garlic ponzu.",
        "img": "assets/images/menu/sushi/illuminated_fire_tuna.png",
        "raw": true
      },
      {
        "name": "Citrus Mango Dream",
        "price": "$15",
        "desc": "Tempura shrimp, cream cheese, and crab mix. Topped with fresh mango, lemon slices, and mango sauce.",
        "img": "assets/images/menu/sushi/citrus_mango_dream.png"
      },
      {
        "name": "Avocado King",
        "price": "$14",
        "desc": "Shrimp tempura, cucumbers, and radish sprouts. Topped with avocado, eel sauce, and crunchies.",
        "img": "assets/images/menu/sushi/avocado_king.png"
      },
      {
        "name": "Cowboy Roll",
        "price": "$16",
        "desc": "Asparagus and crab mix. Topped with tender sliced steak, spicy eel sauce, sriracha, green onions, and sesame seeds.",
        "img": "assets/images/menu/sushi/cowboy_roll.png"
      },
      {
        "name": "Salmon Sunrise Roll",
        "price": "$14",
        "desc": "Grilled asparagus, crab mix, and avocado. Topped with salmon, lemon slices, and ponzu sauce.",
        "img": "assets/images/menu/sushi/salmon_sunrise.png",
        "raw": true
      },
      {
        "name": "Playboy",
        "price": "$14",
        "desc": "Shrimp tempura, crab mix, and cream cheese. Topped with tuna, avocado, spicy mayo, eel sauce, sesame seeds, tobiko, and lime slices.",
        "img": "assets/images/menu/sushi/playboy.png",
        "raw": true
      },
      {
        "name": "Firefly Fusion",
        "price": "$15",
        "desc": "Tempura shrimp, spicy crab, and jalapeño. Topped with tuna, spicy crab, lime slices, eel sauce, mango sauce, cilantro, and tobiko.",
        "img": "assets/images/menu/sushi/firefly_fussion_2.png",
        "raw": true
      }
    ]
  },
  "tempura-fried": {
    "title": "Tempura Fried Rolls",
    "items": [
      {
        "name": "Fire Spicy Tuna Roll",
        "price": "$12",
        "desc": "Spicy tuna mix, cucumber, and jalapeño. Topped with eel sauce, sriracha, green onions, and sesame seeds.",
        "img": "assets/images/menu/sushi/fire_spicy_tuna.png",
        "raw": true
      },
      {
        "name": "Monument Roll",
        "price": "$12",
        "desc": "Hamachi, salmon, tuna, ebi, and avocado. Topped with spicy eel sauce, green onions, and sesame seeds.",
        "img": "assets/images/menu/sushi/monument.png",
        "raw": true
      },
      {
        "name": "Sunfire Crunch",
        "price": "$12",
        "desc": "Pineapple and spicy tuna. Topped with sweet chili sauce, green onions, and tajín.",
        "img": "assets/images/menu/sushi/sunfire_crunch.png",
        "raw": true
      },
      {
        "name": "Cowboy Crunch",
        "price": "$13",
        "desc": "Beef, asparagus, kani crab, and cream cheese. Topped with tempura-fried Cheetos, eel sauce, and green onions.",
        "img": "assets/images/menu/sushi/cowboy-crunch__winter-2026.webp"
      },
      {
        "name": "Vegas Roll",
        "price": "$13",
        "desc": "Salmon, crab mix, and cream cheese. Topped with spicy mayo and eel sauce.",
        "img": "assets/images/menu/sushi/las_vegas_close_up.jpg",
        "raw": true
      }
    ]
  },
  "nigiri-sashimi": {
    "title": "Nigiri & Sashimi",
    "items": [
      {
        "name": "Nigiri",
        "price": "$5",
        "desc": "2 pieces. Choose one fish for both.",
        "raw": true
      },
      {
        "name": "Sashimi",
        "price": "$7",
        "desc": "3 pieces. Choose one fish for all three.",
        "raw": true
      },
      {
        "name": "Sashimi Platter",
        "price": "$20",
        "desc": "10 pieces, chef's choice.",
        "img": "assets/images/menu/sushi/sashimi_new.png",
        "raw": true
      },
      {
        "name": "Hand Rolls",
        "price": "$10",
        "desc": "2 rolls, any classic roll.",
        "img": "assets/images/menu/sushi/hand_rolls_2_16x9_print.jpg"
      }
    ]
  },
  "fresh-bowls": {
    "title": "Fresh Bowls",
    "items": [
      {
        "name": "Poke Bowl",
        "price": "$12",
        "desc": "Tuna or salmon with spicy sesame sriracha over rice, topped with avocado, scallions, masago, and crunchies.",
        "img": "assets/images/menu/bowls/poke_bowl.png",
        "raw": true
      },
      {
        "name": "Chirashi Bowl",
        "price": "$14",
        "desc": "An assorted selection of sashimi over seasoned sushi rice, served with fresh vegetables and garnish.",
        "img": "assets/images/menu/bowls/chirashi_bowl.png",
        "raw": true
      }
    ]
  },
  "rice-bowls": {
    "title": "Rice Bowls",
    "items": [
      {
        "name": "Teriyaki Chicken Don",
        "price": "$12",
        "desc": "Teriyaki-glazed chicken over rice with steamed veggies.",
        "img": "assets/images/menu/bowls/teriyaki-chicken-don__winter-2026.webp"
      },
      {
        "name": "Beef Don",
        "price": "$14",
        "desc": "Beef over rice with steamed veggies.",
        "img": "assets/images/menu/bowls/beef-don__winter-2026.webp"
      },
      {
        "name": "Tekka Don",
        "price": "$14",
        "desc": "Tuna over rice with nori strips and fresh wasabi.",
        "img": "assets/images/menu/bowls/tekka-don__winter-2026.webp",
        "raw": true
      },
      {
        "name": "Tempura Don",
        "price": "$11",
        "desc": "Shrimp and vegetable tempura over rice, drizzled with a sweet-savory dashi-soy sauce.",
        "img": "assets/images/menu/bowls/tempura-don__winter-2026.webp"
      },
      {
        "name": "Teriyaki Salmon Don",
        "price": "$14",
        "desc": "Teriyaki-glazed salmon over rice with steamed veggies.",
        "img": "assets/images/menu/bowls/teriyaki-salmon-don__winter-2026.webp"
      }
    ]
  },
  "bento": {
    "title": "Bento Boxes",
    "items": [
      {
        "name": "Teriyaki Salmon Bento Box",
        "price": "$16",
        "desc": "Served with rice, steamed veggies, gyoza, and macaroni salad with corn."
      },
      {
        "name": "Teriyaki Chicken Bento Box",
        "price": "$15",
        "desc": "Served with rice, steamed veggies, gyoza, and macaroni salad with corn.",
        "img": "assets/images/menu/food/teriyaki-chicken-bento__winter-2026.webp"
      }
    ]
  },
  "desserts": {
    "title": "Desserts",
    "items": [
      {
        "name": "Mochi (4 pcs)",
        "price": "$8",
        "desc": "",
        "img": "assets/images/menu/desserts/mochi.png"
      },
      {
        "name": "Mango Sticky Rice",
        "price": "$8",
        "desc": "",
        "img": "assets/images/menu/desserts/mango_sticky_rice.png"
      }
    ]
  },
  "beverages": {
    "title": "Beverages",
    "items": [
      {
        "name": "Strawberry Spritz",
        "price": "$5",
        "desc": "A bright, bubbly strawberry refresher served over ice with fresh strawberry chunks.",
        "img": "assets/images/menu/drinks/strawberry_spritz.png"
      },
      {
        "name": "Canned Soda",
        "price": "$2.50",
        "desc": "Coke, Diet Coke, Coke Zero, Sprite, Fanta, Dr Pepper.",
        "img": "assets/images/menu/drinks/canned_soda.JPG"
      },
      {
        "name": "Ramune Soda",
        "price": "$3.50",
        "desc": "Japanese sparkling soda.",
        "img": "assets/images/menu/drinks/ramune.png"
      },
      {
        "name": "Hot Cocoa",
        "price": "$4",
        "desc": "Rich, smooth hot cocoa topped with whipped cream.",
        "img": "assets/images/menu/drinks/hot-cocoa__winter-2026.webp"
      },
      {
        "name": "Hot Tea",
        "price": "$3",
        "desc": ""
      }
    ]
  }
};
// MENU-DATA:END

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

  const categories = isMenuPage
    ? Object.keys(menuData)
    : [currentFilter === 'all' ? 'most-ordered' : currentFilter];

  categories.forEach(category => {
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

function getResponsiveMenuSources(src) {
  const match = src.match(/^assets\/images\/menu\/(.+)\.(?:png|jpe?g)$/i);
  if (!match) return null;

  const base = `assets/images/generated/menu/${match[1]}`;
  return {
    avif: `${base}-320.avif 320w, ${base}-640.avif 640w`,
    webp: `${base}-320.webp 320w, ${base}-640.webp 640w`
  };
}

function createResponsiveMenuPicture(item, onError) {
  const picture = document.createElement('picture');
  const sources = getResponsiveMenuSources(item.img);
  const sizes = '(max-width: 767px) calc(50vw - 18px), (max-width: 1023px) calc(33vw - 24px), 280px';

  if (sources) {
    const avif = document.createElement('source');
    avif.type = 'image/avif';
    avif.srcset = sources.avif;
    avif.sizes = sizes;
    picture.appendChild(avif);

    const webp = document.createElement('source');
    webp.type = 'image/webp';
    webp.srcset = sources.webp;
    webp.sizes = sizes;
    picture.appendChild(webp);
  }

  const img = document.createElement('img');
  img.src = item.img;
  img.alt = item.name;
  img.className = 'menu-page-item-img';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.width = 640;
  img.height = 640;
  img.onerror = onError;
  picture.appendChild(img);

  return picture;
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
    const picture = createResponsiveMenuPicture(item, function() {
      div.classList.add('no-image');
      picture.style.display = 'none';
    });
    div.appendChild(picture);
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
  name.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">🐟</span>' : '') + (item.peanuts ? ' <span class="peanut-indicator" title="Contains peanuts">🥜</span>' : '');

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
  name.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">🐟</span>' : '') + (item.peanuts ? ' <span class="peanut-indicator" title="Contains peanuts">🥜</span>' : '');

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
  const filterContainer = document.getElementById('menu-filters');
  if (!filterContainer) return;

  const shortLabels = {
    'most-ordered': 'Popular',
    'traditional-rolls': 'Classic',
    'premium-rolls': 'Premium',
    'tempura-fried': 'Fried',
    'nigiri-sashimi': 'Nigiri',
    'fresh-bowls': 'Fresh Bowls',
    'rice-bowls': 'Rice Bowls'
  };

  const filtersHtml = [
    '<button class="menu-filter active" data-filter="all">All</button>',
    ...Object.entries(menuData).map(([key, data]) => (
      `<button class="menu-filter" data-filter="${key}">${shortLabels[key] || data.title}</button>`
    ))
  ];

  filterContainer.innerHTML = filtersHtml.join('');

  const filters = filterContainer.querySelectorAll('.menu-filter');
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      currentFilter = filter.dataset.filter;
      if (isMenuPage) {
        applyFilter();
      } else {
        renderMenu();
      }
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
  modalName.innerHTML = item.name + (item.raw ? ' <span class="raw-indicator" title="Contains raw fish">🐟</span>' : '') + (item.peanuts ? ' <span class="peanut-indicator" title="Contains peanuts">🥜</span>' : '');
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
      const itemName = nameEl.textContent.replace(' 🐟', '').replace(' 🥜', '').trim();
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
