
function letraMaiuscula() {
    document.getElementById("texto").value =
    document.getElementById("texto").value.toUpperCase();

    document.forms.formulario.maiuscula.checked;
    document.forms.formulario.minuscula.checked = false;
}

function letraMinuscula() {
    document.getElementById("texto").value =
    document.getElementById("texto").value.toLowerCase();

    document.forms.formulario.maiuscula.checked = false;
    document.forms.formulario.minuscula.checked;
}