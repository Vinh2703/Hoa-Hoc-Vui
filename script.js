const startBtn = document.getElementById('startBtn');
const splashScreen = document.querySelector('.splash-screen');
const functionScreen = document.querySelector('.function-screen');
const bubblesContainer = document.querySelector('.bubbles');
const icons = document.querySelectorAll('.icon-bar img');

let currentMolecule = {
  src: 'assets/images/h2o.png',
  label: 'H₂O'
};

// Bắt đầu app
startBtn.addEventListener('click', () => {
  splashScreen.classList.add('hidden');
  functionScreen.classList.remove('hidden');
});

// Tạo bong bóng liên tục
setInterval(() => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const img = document.createElement('img');
  img.src = currentMolecule.src;

  const label = document.createElement('div');
  label.textContent = currentMolecule.label;

  bubble.appendChild(img);
  bubble.appendChild(label);
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 5000);
}, 800);

// Tương tác biểu tượng phân tử
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const name = icon.alt;
    switch (name) {
      case 'H2O':
        currentMolecule = {
          src: 'assets/images/h2o.png',
          label: 'H₂O'
        };
        break;
      case 'CO2':
        currentMolecule = {
          src: 'assets/images/o2.png',
          label: 'CO₂'
        };
        break;
      case 'NaCl':
        currentMolecule = {
          src: 'assets/images/nacl.png',
          label: 'NaCl'
        };
        break;
    }
  });
});
