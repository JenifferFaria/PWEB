const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo");

onload = () => {
    imagem.src = "img/janela_Fechada.jpg";
    titulo.innerHTML = "Janela Fechada";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janela_Aberta.jpg";
    titulo.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janela_Fechada.jpg";
    titulo.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janela_Quebrada.jpg";
    titulo.innerHTML = "Janela Quebrada";
});