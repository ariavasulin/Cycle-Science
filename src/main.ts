import './main.css'

// ===================================
// Hero Slideshow
// ===================================
let slideIndex = 0
let slideTimer: number

function showSlides(): void {
  const slides = document.querySelectorAll<HTMLElement>('.slide')
  const dots = document.querySelectorAll<HTMLElement>('.dot')

  if (slides.length === 0) return

  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active')
  })

  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active')
  })

  // Increment slide index
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].classList.add('active')
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add('active')
  }

  // Change slide every 4 seconds
  slideTimer = window.setTimeout(showSlides, 4000)
}

function currentSlide(n: number): void {
  clearTimeout(slideTimer)
  slideIndex = n - 1
  showSlides()
}

// Make currentSlide available globally for onclick handlers
;(window as any).currentSlide = currentSlide

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu(): void {
  const mobileMenuToggle = document.querySelector<HTMLButtonElement>('.mobile-menu-toggle')
  const navLinks = document.querySelector<HTMLElement>('.nav-links')

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active')
      navLinks.classList.toggle('active')
    })

    // Close mobile menu when clicking on a nav link
    const navLinksItems = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')
    navLinksItems.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active')
        navLinks.classList.remove('active')
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const target = event.target as Node
      const isClickInsideNav = navLinks.contains(target)
      const isClickOnToggle = mobileMenuToggle.contains(target)

      if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active')
        navLinks.classList.remove('active')
      }
    })
  }
}

// ===================================
// FAQ Accordion
// ===================================
function initFAQ(): void {
  const faqQuestions = document.querySelectorAll<HTMLButtonElement>('.faq-question')

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement as HTMLElement
      const isActive = faqItem.classList.contains('active')

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active')
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active')
      }
    })
  })
}

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
function initSmoothScrolling(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href')

      // Skip if it's just "#" or doesn't exist
      if (href === '#' || href === '#contact' || href === '#download' || href === '#privacy' || href === '#terms') {
        e.preventDefault()
        return
      }

      const targetElement = document.querySelector<HTMLElement>(href!)

      if (targetElement) {
        e.preventDefault()

        const navbar = document.querySelector<HTMLElement>('.navbar')
        const navbarHeight = navbar?.offsetHeight || 0
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
}

// ===================================
// Navbar Scroll Effect
// ===================================
function initNavbarScroll(): void {
  const navbar = document.querySelector<HTMLElement>('.navbar')
  if (!navbar) return

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset

    // Add shadow on scroll
    if (currentScroll > 10) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    } else {
      navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }
  })
}

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
function initIntersectionObserver(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.problem-item, .solution-pillar, .component-card, .pricing-card, .faq-item, .timeline-item'
  )

  animatedElements.forEach(element => {
    observer.observe(element)
  })
}

// ===================================
// Form Handling
// ===================================
function initFormHandling(): void {
  const ctaButtons = document.querySelectorAll<HTMLAnchorElement>('.btn-primary, .btn-secondary')

  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const href = this.getAttribute('href')

      // Handle special CTAs
      if (href === '#contact') {
        e.preventDefault()
        console.log('Contact form would open here')
        alert('Thank you for your interest! Please email us at hello@youlab.io to schedule your discovery call.')
      } else if (href === '#download') {
        e.preventDefault()
        console.log('Download guide would be triggered here')
        alert('Download feature coming soon! Please email hello@youlab.io to receive our free guide.')
      }
    })
  })
}

// ===================================
// Analytics Tracking
// ===================================
function trackEvent(eventName: string, eventData: Record<string, any>): void {
  console.log('Track Event:', eventName, eventData)
}

function initAnalytics(): void {
  const ctaButtons = document.querySelectorAll<HTMLAnchorElement>('.btn-primary, .btn-secondary')

  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent?.trim() || ''
      const buttonHref = this.getAttribute('href') || ''
      trackEvent('CTA Click', {
        text: buttonText,
        href: buttonHref
      })
    })
  })
}

// ===================================
// Scroll to Top Button
// ===================================
function initScrollToTop(): void {
  const scrollTopButton = document.createElement('button')
  scrollTopButton.innerHTML = '↑'
  scrollTopButton.className = 'scroll-to-top fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white border-none text-2xl cursor-pointer opacity-0 invisible transition-all duration-300 shadow-custom-md z-[999] hover:translate-y-[-3px] hover:shadow-custom-lg'
  scrollTopButton.setAttribute('aria-label', 'Scroll to top')
  document.body.appendChild(scrollTopButton)

  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopButton.classList.remove('opacity-0', 'invisible')
      scrollTopButton.classList.add('opacity-100', 'visible')
    } else {
      scrollTopButton.classList.remove('opacity-100', 'visible')
      scrollTopButton.classList.add('opacity-0', 'invisible')
    }
  })

  // Scroll to top on click
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

// ===================================
// Team Card Flip on Click
// ===================================
function initTeamCardFlip(): void {
  const teamCards = document.querySelectorAll<HTMLElement>('.team-card')

  teamCards.forEach(card => {
    card.addEventListener('click', function() {
      // On mobile, lock the height before flipping to prevent resize
      if (window.innerWidth <= 768) {
        if (!this.classList.contains('flipped')) {
          // Capture current height before flipping to back
          const currentHeight = this.offsetHeight
          this.style.height = currentHeight + 'px'
        } else {
          // When flipping back to front, remove the locked height
          this.style.height = ''
        }
      }

      this.classList.toggle('flipped')
    })
  })

  // Reset heights on window resize
  window.addEventListener('resize', function() {
    teamCards.forEach(card => {
      if (window.innerWidth > 768) {
        card.style.height = ''
      }
    })
  })
}

// ===================================
// Page Load Handler
// ===================================
window.addEventListener('load', function() {
  document.body.classList.add('loaded')
})

// ===================================
// Initialize All Functions on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  showSlides()
  initMobileMenu()
  initFAQ()
  initSmoothScrolling()
  initNavbarScroll()
  initIntersectionObserver()
  initFormHandling()
  initAnalytics()
  initScrollToTop()
  initTeamCardFlip()
})
