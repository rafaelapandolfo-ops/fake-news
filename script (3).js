/* =========================================================
   FAKECHECK
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* =========================================================
   SINAIS DE IDENTIFICAÇÃO
   ========================================================= */

const signals =
    document.querySelectorAll(".signal");


signals.forEach(signal => {

    signal.addEventListener("mouseenter", () => {

        signals.forEach(item => {

            item.classList.remove("active");

        });

        signal.classList.add("active");

    });

});



/* =========================================================
   CHECKLIST
   ========================================================= */

const checklistInputs =
    document.querySelectorAll(
        ".check-item input"
    );

const checklistMessage =
    document.getElementById(
        "checklistMessage"
    );


function updateChecklist() {

    const total =
        checklistInputs.length;

    const checked =
        document.querySelectorAll(
            ".check-item input:checked"
        ).length;


    if (checked === 0) {

        checklistMessage.textContent = "";

        return;

    }


    if (checked === total) {

        checklistMessage.textContent =
            "✓ Checklist completo! Você verificou todos os pontos.";

        return;

    }


    if (checked >= 4) {

        checklistMessage.textContent =
            `✓ Muito bem! ${checked} de ${total} pontos verificados.`;

        return;

    }


    checklistMessage.textContent =
        `${checked} de ${total} pontos verificados.`;

}


checklistInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateChecklist
    );

});



/* =========================================================
   SIMULADOR DE FAKE NEWS
   ========================================================= */

const cases = [

    {

        profile:
            "Notícias Conectadas",

        handle:
            "@noticiasconectadas",

        initials:
            "NC",

        title:
            "URGENTE! Cientistas descobrem método capaz de eliminar qualquer vírus em segundos!",

        text:
            "Uma nova descoberta revolucionária teria sido criada por pesquisadores. Segundo a publicação, bastaria utilizar o método uma única vez para eliminar qualquer vírus do organismo. Compartilhe para que todos saibam!",

        source:
            "Portal Notícias Conectadas",

        date:
            "Publicado hoje",

        clueSource:
            "Sem fonte científica",

        clueDate:
            "Data atual",

        clueEvidence:
            "Nenhuma evidência",

        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",

        answer:
            "fake",

        explanation:
            "A publicação faz uma afirmação extremamente ampla, pede compartilhamento e não apresenta estudo, pesquisadores ou evidências verificáveis. Esses são sinais importantes para desconfiar do conteúdo."

    },


    {

        profile:
            "Observatório Digital",

        handle:
            "@observatoriodigital",

        initials:
            "OD",

        title:
            "Pesquisa analisa como jovens utilizam redes sociais para consumir informação",

        text:
            "Um estudo publicado por uma instituição de pesquisa analisou hábitos digitais e identificou diferentes formas utilizadas por jovens para acompanhar notícias e informações na internet.",

        source:
            "Instituição de Pesquisa Digital",

        date:
            "Publicado em 2026",

        clueSource:
            "Instituição identificada",

        clueDate:
            "Data informada",

        clueEvidence:
            "Estudo citado",

        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",

        answer:
            "real",

        explanation:
            "A postagem apresenta uma fonte identificável e menciona um estudo. Ainda assim, a prática correta é procurar o estudo original e verificar se outras fontes confirmam a informação."

    },


    {

        profile:
            "Portal da Verdade",

        handle:
            "@portaldaverdadeoficial",

        initials:
            "PV",

        title:
            "VOCÊ NÃO VAI ACREDITAR! Governo vai desligar a internet amanhã!",

        text:
            "Mensagem que circula nas redes afirma que toda a internet será desligada durante 24 horas. A publicação pede que os usuários compartilhem imediatamente para avisar amigos e familiares.",

        source:
            "Portal da Verdade",

        date:
            "Publicado hoje",

        clueSource:
            "Fonte sem confirmação",

        clueDate:
            "Data recente",

        clueEvidence:
            "Sem documento oficial",

        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",

        answer:
            "fake",

        explanation:
            "O título utiliza linguagem alarmista e a postagem pede compartilhamento urgente. Uma afirmação dessa dimensão deveria possuir confirmação em fontes oficiais e veículos confiáveis."

    },


    {

        profile:
            "Biblioteca Municipal",

        handle:
            "@bibliotecamunicipal",

        initials:
            "BM",

        title:
            "Biblioteca anuncia programação gratuita de leitura para estudantes",

        text:
            "A instituição divulgou uma programação especial com atividades gratuitas de leitura durante o período de férias. As inscrições podem ser realizadas pelos canais oficiais da biblioteca.",

        source:
            "Biblioteca Municipal",

        date:
            "Publicado nesta semana",

        clueSource:
            "Canal institucional",

        clueDate:
            "Data informada",

        clueEvidence:
            "Programação oficial",

        image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",

        answer:
            "real",

        explanation:
            "A postagem está associada diretamente à instituição responsável pela atividade e informa onde a pessoa pode confirmar os detalhes. Mesmo assim, a melhor prática é conferir o canal oficial."

    },


    {

        profile:
            "Curiosidades Agora",

        handle:
            "@curiosidadesagora",

        initials:
            "CA",

        title:
            "Esta foto prova que uma cidade inteira ficou sem energia por uma semana",

        text:
            "A publicação utiliza uma fotografia de uma cidade escura e afirma que a imagem mostra um apagão ocorrido recentemente. Nenhuma localização ou data da fotografia é apresentada.",

        source:
            "Curiosidades Agora",

        date:
            "Publicado ontem",

        clueSource:
            "Origem da foto não informada",

        clueDate:
            "Data da postagem",

        clueEvidence:
            "Local não confirmado",

        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80",

        answer:
            "fake",

        explanation:
            "A fotografia pode ser verdadeira, mas isso não significa que ela comprove a situação descrita. Sem origem, localização e contexto, a imagem não é evidência suficiente."

    },


    {

        profile:
            "Agência Ciência Hoje",

        handle:
            "@agenciacienciahoje",

        initials:
            "AC",

        title:
            "Novo estudo apresenta resultados sobre hábitos digitais da população",

        text:
            "Pesquisadores divulgaram resultados de um estudo sobre comportamento digital. A publicação apresenta a instituição responsável e indica onde os dados completos podem ser consultados.",

        source:
            "Agência Ciência Hoje",

        date:
            "Publicado este mês",

        clueSource:
            "Fonte identificada",

        clueDate:
            "Data informada",

        clueEvidence:
            "Dados disponíveis",

        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",

        answer:
            "real",

        explanation:
            "A postagem apresenta uma fonte identificada e indica onde os dados podem ser consultados. Esses elementos ajudam na verificação, embora ainda seja recomendável conferir o material original."

    }

];



