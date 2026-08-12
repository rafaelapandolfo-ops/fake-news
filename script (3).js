/* =========================================================
   FAKECHECK
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =========================================================
   JOGO
   ========================================================= */

const questions = [

    {
        title: "Nova tecnologia promete acabar com todas as fake news da internet",

        text: "Um novo sistema revolucionário teria sido criado e seria capaz de identificar qualquer informação falsa publicada na internet.",

        source: "Fonte: Portal Notícias Agora",

        status: "Fonte não verificada",

        answer: "fake",

        explanation: "A afirmação é absoluta e não apresenta evidências ou fontes confiáveis que comprovem a existência de uma tecnologia capaz de detectar qualquer fake news."
    },

    {
        title: "Pesquisa mostra aumento no uso de redes sociais entre jovens",

        text: "Um levantamento realizado por uma instituição de pesquisa analisou hábitos digitais e apontou mudanças no comportamento de usuários mais jovens.",

        source: "Fonte: Instituto de Pesquisa Digital",

        status: "Fonte identificada",

        answer: "real",

        explanation: "A notícia apresenta uma instituição responsável pela pesquisa e descreve um levantamento. Mesmo assim, é importante procurar o estudo original antes de compartilhar."
    },

    {
        title: "URGENTE! Cientistas descobriram que beber água elimina qualquer vírus em segundos!",

        text: "Mensagem compartilhada nas redes afirma que pesquisadores descobriram uma maneira simples de eliminar qualquer vírus do organismo apenas bebendo grandes quantidades de água.",

        source: "Fonte: Mensagem compartilhada",

        status: "Sem fonte científica",

        answer: "fake",

        explanation: "A notícia faz uma afirmação extraordinária sem apresentar estudo científico ou instituição responsável. Além disso, utiliza linguagem alarmista."
    },

    {
        title: "Biblioteca pública anuncia novo programa gratuito de leitura",

        text: "Uma biblioteca municipal divulgou um novo programa que oferece atividades de leitura gratuitas para estudantes durante o período de férias.",

        source: "Fonte: Biblioteca Municipal",

        status: "Fonte oficial",

        answer: "real",

        explanation: "A informação está associada diretamente à instituição responsável pelo programa. Consultar o canal oficial da biblioteca é uma boa maneira de confirmar a informação."
    },

    {
        title: "Você não vai acreditar! Compartilhe agora para ganhar um prêmio secreto!",

        text: "Uma publicação promete um prêmio para quem compartilhar a mensagem com dez pessoas. Não há informações sobre a empresa, regulamento ou forma oficial de participação.",

        source: "Fonte: publicação viral",

        status: "Fonte desconhecida",

        answer: "fake",

        explanation: "A ausência de fonte, regras oficiais e informações verificáveis são sinais de alerta. Mensagens que pressionam o usuário a compartilhar também merecem atenção."
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


/* =========================================================
   ELEMENTOS
   ========================================================= */

const scoreElement = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const progressPercent = document.getElementById("progressPercent");
const progress = document.getElementById("progress");

const newsTitle = document.getElementById("newsTitle");
const newsText = document.getElementById("newsText");
const newsSource = document.getElementById("newsSource");
const sourceStatus = document.getElementById("sourceStatus");

const answerButtons = document.querySelectorAll(".answer-button");

const feedback = document.getElementById("gameFeedback");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const nextButton = document.getElementById("nextButton");

const gameContainer = document.getElementById("gameContainer");
const resultContainer = document.getElementById("resultContainer");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const restartButton = document.getElementById("restartButton");


/* =========================================================
   CARREGAR QUESTÃO
   ========================================================= */

function loadQuestion() {

    const question = questions[currentQuestion];

    answered = false;

    newsTitle.textContent = question.title;
    newsText.textContent = question.text;

    newsSource.textContent = question.source;
    sourceStatus.textContent = question.status;

    questionNumber.textContent = currentQuestion + 1;

    const percentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width = `${percentage}%`;

    progressPercent.textContent = `${percentage}%`;

    feedback.classList.remove("show", "wrong");

    nextButton.classList.remove("show");

    answerButtons.forEach(button => {

        button.disabled = false;

        button.style.opacity = "1";

        button.style.borderColor = "";

    });
}


/* =========================================================
   RESPONDER
   ========================================================= */

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (answered) {
            return;
        }

        answered = true;

        const selectedAnswer = button.dataset.answer;

        const correctAnswer =
            questions[currentQuestion].answer;

        const isCorrect =
            selectedAnswer === correctAnswer;


        /* DESABILITA OS BOTÕES */

        answerButtons.forEach(btn => {
            btn.disabled = true;

            if (btn !== button) {
                btn.style.opacity = "0.45";
            }
        });


        /* RESPOSTA CORRETA */

        if (isCorrect) {

            score += 100;

            scoreElement.textContent = score;

            feedback.classList.remove("wrong");

            feedbackIcon.textContent = "✓";

            feedbackTitle.textContent = "Resposta correta!";

            feedbackText.textContent =
                questions[currentQuestion].explanation;

        }

        /* RESPOSTA ERRADA */

        else {

            feedback.classList.add("wrong");

            feedbackIcon.textContent = "✕";

            feedbackTitle.textContent = "Não dessa vez!";

            feedbackText.textContent =
                questions[currentQuestion].explanation;
        }


        feedback.classList.add("show");

        nextButton.classList.add("show");

    });

});


/* =========================================================
   PRÓXIMA QUESTÃO
   ========================================================= */

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishGame();

        return;
    }

    loadQuestion();

});


/* =========================================================
   FINALIZAR JOGO
   ========================================================= */

function finishGame() {

    gameContainer.style.display = "none";

    resultContainer.classList.add("show");

    finalScore.textContent = score;


    if (score === 500) {

        resultMessage.textContent =
            "Excelente! Você demonstrou uma ótima capacidade de analisar informações e reconhecer sinais de desinformação.";

    }

    else if (score >= 300) {

        resultMessage.textContent =
            "Muito bom! Você conseguiu identificar boa parte das notícias. Continue verificando fontes antes de compartilhar.";

    }

    else if (score >= 100) {

        resultMessage.textContent =
            "Você está no caminho certo. Preste mais atenção às fontes, datas, títulos e evidências.";

    }

    else {

        resultMessage.textContent =
            "Não desanime! Identificar fake news é uma habilidade que melhora com prática e atenção.";

    }

}


/* =========================================================
   REINICIAR
   ========================================================= */

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "0";

    resultContainer.classList.remove("show");

    gameContainer.style.display = "block";

    loadQuestion();

    document.getElementById("jogo").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================================
   ANIMAÇÃO DOS CARDS DE DICAS
   ========================================================= */

const tips = document.querySelectorAll(".tip");

tips.forEach(tip => {

    tip.addEventListener("mouseenter", () => {

        tips.forEach(item => {
            item.classList.remove("active");
        });

        tip.classList.add("active");

    });

});


/* =========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
   ========================================================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".info-card, .tip, .verification-card, .source-card"
    )
    .forEach(element => {

        element.classList.add("scroll-animation");

        observer.observe(element);

    });


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

loadQuestion();
