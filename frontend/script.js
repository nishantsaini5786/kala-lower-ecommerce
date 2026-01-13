// Product Data - Complete Database
const PRODUCTS = [
    // Black Lowers (8 products)
    {
        id: 1,
        brand: "Nike Pro",
        name: "Nike Dri-FIT Training Pants",
        description: "Moisture-wicking black training pants with tapered fit for gym sessions.",
        price: 599,
        oldPrice: 1499,
        image: "images/L1.jpg",
        sizes: [28, 30, 32, 34],
        type: "training",
        material: "Polyester Blend",
        fit: "Tapered",
        popular: true,
        new: false,
        category: "lower"
    },
    {
        id: 2,
        brand: "Adidas Training",
        name: "Adidas Tiro Training Pants",
        description: "Classic black training pants with side stripes, perfect for athletic wear.",
        price: 999,
        oldPrice: 1999,
        image: "images/L2.jpg",
        sizes: [30, 32, 34, 36],
        type: "training",
        material: "Polyester",
        fit: "Regular",
        popular: true,
        new: true,
        category: "lower"
    },
    {
        id: 3,
        brand: "Puma Active",
        name: "Puma Essentials Training Pants",
        description: "Lightweight black training pants with elastic waistband for comfort.",
        price: 799,
        oldPrice: 2299,
        image: "images/L3.jpg",
        sizes: [28, 30, 32, 34],
        type: "training",
        material: "Cotton Blend",
        fit: "Slim",
        popular: false,
        new: true,
        category: "lower"
    },
    {
        id: 4,
        brand: "Under Armour",
        name: "UA HeatGear Athletic Pants",
        description: "Breathable black athletic pants with HeatGear technology for intense workouts.",
        price: 1999,
        oldPrice: 4999,
        image: "images/L4.jpg",
        sizes: [30, 32, 34],
        type: "athletic",
        material: "Performance Blend",
        fit: "Athletic",
        popular: true,
        new: false,
        category: "lower"
    },
    {
        id: 5,
        brand: "Reebok Performance",
        name: "Reebok Workout Ready Pants",
        description: "Flexible black workout pants with stretch fabric for full range of motion.",
        price: 799,
        oldPrice: 1699,
        image: "images/L5.jpg",
        sizes: [30, 32, 34, 36, 38],
        type: "workout",
        material: "Elastic Blend",
        fit: "Flexible",
        popular: true,
        new: false,
        category: "lower"
    },
    {
        id: 6,
        brand: "New Balance",
        name: "NB Impact Run Pants",
        description: "Black running pants with reflective details for night running safety.",
        price: 1299,
        oldPrice: 4199,
        image: "images/L6.jpg",
        sizes: [28, 30, 32, 34],
        type: "running",
        material: "Nylon Blend",
        fit: "Fitted",
        popular: false,
        new: true,
        category: "lower"
    },
    {
        id: 7,
        brand: "Adidas Originals",
        name: "Adidas Black Joggers",
        description: "Classic black joggers with ribbed cuffs, perfect for casual athletic wear.",
        price: 1299,
        oldPrice: 2999,
        image: "images/L7.jpg",
        sizes: [30, 32, 34, 36],
        type: "casual",
        material: "French Terry",
        fit: "Regular",
        popular: true,
        new: false,
        category: "lower"
    },
    {
        id: 8,
        brand: "Nike Sportswear",
        name: "Nike Club Fleece Pants",
        description: "Warm black fleece pants for post-workout comfort and casual wear.",
        price: 699,
        oldPrice: 1499,
        image: "images/L8.jpg",
        sizes: [28, 30, 32, 34, 36],
        type: "casual",
        material: "Fleece",
        fit: "Relaxed",
        popular: false,
        new: true,
        category: "lower"
    },
    
    // T-Shirts (6 products)
    {
        id: 9,
        brand: "Nike",
        name: "Nike Black Cotton T-Shirt",
        description: "Premium black cotton t-shirt with Nike logo.",
        price: 1299,
        oldPrice: 1899,
        image: "images/T1.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "tshirt",
        material: "100% Cotton",
        fit: "Regular",
        popular: true,
        new: false,
        category: "tshirt"
    },
    {
        id: 10,
        brand: "Adidas",
        name: "Adidas Originals Black Tee",
        description: "Classic black t-shirt with Adidas logo.",
        price: 999,
        oldPrice: 1499,
        image: "images/T2.jpg",
        sizes: ["M", "L", "XL", "XXL"],
        type: "tshirt",
        material: "100% Cotton",
        fit: "Regular",
        popular: false,
        new: true,
        category: "tshirt"
    },
    {
        id: 11,
        brand: "Puma",
        name: "Puma Black Casual T-Shirt",
        description: "Comfortable black t-shirt for daily wear.",
        price: 799,
        oldPrice: 1199,
        image: "images/T3.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "tshirt",
        material: "Cotton Blend",
        fit: "Regular",
        popular: true,
        new: false,
        category: "tshirt"
    },
    {
        id: 12,
        brand: "Levi's",
        name: "Levi's Black Premium Tee",
        description: "Premium quality black t-shirt from Levi's.",
        price: 1499,
        oldPrice: 1999,
        image: "images/T4.jpg",
        sizes: ["M", "L", "XL"],
        type: "tshirt",
        material: "Organic Cotton",
        fit: "Slim",
        popular: true,
        new: true,
        category: "tshirt"
    },
    {
        id: 13,
        brand: "US Polo",
        name: "US Polo Black T-Shirt",
        description: "Classic black polo t-shirt with logo.",
        price: 1199,
        oldPrice: 1699,
        image: "images/T5.jpg",
        sizes: ["S", "M", "L", "XL", "XXL"],
        type: "tshirt",
        material: "Pique Cotton",
        fit: "Regular",
        popular: false,
        new: true,
        category: "tshirt"
    },
    {
        id: 14,
        brand: "Allen Solly",
        name: "Allen Solly Black Tee",
        description: "Formal black t-shirt for office wear.",
        price: 899,
        oldPrice: 1399,
        image: "images/T6.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "tshirt",
        material: "Cotton Blend",
        fit: "Slim",
        popular: true,
        new: false,
        category: "tshirt"
    },
    
    // IPL T-Shirts (10 products - all IPL teams)
    {
        id: 15,
        brand: "IPL Official",
        name: "Mumbai Indians Black Jersey",
        description: "Official Mumbai Indians black t-shirt with team logo and blue accents.",
        price: 499,
        oldPrice: 1299,
        image: "images/I2.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Performance Fabric",
        fit: "Regular",
        team: "mumbai",
        popular: true,
        new: true,
        category: "ipl"
    },
    {
        id: 16,
        brand: "IPL Official",
        name: "Chennai Super Kings Black Tee",
        description: "CSK black t-shirt with yellow logo print and lion emblem.",
        price: 299,
        oldPrice: 899,
        image: "images/I3.jpg",
        sizes: ["M", "L", "XL", "XXL"],
        type: "ipl",
        material: "100% Cotton",
        fit: "Regular",
        team: "chennai",
        popular: true,
        new: false,
        category: "ipl"
    },
    {
        id: 17,
        brand: "IPL Official",
        name: "Royal Challengers Bangalore",
        description: "RCB black t-shirt with red and gold team colors.",
        price: 2299,
        oldPrice: 3799,
        image: "images/I4.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Polyester Blend",
        fit: "Athletic",
        team: "bangalore",
        popular: false,
        new: true,
        category: "ipl"
    },
    {
        id: 18,
        brand: "IPL Official",
        name: "Kolkata Knight Riders Black",
        description: "KKR black t-shirt with purple and gold accents.",
        price: 1199,
        oldPrice: 1699,
        image: "images/I7.jpg",
        sizes: ["M", "L", "XL"],
        type: "ipl",
        material: "Cotton Blend",
        fit: "Regular",
        team: "kolkata",
        popular: true,
        new: false,
        category: "ipl"
    },
    {
        id: 19,
        brand: "IPL Official",
        name: "Delhi Capitals Black Jersey",
        description: "Delhi Capitals official black t-shirt with blue and red.",
        price: 1199,
        oldPrice: 1699,
        image: "images/I9.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Performance Fabric",
        fit: "Regular",
        team: "delhi",
        popular: false,
        new: true,
        category: "ipl"
    },
    {
        id: 20,
        brand: "IPL Official",
        name: "Punjab Kings Black Tee",
        description: "Punjab Kings black t-shirt with red and silver accents.",
        price: 599,
        oldPrice: 1199,
        image: "images/I5.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Cotton Blend",
        fit: "Regular",
        team: "punjab",
        popular: true,
        new: false,
        category: "ipl"
    },
    {
        id: 21,
        brand: "IPL Official",
        name: "Rajasthan Royals Black",
        description: "Rajasthan Royals blue and black t-shirt with pink accents.",
        price: 399,
        oldPrice: 599,
        image: "images/I10.jpg",
        sizes: ["M", "L", "XL"],
        type: "ipl",
        material: "Cotton Blend",
        fit: "Regular",
        team: "rajasthan",
        popular: false,
        new: true,
        category: "ipl"
    },
    {
        id: 22,
        brand: "IPL Official",
        name: "Sunrisers Hyderabad",
        description: "SRH orange and black t-shirt with team logo.",
        price: 1199,
        oldPrice: 1699,
        image: "images/I6.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Performance Fabric",
        fit: "Athletic",
        team: "hyderabad",
        popular: true,
        new: false,
        category: "ipl"
    },
    {
        id: 23,
        brand: "IPL Official",
        name: "Gujarat Titans Black",
        description: "Gujarat Titans black t-shirt with navy blue accents.",
        price: 1299,
        oldPrice: 1799,
        image: "images/I1.jpg",
        sizes: ["S", "M", "L", "XL"],
        type: "ipl",
        material: "Polyester Blend",
        fit: "Regular",
        team: "gujarat",
        popular: true,
        new: true,
        category: "ipl"
    },
    {
        id: 24,
        brand: "IPL Official",
        name: "Lucknow Super Giants",
        description: "LSG black and green t-shirt with team emblem.",
        price: 1199,
        oldPrice: 1699,
        image: "images/I8.jpg",
        sizes: ["M", "L", "XL", "XXL"],
        type: "ipl",
        material: "100% Cotton",
        fit: "Regular",
        team: "lucknow",
        popular: false,
        new: true,
        category: "ipl"
    }
];

