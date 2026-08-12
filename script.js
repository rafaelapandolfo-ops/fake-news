/* =========================================
   SISTEMA DE AVALIAÇÃO COM CORAÇÃO
   ========================================= */

const botaoCoracao = document.getElementById("botao-coracao");
const coracao = document.getElementById("coracao");
const mensagemAvaliacao = document.getElementById("mensagem-avaliacao");
const contadorCoracoes = document.getElementById("contador-coracoes");

let avaliou = localStorage.getItem("fakecheck-avaliacao") === "true";

let totalAvaliacoes =
    parseInt(localStorage.getItem("fakecheck-coracoes")) || 0;

function atualizarAvaliacao() {
    contadorCoracoes.textContent = totalAvaliacoes;

    if (avaliou) {
        botaoCoracao.classList.add("ativo");
        coracao.textContent = "♥";
        mensagemAvaliacao.textContent = "Obrigado pela sua avaliação! 💜";
    } else {
        botaoCoracao.classList.remove("ativo");
        coracao.textContent = "♡";
        mensagemAvaliacao.textContent = "Clique no coração para avaliar";
    }
}

botaoCoracao.addEventListener("click", () => {

    if (!avaliou) {

        avaliou = true;
        totalAvaliacoes++;

        localStorage.setItem(
            "fakecheck-avaliacao",
            "true"
        );

        localStorage.setItem(
            "fakecheck-coracoes",
            totalAvaliacoes
        );

        atualizarAvaliacao();

    } else {

        avaliou = false;
        totalAvaliacoes = Math.max(0, totalAvaliacoes - 1);

        localStorage.setItem(
            "fakecheck-avaliacao",
            "false"
        );

        localStorage.setItem(
            "fakecheck-coracoes",
            totalAvaliacoes
        );

        atualizarAvaliacao();
    }
});

atualizarAvaliacao();
