function handleLogout() {
  // Add a subtle animation
  const btn = event.target;
  btn.style.transform = 'scale(0.95)';

  setTimeout(() => {
    btn.style.transform = 'scale(1)';
    // In a real app, this would redirect to login or clear session
    alert('Logout functionality would be implemented here');
  }, 150);
}

// Add click interactions for tracks
document.querySelectorAll('.track').forEach((track) => {
  track.addEventListener('click', () => {
    track.style.background = 'rgba(78, 205, 196, 0.15)';
    setTimeout(() => {
      track.style.background = 'rgba(255, 255, 255, 0.05)';
    }, 300);
  });
});
