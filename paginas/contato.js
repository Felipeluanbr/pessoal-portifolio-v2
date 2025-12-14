// Aguarda o carregamento completo do DOM antes de executar o script.
document.addEventListener('DOMContentLoaded', function () {
  // Inicializa o EmailJS com a sua Public Key.
  // Substitua 'SUA_PUBLIC_KEY' pela chave encontrada no painel do EmailJS em Account > API Keys.
  emailjs.init('SUA_PUBLIC_KEY');

  // Seleciona os elementos do formulário, botão e o local para exibir mensagens de status.
  const contactForm = document.getElementById('contact-form');
  const submitButton = contactForm.querySelector('button');
  const statusMessage = document.getElementById('status-message');

  // Adiciona um escutador de eventos para o envio do formulário.
  contactForm.addEventListener('submit', function (event) {
    // Previne o comportamento padrão do formulário (que seria recarregar a página).
    event.preventDefault();

    // Altera o texto do botão e o desabilita para evitar envios múltiplos.
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    // IDs do seu serviço e template do EmailJS.
    // Substitua pelos IDs corretos do seu painel EmailJS.
    const serviceID = 'SEU_SERVICE_ID';
    const templateID = 'SEU_TEMPLATE_ID';

    // Envia o formulário usando EmailJS.
    // O 'this' se refere ao próprio formulário (contactForm), que é o que o sendForm espera.
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        // Callback em caso de SUCESSO.
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar';

        // Exibe mensagem de sucesso.
        statusMessage.textContent = 'Mensagem enviada com sucesso!';
        statusMessage.style.color = '#68F636'; // Verde

        // Limpa o formulário.
        contactForm.reset();

        // Remove a mensagem de status após alguns segundos.
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 5000);
      },
      (err) => {
        // Callback em caso de ERRO.
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar';

        // Exibe mensagem de erro.
        statusMessage.textContent = 'Falha ao enviar. Tente novamente.';
        statusMessage.style.color = 'red'; // Vermelho
        console.error('EmailJS error:', JSON.stringify(err));
      }
    );
  });
});