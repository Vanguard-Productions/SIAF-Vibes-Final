// MainDashboard.js - JavaScript for Main Dashboard functionality

// Function to navigate to Premium payment page
function goToPremium() {
  window.location.href = 'SIAFVibes/PaymentMethod/PaymentMedthod.html';
}

// Function to handle back button navigation
function goBack() {
  if (window.history && window.history.length > 1) {
    window.history.back();
  } else {
    // If no history, you could redirect to a home page or show a message
    console.log('No previous page in history');
  }
}

// Function to handle forward button navigation
function goForward() {
  if (window.history) {
    window.history.forward();
  }
}

// Function to handle search functionality
function handleSearch(event) {
  const searchQuery = event.target.value;
  if (event.key === 'Enter' && searchQuery.trim()) {
    console.log('Searching for:', searchQuery);
    // Add your search logic here
    // For now, we'll just log the search query
  }
}

// Function to handle profile button click
function handleProfile() {
  console.log('Profile button clicked');
  // Add your profile logic here
  // You could open a profile modal or navigate to a profile page
}

// Function to add hover effects and click handlers to recently played items
function setupRecentlyPlayed() {
  const recentlyPlayedItems = document.querySelectorAll('.recently-played li');

  recentlyPlayedItems.forEach((item) => {
    item.addEventListener('click', function () {
      const trackName = this.querySelector(
        '.track-info span:first-child'
      ).textContent;
      console.log('Playing:', trackName);
      // Add your play logic here
    });
  });
}

// Function to setup trending items click handlers
function setupTrendingItems() {
  const trendingItems = document.querySelectorAll('.trend');

  trendingItems.forEach((item) => {
    item.addEventListener('click', function () {
      const songName = this.querySelector('p').textContent.split('\n')[0];
      console.log('Playing trending song:', songName);
      // Add your play logic here
    });
  });
}

// Function to setup top hits click handler
function setupTopHits() {
  const topHitsImage = document.querySelector('.top-hits img');

  if (topHitsImage) {
    topHitsImage.addEventListener('click', function () {
      console.log('Playing top hit: Die with the Smile');
      // Add your play logic here
    });
  }
}

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Setup Premium button
  const premiumButton = document.querySelector('.premium');
  if (premiumButton) {
    premiumButton.addEventListener('click', goToPremium);
  }

  // Setup navigation buttons
  const backButton = document.querySelector('.nav-back');
  if (backButton) {
    backButton.addEventListener('click', goBack);
  }

  const forwardButton = document.querySelector('.nav-forward');
  if (forwardButton) {
    forwardButton.addEventListener('click', goForward);
  }

  // Setup search input
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('keypress', handleSearch);
  }

  // Setup profile button
  const profileButton = document.querySelector('.profile');
  if (profileButton) {
    profileButton.addEventListener('click', handleProfile);
  }

  // Setup recently played items
  setupRecentlyPlayed();

  // Setup trending items
  setupTrendingItems();

  // Setup top hits
  setupTopHits();

  // Add keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + P for Premium
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      goToPremium();
    }

    // Alt + Left Arrow for back
    if (e.altKey && e.key === 'ArrowLeft') {
      e.preventDefault();
      goBack();
    }

    // Alt + Right Arrow for forward
    if (e.altKey && e.key === 'ArrowRight') {
      e.preventDefault();
      goForward();
    }
  });

  console.log('MainDashboard.js loaded successfully');
});
