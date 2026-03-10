// --- Mock Data (Businesses fallback) ---
// Using this since API URL was not provided originally, but now we have multiple endpoints.
const fallbackBusinesses = [
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

// Configuration - OpenSheet Endpoints (businesses only; agenda is now hardcoded)
const API_BASE = "https://opensheet.elk.sh/1vY1Q4g2XQI1e7P5i-I7NpVCTMXcJ5U4leWDZupT8G1w";
const API_URLS = {
    businesses: `${API_BASE}/1`
};

// --- Hardcoded Agenda Data ---
const agendaData = [
    { time: "", label: "", title: "Registrations", speaker: "", desc: "" },
    { time: "", label: "Kickoff", title: "Welcome & Event Kickoff", speaker: "", desc: "" },
    { time: "", label: "Keynote Session", title: "Marketing Strategy and Implementation", speaker: "Spa Ceylon Marketing Team", desc: "Learn the strategies behind building a powerful brand presence." },
    { time: "", label: "Keynote Session", title: "Personal Branding", speaker: "Shalin Balasuriya", desc: "Building influence and trust as a founder." },
    { time: "", label: "Keynote Session", title: "Mastering TikTok & Meta for Business Growth", speaker: "Roar Media", desc: "Practical strategies to grow your brand and reach the right audiences." },
    { time: "", label: "Break", title: "Refreshment Break", speaker: "", desc: "" },
    { time: "", label: "Live Performance", title: "Special Anthem Performance", speaker: "Ashanthi De Alwis, Hirushi Jayasena & Melissa", desc: "" },
    { time: "", label: "Keynote Session", title: "Business Foundations: Accounting & Compliance", speaker: "Simple Books", desc: "Essential financial practices every business should know." },
    { time: "", label: "Keynote Session", title: "How to Pitch to Investors", speaker: "Surge", desc: "What investors look for and how to present your business with confidence." },
    { time: "", label: "Keynote Session", title: "Winning with Quick Commerce", speaker: "Celeste", desc: "How brands can leverage fast delivery platforms to boost sales and visibility." },
    { time: "", label: "Power Talk", title: "Building a Brand That Lasts", speaker: "Shalin Balasuriya & Otara Gunawardene", desc: "An inspiring conversation on entrepreneurship, brand building, and staying relevant." },
    { time: "", label: "Networking", title: "Photo Session & Networking", speaker: "", desc: "Connect, collaborate, and celebrate the day." }
];

// Helper — converts any Google Drive viewer link to a direct embeddable image URL.
// Handles both /file/d/FILE_ID/view and open?id=FILE_ID formats.
function formatDriveImage(url) {
    if (!url) return '';
    const driveRegex = /\/d\/([a-zA-Z0-9_-]+)|[?&]id=([a-zA-Z0-9_-]+)/;
    const match = url.match(driveRegex);
    if (match) {
        const id = match[1] || match[2];
        if (id) return `https://drive.google.com/uc?export=view&id=${id}`;
    }
    return url;
}

// Bulletproof Google Drive image parser — bypasses CORS/viewer issues.
// Uses the lh3.googleusercontent.com CDN which serves raw image bytes.
// Extracts the Drive File ID (25+ alphanumeric chars) from any Drive URL format.
function parseGoogleDriveImage(url) {
    if (!url) return '';
    const match = url.match(/[-\w]{25,}/);
    if (match) {
        return `https://lh3.googleusercontent.com/d/${match[0]}`;
    }
    return url;
}

// Elements
const loadingOverlay = document.getElementById('loading-overlay');
const navbar = document.getElementById('navbar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinksContainer = document.getElementById('nav-links');
const heroQuote = null; // Quote is now hardcoded in HTML
const detailsCard = document.getElementById('details-card');
const agendaContainer = document.getElementById('agenda-container');
const featuredGrid = document.getElementById('featured-grid');
const categoriesContainer = document.getElementById('categories-container');
const otherCategoryContainer = document.getElementById('other-category-container');

// State
let appData = {
    eventDetails: {
        hero_quote: "Meet the women building, leading, and reshaping Sri Lanka business landscape.<br>Discover a curated showcase of inspiring female-led brands and the stories behind them.<br>From emerging entrepreneurs to established founders, #herbusinessmatters brings together women who are turning ideas into impact.",
        event_date: "March 16 , 2026",
        event_time: "8:00 AM - 3:00 PM",
        event_venue: "BMICH, Colombo - Jasmine Hall",
        about_text: "Hear directly from experienced founders and industry experts as they share real insights on building, growing and navigating the challenges of running a business.",
        ticket_link: "https://event.spaceylon.com/"
    },
    agenda: agendaData,
    businesses: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    feather.replace();
    handleScroll();
    initApp();
    setupMobileNav();
    // Reset scroll after content renders (ensures page always starts at top)
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });
});

