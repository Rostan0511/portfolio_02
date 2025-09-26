const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

(function startNavClock() {
  const el = document.getElementById('nav-clock');
  if (!el) return;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;
    hours = hours % 12 || 12; // convert to 12-hour
    el.textContent = `[ ${pad(hours)}:${pad(minutes)} ${isPM ? 'PM' : 'AM'} ]`;
  }

  updateClock(); 
  setInterval(updateClock, 1000);
})();