const CATEGORIES = [
    { 
        name: "Black Lowers", 
        count: 45, 
        icon: "fas fa-shopping-bag",
        description: "Premium athletic black lowers for gym and casual wear"
    },
    { 
        name: "T-Shirts", 
        count: 32, 
        icon: "fas fa-tshirt",
        description: "Premium black t-shirts for men and boys"
    },
    { 
        name: "IPL Collection", 
        count: 10, 
        icon: "fas fa-trophy",
        description: "Official IPL team black t-shirts"
    },
    { 
        name: "Sports Wear", 
        count: 24, 
        icon: "fas fa-running",
        description: "Performance black clothing for sports"
    },
    { 
        name: "Casual Wear", 
        count: 38, 
        icon: "fas fa-user",
        description: "Casual black clothing for everyday wear"
    },
    { 
        name: "Premium Collection", 
        count: 41, 
        icon: "fas fa-crown",
        description: "Exclusive premium black clothing"
    }
];

// Cart management
let cart = [];
let filteredProducts = [...PRODUCTS].filter(p => p.category === "lower");

// DOM Elements
const $ = id => document.getElementById(id);
const loadingScreen = $('loadingScreen');
const cartIcon = $('cartIcon');
const cartPanel = $('cartPanel');
const closeCart = $('closeCart');
const cartCount = $('cartCount');
const cartItems = $('cartItems');
const cartTotalAmount = $('cartTotalAmount');
const productsGrid = $('productsGrid');
const tshirtsGrid = $('tshirtsGrid');
const iplGrid = $('iplGrid');
const categoriesGrid = $('categoriesGrid');
const productCount = $('productCount');
const searchInput = $('searchInput');
const sortFilter = $('sortFilter');
const sizeFilter = $('sizeFilter');
const brandFilter = $('brandFilter');
const mobileMenuBtn = $('mobileMenuBtn');
const mainNav = $('mainNav');
const checkoutBtn = $('checkoutBtn');
const customOrderForm = $('customOrderForm');
const mainHeader = $('mainHeader');
const productDetailModal = $('productDetailModal');
const productDetailContent = $('productDetailContent');

