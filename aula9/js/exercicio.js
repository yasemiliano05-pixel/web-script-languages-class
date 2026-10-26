const botao = document.getElementById("btnTexto");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", function() {
    titulo.textContent = "Olá, mundo!";
});

