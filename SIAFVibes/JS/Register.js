// Register.js - Navigation functions for Register page
document.addEventListener('DOMContentLoaded', function () {
  // Navigate to Login page
  function navigateToLogin() {
    window.location.href = 'LogInPage.html';
  }

  // Navigate to Main Dashboard after successful registration
  function navigateToMainDashboard() {
    window.location.href = 'MainDashboard.html';
  }

  // Event listeners
  const loginButton = document.querySelector('.btnLogin');
  if (loginButton) {
    loginButton.addEventListener('click', navigateToLogin);
  }

  const signupButton = document.querySelector('.btnSignup');
  if (signupButton) {
    signupButton.addEventListener('click', function (e) {
      e.preventDefault();
      navigateToMainDashboard();
    });
  }
});
