document.addEventListener("DOMContentLoaded", () => {
  fetch("../../componentes/navbar-web.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch(err => console.error("Erro ao carregar o navbar:", err));
});
