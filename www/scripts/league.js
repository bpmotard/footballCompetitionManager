/*
 * Função construtora da Liga
*/
function League(name, edition) {
    Competition.call(name, edition);
    this.name = name;
    this.edition = edition;
    this.winner = "TBD"
    this.leagueTeams = [];
    this.numTeams = 4;


    /*if (numTeams >= this.minTeams && numTeams <= this.maxTeams && numTeams % 2 == 0) {
        if (this.numTeamVerifier(numTeams)) {
            this.numTeams = numTeams;
        }
    }*/
}

League.prototype.addLeagueTeam = function (team) {
    this.leagueTeams.push(team);
    return this;
}

League.removeLeague = function () {
    var checkbox = document.getElementsByClassName("checkbox");

    if(checkbox.length === 0){
        alert("At least one league must be selected!")
    }else{
        var verification;
        var verification = confirm("Are you sure about removing the selected league(s)?");
        if (verification == true) {
            for (i = checkbox.length - 1; i > -1; i--) {
                if (checkbox[i].checked === true) {
                    allPlayerList.splice(i, 1);
                }
            }
        verification = alert("League(s) removed sucessfully");       
        } else {
        }
    }
    leaguesPage();
}

League.prototype.minTeams = 4;
League.prototype.maxTeams = 20;

League.detailsLeague = function(){
    var game = new Game(allTeamList[0],allTeamList[1]);
    game.playGame(allTeamList[0],allTeamList[1]);
    alert(allTeamList[0].name + " - points: " + allTeamList[0].points + " | " + allTeamList[1].name + " - points: " + allTeamList[1].points);
}

/**
 * Função que adiciona uma linha na tabela com a informação de uma equipa
 * key.length-1: porque o Object.key não pode chegar ao atributo playersList = [] na classe Team.
 */
League.prototype.toStringLeagues = function () {
    var table = document.getElementById("leaguesTable");
    var tableRow = document.createElement('tr');

    var checkboxElement = document.createElement("INPUT");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("class", "checkbox");

    tableRow.appendChild(document.createElement('td')).appendChild(checkboxElement);
    var key = Object.keys(this);
    for (var i = 0; i < key.length - 2; i++) {
        var value = this[key[i]];
        tableRow.appendChild(document.createElement('td')).appendChild(document.createTextNode(value));
    }
    table.appendChild(tableRow);
};

League.headerLeagues = function () {
    var content = document.getElementById("content")
        , table = content.appendChild(document.createElement('table'))
        , tableRow = table.appendChild(document.createElement('thead'))
        , tableData0 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode(""))
        , tableData1 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Name"))
        , tableData2 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Edition"))
        , tableData3 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Winner"))

    table.setAttribute("id", "leaguesTable");
};


/**
 * Função que adiciona uma linha na tabela com a informação de uma equipa
 * key.length-1: porque o Object.key não pode chegar ao atributo playersList = [] na classe Team.
 */
League.prototype.toStringLeagueDetails = function () {
    var table = document.getElementById("leagueDetails");
    var tableRow = document.createElement('tr');

    var checkboxElement = document.createElement("INPUT");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("class", "checkbox");

    tableRow.appendChild(document.createElement('td')).appendChild(checkboxElement);
    var key = Object.keys(this);
    for (var i = 0; i < key.length - 2; i++) {
        var value = this[key[i]];
        tableRow.appendChild(document.createElement('td')).appendChild(document.createTextNode(value));
    }
    table.appendChild(tableRow);
};

League.leagueDetails = function () {
    var content = document.getElementById("content")
        , table = content.appendChild(document.createElement('table'))
        , tableRow = table.appendChild(document.createElement('thead'))
        , tableData0 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Name"))
        , tableData1 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Points"))
        , tableData2 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Goals for"))
        , tableData3 = tableRow.appendChild(document.createElement('th')).appendChild(document.createTextNode("Goals against"))

    table.setAttribute("id", "leagueDetails");
};

/*********
 * FORMS *
 *********/

/**
 * Form para adicionar uma nova equipa
 */
function formAddLeague() {
    var hiddenDiv = document.getElementById("allContent");
    hiddenDiv.style.display = "none";
    var divFormPlayer = document.getElementById("divFormLeague");
    divFormPlayer.style.display = "block";
}

function formAddLeagueAction() {
    var lName = document.getElementById("inputLeagueName").value;
    var lEdition = document.getElementById("inputLeagueEdition").value;
    //var lNumberTeams = document.getElementById("inputLeagueNumberTeams").value;

    if (lName !== "" && lEdition !== "") {
        var league = new League(lName, lEdition, "TBD");
        allLeagueList.push(league);
    }
    hideForms();
    leaguesPage();
}