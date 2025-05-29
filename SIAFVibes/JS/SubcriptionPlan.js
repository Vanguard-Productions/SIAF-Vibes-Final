// SubscriptionPlan.js - Navigation functions for Subscription Plans
document.addEventListener('DOMContentLoaded', function () {
  // Navigate to Payment Method
  function navigateToPaymentMethod() {
    window.location.href = 'PaymentMethod.html';
  }

  // Navigate back to Main Dashboard
  function navigateToMainDashboard() {
    window.location.href = 'MainDashboard.html';
  }

  // Navigate to Settings
  function navigateToSettings() {
    window.location.href = 'Settings.html';
  }

  // Event listeners
  const backButton = document.querySelector('.icon-btn');
  if (backButton) {
    backButton.addEventListener('click', navigateToMainDashboard);
  }

  const profileButton = document.querySelectorAll('.icon-btn')[1]; // Second icon button is profile
  if (profileButton) {
    profileButton.addEventListener('click', navigateToSettings);
  }

  // Subscribe buttons - navigate to payment method
  const subscribeButtons = document.querySelectorAll('.subscribe-btn');
  subscribeButtons.forEach((button) => {
    button.addEventListener('click', navigateToPaymentMethod);
  });

  // Logo click - back to dashboard
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', navigateToMainDashboard);
  }
});
