// First Visit Animation — Yukie for WellA

export function initFirstVisit() {
  const container = document.getElementById('first-visit-container');
  if (!container) return;

  // Hide splash after 1.5s
  setTimeout(() => {
    container.classList.add('hidden');
  }, 1500);

  // Show welcome message after 1.5s
  setTimeout(() => {
    const welcomeEl = document.getElementById('welcome-message');
    if (welcomeEl) {
      welcomeEl.classList.remove('opacity-0', 'translate-y-4');
      welcomeEl.classList.add('opacity-100', 'translate-y-0');
    }
  }, 1500);

  // Show "for you" message after 3s
  setTimeout(() => {
    const forYouEl = document.getElementById('for-you-message');
    if (forYouEl) {
      forYouEl.classList.remove('opacity-0', 'translate-y-4');
      forYouEl.classList.add('opacity-100', 'translate-y-0');
    }
  }, 3000);

  // Play voice note after 3.5s
  setTimeout(() => {
    const audio = new Audio('/voice-notes/cantik-moment-en.mp3');
    audio.play().catch(e => console.log('Audio play blocked:', e));
  }, 3500);
}

// Auto-init on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initFirstVisit);
}