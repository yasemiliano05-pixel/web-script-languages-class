const titulo = document.getElementById('title')
const mensagem = document.querySelector('.mensagem');


console.log(titulo);
//console.log(mensagem);


titulo.textContent = "Novo titulo"; // insere somente texto como conteúdo
titulo.innerHTML = "<u>Novo titulo</u>"; // insere elementos html como conteúdo
//mensagem.innerText = "<u>Hello world!</u>"; // insere somente TEXTO como conteúdo
mensagem.innerHTML = "<u>Hello world!</u>"; 

/*mensagem.classList.add("sucesso"); // add uma classe
mensagem.classList.remove("sucesso"); // remove uma classe
mensagem.classList.add("erro"); // remove uma classe*/

function teste() {
    mensagem.classList.add("sucesso");
}

teste()
