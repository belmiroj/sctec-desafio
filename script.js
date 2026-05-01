document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const feedback = document.getElementById('feedback');
  const btnSubmit = document.getElementById('btnSubmit');
  const formData = new FormData(this);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  btnSubmit.disabled = true;
  btnSubmit.innerText = "Enviando...";

  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async (response) => {
      if (response.status == 200) {
          showStatus("Sucesso! E-mail enviado para Belmiro.", "green");
          this.reset();
      } else {
          showStatus("Erro ao enviar. Verifique os dados.", "red");
      }
  })
  .catch(error => {
      showStatus("Erro de conexão.", "red");
  })
  .finally(() => {
      btnSubmit.disabled = false;
      btnSubmit.innerText = "Enviar Pedido";
  });
});

function showStatus(msg, color) {
  const feedback = document.getElementById('feedback');
  feedback.innerText = msg;
  feedback.style.color = color;
  feedback.classList.remove('hidden');
  setTimeout(() => feedback.classList.add('hidden'), 5000);
}