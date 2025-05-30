let studySeconds = 0;
let blurSeconds = 0;
let distractionCount = 0;
let isStudying = false;
let studyInterval;
let blurInterval;
let chart;

const studyTimerDisplay = document.getElementById("studyTimer");
const distractionCountEl = document.getElementById("distractionCount");
const blurTimeEl = document.getElementById("blurTime");
const reminderPopup = document.getElementById("reminderPopup");
const alarmSound = document.getElementById("alarmSound");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const muteToggleBtn = document.getElementById('muteToggleBtn');

let isMuted = false;

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function updateTimers() {
  if (isStudying) {
    studySeconds++;
    studyTimerDisplay.textContent = formatTime(studySeconds);
    updateChart();
  }
}

function updateBlur() {
  blurSeconds++;
  blurTimeEl.textContent = formatTime(blurSeconds);
}

function startSession() {
  if (!isStudying) {
    isStudying = true;
    studyInterval = setInterval(updateTimers, 1000);
    pauseBtn.textContent = "⏸ Pause"; // reset pause button text
  }
}

function togglePauseResume() {
  if (isStudying) {
    // Pause
    isStudying = false;
    clearInterval(studyInterval);
    pauseBtn.textContent = "▶ Resume";
  } else {
    // Resume
    isStudying = true;
    studyInterval = setInterval(updateTimers, 1000);
    pauseBtn.textContent = "⏸ Pause";
  }
}

function resetSession() {
  isStudying = false;
  clearInterval(studyInterval);
  clearInterval(blurInterval);
  studySeconds = 0;
  blurSeconds = 0;
  distractionCount = 0;
  studyTimerDisplay.textContent = "00:00:00";
  blurTimeEl.textContent = "00:00";
  distractionCountEl.textContent = "0";
  pauseBtn.textContent = "⏸ Pause";  // reset pause button text
  updateChart();
  reminderPopup.classList.add("hidden");
}

startBtn.addEventListener("click", startSession);
pauseBtn.addEventListener("click", togglePauseResume);
resetBtn.addEventListener("click", resetSession);
document.getElementById("closePopup").addEventListener("click", () => {
  reminderPopup.classList.add("hidden");
});

// Handle tab switch events
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    blurInterval = setInterval(updateBlur, 1000);
    distractionCount++;
    distractionCountEl.textContent = distractionCount;

    if (distractionCount >= 3) {
      reminderPopup.classList.remove("hidden");
      if (!isMuted) {
        alarmSound.play();
      }
    }
  } else {
    clearInterval(blurInterval);
  }
});

// Chart.js focus tracking
function updateChart() {
  if (chart) {
    chart.data.datasets[0].data = [studySeconds, blurSeconds];
    chart.update();
  }
}

function setupChart() {
  const ctx = document.getElementById("focusChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Focus Time", "Distraction Time"],
      datasets: [{
        label: "Focus vs Distraction",
        data: [0, 0],
        backgroundColor: ["#4caf50", "#ff9800"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Mute/unmute toggle
muteToggleBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  alarmSound.muted = isMuted;
  muteToggleBtn.textContent = isMuted ? '🔈 Unmute' : '🔇 Mute';
});

window.onload = setupChart;
