// Login Page JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
  // Form elements
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const loginButton = document.querySelector('.btnLogin');
  const signupButton = document.querySelector('.btnSignup');
  const rememberCheckbox = document.querySelector('input[type="checkbox"]');
  const forgotPasswordLink = document.querySelector('a[href="#"]');

  // Form validation
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6; // Minimum 6 characters
  }

  // Show validation messages
  function showValidationMessage(input, message, isValid = false) {
    // Remove existing validation message
    const existingMessage = input.parentNode.querySelector(
      '.validation-message'
    );
    if (existingMessage) {
      existingMessage.remove();
    }

    if (message) {
      const messageElement = document.createElement('span');
      messageElement.className = `validation-message ${
        isValid ? 'valid' : 'invalid'
      }`;
      messageElement.textContent = message;
      messageElement.style.fontSize = '12px';
      messageElement.style.color = isValid ? '#4CAF50' : '#f44336';
      messageElement.style.display = 'block';
      messageElement.style.marginTop = '5px';

      input.parentNode.insertBefore(messageElement, input.nextSibling);
    }
  }

  // Real-time email validation
  if (emailInput) {
    emailInput.addEventListener('blur', function () {
      const email = this.value.trim();
      if (email && !validateEmail(email)) {
        showValidationMessage(this, 'Please enter a valid email address');
        this.style.borderColor = '#f44336';
      } else if (email && validateEmail(email)) {
        showValidationMessage(this, 'Valid email', true);
        this.style.borderColor = '#4CAF50';
      } else {
        showValidationMessage(this, '');
        this.style.borderColor = '';
      }
    });

    emailInput.addEventListener('input', function () {
      this.style.borderColor = '';
      showValidationMessage(this, '');
    });
  }

  // Real-time password validation
  if (passwordInput) {
    passwordInput.addEventListener('blur', function () {
      const password = this.value;
      if (password && !validatePassword(password)) {
        showValidationMessage(
          this,
          'Password must be at least 6 characters long'
        );
        this.style.borderColor = '#f44336';
      } else if (password && validatePassword(password)) {
        showValidationMessage(this, 'Password looks good', true);
        this.style.borderColor = '#4CAF50';
      } else {
        showValidationMessage(this, '');
        this.style.borderColor = '';
      }
    });

    passwordInput.addEventListener('input', function () {
      this.style.borderColor = '';
      showValidationMessage(this, '');
    });
  }

  // Form submission handling
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const rememberMe = rememberCheckbox.checked;

      // Clear previous messages
      showValidationMessage(emailInput, '');
      showValidationMessage(passwordInput, '');

      let isValid = true;

      // Validate email
      if (!email) {
        showValidationMessage(emailInput, 'Email is required');
        emailInput.style.borderColor = '#f44336';
        isValid = false;
      } else if (!validateEmail(email)) {
        showValidationMessage(emailInput, 'Please enter a valid email address');
        emailInput.style.borderColor = '#f44336';
        isValid = false;
      }

      // Validate password
      if (!password) {
        showValidationMessage(passwordInput, 'Password is required');
        passwordInput.style.borderColor = '#f44336';
        isValid = false;
      } else if (!validatePassword(password)) {
        showValidationMessage(
          passwordInput,
          'Password must be at least 6 characters long'
        );
        passwordInput.style.borderColor = '#f44336';
        isValid = false;
      }

      if (isValid) {
        // Show loading state
        loginButton.textContent = 'Logging in...';
        loginButton.disabled = true;
        loginButton.style.opacity = '0.7';

        // Simulate login process
        setTimeout(function () {
          // Store login state if remember me is checked
          if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('loginRemembered', 'true');
          }

          // Redirect to homepage or dashboard
          alert('Login successful! Redirecting to homepage...');
          window.location.href = 'Homepage.html';
        }, 1500);
      }
    });
  }

  // Sign up button functionality
  if (signupButton) {
    signupButton.addEventListener('click', function (e) {
      e.preventDefault();
      // You can redirect to a signup page or show a signup modal
      alert('Sign up functionality - redirect to signup page');
      // window.location.href = 'SignUpPage.html';
    });
  }

  // Forgot password functionality
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email && validateEmail(email)) {
        alert(`Password reset link will be sent to: ${email}`);
      } else {
        alert('Please enter a valid email address first');
        emailInput.focus();
      }
    });
  }

  // Load remembered email if exists
  window.addEventListener('load', function () {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const loginRemembered = localStorage.getItem('loginRemembered');

    if (rememberedEmail && loginRemembered === 'true') {
      emailInput.value = rememberedEmail;
      rememberCheckbox.checked = true;
    }
  });

  // Logo click - return to homepage
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function () {
      window.location.href = 'Homepage.html';
    });
  }

  // Add smooth animations
  const container = document.querySelector('.container');
  const descriptionContainer = document.querySelector('.description-container');
  const signupContainer = document.querySelector('.signup-container');

  // Animate elements on load
  setTimeout(function () {
    if (descriptionContainer) {
      descriptionContainer.style.opacity = '1';
      descriptionContainer.style.transform = 'translateY(0)';
    }

    setTimeout(function () {
      if (signupContainer) {
        signupContainer.style.opacity = '1';
        signupContainer.style.transform = 'translateY(0)';
      }

      setTimeout(function () {
        if (container) {
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }
      }, 200);
    }, 200);
  }, 300);

  // Add keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'Enter' &&
      (e.target === emailInput || e.target === passwordInput)
    ) {
      form.dispatchEvent(new Event('submit'));
    }
  });
});

// Utility functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;

  if (type === 'error') {
    notification.style.backgroundColor = '#f44336';
    notification.style.color = 'white';
  } else if (type === 'success') {
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
  } else {
    notification.style.backgroundColor = '#2196F3';
    notification.style.color = 'white';
  }

  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, 3000);
}

// Navigate back to homepage
function goToHomepage() {
  window.location.href = '/SIAFVibes/Homepage/Homepage.html';
}
