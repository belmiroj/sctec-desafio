document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o recarregamento da página

  const form = e.target;
  const feedback = document.getElementById('feedback');
  const btnSubmit = document.getElementById('btnSubmit');
  
  // Feedback visual de carregamento
  btnSubmit.disabled = true;
  btnSubmit.innerText = "Enviando...";

  // Envio via Fetch API para o Formspree
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      showStatus("Sucesso! O PetVibe recebeu seu pedido. Entraremos em contato em breve!", "green");
      form.reset();
    } else {
      showStatus("Ops! Ocorreu um erro ao enviar. Tente novamente mais tarde.", "red");
    }
  }).catch(error => {
    showStatus("Erro de conexão. Verifique sua internet.", "red");
  }).finally(() => {
    btnSubmit.disabled = false;
    btnSubmit.innerText = "Enviar Pedido";
  });
});

function showStatus(msg, color) {
  const feedback = document.getElementById('feedback');
  feedback.innerText = msg;
  feedback.style.color = color;
  feedback.classList.remove('hidden');

  setTimeout(() => {
    feedback.classList.add('hidden');
  }, 6000);
}