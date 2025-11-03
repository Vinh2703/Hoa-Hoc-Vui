const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Vẽ ống nghiệm và dung dịch
function drawTube(color = "lightblue") {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ccc";
  ctx.fillRect(350, 150, 100, 200);
  ctx.fillStyle = color;
  ctx.fillRect(350, 300, 100, 50);
}

// Vẽ kết tủa trắng
function drawPrecipitate() {
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(370 + i * 20, 340, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

// Vẽ khí thoát ra
function drawGasBubbles() {
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(400, 140 - i * 30, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
  }
}

// Hiển thị tên phản ứng
function showText(text) {
  ctx.font = "20px Poppins";
  ctx.fillStyle = "black";
  ctx.fillText(text, 160, 100);
}

// Gọi thí nghiệm theo số
function triggerReaction(index) {
  switch (index) {
    case 1:
      drawTube("purple");
      showText("① Phản ứng trung hòa: HCl + NaOH → NaCl + H₂O");
      document.getElementById("boilingSound").play();
      break;
    case 2:
      drawTube("lightblue");
      drawPrecipitate();
      showText("② Kết tủa trắng: BaCl₂ + Na₂SO₄ → BaSO₄↓ + NaCl");
      document.getElementById("dropSound").play();
      break;
    case 3:
      drawTube("#87CEFA");
      drawGasBubbles();
      showText("③ Sinh khí H₂: Cu + H₂SO₄ → CuSO₄ + H₂↑");
      document.getElementById("gasSound").play();
      break;
    default:
      drawTube();
      showText("Nhấn phím 1–3 để chọn thí nghiệm");
  }
}

// Lắng nghe phím số
document.addEventListener("keydown", (e) => {
  const num = parseInt(e.key);
  if (!isNaN(num)) {
    triggerReaction(num);
  }
});

// Vẽ ban đầu
drawTube();
showText("Nhấn phím 1–3 để chọn thí nghiệm");
