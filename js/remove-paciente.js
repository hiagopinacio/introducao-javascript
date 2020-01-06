var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function () {

    var elementoClicado = event.target
    var linha = elementoClicado.parentNode

    linha.remove();

})