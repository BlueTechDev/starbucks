document.addEventListener("DOMContentLoaded", function () {
  const progress = document.getElementById("progress");
  const startAppBtn = document.getElementById("start-app-btn");
  const typewriterText = document.getElementById("typewriter-text");

  const textToType = "Welcome to the Starbucks Randomizer App";
  let charIndex = 0;

  function typeText() {
    if (charIndex < textToType.length) {
      typewriterText.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100); // Adjust typing speed by changing the timeout duration
    } else {
      typewriterText.style.fontWeight = "bold"; // Optionally, make the text bold
      // When typing is complete, start the loading animation
      startLoadingAnimation();
    }
  }

  function startLoadingAnimation() {
    let percentage = 0;
    const intervalDuration = 70; // Duration in milliseconds
    const totalTime = 7000; // Total time in milliseconds (5 seconds)
    const steps = totalTime / intervalDuration;

    const interval = setInterval(function () {
      percentage += 100 / steps;
      progress.style.width = percentage + "%";
      progress.textContent = Math.round(percentage) + "%"; // Display the percentage text

      if (percentage >= 100) {
        clearInterval(interval);
        startAppBtn.classList.remove("hidden");
      }
    }, intervalDuration);
  }

  // Start the typewriter effect
  typeText();

  // Button click event to start the Starbucks app
  startAppBtn.addEventListener("click", function () {
    // Redirect to the Starbucks app main page or load the main content here
    window.location.href = "/App-page/starbucks-app.html"; // Replace with your actual Starbucks app URL
  });
});
