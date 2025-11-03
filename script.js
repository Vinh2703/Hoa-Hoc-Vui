const startBtn = document.getElementById('startBtn');
const splash = document.querySelector('.splash-screen');
const labScene = document.querySelector('.lab-scene');
const bubblesContainer = document.querySelector('.bubbles');

const molecules = [
  'assets/images/h2o.png',
  'assets/images/o2.png',
  'assets/images/nacl.png'
];

const sounds = {
  correct: 'assets/audio/correct.mp3.mp3',
  wrong: 'assets/audio/wrong.mp3.mp3',
  boiling: 'assets/audio/boiling.mp3.mp3',
  drop: 'assets/audio/drop.mp3.mp3',
  gas: 'assets/audio/gas.mp3.mp3'
};

startBtn.addEventListener('click', () => {
  splash.classList.add('hidden');
  labScene.classList.remove('hidden');
  startBubbleEffect();
  playSound('boiling');
});

function startBubbleEffect() {
  setInterval(() => {
    const bubble = document.createElement('img');
    bubble.src = molecules[Math.floor(Math.random() * molecules.length)];
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 80 + 10}%`;
    bubblesContainer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 5000);
  }, 1000);
}

function playSound(name) {
  const audio = new Audio(sounds[name]);
  audio.onerror = () => console.warn(`Không thể phát âm thanh: ${name}`);
  audio.play();
}
