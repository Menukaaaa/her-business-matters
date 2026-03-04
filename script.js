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

    let logoHTML = '';
    if (business.logo) {
        logoHTML = `<div class="card-logo-container"><img src="${business.logo}" alt="${business.name} logo" class="card-logo" loading="lazy" /></div>`;
    } else {
        const initial = business.name ? business.name.charAt(0).toUpperCase() : '?';
        logoHTML = `<div class="card-logo-container"><span class="card-logo-placeholder">${initial}</span></div>`;
    }

    // Safe encoding to prevent quote issues in HTML onClick attributes
    const encodedDataId = btoa(encodeURIComponent(business.name));

    return `
        <div class="card ${highlightClass}" onclick="openModal('${encodedDataId}')">
            <div class="card-header">
                ${logoHTML}
            </div>
            <h3 class="card-title" title="${business.name}">${business.name}</h3>
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
    const hasSeenHint = localStorage.getItem('sawCardHint') === 'true';

    featuredList.forEach((biz, index) => {
        const isFirst = index === 0;
        let cardHtml = createCardHTML(biz);

        // Inject the popup hint into the first card if they haven't seen it yet
        if (isFirst && !hasSeenHint) {
            cardHtml = cardHtml.replace('<div class="card-header">', '<div class="interaction-hint-popup" id="click-hint">Click me!</div><div class="card-header">');
        }

        html += cardHtml;
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
window.openModal = function (encodedId) {
    const rawName = decodeURIComponent(atob(encodedId));
    const business = rawData.find(b => b.name === rawName);
    if (!business) return;

    // Dismiss the hint and save to local storage forever
    const hint = document.getElementById('click-hint');
    if (hint) {
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 500);
    }
    localStorage.setItem('sawCardHint', 'true');

    const modalOverlay = document.getElementById('business-modal');
    const modalBody = document.getElementById('modal-body-content');

    // Build Socials matching the previous layout
    let socialsHTML = '';
    if (business.instagram) {
        let username = business.instagram.trim();
        if (username.startsWith('@')) username = username.substring(1);
        if (username.includes('instagram.com/')) {
            username = username.split('instagram.com/')[1].split('/')[0].split('?')[0];
        } else {
            username = username.replace('https://', '').replace('http://', '').replace('www.instagram.com', '').replace('instagram.com', '').replace(/\\/ / g, '');
        }
        socialsHTML += `<a href="https://instagram.com/${username}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="instagram" width="24" height="24"></i></a>`;
    }
    if (business.facebook) {
        let fbUrl = business.facebook.startsWith('http') ? business.facebook : `https://facebook.com/${business.facebook}`;
        socialsHTML += `<a href="${fbUrl}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="facebook" width="24" height="24"></i></a>`;
    }
    if (business.tiktok) {
        let ttUrl = business.tiktok.startsWith('http') ? business.tiktok : `https://tiktok.com/@${business.tiktok.replace('@', '')}`;
        socialsHTML += `<a href="${ttUrl}" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
        </a>`;
    }
    if (business.website) {
        socialsHTML += `<a href="${business.website}" target="_blank" rel="noopener noreferrer" class="social-link"><i data-feather="globe" width="24" height="24"></i></a>`;
    }

    // Inject the content into the overlay
    modalBody.innerHTML = `
        <div class="modal-body">
            ${business.logo ? `<img src="${business.logo}" alt="${business.name} Logo" class="modal-logo" onerror="this.src='header-logo-new3.png'">` : `<img src="header-logo-new3.png" alt="Fallback Logo" class="modal-logo" style="filter: brightness(0) invert(1);">`}
            <h2 class="modal-title">${business.name}</h2>
            <p class="modal-description">${business.description || 'Explore our exclusive offerings and story. Join us in celebrating her vision!'}</p>
            <div class="modal-socials">
                ${socialsHTML}
            </div>
        </div>
    `;

    feather.replace(); // Re-initialize icons inside the new modal
    modalOverlay.classList.add('active'); // Pop it up smoothly
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

window.closeModal = function (event) {
    // Only close if we clicked the pure background overlay or the explicitly passed event from the close button
    if (event && event.type === 'click') {
        if (!event.target.classList.contains('modal-overlay')) {
            return; // Ignore clicks inside the modal content box
        }
    }

    document.getElementById('business-modal').classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
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
            card.style.animationDelay = `${index * 50} ms`;
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
        card.style.animationDelay = `${index * 100} ms`;
        observer.observe(card);
    });
}
