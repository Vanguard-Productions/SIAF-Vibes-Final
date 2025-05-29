// Settings.js - Navigation functions for Settings page
document.addEventListener('DOMContentLoaded', function () {
  // Navigate back to Main Dashboard
  function navigateToMainDashboard() {
    window.location.href = 'MainDashboard.html';
  }

  // Navigate to Subscription Plans
  function navigateToSubscriptionPlan() {
    window.location.href = 'SubscriptionPlan.html';
  }

  // Navigate to Payment Method
  function navigateToPaymentMethod() {
    window.location.href = 'PaymentMethod.html';
  }

  // Navigate to Login (logout)
  function navigateToLogin() {
    window.location.href = 'LogInPage.html';
  }

  // Event listeners
  const backButton = document.querySelector('.back-btn');
  if (backButton) {
    backButton.addEventListener('click', navigateToMainDashboard);
  }

  const premiumButton = document.querySelector('.try-premium');
  if (premiumButton) {
    premiumButton.addEventListener('click', navigateToSubscriptionPlan);
  }

  const profileButton = document.querySelector('.icon-btn:not(.back-btn)');
  if (profileButton) {
    profileButton.addEventListener('click', navigateToLogin); // Logout functionality
  }

  // Logo click - back to dashboard
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', navigateToMainDashboard);
  }

  // Subscription section buttons
  const subscriptionButtons = document.querySelectorAll(
    '.card:nth-child(2) .rect-button'
  );
  subscriptionButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      if (index === 0) {
        // Manage subscription
        navigateToSubscriptionPlan();
      } else if (index === 1) {
        // Manage members
        navigateToSubscriptionPlan();
      } else if (index === 2) {
        // Cancel subscription
        alert('Subscription cancelled');
        navigateToLogin();
      }
    });
  });

  // Payment section buttons
  const paymentButtons = document.querySelectorAll(
    '.card:nth-child(3) .rect-button'
  );
  paymentButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      if (index === 0) {
        // Order history
        navigateToPaymentMethod();
      } else if (index === 1) {
        // Saved payment cards
        navigateToPaymentMethod();
      } else if (index === 2) {
        // Redeem
        navigateToPaymentMethod();
      }
    });
  });
});
