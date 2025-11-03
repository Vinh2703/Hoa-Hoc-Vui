<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <title>Hỏi đáp Hóa học với AI</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="hoidap-container">
    <h2>🧪 Hỏi đáp Hóa học Vui</h2>
    <input type="text" id="questionInput" placeholder="Nhập câu hỏi hóa học..." />
    <button onclick="sendQuestion()">Gửi</button>
    <div id="answerBox"></div>
  </div>

  <script src="hoidap.js"></script>
</body>
</html>
async function sendQuestion() {
  const question = document.getElementById("questionInput").value;
  const answerBox = document.getElementById("answerBox");

  if (!question.trim()) {
    answerBox.innerHTML = "<p>❗ Vui lòng nhập câu hỏi.</p>";
    return;
  }

  // Kiểm tra câu hỏi mẫu trước
  const answers = {
    "nước vôi trong bị vẩn đục": "Do khí CO₂ phản ứng với Ca(OH)₂ tạo kết tủa trắng CaCO₃.",
    "quỳ tím chuyển màu": "Quỳ tím chuyển đỏ khi gặp axit, chuyển xanh khi gặp bazơ.",
    "tạo khí H₂": "Kim loại như Zn phản ứng với axit mạnh như HCl sẽ tạo khí H₂."
  };

  for (let key in answers) {
    if (question.toLowerCase().includes(key)) {
      answerBox.innerHTML = `<p>💡 ${answers[key]}</p>`;
      speak(answers[key]);
      return;
    }
  }

  // Nếu không khớp câu mẫu → gọi API
  answerBox.innerHTML = "<p>⏳ Đang gửi câu hỏi đến AI...</p>";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY" // ← Thay bằng API key thật của bạn
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;

    answerBox.innerHTML = `<p>💡 ${answer}</p>`;
    speak(answer);
  } catch (error) {
    answerBox.innerHTML = "<p>❌ Có lỗi khi gọi API.</p>";
    console.error(error);
  }
}

// Giọng nói bằng speechSynthesis
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  speechSynthesis.speak(utterance);
}
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
