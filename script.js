// Biến DOM
const startBtn = document.getElementById('startBtn');
const splashScreen = document.querySelector('.splash-screen');
const labScene = document.querySelector('.lab-scene');
const bubblesContainer = document.querySelector('.bubbles');
const icons = document.querySelectorAll('.icon-bar img');

// Âm thanh
const gasSound = new Audio('assets/audio/boiling.mp3.mp3');
const correctSound = new Audio('assets/audio/correct.mp3.mp3');
const wrongSound = new Audio('assets/audio/wrong.mp3.mp3');

// Mảng ảnh phân tử mặc định
let molecules = [
  'assets/images/h2o.png',
  'assets/images/o2.png',
  'assets/images/nacl.png'
];

// Bắt đầu app
startBtn.addEventListener('click', () => {
  splashScreen.style.display = 'none';
  labScene.classList.remove('hidden');
  gasSound.play();
  generateBubbles();
});

// Tạo bong bóng liên tục
function generateBubbles() {
  setInterval(() => {
    const bubble = document.createElement('img');
    bubble.src = molecules[Math.floor(Math.random() * molecules.length)];
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubblesContainer.appendChild(bubble);

    // Xóa bong bóng sau khi animation kết thúc
    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }, 800);
}

// Gán sự kiện cho biểu tượng chức năng
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const name = icon.alt;
    switch (name) {
      case 'H2O':
        molecules = ['assets/images/h2o.png'];
        correctSound.play();
        break;
      case 'CO2':
        molecules = ['assets/images/o2.png'];
        correctSound.play();
        break;
      case 'Biểu tượng tổng hợp':
        molecules = ['assets/images/nacl.png'];
        correctSound.play();
        break;
      default:
        wrongSound.play();
    }
  });
});
function generateBubbles() {
  setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const img = document.createElement('img');
    img.src = molecules[Math.floor(Math.random() * molecules.length)];
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'contain';

    const label = document.createElement('span');
    label.className = 'formula';
    label.textContent = getFormulaFromImage(img.src);

    bubble.appendChild(img);
    bubble.appendChild(label);
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }, 800);
}

function getFormulaFromImage(src) {
  if (src.includes('h2o')) return 'H₂O';
  if (src.includes('o2')) return 'O₂';
  if (src.includes('nacl')) return 'NaCl';
  return '';
}
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const name = icon.alt;
    switch (name) {
      case 'H2O':
        molecules = ['assets/images/h2o.png'];
        correctSound.play();
        showReaction('H₂O');
        break;
      case 'CO2':
        molecules = ['assets/images/o2.png'];
        correctSound.play();
        showReaction('O₂');
        break;
      case 'Biểu tượng tổng hợp':
        molecules = ['assets/images/nacl.png'];
        correctSound.play();
        showReaction('NaCl');
        break;
      default:
        wrongSound.play();
    }
  });
});
function showReaction(formula) {
  const beaker = document.querySelector('.beaker');
  beaker.classList.add('react');

  const label = document.createElement('div');
  label.className = 'reaction-label';
  label.textContent = `Phản ứng với ${formula}`;
  beaker.parentElement.appendChild(label);

  setTimeout(() => {
    beaker.classList.remove('react');
    label.remove();
  }, 3000);
}
