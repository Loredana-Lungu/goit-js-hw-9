function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  let intervalId;
  
  document.querySelector('[data-start]').addEventListener('click', function() {
    this.disabled = true; // Disable the Start button
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  document.querySelector('[data-stop]').addEventListener('click', function() {
    clearInterval(intervalId);
    document.querySelector('[data-start]').disabled = false; // Enable the Start button
  });
  
