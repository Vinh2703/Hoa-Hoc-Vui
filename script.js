// Khi nhấn nút BẮT ĐẦU → ẩn splash và hiện màn chính, phát nhạc nền
document.getElementById("startBtn").addEventListener("click", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-screen");
  const music = document.getElementById("bg-music");

  splash.classList.add("hidden");
  main.classList.remove("hidden");

  music.volume = 0.5;
  music.loop = true;
  music.play().catch(() => {
    console.log("Trình duyệt chặn tự động phát nhạc — sẽ bật khi người dùng nhấn nút.");
  });
});
