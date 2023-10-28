function validar() {
    var nome = document.forms.formulario.nome.value;
    var email = document.forms.formulario.email.value;
    var comentario = document.forms.formulario.comentario.value;
    var pesquisa = document.querySelector('input[name="rdb"]:checked');

    if (nome.length < 10) {
        alert("Nome não pode ter menos que 10 caracteres.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Email inválido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (!pesquisa) {
        alert("Pesquisa é obrigatória.");
        return false;
    }

    if (pesquisa.id === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}

function limpar() {
    document.forms.formulario.reset();
    var radioButtons = document.querySelectorAll('input[name="rdb"]');
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });
}