//document.getElementById
//document.getElementByClassName
//document.querySelector
//document.querySelectorAll
// document.querySelectorAll();

/* Manipulação do DOM
.remove()
.lastElementChild
.firstElementChild
.children
.textContent
.innerText
.innerHTML
.style
 * 
 */

//Alterar os estilos de un elemento de forma dinamica
const botao = document.querySelector(".botao");

function botaoFoiClicado(evento) {
    evento.preventDefault();
    console.log(botao);
    console.log(evento.target.className);
    document.getElementById("meu-formulario").style.background = "blue";
    document.querySelector("body").style.background = "green";
    document.getElementsByClassName("items")[0].lastElementChild.innerHTML = "<h4>Alterado</h4>";
}


botao.addEventListener("click", botaoFoiClicado);


