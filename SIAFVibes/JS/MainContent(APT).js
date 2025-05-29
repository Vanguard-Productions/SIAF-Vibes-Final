// MainContent(APT).js - Navigation functions for APT content
document.addEventListener('DOMContentLoaded', function () {
  // Navigate back to Main Dashboard
  function navigateToMainDashboard() {
    window.location.href = 'MainDashboard.html';
  }

  // Navigate to Die With A Smile content
  function navigateToDieWithASmile() {
    window.location.href = 'MainContent(DieWithASmile).html';
  }

  // Navigate to Subscription Plans
  function navigateToSubscriptionPlan() {
    window.location.href = 'SubscriptionPlan.html';
  }

  // Navigate to Settings
  function navigateToSettings() {
    window.location.href = 'Settings.html';
  }

  // Event listeners
  const backButton = document.querySelector('.nav-back');
  if (backButton) {
    backButton.addEventListener('click', navigateToMainDashboard);
  }

  const premiumButton = document.querySelector('.premium');
  if (premiumButton) {
    premiumButton.addEventListener('click', navigateToSubscriptionPlan);
  }

  const profileButton = document.querySelector('.profile');
  if (profileButton) {
    profileButton.addEventListener('click', navigateToSettings);
  }

  // Recently played items - navigate to different content
  const recentlyPlayedItems = document.querySelectorAll('.recently-played li');
  recentlyPlayedItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      if (index === 0) {
        // YOASOBI RADIO
        navigateToMainDashboard();
      } else if (index === 1) {
        // Weeknd
        navigateToDieWithASmile(); // Navigate to Die With A Smile as alternative
      } else {
        navigateToMainDashboard();
      }
    });
  });

  // Logo click - back to dashboard
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', navigateToMainDashboard);
  }
});
