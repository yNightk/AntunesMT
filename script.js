function alternarTema() {
  document.body.classList.toggle('tema-escuro');
}

function fecharPopup() {
  document.getElementById('popup-horario').style.display = 'none';
}

// Exibir o pop-up automaticamente ao carregar a página
window.onload = function() {
  document.getElementById('popup-horario').style.display = 'block';
};
