const startBtn = document.getElementById('startBtn');
const splash = document.getElementById('splash');
const mainMenu = document.getElementById('main-menu');
const bubblesContainer = document.querySelector('.bubbles');

// Bắt đầu app
startBtn.addEventListener('click', () => {
  splash.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});

// Tạo bong bóng
setInterval(() => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubblesContainer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 5000);
}, 800);
