const startBtn = document.getElementById('startBtn');
const splash = document.getElementById('splash');
const mainMenu = document.getElementById('main-menu');
const bubblesContainer = document.querySelector('.bubbles');

const molecules = [
  { src: 'assets/images/h2o.png', label: 'H₂O' },
  { src: 'assets/images/o2.png', label: 'O₂' },
  { src: 'assets/images/nacl.png', label: 'NaCl' }
];

// Bắt đầu app
startBtn.addEventListener('click', () => {
  splash.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});

// Tạo bong bóng
setInterval(() => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const mol = molecules[Math.floor(Math.random() * molecules.length)];
  const img = document.createElement('img');
  img.src = mol.src;

  const label = document.createElement('div');
  label.textContent = mol.label;

  bubble.appendChild(img);
  bubble.appendChild(label);
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubblesContainer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 5000);
}, 800);
