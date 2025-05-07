// Play music on load
window.onload = function() {
  const music = document.getElementById('bg-music');
  music.volume = 0.4;
};

// Confetti
document.getElementById('confetti-btn').addEventListener('click', function() {
  for (let i = 0; i < 150; i++) {
    createConfetti();
  }
  // Optional: add a romantic wish after confetti
  setTimeout(() => {
    alert('Semoga di hari spesial ini, kamu penuh cinta dan kebahagiaan sayang! 💖');
  }, 2000);
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.position = 'fixed';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = '-20px';
  confetti.style.width = Math.random() * 8 + 8 + 'px';
  confetti.style.height = Math.random() * 8 + 8 + 'px';
  confetti.style.backgroundColor = randomColor();
  confetti.style.opacity = 0.8;
  confetti.style.borderRadius = '50%';
  confetti.style.zIndex = 9999;
  confetti.style.transition = 'transform 2.5s cubic-bezier(.23,1.02,.68,.01), opacity 2.5s';

  document.getElementById('confetti').appendChild(confetti);

  setTimeout(() => {
    confetti.style.transform = 
      `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.6 + 0.7})`;
    confetti.style.opacity = 0;
  }, 50);

  setTimeout(() => {
    confetti.remove();
  }, 2600);
}

function randomColor() {
  const colors = ['#fbb040', '#d72660', '#3fc1c9', '#f7cac9', '#ffecd2', '#e17055', '#ffb6b9'];
  return colors[Math.floor(Math.random() * colors.length)];
}