/*
 * Função construtora do Jogador
*/
function Player(name, birthDate, country, height, position) {
    this.name = name;
    this.birthDate = birthDate;
    this.country = country;
    this.height = height;
    this.position = position;
    this.birthDate = birthDate;
    this.isOnTeam = false;
};

Player.addPlayer = function () {
    hideForms();
}

Player.removePlayer = function () {
    var checkbox = document.getElementsByClassName("checkbox");

    if(checkbox.length === 0){
        alert("At least one player must be selected!")
    }else{
        var verification;
        var verification = confirm("Are you sure about removing the selected players(s)?");
        if (verification == true) {
            for (i = checkbox.length - 1; i > -1; i--) {
                if (checkbox[i].checked === true) {
                    allPlayerList.splice(i, 1);
                }
            }
        verification = alert("Players(s) removed sucessfully");       
        } else {
        }
    }
    playersPage();
}

Player.prototype.isOnTeamToogle = function(){
    if(this.isOnTeam === false){
        this.isOnTeam = true;
        return;
    }
}

/**
 * Função que adiciona uma linha na tabela com a informação de um jogador
 */
Player.prototype.toString = function () {
    var table = document.getElementById("playersTable");
    var tableRow = document.createElement('tr');

    var checkboxElement = document.createElement("INPUT");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("class", "checkbox");

    tableRow.appendChild(document.createElement('td')).appendChild(checkboxElement);
    var key = Object.keys(this);
    for (var i = 0; i < key.length - 1; i++) {
        var value = this[key[i]];
        tableRow.appendChild(document.createElement('td')).appendChild(document.createTextNode(value));
    }
    table.appendChild(tableRow);
};

/**
 * Como os nomes das propriedades não servem para nomes de cabeçalhos. 
 * Não deu para os ir buscar de forma dinâmica
 */
Player.headerPlayers = function () {
    var content = document.getElementById("content")
        , table = content.appendChild(document.createElement('table'))
        , tableRow = table.appendChild(document.createElement('thead'))
        , tableData0 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode(""))
        , tableData1 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Name"))
        , tableData2 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Age"))
        , tableData3 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Country"))
        , tableData4 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Height"))
        , tableData5 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Position"));

    table.setAttribute("id", "playersTable");
};

/*********
 * FORMS *
 *********/

/**
 * Form para adicionar um novo jogador
 */
function formAddPlayer() {
    var hiddenDiv = document.getElementById("allContent");
    hiddenDiv.style.display = "none";
    var divFormPlayer = document.getElementById("divFormPlayer");
    divFormPlayer.style.display = "block";
}

/**
 * Ação do botão "Submit" para adicionar um jogador
 */
function formAddPlayerAction() {

    var pName = document.getElementById("inputPlayerName").value;
    var pAge = new Date(document.getElementById("inputPlayerAge").value);
    var pCountry = document.getElementById("inputPlayerCountry").value;
    var pHeight = document.getElementById("inputPlayerHeight").value;
    var pPosition = document.getElementById("inputPlayerPosition").value;

    if (pName !== "" && pAge !== "" && pHeight !== 0) {
        var player = new Player(pName, pAge, pCountry, pHeight, pPosition);
        allPlayerList.push(player);
    }

    hideForms();
    playersPage();
}

function formUpdatePlayer() {

    function dateFormat(date) {
        // GET YYYY, MM AND DD FROM THE DATE OBJECT
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = date.getDate().toString();

        // CONVERT mm AND dd INTO chars
        var mmChars = mm.split('');
        var ddChars = dd.split('');

        // CONCAT THE STRINGS IN YYYY-MM-DD FORMAT
        var datestring = yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
        return datestring;
    };

    var hiddenDiv = document.getElementById("allContent");
    hiddenDiv.style.display = "none";
    var divFormPlayer = document.getElementById("divFormUpdatePlayer");
    divFormPlayer.style.display = "block";
    var optionPlayerCountry = document.getElementById("inputPlayerCountry");
    

    var checkbox = document.getElementsByClassName("checkbox");
    for (i = checkbox.length - 1; i > -1; i--) {
        if (checkbox[i].checked === true) {
            document.getElementById("inputUpdatePlayerName").defaultValue = allPlayerList[i].name;
            document.getElementById("inputUpdatePlayerAge").defaultValue = dateFormat(allPlayerList[i].birthDate);
            document.getElementById("inputUpdatePlayerCountry").defaultValue = allPlayerList[i].country;
            document.getElementById("inputUpdatePlayerHeight").defaultValue = allPlayerList[i].height;
            document.getElementById("inputUpdatePlayerPosition").defaultValue = allPlayerList[i].position;
        }
    }
};

function formUpdatePlayerAction() {
    var checkbox = document.getElementsByClassName("checkbox");

    var pName = document.getElementById("inputUpdatePlayerName").value;
    var pAge = document.getElementById("inputUpdatePlayerAge").value;
    var pCountry = document.getElementById("inputUpdatePlayerCountry").value;
    var pHeight = document.getElementById("inputUpdatePlayerHeight").value;
    var pPosition = document.getElementById("inputUpdatePlayerPosition").value;

    for (i = checkbox.length - 1; i > -1; i--) {
        if (checkbox[i].checked === true) {
            allPlayerList[i].name = pName;
            allPlayerList[i].age = pAge;
            allPlayerList[i].country = pCountry;
            allPlayerList[i].height = pHeight;
            allPlayerList[i].position = pPosition;
        }
    }
    hideForms();
    playersPage();
};