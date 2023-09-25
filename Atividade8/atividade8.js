function jogar(usuarioEscolha) {

    const escolhasValidas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhasValidas[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (!escolhasValidas.includes(usuarioEscolha)) {

        resultado = "Escolha inválida. Por favor, escolha pedra, papel ou tesoura.";

    } else if (usuarioEscolha === escolhaComputador) {

        resultado = "Empate! Ambos escolheram " + usuarioEscolha;

    } else if (

        (usuarioEscolha === "pedra" && escolhaComputador === "tesoura") ||

        (usuarioEscolha === "tesoura" && escolhaComputador === "papel") ||

        (usuarioEscolha === "papel" && escolhaComputador === "pedra")

    ) {

        resultado = "Você venceu! " + usuarioEscolha + " vence " + escolhaComputador;

    } else {

        resultado = "O computador venceu! " + escolhaComputador + " vence " + usuarioEscolha;

    }

    document.getElementById("resultado").innerText = resultado;

}