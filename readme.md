# 🐾 PetVibe - Landing Page Profissional

O **PetVibe** é uma landing page moderna, responsiva e funcional desenvolvida para um Pet Shop fictício. Este projeto foi estruturado para consolidar conhecimentos fundamentais de desenvolvimento web front-end, focando em semântica, design moderno e integração com serviços externos.

> **Nota do Projeto:** Esta atividade faz parte do programa **Carreira Tech 2026 - Ciclo Onda 2**, servindo como um marco técnico para demonstrar o domínio em tecnologias web fundamentais.

---

## 🚀 Tecnologias Utilizadas

Para garantir performance e um código limpo, o projeto utiliza exclusivamente tecnologias nativas:

* **HTML5:** Estruturação semântica para melhor SEO e acessibilidade.
* **CSS3:** Layouts avançados utilizando **Flexbox** e **CSS Grid**, além de variáveis nativas para fácil manutenção.
* **JavaScript (ES6):** Manipulação do DOM para validação de formulários e interatividade assíncrona.
* **Google Fonts:** Utilização da fonte 'Poppins' para uma estética moderna e acolhedora.

---

## 📬 Integração de Formulário Real (Formspree)

Para este projeto, optei pela integração com o serviço **Formspree** para gerenciar o envio de mensagens. Esta decisão técnica demonstra:

*   **Simulação de Back-end:** Recebimento real de leads diretamente no e-mail (`belmiro1991@gmail.com`) sem a necessidade de um servidor próprio.
*   **Comunicação Assíncrona (AJAX):** O envio é processado via `Fetch API`, permitindo que o usuário receba feedbacks visuais (carregamento, sucesso ou erro) sem recarregar a página.
*   **Tratamento de Estados:** Implementação de lógica em JavaScript para desabilitar botões durante o envio, prevenindo múltiplos disparos.

---

## 🛠️ Funcionalidades e Diferenciais

* **Design Responsivo:** Layout totalmente adaptável para dispositivos móveis, tablets e desktops.
* **Scroll Inteligente:** Navegação suave via âncoras com ajuste de `scroll-padding-top` para compensar o header fixo.
* **Interface Moderna:** Uso de técnicas de sobreposição de elementos (`position: relative/absolute`) e efeitos de hover nos cards de serviços.
* **Consistência Visual:** Aplicação de `aspect-ratio` nas imagens dos serviços para manter o alinhamento perfeito do grid.
* **Validação de Dados:** Verificação de campos obrigatórios e formato de e-mail antes do disparo da requisição.

---

## 📂 Estrutura do Projeto
```text
├── index.html    # Estrutura principal da página (Semântica)
├── style.css     # Estilização completa, variáveis e responsividade
├── script.js     # Lógica de validação e integração com API
└── README.md     # Documentação do projeto