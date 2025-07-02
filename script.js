// Task Management
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">❌</button>
  `;
  li.onclick = () => li.classList.toggle("done");
  taskList.appendChild(li);
  input.value = "";
}

// Remove Task
function removeTask(button) {
  button.parentElement.remove();
}

// Pomodoro Timer
let timerInterval;
let timeLeft = 25 * 60;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Pomodoro complete! Take a short break.");
      resetTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

// Initialize display
updateTimerDisplay();
