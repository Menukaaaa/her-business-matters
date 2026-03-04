// --- Mock Data ---
// Using this since API URL was not provided.
const fallbackData = [
    {
        name: "Spa Ceylon",
        category: "Beauty & Wellness",
        instagram: "spaceylon",
        facebook: "spaceylon",
        tiktok: "",
        website: "https://spaceylon.com",
        description: "Luxury Ayurveda brand offering premium quality personal care products. Empowering women through ethical sourcing and natural wellness.",
        logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "TRUE"
    },
    {
        name: "Lovi Ceylon",
        category: "Fashion",
        instagram: "loviceylon",
        facebook: "loviceylon",
        tiktok: "loviceylon",
        website: "https://loviceylon.com",
        description: "Redefining the Sri Lankan sarong for the modern era. Handcrafted luxury clothing celebrating local heritage.",
        logo: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "TRUE"
    },
    {
        name: "Kemara",
        category: "Beauty & Wellness",
        instagram: "kemaralife",
        facebook: "",
        tiktok: "",
        website: "https://kemaralife.com",
        description: "100% natural, holistic healing, and organic beauty solutions. Made in Sri Lanka to international standards.",
        logo: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "TRUE"
    },
    {
        name: "Mitsi's Delicacies",
        category: "Food & Beverage",
        instagram: "mitsis.delicacies",
        facebook: "mitsissl",
        tiktok: "",
        website: "",
        description: "Artisan baked goods and traditional sweets made with love. The finest ingredients sourced directly from local farmers.",
        logo: "https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "TRUE"
    },
    {
        name: "Selyn",
        category: "Fashion",
        instagram: "selynfairtrade",
        facebook: "selynfairtrade",
        tiktok: "",
        website: "https://www.selyn.lk",
        description: "Sri Lanka's only fair-trade guaranteed handloom company. Empowering artisan women across rural villages.",
        logo: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "TRUE"
    },
    {
        name: "Tori House",
        category: "Home & Decor",
        instagram: "torihoussl",
        facebook: "",
        tiktok: "",
        website: "",
        description: "Bespoke handcrafted ceramics and pottery creating elegant spaces. Female led and locally manufactured.",
        logo: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "FALSE"
    },
    {
        name: "Isle of Gelato",
        category: "Food & Beverage",
        instagram: "isleofgelato",
        facebook: "isleofgelato",
        tiktok: "",
        website: "",
        description: "Artisanal gelato made from scratch using the fresh local ingredients and premium imports. A culinary delight.",
        logo: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "FALSE"
    },
    {
        name: "PR Sri Lanka",
        category: "Fashion",
        instagram: "prsrilanka",
        facebook: "",
        tiktok: "",
        website: "https://pr.lk",
        description: "Colombo's first concept store featuring curated fashion and design, championing local artisans and slow fashion.",
        logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "FALSE"
    },
    {
        name: "Secret Garden",
        category: "",
        instagram: "secretgarden.lk",
        facebook: "",
        tiktok: "",
        website: "",
        description: "Unique indoor and outdoor plants curated for modern homes. Nurturing nature from our female-run nursery.",
        logo: "https://images.unsplash.com/photo-1416879506161-125032e5ce6c?auto=format&fit=crop&q=80&w=150&h=150",
        featured: "FALSE"
    }
];

// Configuration
const API_URL = "https://opensheet.elk.sh/13gYm5__e9eiEXFbCrjs-17GlcUgAghl-zZIWsxccEe8/WOMENSDAY"; // Provided Open Sheet API URL

// Elements
const navbar = document.getElementById('navbar');
const featuredGrid = document.getElementById('featured-grid');
const categoriesContainer = document.getElementById('categories-container');
const otherCategoryContainer = document.getElementById('other-category-container');

// State
let rawData = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    handleScroll();
    initApp();
});

// Event Listeners
window.addEventListener('scroll', handleScroll);

// Navbar Scroll Effect
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Data Fetching
async function initApp() {
    if (API_URL) {
        try {
            const response = await fetch(API_URL);
            rawData = await response.json();
            renderApp();
        } catch (error) {
            console.error("Error fetching data, using fallback", error);
            rawData = fallbackData;
            renderApp();
        }
    } else {
        rawData = fallbackData;
        renderApp();
    }
}

function renderApp() {
    renderFeatured();
    renderCategories();
    // After DOM injection, initialize feather icons and intersection observers
    feather.replace();
    initIntersectionObservers();
}

