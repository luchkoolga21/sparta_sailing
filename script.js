// ==================== THEME TOGGLE REMOVED ====================
// Site now uses only light theme (#F7F5F2) matching brand.ai design

// ==================== SHOWCASE TABS (Interactive Content) ====================
const showcaseTabs = document.querySelectorAll('.showcase-tab');
const showcasePanels = document.querySelectorAll('.showcase-panel');

showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetPanel = tab.dataset.tab;

        // Remove active from all tabs and panels
        showcaseTabs.forEach(t => t.classList.remove('active'));
        showcasePanels.forEach(p => {
            p.classList.remove('active');
        });

        // Add active to clicked tab and corresponding panel
        tab.classList.add('active');
        const panel = document.querySelector(`.showcase-panel[data-panel="${targetPanel}"]`);
        if (panel) {
            panel.classList.add('active');
        }
    });
});

// ==================== YACHT & SKIPPER TABS ====================
const ysTabs = document.querySelectorAll('.ys-tab');
const ysPanels = document.querySelectorAll('.ys-panel');

ysTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetPanel = tab.dataset.tab;

        // Remove active from all tabs and panels
        ysTabs.forEach(t => t.classList.remove('active'));
        ysPanels.forEach(p => {
            p.classList.remove('active');
        });

        // Add active to clicked tab and corresponding panel
        tab.classList.add('active');
        const panel = document.querySelector(`.ys-panel[data-panel="${targetPanel}"]`);
        if (panel) {
            panel.classList.add('active');
        }
    });
});

// ==================== PARALLAX SCROLL EFFECT FOR GALLERY ====================
const galleryCards = document.querySelectorAll('.gallery-card[data-parallax]');

function updateParallax() {
    // Disable parallax on mobile devices for better performance/clarity
    if (window.innerWidth <= 768) {
        galleryCards.forEach(card => card.style.transform = '');
        return;
    }

    const scrolled = window.pageYOffset;

    galleryCards.forEach(card => {
        const speed = parseFloat(card.dataset.parallax) || 0.3;
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;

        // Only apply parallax when card is in viewport
        if (scrolled + window.innerHeight > cardTop && scrolled < cardTop + cardHeight) {
            const yPos = -(scrolled - cardTop) * speed;
            card.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// Throttle scroll events for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});


// ==================== MOBILE NAVIGATION TOGGLE ====================
const navToggleMobile = document.querySelector('.nav-toggle-mobile');
const navMenu = document.querySelector('.nav-menu');

if (navToggleMobile && navMenu) {
    navToggleMobile.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isOpen = navMenu.classList.contains('active');

        // Change icon
        const icon = navToggleMobile.querySelector('.iconify');
        if (isOpen) {
            icon.setAttribute('data-icon', 'solar:close-circle-linear');
        } else {
            icon.setAttribute('data-icon', 'solar:hamburger-menu-linear');
        }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggleMobile.querySelector('.iconify');
            icon.setAttribute('data-icon', 'solar:hamburger-menu-linear');
        });
    });
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore if it's just "#" or empty
        if (href === '#' || !href) {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const headerHeight = 100; // Account for fixed header
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== HEADER SCROLL EFFECT ====================
let lastScroll = 0;
const headerNav = document.querySelector('header nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (headerNav) {
        if (currentScroll > 50) {
            headerNav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
        } else {
            headerNav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.1)';
        }
    }

    lastScroll = currentScroll;
});

// ==================== PARALLAX GLOW EFFECT ====================
const glowLeft = document.querySelector('.glow-left');
const glowRight = document.querySelector('.glow-right');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    if (glowLeft) {
        glowLeft.style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
    }

    if (glowRight) {
        glowRight.style.transform = `translate(${-mouseX * 40}px, ${-mouseY * 40}px)`;
    }
});

// ==================== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for entrance animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(section);
});

// ==================== CONTACT FORM HANDLER ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const date = formData.get('date');

        // Here you would typically send data to a server
        // For now, we'll just show an alert
        alert(`Спасибо, ${name || 'гость'}! Мы свяжемся с вами в ближайшее время.`);

        // Reset form
        contactForm.reset();
    });
}

// ==================== GALLERY CARD MOUSE PARALLAX (SUBTLE) ====================
const galleryCardsHover = document.querySelectorAll('.gallery-card');

galleryCardsHover.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return; // Disable hover effects on mobile
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== PREVENT SCROLL JANK ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial fade-in for hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ==================== SERVICE TIER HOVER EFFECT ====================
const serviceTiers = document.querySelectorAll('.service-tier');

serviceTiers.forEach(tier => {
    tier.addEventListener('mouseenter', () => {
        serviceTiers.forEach(t => {
            if (t !== tier) {
                t.style.opacity = '0.6';
            }
        });
    });

    tier.addEventListener('mouseleave', () => {
        serviceTiers.forEach(t => {
            t.style.opacity = '1';
        });
    });
});

// ==================== LIGHTBOX GALLERY ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
const lightboxClose = document.querySelector('.lightbox-close');
const galleryImages = document.querySelectorAll('.gallery-grid img, .showcase-panel img'); // Include showcase images too if needed

if (lightbox && lightboxImg && galleryImages.length > 0) {
    // Open lightbox
    galleryImages.forEach(img => {
        img.style.cursor = 'zoom-in'; // Add cursor indicator
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox functions
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}
