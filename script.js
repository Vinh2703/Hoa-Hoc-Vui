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
