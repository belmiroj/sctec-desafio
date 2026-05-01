document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback');

    // Validação básica
    if(nome.length < 3) {
        showStatus("Nome muito curto!", "red");
        return;
    }

    // Simulação de envio
    showStatus(`Olá ${nome}, recebemos seu pedido! Entraremos em contato no e-mail: ${email}`, "green");
    
    this.reset();
});

function showStatus(msg, color) {
    const feedback = document.getElementById('feedback');
    feedback.innerText = msg;
    feedback.style.color = color;
    feedback.style.marginTop = "20px";
    feedback.style.fontWeight = "bold";
    feedback.classList.remove('hidden');

    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 4000);
}