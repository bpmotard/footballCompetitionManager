/**********************
 * FUNÇÕES AUXILIARES *
 *********************/

/**
 * Função usada para esconder os formulários
 */
function hideForms() {
    var hiddenDiv = document.getElementById("allContent");
    hiddenDiv.style.display = "block";

    var divFormPlayer = document.getElementById("divFormPlayer");
    divFormPlayer.style.display = "none";

    var divFormPlayer = document.getElementById("divFormTeam");
    divFormPlayer.style.display = "none";

    var divFormUpdatePlayer = document.getElementById("divFormUpdatePlayer");
    divFormUpdatePlayer.style.display = "none";

    var divFormLeague = document.getElementById("divFormLeague");
    divFormLeague.style.display = "none";


    
}

/**
 * Função usada para eliminar o conteudo do div allContent
 */
function clearContentElement() {
    var element = document.getElementById("allContent");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/* Funçao usada para criar um div que consegue terá a informação e que consegue ter margens e paddings*/
function addDivContent() {
    var element = document.getElementById("allContent");
    var elementInfo = document.createElement("div");
    element.appendChild(elementInfo);
    elementInfo.setAttribute("id", "content");
}

function textToAnchor(text) {
    var link = document.createElement("a");
    var textNode = document.createTextNode(text + "dasd");
    link.appendChild(text);
}

function calcAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < (birthDate.getMonth() - 1)) {
        age--;
    }
    if (((birthDate.getMonth() - 1) == today.getMonth()) &&
        (today.getDay() < birthDate.getDay())) {
        age--;
    }
    return age;
};