// Event Listeners
window.addEventListener('scroll', handleScroll);

// Mobile Nav Toggle
function setupMobileNav() {
    // Re-query after feather.replace() may have re-rendered the icon
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        // Direct click on the hamburger container
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a nav link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

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
    try {
        // Fetch businesses endpoint
        let response = await fetch(API_URLS.businesses);
        const data = await response.json();

        if (data && !data.error && Array.isArray(data)) {
            // Process logos before pushing to state
            appData.businesses = data.map(item => ({
                ...item,
                newlogo: parseGoogleDriveImage(item.newlogo)
            }));
            console.log("Sample Business Data:", appData.businesses[0]);
        } else {
            console.warn("API returned error or empty data, using fallback.");
            appData.businesses = fallbackBusinesses;
        }

        renderApp();
    } catch (error) {
        console.error("Critical error during data fetching", error);
        appData.businesses = fallbackBusinesses;
        renderApp();
    } finally {
        // Hide loading overlay
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.pointerEvents = 'none'; // CRITICAL: Stop eating touches
            setTimeout(() => loadingOverlay.style.display = 'none', 500);
        }, 500);
    }
}

function renderApp() {
    if (appData.eventDetails) {
        renderEventDetails(appData.eventDetails);
    }

    renderAgenda();

    renderFeatured();
    renderCategories();
    // After DOM injection, initialize feather icons and intersection observers
    feather.replace();
    initIntersectionObservers();
}

function renderEventDetails(details) {
    let ticketBtnHTML = '';
    if (details.ticket_link) {
        ticketBtnHTML = `<a href="${details.ticket_link}" target="_blank" rel="noopener noreferrer" class="primary-btn gold-btn">Get Tickets</a>`;
    }

    detailsCard.innerHTML = `
        <div class="event-details-content">
            <h2 class="section-title text-center">About The Event</h2>
            <div class="event-meta">
                <div class="meta-item">
                    <i data-feather="calendar"></i>
                    <span>${details.event_date || 'Date TBD'}</span>
                </div>
                <div class="meta-item">
                    <i data-feather="clock"></i>
                    <span>${details.event_time || 'Time TBD'}</span>
                </div>
                <div class="meta-item">
                    <i data-feather="map-pin"></i>
                    <span>${details.event_venue || 'Venue TBD'}</span>
                </div>
            </div>
            <p class="event-about">${details.about_text || ''}</p>
            ${ticketBtnHTML}
        </div>
    `;
}

function renderAgenda() {
    if (!appData.agenda || appData.agenda.length === 0) {
        document.getElementById('agenda').style.display = 'none';
        return;
    }

    let html = '';
    appData.agenda.forEach((item, index) => {
        const isSpeakerPresent = item.speaker && item.speaker.trim() !== '';
        const isDescPresent = item.desc && item.desc.trim() !== '';
        const indexClass = `delay-${index % 5}`; // Limit delay steps

        html += `
            <div class="agenda-item reveal-section ${indexClass}">
                <div class="agenda-time">${item.time || ''}</div>
                <div class="agenda-content">
                    ${item.label ? `<span style="font-size: 0.75rem; color: #c6a75e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; display: block; font-weight: 600;">${item.label}</span>` : ''}
                    <h3 class="agenda-title">${item.title || ''}</h3>
                    ${isSpeakerPresent ? `<p class="agenda-speaker"><i data-feather="user"></i> ${item.speaker}</p>` : ''}
                    ${isDescPresent ? `<p class="agenda-desc">${item.desc}</p>` : ''}
                </div>
            </div>
        `;
    });

    agendaContainer.innerHTML = html;
}

