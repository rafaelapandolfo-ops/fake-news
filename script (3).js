/* =========================================================
   CHECKLIST DE VERIFICAÇÃO
   ========================================================= */

const checklistInputs =
    document.querySelectorAll(".check-item input");

const checklistSection =
    document.querySelector(".checklist-section");


function checkChecklist() {

    const total = checklistInputs.length;

    const checked =
        document.querySelectorAll(
            ".check-item input:checked"
        ).length;


    let message =
        document.getElementById("checklistMessage");


    if (!message) {

        message = document.createElement("div");

        message.id = "checklistMessage";

        message.style.marginTop = "15px";

        message.style.fontSize = "10px";

        message.style.color = "#5b9cff";

        message.style.fontWeight = "600";

        checklistSection
            .querySelector(".checklist")
            .appendChild(message);
    }


    if (checked === total) {

        message.textContent =
            "✓ Excelente! Você verificou todos os pontos.";

    } else if (checked >= 4) {

        message.textContent =
            "✓ Muito bem! Você já verificou a maioria dos pontos.";

    } else if (checked > 0) {

        message.textContent =
            `${checked} de ${total} pontos verificados.`;

    } else {

        message.textContent = "";

    }

}


checklistInputs.forEach(input => {

    input.addEventListener(
        "change",
        checkChecklist
    );

});