// Card Template
function createCardHTML(business) {
    const isSpaCeylon = business.name.toLowerCase() === 'spa ceylon';
    const highlightClass = isSpaCeylon ? 'highlight-spa-ceylon' : '';

    // Process URLs carefully
    let instagramHTML = '';
    if (business.instagram) {
        let username = business.instagram.trim();
        // Remove @ prefix if exists
        if (username.startsWith('@')) username = username.substring(1);

        // If they provided a full URL, extract the username part to avoid www issues
        if (username.includes('instagram.com/')) {
            let parts = username.split('instagram.com/');
            username = parts[1].split('/')[0].split('?')[0];
        } else {
            // Sometimes domains are just written outright
            username = username.replace('https://', '').replace('http://', '').replace('www.instagram.com', '').replace('instagram.com', '').replace(/\//g, '');
        }

        instagramHTML = `<a href="https://instagram.com/${username}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="instagram" width="18" height="18"></i></a>`;
    }

    let facebookHTML = '';
    if (business.facebook) {
        let fbUrl = business.facebook.startsWith('http') ? business.facebook : `https://facebook.com/${business.facebook}`;
        facebookHTML = `<a href="${fbUrl}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="facebook" width="18" height="18"></i></a>`;
    }

    let tiktokHTML = '';
    if (business.tiktok) {
        let ttUrl = business.tiktok.startsWith('http') ? business.tiktok : `https://tiktok.com/@${business.tiktok.replace('@', '')}`;
        tiktokHTML = `<a href="${ttUrl}" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
        </a>`; // Using video icon as fallback for tiktok since feather doesn't have tiktok
    }

    let websiteHTML = '';
    if (business.website) {
        websiteHTML = `<a href="${business.website}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="globe" width="18" height="18"></i></a>`;
    }

    let logoHTML = '';
    if (business.logo) {
        logoHTML = `<div class="card-logo-container"><img src="${business.logo}" alt="${business.name} logo" class="card-logo" loading="lazy" /></div>`;
    } else {
        const initial = business.name ? business.name.charAt(0).toUpperCase() : '?';
        logoHTML = `<div class="card-logo-container"><span class="card-logo-placeholder">${initial}</span></div>`;
    }

    // Unique ID for accordion accessibility
    const uniqueId = 'desc-' + Math.random().toString(36).substr(2, 9);

    return `
        <div class="card ${highlightClass}">
            <div class="card-header">
                ${logoHTML}
            </div>
            <h3 class="card-title" title="${business.name}">${business.name}</h3>
            
            <div class="card-description-wrapper" id="${uniqueId}">
                <div class="card-description-content">
                    <p class="card-description">${business.description || 'No description available.'}</p>
                </div>
            </div>
            
            <div class="card-socials">
                ${instagramHTML}
                ${facebookHTML}
                ${tiktokHTML}
                ${websiteHTML}
                <button class="info-btn" onclick="toggleDescription(this, '${uniqueId}')" aria-expanded="false" aria-controls="${uniqueId}">
                    <i data-feather="chevron-down"></i>
                </button>
            </div>
        </div>
    `;
}

// Render Featured Layer
function renderFeatured() {
    const featuredList = rawData.filter(item => {
        return item.featured === true || item.featured === "TRUE" || item.featured === "true";
    }).slice(0, 5); // Limit to top 5

    if (featuredList.length === 0) {
        document.getElementById('featured').style.display = 'none';
        return;
    }

    let html = '';
    featuredList.forEach(biz => {
        html += createCardHTML(biz);
    });

    featuredGrid.innerHTML = html;
}

// Render Categories
function renderCategories() {
    // Group by category
    const grouped = {};
    const others = [];

    rawData.forEach(biz => {
        const cat = (biz.category || "").trim();
        if (!cat || cat.toLowerCase() === 'other') {
            others.push(biz);
        } else {
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(biz);
        }
    });

    let categoriesHtml = '';
    const sortedCategories = Object.keys(grouped).sort();

    sortedCategories.forEach(cat => {
        categoriesHtml += createCategoryBlock(cat, grouped[cat]);
    });

    categoriesContainer.innerHTML = categoriesHtml;

    if (others.length > 0) {
        otherCategoryContainer.innerHTML = createCategoryBlock("Other", others);
    }
}

function createCategoryBlock(title, items) {
    let cardsHtml = '';
    items.forEach(biz => {
        cardsHtml += createCardHTML(biz);
    });

    return `
        <div class="category-block">
            <div class="category-header" onclick="toggleCategory(this)">
                <h3 class="category-title">${title} <span style="font-size: 1rem; color: var(--color-text-muted); font-weight: 400; font-family: var(--font-body)">(${items.length})</span></h3>
                <div class="category-icon">
                    <i data-feather="chevron-down"></i>
                </div>
            </div>
            <div class="category-content-wrapper">
                <div class="category-inner">
                    <div class="category-grid">
                        ${cardsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Interactions
window.toggleDescription = function (btn, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    event.stopPropagation(); // prevent bubbling if needed

    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        wrapper.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    } else {
        wrapper.classList.add('open');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    }
};

window.toggleCategory = function (headerElem) {
    const wrapper = headerElem.nextElementSibling;

    if (wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        headerElem.classList.remove('active');
    } else {
        wrapper.classList.add('open');
        headerElem.classList.add('active');
        // trigger staggered fade animation for cards inside
        const cards = wrapper.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 50}ms`;
            card.classList.add('visible');
        });
    }
};

// Intersection Observer for fade-in animations
function initIntersectionObservers() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe featured cards for immediate load animation if in viewport
    document.querySelectorAll('.featured-grid .card').forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
    });
}