// Format price
const formatPrice = price => '₹' + price.toLocaleString('en-IN');

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'info' ? 'info-circle' : 'check-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize
function init() {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }, 1500);

    // Set current year
    $('currentYear').textContent = new Date().getFullYear();
    
    // Render categories
    renderCategories();
    
    // Render products
    renderProducts();
    renderTShirts();
    renderIPLProducts();
    
    // Update cart
    updateCart();

    // Add event listeners
    addEventListeners();

    // Initialize animations
    initAnimations();

    // Initialize scroll events
    initScrollEvents();
}

// Render categories
function renderCategories() {
    categoriesGrid.innerHTML = CATEGORIES.map(category => `
        <div class="category-card fade-in">
            <i class="${category.icon} category-icon"></i>
            <h3 class="category-title">${category.name}</h3>
            <p class="category-description">${category.description}</p>
            <span class="category-count">${category.count} Products</span>
        </div>
    `).join('');
}

// Render T-Shirts
function renderTShirts() {
    const tshirtProducts = PRODUCTS.filter(p => p.category === "tshirt");
    
    tshirtsGrid.innerHTML = tshirtProducts.map(product => `
        <div class="product-card fade-in">
            ${product.popular ? '<div class="product-badge">Popular</div>' : ''}
            ${product.new ? '<div class="product-badge" style="background: var(--accent-blue);">New</div>' : ''}
            
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-specs">
                    <div class="spec-item">
                        <i class="fas fa-ruler"></i>
                        <span>${product.fit} Fit</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-layer-group"></i>
                        <span>${product.material}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <span>Sizes: ${product.sizes.join(', ')}</span>
                    </div>
                </div>
                
                <div class="product-price">
                    <div>
                        <span class="price-main">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render IPL Products
function renderIPLProducts() {
    const iplProducts = PRODUCTS.filter(p => p.category === "ipl");
    
    iplGrid.innerHTML = iplProducts.map(product => `
        <div class="product-card fade-in">
            <div class="product-badge" style="background: linear-gradient(135deg, #ff6b35, #e55c2b);">IPL</div>
            ${product.popular ? '<div class="product-badge">Popular</div>' : ''}
            ${product.new ? '<div class="product-badge" style="background: var(--accent-blue);">New</div>' : ''}
            
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-specs">
                    <div class="spec-item">
                        <i class="fas fa-ruler"></i>
                        <span>${product.fit} Fit</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-layer-group"></i>
                        <span>${product.material}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-trophy"></i>
                        <span>Official Merchandise</span>
                    </div>
                </div>
                
                <div class="product-price">
                    <div>
                        <span class="price-main">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render products
function renderProducts() {
    const lowerProducts = filteredProducts.filter(p => p.category === "lower");
    
    productsGrid.innerHTML = lowerProducts.map(product => `
        <div class="product-card fade-in">
            ${product.popular ? '<div class="product-badge">Popular</div>' : ''}
            ${product.new ? '<div class="product-badge" style="background: var(--accent-green);">New</div>' : ''}
            
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-specs">
                    <div class="spec-item">
                        <i class="fas fa-ruler"></i>
                        <span>${product.fit} Fit</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-layer-group"></i>
                        <span>${product.material}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <span>Sizes: ${product.sizes.join(', ')}</span>
                    </div>
                </div>
                
                <div class="product-price">
                    <div>
                        <span class="price-main">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    productCount.textContent = lowerProducts.length;
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }, 100);
}

// Filter products
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const size = sizeFilter.value;
    const brand = brandFilter.value;
    const sort = sortFilter.value;

    filteredProducts = PRODUCTS.filter(product => {
        if (product.category !== "lower") return false;
        
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.brand.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesSize = size === 'all' || product.sizes.includes(parseInt(size));
        const matchesBrand = brand === 'all' || product.brand.toLowerCase().includes(brand);
        
        return matchesSearch && matchesSize && matchesBrand;
    });

    // Sort products
    switch(sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.popular - a.popular);
            break;
        case 'new':
            filteredProducts.sort((a, b) => b.new - a.new);
            break;
        default:
            // Keep original order
            break;
    }

    renderProducts();
}

// Show product detail modal
function showProductDetail(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    productDetailContent.innerHTML = `
        <button class="close-detail" id="closeDetail">
            <i class="fas fa-times"></i>
        </button>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding: 30px;">
            <div class="product-image" style="height: 400px; border-radius: 15px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
            </div>
            
            <div>
                <div class="product-brand">${product.brand}</div>
                <h2 class="product-title" style="font-size: 1.8rem;">${product.name}</h2>
                <p class="product-description" style="font-size: 1rem; line-height: 1.7;">${product.description}</p>
                
                <div class="product-specs" style="margin: 25px 0;">
                    <div class="spec-item">
                        <i class="fas fa-ruler"></i>
                        <span>${product.fit} Fit</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-layer-group"></i>
                        <span>${product.material}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <span>Available Sizes: ${Array.isArray(product.sizes) ? product.sizes.join(', ') : product.sizes}</span>
                    </div>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 15px; margin: 25px 0;">
                    <h4 style="margin-bottom: 10px;">Product Details</h4>
                    <p style="color: var(--gray-5); line-height: 1.6;">
                        Premium quality ${product.category === 'ipl' ? 'IPL team ' : ''}${product.category === 'tshirt' ? 't-shirt' : 'lower'} designed for comfort and style. 
                        Perfect for ${product.category === 'ipl' ? 'showing your team support' : product.category === 'tshirt' ? 'casual and formal wear' : 'athletic activities and gym sessions'}.
                    </p>
                </div>
                
                <div class="product-price" style="margin-top: 30px;">
                    <div>
                        <span class="price-main" style="font-size: 2rem;">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="price-old" style="font-size: 1.2rem;">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" style="padding: 15px 30px; font-size: 1rem;" onclick="addToCartFromDetail(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productDetailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add close event
    const closeDetailBtn = document.getElementById('closeDetail');
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', () => {
            productDetailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close on outside click
    productDetailModal.addEventListener('click', (e) => {
        if (e.target === productDetailModal) {
            productDetailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Add to cart from detail modal
function addToCartFromDetail(productId) {
    addToCart(productId);
    productDetailModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cart functions
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Animation feedback
    cartIcon.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
    ], {
        duration: 300
    });
    
    // Show success message
    showNotification(`${product.name} added to cart!`);
}

function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart panel if open
    if (cartPanel.classList.contains('active')) {
        renderCartItems();
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray-5);">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; opacity: 0.3; margin-bottom: 20px;"></i>
                <p>Your cart is empty</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Add some products to get started!</p>
            </div>
        `;
        cartTotalAmount.textContent = formatPrice(0);
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)} each</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateCartItem(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItem(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="quantity-btn" onclick="removeCartItem(${item.id})" 
                                style="margin-left: auto; background: rgba(230, 57, 70, 0.2);">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotalAmount.textContent = formatPrice(total);
}

function updateCartItem(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        updateCart();
        renderCartItems();
    }
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    renderCartItems();
    showNotification('Item removed from cart');
}

// Event listeners
function addEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', () => {
        cartPanel.classList.add('active');
        renderCartItems();
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', () => {
        cartPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartPanel.classList.contains('active') && 
            !cartPanel.contains(e.target) && 
            !cartIcon.contains(e.target)) {
            cartPanel.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Filters
    searchInput.addEventListener('input', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    sizeFilter.addEventListener('change', filterProducts);
    brandFilter.addEventListener('change', filterProducts);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty! Add some products first.', 'error');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Checkout initiated! Total: ${formatPrice(total)}`, 'success');
        
        // Clear cart after checkout
        cart = [];
        updateCart();
        renderCartItems();
        cartPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Custom order form
    customOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: $('#customerName').value,
            phone: $('#customerPhone').value,
            category: $('#category').value,
            size: $('#size').value,
            quantity: $('#quantity').value,
            team: $('#team').value,
            requirements: $('#requirements').value,
            deliveryDate: $('#deliveryDate').value,
            timestamp: new Date().toISOString()
        };
        
        // Validate form
        if (!formData.name || !formData.phone || !formData.category || !formData.size) {
            showNotification('Please fill all required fields!', 'error');
            return;
        }
        
        // For demo purposes, we'll show a success message
        showNotification('Order submitted successfully! We will contact you soon.', 'success');
        
        // Reset form
        customOrderForm.reset();
        
        // Simulate order submission
        console.log('Custom Order Submitted:', formData);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Prevent form submission on Enter in search
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterProducts();
        }
    });
}

