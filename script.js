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

// Configuration - OpenSheet Endpoints
const API_URLS = {
    businesses: "https://opensheet.elk.sh/13gYm5__e9eiEXFbCrjs-17GlcUgAghl-zZIWsxccEe8/WOMENSDAY" // Keeping previous URL for businesses as requested
};

// Elements
const loadingOverlay = document.getElementById('loading-overlay');
const navbar = document.getElementById('navbar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinksContainer = document.getElementById('nav-links');
const heroQuote = document.getElementById('hero-quote');
const detailsCard = document.getElementById('details-card');
const agendaContainer = document.getElementById('agenda-container');
const speakersContainer = document.getElementById('speakers-container');
const featuredGrid = document.getElementById('featured-grid');
const categoriesContainer = document.getElementById('categories-container');
const otherCategoryContainer = document.getElementById('other-category-container');

// State
let appData = {
    eventDetails: {
        hero_quote: "Meet the women shaping the future of local business. Explore our curated showcase of Sri Lanka's finest female-led brands.",
        event_date: "March 8, 2026",
        event_time: "10:00 AM - 6:00 PM",
        event_venue: "BMICH, Colombo, Sri Lanka",
        about_text: "Join us for a full day of inspiring keynotes, interactive workshops, and networking with Sri Lanka's finest female entrepreneurs. Celebrate the visionaries who are redefining the business landscape.",
        ticket_link: "#"
    },
    agenda: [
        { time_slot: "09:00 AM", session_title: "Registration & Welcome", speaker_name: "", description: "Arrival, networking, and morning tea." },
        { time_slot: "10:00 AM", session_title: "Keynote Address", speaker_name: "Jane Doe", description: "The future of female leadership and innovation in Sri Lanka." },
        { time_slot: "11:30 AM", session_title: "Panel Discussion: Scaling Your Brand", speaker_name: "Industry Leaders", description: "Insights from successful founders on growth and sustainability." },
        { time_slot: "01:00 PM", session_title: "Networking Lunch & Exhibition", speaker_name: "", description: "Connect with exhibitors and explore featured brands." },
        { time_slot: "03:00 PM", session_title: "Closing Ceremony", speaker_name: "Sarah Smith", description: "Final thoughts and awards presentation." }
    ],
    speakers: [
        { name: "Jane Doe", role: "CEO, TechInnovate", headshot: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300", bio: "Jane is a pioneer in the tech industry, having founded multiple successful startups globally." },
        { name: "Sarah Smith", role: "Founder, GreenLife", headshot: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300", bio: "Sarah built a sustainable brand from scratch that now exports to over 15 countries." },
        { name: "Aisha Khan", role: "Director, CreativeArts", headshot: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300&h=300", bio: "Aisha leads one of the top creative agencies, championing design and marketing excellence." }
    ],
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
});

// Event Listeners
window.addEventListener('scroll', handleScroll);

// Mobile Nav Toggle
function setupMobileNav() {
    hamburgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
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
        const response = await fetch(API_URLS.businesses);
        const data = await response.json();

        if (data && !data.error) {
            appData.businesses = data;
        } else {
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
            setTimeout(() => loadingOverlay.style.display = 'none', 500);
        }, 500);
    }
}

function renderApp() {
    if (appData.eventDetails) {
        heroQuote.textContent = appData.eventDetails.hero_quote || "Meet the women shaping the future of business.";
        renderEventDetails(appData.eventDetails);
    }

    renderAgenda();
    renderSpeakers();

    renderFeatured();
    renderCategories();
    // After DOM injection, initialize feather icons and intersection observers
    feather.replace();
    initIntersectionObservers();
}

function renderEventDetails(details) {
    let ticketBtnHTML = '';
    if (details.ticket_link) {
        ticketBtnHTML = `<a href="${details.ticket_link}" target="_blank" rel="noopener noreferrer" class="primary-btn gold-btn">Register / Get Tickets</a>`;
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
        const isSpeakerPresent = item.speaker_name && item.speaker_name.trim() !== '';
        const indexClass = `delay-${index % 5}`; // Limit delay steps

        html += `
            <div class="agenda-item reveal-section ${indexClass}">
                <div class="agenda-time">${item.time_slot || ''}</div>
                <div class="agenda-content">
                    <h3 class="agenda-title">${item.session_title || ''}</h3>
                    ${isSpeakerPresent ? `<p class="agenda-speaker"><i data-feather="user"></i> ${item.speaker_name}</p>` : ''}
                    <p class="agenda-desc">${item.description || ''}</p>
                </div>
            </div>
        `;
    });

    agendaContainer.innerHTML = html;
}

function renderSpeakers() {
    if (!appData.speakers || appData.speakers.length === 0) {
        document.getElementById('speakers').style.display = 'none';
        return;
    }

    let html = '';
    appData.speakers.forEach((speaker, index) => {
        const hasBio = speaker.bio && speaker.bio.trim() !== '';
        // Using ui-avatars to generate initials based on the speaker's name
        const initialsImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=111111&color=c6a75e&size=250&font-size=0.4&bold=true`;

        html += `
            <div class="speaker-card reveal-section" ${hasBio ? `onclick="openSpeakerModal(${index})" style="cursor: pointer;"` : ''}>
                <img src="${speaker.headshot || initialsImg}" alt="${speaker.name}" class="speaker-img" loading="lazy">
                <div class="speaker-info" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
                    <h3 class="speaker-name">${speaker.name}</h3>
                    <p class="speaker-role" style="margin-bottom: 0;">${speaker.role}</p>
                </div>
            </div>
        `;
    });

    speakersContainer.innerHTML = html;
}

window.openSpeakerModal = function (index) {
    const speaker = appData.speakers[index];
    if (!speaker) return;

    const initialsImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=111111&color=c6a75e&size=250&font-size=0.4&bold=true`;
    const headshot = speaker.headshot || initialsImg;

    const modalOverlay = document.getElementById('business-modal');
    const modalBody = document.getElementById('modal-body-content');

    modalBody.innerHTML = `
        <div class="modal-body" style="text-align: center;">
            <img src="${headshot}" alt="${speaker.name}" class="modal-logo" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%;">
            <h2 class="modal-title" style="margin-top: 16px;">${speaker.name}</h2>
            <p class="speaker-role" style="color: var(--color-accent-gold); font-weight: 500; margin-bottom: 24px;">${speaker.role}</p>
            <p class="modal-description">${speaker.bio}</p>
        </div>
    `;

    feather.replace();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

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
    const featuredList = appData.businesses.filter(item => {
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
            ${business.logo ? `<img src="${business.logo}" alt="${business.name} Logo" class="modal-logo" onerror="this.src='header-logo-new3.png'">` : `<img src="header-logo-new3.png" alt="Fallback Logo" class="modal-logo" style="filter: brightness(0) invert(1);">`}
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

    // Observe featured cards for staggered load animation
    document.querySelectorAll('.featured-grid .card').forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
    });
}

// Smooth scroll helper
window.exploreClick = function (e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