// Card Template
function createCardHTML(business) {
    const isSpaCeylon = business.name && business.name.toLowerCase() === 'spa ceylon';
    const highlightClass = isSpaCeylon ? 'highlight-spa-ceylon' : '';

    let logoHTML = '';
    // Run newlogo through bulletproof CDN bypass parser
    const logoSrc = parseGoogleDriveImage(business.newlogo);
    if (logoSrc) {
        logoHTML = `<div class="card-logo-container"><img src="${logoSrc}" alt="${business.name} logo" class="card-logo" loading="lazy" decoding="async" style="object-fit: contain;" /></div>`;
    } else {
        const initial = business.name ? business.name.charAt(0).toUpperCase() : '?';
        logoHTML = `<div class="card-logo-container"><span class="card-logo-placeholder">${initial}</span></div>`;
    }

    // Safe encoding to prevent quote issues in HTML onClick attributes
    const encodedDataId = btoa(encodeURIComponent(business.name || ''));

    return `
        <div class="card brand-card-unified ${highlightClass}" onclick="openModal('${encodedDataId}')">
            <div class="card-header">
                ${logoHTML}
            </div>
            <h3 class="card-title" title="${business.name}">${business.name}</h3>
        </div>
        `;
}

// Helper function to figure out the glassmorphism class based on category or parent
function getGlassClass(biz) {
    const searchString = `${biz.category || ''} ${biz.parent || ''} ${biz.name || ''}`.toLowerCase();
    if (searchString.includes('spa ceylon')) return 'glass-card-gold';
    if (searchString.includes('luvesence') || searchString.includes('luv essence')) return 'glass-card-pink';
    if (searchString.includes('janet')) return 'glass-card-green';
    return 'glass-card-gold'; // Fallback
}

// Render Featured Layer into three themed grids
function renderFeatured() {
    // 1. Filter arrays exactly by the new feature flags
    const spaCeylonBrands = appData.businesses.filter(b => {
        if (!b || !b.featured) return false;
        return String(b.featured).trim().toUpperCase() === 'TRUE-S';
    });

    const luvEsenceBrands = appData.businesses.filter(b => {
        if (!b || !b.featured) return false;
        return String(b.featured).trim().toUpperCase() === 'TRUE-L';
    });

    const janetBrands = appData.businesses.filter(b => {
        if (!b || !b.featured) return false;
        return String(b.featured).trim().toUpperCase() === 'TRUE-J';
    });

    // Determine if the whole section should be hidden
    const totalFeatured = spaCeylonBrands.length + luvEsenceBrands.length + janetBrands.length;
    if (totalFeatured === 0) {
        const featuredSection = document.getElementById('featured');
        if (featuredSection) featuredSection.style.display = 'none';
        return;
    }

    // Helper to render a specific grid
    const renderGrid = (gridId, brands) => {
        const gridElem = document.getElementById(gridId);
        if (!gridElem) return;
        
        // Hide wrapper if no brands in this bucket
        if (brands.length === 0) {
            gridElem.parentElement.parentElement.style.display = 'none';
            return;
        }
        
        let html = '';
        brands.slice(0, 5).forEach((biz, index) => {
            let cardHtml = createCardHTML(biz);

            // Interaction hint logic from before
            if (index === 0 && gridId === 'featured-spa-grid' && localStorage.getItem('sawCardHint') !== 'true') {
                cardHtml = cardHtml.replace('<div class="card-header">', '<div class="interaction-hint-popup" id="click-hint">Click me!</div><div class="card-header">');
            }

            html += cardHtml;
        });
        gridElem.innerHTML = html;
    };

    renderGrid('featured-spa-grid', spaCeylonBrands);
    renderGrid('featured-luv-grid', luvEsenceBrands);
    renderGrid('featured-janet-grid', janetBrands);
}

