
const timerElement = document.getElementById('timer');
let timeLeft = 30;
setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = '00:' + (timeLeft < 10 ? '0' : '') + timeLeft;
  } else {
    timeLeft = 30;
  }
}, 1000);
