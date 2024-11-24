function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = hours + ":" + minutes;
    document.getElementById("clock").textContent = timeString;
  }

  setInterval(updateClock, 1000);