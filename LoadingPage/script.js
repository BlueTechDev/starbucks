        document.addEventListener("DOMContentLoaded", function () {
          const progress = document.getElementById("progress");
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
              typewriterText.style.textAlign = "center";
              // When typing is complete, start the loading animation
              startLoadingAnimation();
            }
          }
      
          function startLoadingAnimation() {
            let percentage = 0;
            const intervalDuration = 80; // Duration in milliseconds
            const totalTime = 8000; // Total time in milliseconds (5 seconds)
            const steps = totalTime / intervalDuration;
      
            const interval = setInterval(function () {
              percentage += 100 / steps;
              progress.style.width = percentage + "%";
              progress.textContent = Math.round(percentage) + "%"; // Display the percentage text
      
              if (percentage >= 100) {
                clearInterval(interval);
                // Automatically redirect to the Starbucks app main page
                window.location.href = "/App-page/starbucks-app.html"; // Replace with your actual Starbucks app URL
              }
            }, intervalDuration);
          }
      
          // Start the typewriter effect
          typeText();
        });
