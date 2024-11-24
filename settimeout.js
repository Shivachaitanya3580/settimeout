let countdownValue = 10;
    const countdownElement = document.getElementById("countdown");

    const countdownInterval = setInterval(() => {
      countdownElement.textContent = countdownValue;
      countdownValue--;

      if (countdownValue < 0) {
        clearInterval(countdownInterval); 
        countdownElement.textContent = "Time's up!"; 
      }
    }, 1000);