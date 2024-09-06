const intro = document.getElementById("intro");
const planetas = document.getElementById("planetas");

function ocultaIntro() {

    intro.classList.add("ocultar_animacao");

    setTimeout(() => {
        intro.classList.add("ocultar");
    }, 550);

    exibePlanetas();
}

function exibePlanetas() {
    planetas.classList.add("exibir");
}