/* =========================================================
   ELEMENTOS DO JOGO
   ========================================================= */

let currentCase = 0;

let score = 0;

let answered = false;


const scoreElement =
    document.getElementById("score");

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progress =
    document.getElementById("progress");


const profilePicture =
    document.getElementById("profilePicture");

const profileName =
    document.getElementById("profileName");

const profileHandle =
    document.getElementById("profileHandle");


const postImage =
    document.getElementById("postImage");

const postTitle =
    document.getElementById("postTitle");

const postText =
    document.getElementById("postText");


const postSource =
    document.getElementById("postSource");

const postDate =
    document.getElementById("postDate");


const clueSource =
    document.getElementById("clueSource");

const clueDate =
    document.getElementById("clueDate");

const clueEvidence =
    document.getElementById("clueEvidence");


const answerButtons =
    document.querySelectorAll(
        ".answer-button"
    );


const feedback =
    document.getElementById(
        "gameFeedback"
    );

const feedbackIcon =
    document.getElementById(
        "feedbackIcon"
    );

const feedbackTitle =
    document.getElementById(
        "feedbackTitle"
    );

const feedbackText =
    document.getElementById(
        "feedbackText"
    );


const nextButton =
    document.getElementById(
        "nextButton"
    );


const gameContainer =
    document.getElementById(
        "gameContainer"
    );

const resultContainer =
    document.getElementById(
        "resultContainer"
    );


const finalScore =
    document.getElementById(
        "finalScore"
    );

