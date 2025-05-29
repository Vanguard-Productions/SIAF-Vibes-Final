// Homepage JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const toggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  const showcase = document.querySelector('#showcase');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  // Login button functionality - redirect to login page
  const loginButtons = document.querySelectorAll('a[href="#"]');
  loginButtons.forEach((button) => {
    if (button.textContent.trim() === 'Login') {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '/SIAFVibes/Login/LogInPage.html';
      });
    }
  });

  // Plan buttons - redirect to login page
  const planButtons = document.querySelectorAll('.planBox button a');
  planButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'LogInPage.html';
    });
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#showcase') {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });

  // Video handling
  const video = document.querySelector('video');
  if (video) {
    video.addEventListener('loadstart', function () {
      console.log('Video loading started');
    });

    video.addEventListener('error', function () {
      console.log('Video failed to load');
      // Hide video overlay if video fails to load
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.style.background = 'linear-gradient(45deg, #1a1a2e, #16213e)';
      }
    });
  }

  // Service box hover effects
  const serviceBoxes = document.querySelectorAll('.serviceBox');
  serviceBoxes.forEach((box) => {
    box.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
      this.style.transition = 'transform 0.3s ease';
    });

    box.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Plan box hover effects
  const planBoxes = document.querySelectorAll('.planBox');
  planBoxes.forEach((box) => {
    box.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    box.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition =
          'opacity 0.6s ease, transform 0.6s ease';
      }
    });
  }, observerOptions);

  // Observe service and plan sections
  const sectionsToAnimate = document.querySelectorAll(
    '.servicesClass, .premiumPlans'
  );
  sectionsToAnimate.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    observer.observe(section);
  });

  // Free Trial button functionality
  const freeTrialButton = document.querySelector('.FreeTrial');
  if (freeTrialButton) {
    freeTrialButton.addEventListener('click', function (e) {
      e.preventDefault();
      // Scroll to premium plans section
      const premiumSection = document.querySelector('.premiumPlans');
      if (premiumSection) {
        premiumSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }

  // Add loading state management
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
});

// Utility function to handle navigation
function navigateToLogin() {
  window.location.href = 'LogInPage.html';
}

// Utility function for smooth scrolling
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
