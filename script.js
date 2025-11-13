// ===================================
// Hero Slideshow
// ===================================
let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
    
    // Change slide every 4 seconds
    slideTimer = setTimeout(showSlides, 4000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1;
    showSlides();
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

// ===================================
// Mobile Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (isActive) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a nav link
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
});

// ===================================
// FAQ Accordion
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or doesn't exist
            if (href === '#' || href === '#contact' || href === '#download' || href === '#privacy' || href === '#terms') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });
});

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.problem-item, .solution-pillar, .component-card, .pricing-card, .faq-item, .timeline-item'
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// Form Handling (placeholder for future implementation)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for contact form handling
    // This can be expanded when the actual contact form is implemented

    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Handle special CTAs
            if (href === '#contact') {
                e.preventDefault();
                // Here you would typically open a contact form modal or redirect to a contact page
                console.log('Contact form would open here');
                alert('Thank you for your interest! Please email us at hello@youlab.io to schedule your discovery call.');
            } else if (href === '#download') {
                e.preventDefault();
                // Here you would typically trigger a download or show a form to collect email
                console.log('Download guide would be triggered here');
                alert('Download feature coming soon! Please email hello@youlab.io to receive our free guide.');
            }
        });
    });
});

// ===================================
// Performance: Lazy Loading for Images (if added later)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

// ===================================
// Analytics Tracking (placeholder)
// ===================================
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    // Can be integrated with Google Analytics, Mixpanel, etc.
    console.log('Track Event:', eventName, eventData);
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonHref = this.getAttribute('href');
            trackEvent('CTA Click', {
                text: buttonText,
                href: buttonHref
            });
        });
    });
});

// ===================================
// Add scroll-to-top functionality
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll-to-top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.className = 'scroll-to-top';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopButton);

    // Add styles for scroll-to-top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 999;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
        }

        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .scroll-to-top:active {
            transform: scale(0.95);
        }

        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 1.25rem;
                right: 1.25rem;
                width: 3rem;
                height: 3rem;
                font-size: 1.375rem;
                box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.2);
            }
        }

        @media (max-width: 480px) {
            .scroll-to-top {
                bottom: 1rem;
                right: 1rem;
                width: 2.75rem;
                height: 2.75rem;
                font-size: 1.25rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===================================
// Team Card Flip on Click
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            // On mobile, lock the height before flipping to prevent resize
            if (window.innerWidth <= 768) {
                if (!this.classList.contains('flipped')) {
                    // Capture current height before flipping to back
                    const currentHeight = this.offsetHeight;
                    this.style.height = currentHeight + 'px';
                } else {
                    // When flipping back to front, remove the locked height
                    this.style.height = '';
                }
            }
            
            this.classList.toggle('flipped');
        });
    });

    // Reset heights on window resize
    window.addEventListener('resize', function() {
        teamCards.forEach(card => {
            if (window.innerWidth > 768) {
                card.style.height = '';
            }
        });
    });
});

// ===================================
// Prevent loading issues
// ===================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