// Animation functions
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Scroll events
function initScrollEvents() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        // Header scroll effect
        if (window.scrollY > 50) {
            mainHeader.classList.add('header-scrolled');
        } else {
            mainHeader.classList.remove('header-scrolled');
        }
        
        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        lastScroll = window.scrollY;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add to global scope for onclick attributes
window.addToCart = addToCart;
window.addToCartFromDetail = addToCartFromDetail;
window.updateCartItem = updateCartItem;
window.removeCartItem = removeCartItem;
window.showProductDetail = showProductDetail;

// Handle image errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Use your local images as fallback
        if (e.target.src.includes('images/')) {
            e.target.src = 'images/top.webp'; // Your default image
        }
    }
}, true);

// Handle touch events for mobile
document.addEventListener('touchstart', function() {}, {passive: true});


// Check authentication on store page
async function protectStorePage() {
    try {
        const response = await fetch('/api/auth/me');
        const data = await response.json();
        
        if (!data.isAuthenticated) {
            // Redirect to register page if not authenticated
            alert('Please login first to access the store.');
            window.location.href = '/register';
            return false;
        }
        
        // Welcome user
        console.log('Welcome', data.user?.fullName || 'User');
        return true;
    } catch (error) {
        console.error('Auth check failed:', error);
        window.location.href = '/register';
        return false;
    }
}

// Logout function
async function logout() {
    try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST'
        });
        const data = await response.json();
        
        if (data.success) {
            alert('Logged out successfully');
            window.location.href = '/';
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Add logout button to store page
document.addEventListener('DOMContentLoaded', function() {
    // Protect the page
    protectStorePage();
    
    // Add logout button if not exists
    if (!document.getElementById('logoutBtn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logoutBtn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        logoutBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: #e63946;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
        `;
        logoutBtn.onclick = logout;
        document.body.appendChild(logoutBtn);
    }
});
