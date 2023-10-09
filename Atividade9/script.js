let pessoas = [] 

let i = 0;

let maiorIdade = 0;
let menorIdade = 999;
let pessimo = 0;
let otimo = 0;
let bom = 0;
let regular = 0;
let homens = 0;
let mulheres = 0;

function respostas() {
    if (i < 45) { 
        let pessoa = {} 
        pessoa.idade = parseInt(document.getElementById("idade").value);
        pessoa.sexo = document.getElementById("sexo").value;
        pessoa.opiniao = parseInt(document.getElementById("opiniao").value);
        pessoas.push(pessoa);
        i++

        alert('Resposta registrada (' + i + '/45)'); 
    } else {
        alert('Já foram registradas no total 45 pessoas.');
    }
}

function receberRespostas() {
    i = 0;
    let mediaIdade = 0;

    while (i < pessoas.length) {
        mediaIdade += pessoas[i].idade 

        if (pessoas[i].idade > maiorIdade)
            maiorIdade = pessoas[i].idade;

        if (pessoas[i].idade < menorIdade) 
            menorIdade = pessoas[i].idade;

        if (pessoas[i].opiniao === 4)
            otimo++;

        if (pessoas[i].opiniao === 3)
            bom++;

        if (pessoas[i].opiniao === 2)
            regular++;

        if (pessoas[i].opiniao === 1)
            pessimo++;

        if (pessoas[i].sexo === "M")
            homens++;

        if (pessoas[i].sexo === "F")
            mulheres++;
        i++
    }

    if (i < 45) {
        alert('Ainda não é possivel gerar o resultado.');
    }

    else {
        mediaIdade = (mediaIdade / pessoas.length).toFixed(2);

        otimo = ((otimo / pessoas.length) * 100).toFixed(2);

        bom = ((bom / pessoas.length) * 100).toFixed(2);

        alert("Média da idade das pessoas que responderam ao questionário: " + mediaIdade);
        alert("A idade da pessoa mais velha: " + maiorIdade);
        alert("A idade da pessoa mais nova: " + menorIdade);
        alert("Quantidade de pessoas que responderam péssimo: " + pessimo);
        alert("Porcentagem de pessoas que responderam ótimo: " + otimo + "%");
        alert("Porcentagem de pessoas que responderam bom: " + bom + "%");
        alert("Número de mulheres que responderam a pesquisa: " + mulheres);
        alert("Número de homens que responderam a pesquisa: " + homens);
    }

}

function limpar () {
    document.getElementById("idade").value = ""
    document.getElementById("sexo").value = ""
    document.getElementById("opiniao").value = ""
}