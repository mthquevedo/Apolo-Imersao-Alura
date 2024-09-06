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

const section = document.getElementById("resultados_container");
const inputPesquisa = document.getElementById("input_pesquisa");

let resultados = "";

function renderizarPlanetas(dadosFiltrados) {
    let resultados = "";

    for (let dado of dadosFiltrados) {
        resultados += `
        <div class="resultado_planeta">
             <h1 class="planeta_nome">${dado.nome}</h1>
             <img src="${dado.imagem}" alt="Foto do planeta ${dado.nome}">

             <div class="planeta_infos">
                <div class="infos_linha">
                    <div class="info_cel">
                        <p class="titulo">Velocidade orbital (Média)</p>
                        <p class="info">${dado.velocidade}</p>
                    </div>
                    <div class="info_cel">
                        <p class="titulo">Período de rotação</p>
                        <p class="info">${dado.periodo}</p>
                    </div>
                    <div class="info_cel">
                        <p class="titulo">Massa<br>(Média)</p>
                        <p class="info">${dado.massa}</p>
                    </div>
                </div>
                <div class="infos_linha">
                    <div class="info_cel">
                        <p class="titulo">Temperatura (Média)</p>
                        <p class="info">${dado.temperatura}</p>
                    </div>
                    <div class="info_cel">
                        <p class="titulo">Gravidade superficial</p>
                        <p class="info">${dado.gravidade}</p>
                    </div>
                    <div class="info_cel">
                        <p class="titulo">Número <br>de satélites</p>
                        <p class="info">${dado.satelites}</p>
                    </div>
                </div>

                <a href="${dado.wiki}" target="_blank">Saiba mais</a>
            </div>
        </div>
        `;
    }

    section.innerHTML = resultados;
}

function pesquisar() {
    const termo = inputPesquisa.value.toLowerCase();

    const planetasFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termo)
    );

    renderizarPlanetas(planetasFiltrados);
}

renderizarPlanetas(dados);