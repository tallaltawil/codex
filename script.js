const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button?.addEventListener("click", () => {
  message.textContent = "Button clicked. JavaScript is working.";
});
