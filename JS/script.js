document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("successMessage").textContent =
    "✔ Message envoyé avec succès !";

  this.reset();

  //   Message dissapearing after 1 seconds
  setTimeout(() => {
    document.getElementById("successMessage").textContent = "";
  }, 1000);
});