const resultMessage =
    document.getElementById(
        "resultMessage"
    );


const restartButton =
    document.getElementById(
        "restartButton"
    );



/* =========================================================
   CARREGAR CASO
   ========================================================= */

function loadCase() {

    const item =
        cases[currentCase];


    answered = false;


    profilePicture.textContent =
        item.initials;

    profileName.textContent =
        item.profile;

    profileHandle.textContent =
        item.handle;


    postImage.src =
        item.image;

    postImage.alt =
        "Imagem da publicação";


    postTitle.textContent =
        item.title;

    postText.textContent =
        item.text;


    postSource.textContent =
        item.source;

    postDate.textContent =
        item.date;


    clueSource.textContent =
        item.clueSource;

    clueDate.textContent =
        item.clueDate;

    clueEvidence.textContent =
        item.clueEvidence;


    questionNumber.textContent =
        currentCase + 1;


    const percent =
        Math.round(
            ((currentCase + 1) /
            cases.length) * 100
        );


    progress.style.width =
        `${percent}%`;


    progressPercent.textContent =
        `${percent}%`;


    feedback.classList.remove(
        "show",
        "wrong"
    );


    nextButton.classList.remove(
        "show"
    );


    answerButtons.forEach(button => {

        button.disabled = false;

        button.style.opacity = "1";

        button.style.borderColor = "";

    });

}



/* =========================================================
   RESPOSTA
   ========================================================= */

answerButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (answered) {
                return;
            }


            answered = true;


            const selected =
                button.dataset.answer;


            const correct =
                cases[currentCase].answer;


            const isCorrect =
                selected === correct;


            answerButtons.forEach(
                otherButton => {

                    otherButton.disabled =
                        true;


                    if (
                        otherButton !==
                        button
                    ) {

                        otherButton.style.opacity =
                            "0.4";

                    }

                }
            );


            if (isCorrect) {

                score += 100;

                scoreElement.textContent =
                    score;


                feedback.classList.remove(
                    "wrong"
                );


                feedbackIcon.textContent =
                    "✓";


                feedbackTitle.textContent =
                    "Resposta correta!";


                feedbackText.textContent =
                    cases[currentCase]
                        .explanation;

            }

            else {

                feedback.classList.add(
                    "wrong"
                );


                feedbackIcon.textContent =
                    "✕";


                feedbackTitle.textContent =
                    "Quase!";


                feedbackText.textContent =
                    cases[currentCase]
                        .explanation;

            }


            feedback.classList.add(
                "show"
            );


            nextButton.classList.add(
                "show"
            );

        }
    );

});



/* =========================================================
   PRÓXIMO CASO
   ========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentCase++;


        if (
            currentCase >=
            cases.length
        ) {

            finishGame();

            return;

        }


        loadCase();

    }
);



/* =========================================================
   FINALIZAR
   ========================================================= */

function finishGame() {

    gameContainer.style.display =
        "none";


    resultContainer.classList.add(
        "show"
    );


    finalScore.textContent =
        score;


    if (score === 600) {

        resultMessage.textContent =
            "Perfeito! Você analisou todos os casos corretamente e demonstrou uma excelente capacidade de verificar informações.";

    }

    else if (score >= 400) {

        resultMessage.textContent =
            "Muito bom! Você identificou a maioria dos sinais de desinformação. Continue verificando fontes antes de compartilhar.";

    }

    else if (score >= 200) {

        resultMessage.textContent =
            "Bom começo! Você já reconhece alguns sinais importantes. Pratique mais e observe principalmente fonte, contexto e evidências.";

    }

    else {

        resultMessage.textContent =
            "Não desanime. Identificar desinformação é uma habilidade que melhora com prática. Volte ao conteúdo e tente novamente.";

    }

}



/* =========================================================
   REINICIAR
   ========================================================= */

restartButton.addEventListener(
    "click",
    () => {

        currentCase = 0;

        score = 0;


        scoreElement.textContent =
            "0";


        resultContainer.classList.remove(
            "show"
        );


        gameContainer.style.display =
            "block";


        loadCase();


        document
            .getElementById("jogo")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

loadCase();
