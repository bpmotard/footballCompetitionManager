/**
 * Classe Team
 */
function Team(name, acronym, country, url, description) {
    this.name = name;
    this.acronym = acronym;
    this.country = country;
    this.url = url;
    this.valid = "No";
    this.description = description;
    this.isOnLeague = false;
    this.points = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.playerList = [];
}

/**
 * Adiciona um jogador ao array dentro de uma determinada equipa
 */
Team.prototype.addPlayer = function (player) {
    this.playerList.push(player);
    return this;
};

Team.removeTeam = function () {
    var checkbox = document.getElementsByClassName("checkbox");

    if(checkbox.length === 0){
        alert("At least one team must be selected!")
    }else{
        var verification;
        var verification = confirm("Are you sure about removing the selected team(s)?");
        if (verification == true) {
            for (i = checkbox.length - 1; i > -1; i--) {
                if (checkbox[i].checked === true) {
                    allTeamList.splice(i, 1);
                }
            }
            verification = alert("Team(s) removed sucessfully");
        } else {
        }
    }
     teamsPage();
}

Team.prototype.isTeamValid = function(){
    gkCounter = 0;
    dfCounter = 0;
    mfCounter = 0;
    stCounter = 0;
   
    for(i = 0; i< this.playerList.length ; i++){
        if(this.playerList[i].position === positionType.GK){
            gkCounter++;
        }
        if(this.playerList[i].position === positionType.DF){
            dfCounter++;
        }
        if(this.playerList[i].position === positionType.MF){
            mfCounter++;
        }
        if(this.playerList[i].position === positionType.ST){
            stCounter++;
        }
    }

    if(gkCounter >= 1 && dfCounter >= 4 && mfCounter >= 4 && stCounter >= 2 ){
        return "Yes";
    } else{
        alert("Team invalid")
        return "No"
    }
}

/**
 * Função que adiciona uma linha na tabela com a informação de uma equipa
 * key.length-1: porque o Object.key não pode chegar ao atributo playersList = [] na classe Team.
 */
Team.prototype.toStringTeams = function () {
    var table = document.getElementById("teamsTable");
    var tableRow = document.createElement('tr');

    var checkboxElement = document.createElement("INPUT");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("class", "checkbox");

    tableRow.appendChild(document.createElement('td')).appendChild(checkboxElement);
    var key = Object.keys(this);
    for (var i = 0; i < key.length - 6; i++) {
        var value = this[key[i]];
        tableRow.appendChild(document.createElement('td')).appendChild(document.createTextNode(value));
    }
    table.appendChild(tableRow);
};

/**
 * Como os nomes das propriedades não servem para nomes de cabeçalhos. 
 * Não deu para os ir buscar de forma dinâmica
 */
Team.headerTeams = function () {
    var content = document.getElementById("content")
        , table = content.appendChild(document.createElement('table'))
        , tableRow = table.appendChild(document.createElement('thead'))
        , tableData0 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode(""))
        , tableData1 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Name"))
        , tableData2 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Acronym"))
        , tableData3 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Country"))
        , tableData4 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("URL"))
        , tableData5 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Valid"));

    table.setAttribute("id", "teamsTable");
};

/*********
 * FORMS *
 *********/

function formAddTeam() {
    var hiddenDiv = document.getElementById("allContent");
    hiddenDiv.style.display = "none";
    var divFormPlayer = document.getElementById("divFormTeam");
    divFormPlayer.style.display = "block";
}

function formAddTeamAction() {
    var tName = document.getElementById("inputTeamName").value;
    var tAcronym = document.getElementById("inputTeamAcronym").value;
    var tCountry = document.getElementById("inputTeamCountry").value;
    var tUrl = document.getElementById("inputTeamUrl").value;
    var tDescription = document.getElementById("inputTeamDescription").value;

    if (tName !== "" && tAcronym !== "" && tUrl !== "" && tDescription !== "") {

        //var urlToAnchor = textToAnchor(tUrl);

        //textNode = document.createTextNode(urlToAnchor);
        var team = new Team(tName, tAcronym, tCountry, tUrl, tDescription);
        allTeamList.push(team);
    }

    hideForms();
    teamsPage();
}
