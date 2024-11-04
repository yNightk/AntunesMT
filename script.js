// script.js

// Alternar tema
function alternarTema() {
  document.body.classList.toggle('tema-escuro');
}

// Pop-up para horário de funcionamento
function verificarHorario() {
  const agora = new Date();
  const horas = agora.getHours();
  const status = horas >= 8:30 && horas <= 19:30 ? "Estamos abertos!" : "Estamos fechados!";
  document.getElementById("status-oficina").textContent = status;
}

function fecharPopup() {
  document.getElementById("popup-horario").style.display = "none";
}

window.onload = verificarHorario;

// script.js - Adicione o código para a animação do carrossel
let index = 0;
function showSlides() {
  const slides = document.querySelectorAll('#carrossel .slides img');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlides, 3000);
showSlides();
