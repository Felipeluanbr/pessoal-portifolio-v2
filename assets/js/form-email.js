emailjs.init("Vy4VrIPVLNeCK2ee2");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5aqimj5s",
      "template_mnlkubv",
      this
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Erro ao enviar. Tente novamente.");
    });
  });
});


