var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function () {

    var elementoClicado = event.target
    var linha = elementoClicado.parentNode
    linha.classList.add("fadeOut")

    setTimeout(function () {

        linha.remove();

    }, 500);

})