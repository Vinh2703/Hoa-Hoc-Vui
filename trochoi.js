const questions = [
  {
    question: "Tại sao nước vôi trong bị vẩn đục khi thổi khí CO₂ vào?",
    options: [
      "Do CO₂ làm dung dịch đổi màu",
      "Do CO₂ phản ứng tạo kết tủa CaCO₃",
      "Do CO₂ làm tăng nhiệt độ dung dịch"
    ],
    answer: 1
  },
  {
    question: "Chất nào sau đây làm quỳ tím chuyển sang màu đỏ?",
    options: ["NaOH", "HCl", "Ba(OH)₂"],
    answer: 1
  },
  {
    question: "Phản ứng nào sau đây tạo ra khí H₂?",
    options: [
      "BaCl₂ + Na₂SO₄",
      "Zn + HCl",
      "NaOH + HCl"
    ],
    answer: 1
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = `Câu ${current + 1}: ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");
  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");

  if (selected === q.answer) {
    feedback.textContent = "✅ Đúng rồi!";
    correctSound.play();
    score++;
  } else {
    feedback.textContent = "❌ Sai rồi, thử lại nhé!";
    wrongSound.play();
  }

  document.getElementById("score").textContent = `Điểm: ${score}`;
  current++;

  if (current < questions.length) {
    setTimeout(() => {
      feedback.textContent = "";
      loadQuestion();
    }, 1500);
  } else {
    setTimeout(() => {
      document.getElementById("quiz-container").innerHTML =
        `<h2>🎉 Bạn đã hoàn thành!</h2><p>Tổng điểm: ${score}/${questions.length}</p>`;
    }, 2000);
  }
}

loadQuestion();
