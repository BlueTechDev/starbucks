document.addEventListener("DOMContentLoaded", function () {
  const progress = document.getElementById("progress");
  const startAppBtn = document.getElementById("start-app-btn");

  // Simulate loading with a progress bar
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

  // Button click event to start the Starbucks app
  startAppBtn.addEventListener("click", function () {
    // Redirect to the Starbucks app main page or load the main content here
    window.location.href = "/index.html"; // Replace with your actual Starbucks app URL
  });
});

  