document.addEventListener("DOMContentLoaded", () => {
  fetch("../../componentes/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(err => console.error("Erro ao carregar o navbar:", err));
});
