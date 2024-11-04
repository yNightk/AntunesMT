// script.js

// Alternar tema
function alternarTema() {
  document.body.classList.toggle('tema-escuro');
}

// Pop-up para horário de funcionamento
function verificarHorario() {
  const agora = new Date();
  const horas = agora.getHours();
  const status = horas >= 8 && horas <= 18 ? "Estamos abertos!" : "Estamos fechados!";
  document.getElementById("status-oficina").textContent = status;
}

function fecharPopup() {
  document.getElementById("popup-horario").style.display = "none";
}

window.onload = verificarHorario;
