document.addEventListener("DOMContentLoaded", function () {
  const breathingText = document.getElementById("breathingText");

  // Toggle breathing effect every 4 seconds
  setInterval(function () {
    breathingText.classList.toggle("breathingText");
  }, 4000);
});