// Render Categories
function renderCategories() {
    // Group by category
    const grouped = {};
    const others = [];

    appData.businesses.forEach(biz => {
        const cat = (biz.category || "").trim();
        if (!cat || cat.toLowerCase() === 'other') {
            others.push(biz);
        } else {
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(biz);
        }
    });

    let categoriesHtml = '';
    const sortedCategories = Object.keys(grouped).sort((a, b) => {
        const aIsOther = a.toLowerCase().includes('other');
        const bIsOther = b.toLowerCase().includes('other');
        if (aIsOther && !bIsOther) return 1;   // push a down
        if (!aIsOther && bIsOther) return -1;  // push b down
        return a.localeCompare(b);             // alphabetical for the rest
    });

    sortedCategories.forEach(cat => {
        categoriesHtml += createCategoryBlock(cat, grouped[cat]);
    });

    categoriesContainer.innerHTML = categoriesHtml;

    if (others.length > 0) {
        otherCategoryContainer.innerHTML = createCategoryBlock("Other", others);
    }
}

function createCategoryBlock(title, items) {
    // Sort: businesses with a valid image float to the top;
    // empty / null / "N/A" logos are pushed to the bottom.
    const sorted = [...items].sort((a, b) => {
        const hasA = (a.newlogo && a.newlogo.trim() !== '' && a.newlogo.trim().toLowerCase() !== 'n/a') ? 1 : 0;
        const hasB = (b.newlogo && b.newlogo.trim() !== '' && b.newlogo.trim().toLowerCase() !== 'n/a') ? 1 : 0;
        return hasB - hasA;
    });

    let cardsHtml = '';
    sorted.forEach(biz => {
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
    const business = appData.businesses.find(b => b.name === rawName);
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
            ${business.newlogo ? `<img src="${business.newlogo}" alt="${business.name} Logo" class="modal-logo" onerror="this.src='header-logo-new3.png'">` : `<img src="header-logo-new3.png" alt="Fallback Logo" class="modal-logo" style="filter: brightness(0) invert(1);">`}
            <h2 class="modal-title">${business.name}</h2>
            <div class="modal-socials" style="margin-bottom: 24px;">
                ${socialsHTML}
            </div>
            <p class="modal-description">${business.description || 'Explore our exclusive offerings and story. Join us in celebrating her vision!'}</p>
        </div>
    `;

    feather.replace(); // Re-initialize icons inside the new modal
    modalOverlay.classList.add('active'); // Pop it up smoothly
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

window.closeModal = function (event) {
    // Only close if we clicked the pure background overlay or the explicitly passed event from the close button
    if (event && (event.type === 'click' || event.type === 'touchstart')) {
        if (!event.target.classList.contains('modal-overlay')) {
            return; // Ignore clicks inside the modal content box
        }
    }

    const modalOverlay = document.getElementById('business-modal');
    modalOverlay.classList.remove('active');

    document.body.style.overflow = ''; // Restore scrolling
};

// Add explicit listeners for Mobile UI
document.addEventListener('DOMContentLoaded', () => {
    // Modal iOS dismiss
    const modalOverlay = document.getElementById('business-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('touchstart', window.closeModal, { passive: true });
    }

    // Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Auto-close menu when a link is tapped
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

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

    // Observe all reveal-sections for cinematic scroll-reveal
    document.querySelectorAll('.reveal-section').forEach(section => {
        observer.observe(section);
    });

    // We no longer observe individual cards to prevent intersection observer thrashing
    // on large category lists. Cards will animate in when their category opens.
}

// Smooth scroll helper
window.exploreClick = function (e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
