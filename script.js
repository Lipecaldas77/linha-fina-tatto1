const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const estilo = document.getElementById("estilo");
const tamanho = document.getElementById("tamanho");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (nome.value.length < 3) {
    alert("Nome deve ter pelo menos 3 letras.");
    return;
  }
  
  if (!email.value.includes("@")) {
    alert("Email inválido.");
    return;
  }
  
  if (telefone.value.length < 8) {
    alert("Telefone inválido.");
    return;
  }
  
  if (estilo.value === "") {
    alert("Selecione um estilo.");
    return;
  }
  
  if (tamanho.value === "") {
    alert("Selecione o tamanho.");
    return;
  }
  
  if (mensagem.value.length < 10) {
    alert("Descrição deve ter pelo menos 10 caracteres.");
    return;
  }
  
  // Simular envio
  alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
  form.reset();
});

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("icon-modo");
  body.classList.toggle("dark-mode");
  icon.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  
  // Salvar preferência
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

// Carregar preferência salva
window.addEventListener("load", function() {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("icon-modo").textContent = "☀️";
  }
});

// Smooth scroll para links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});