/**
 * Função usada para dar inicio aos scripts
 */
function startScripts() {
    homePage();
    startUpFunction();
}

/*******************
 * Variáveis Globais
 ******************/

var allPlayerList = [];
var allTeamList = [];
var allLeagueList = [];
var allCupList = [];

/* Funções para alterar a div entre os vários separadores */

function homePage() {
    clearContentElement();
    hideForms();
    var img = document.createElement('img');
    img.src = "/images/background2.jpg";
    document.getElementById('allContent').appendChild(img);
    img.setAttribute("id", "background");

    var paragraph = document.createElement("h1");
    var content = document.createTextNode("Football Competition Manager");

    paragraph.appendChild(content);
    document.getElementById("allContent").appendChild(paragraph);
}

function playersPage() {
    clearContentElement();
    hideForms();
    addDivContent();
    var divContent = document.getElementById("content");
    var buttonDiv = document.createElement("div");

    Player.headerPlayers();
    divContent.appendChild(buttonDiv);

    var buttonAdd = document.createElement("button");
    buttonAdd.textContent = "Add player"
    buttonAdd.onclick = formAddPlayer;
    var buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove player(s)"
    buttonRemove.onclick = Player.removePlayer;
    var buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit player"
    buttonEdit.onclick = formUpdatePlayer;

    buttonDiv.appendChild(buttonAdd);
    buttonDiv.appendChild(buttonRemove);
    buttonDiv.appendChild(buttonEdit);

    listAllPlayers(allPlayerList);
};

function teamsPage() {
    clearContentElement();
    hideForms();
    addDivContent();
    var divContent = document.getElementById("content");
    var buttonDiv = document.createElement("div");

    Team.headerTeams();
    divContent.appendChild(buttonDiv);

    var buttonAdd = document.createElement("button");
    buttonAdd.textContent = "Add team"
    buttonAdd.onclick = formAddTeam;
    var buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove team(s)"
    buttonRemove.onclick = Team.removeTeam;
    var buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit team"
    buttonEdit.onclick = formUpdatePlayer;

    buttonDiv.appendChild(buttonAdd);
    buttonDiv.appendChild(buttonRemove);
    buttonDiv.appendChild(buttonEdit);

    listAllTeams(allTeamList);
};

function leaguesPage() {
    clearContentElement();
    hideForms();
    addDivContent();
    var divContent = document.getElementById("content");
    var buttonDiv = document.createElement("div");

    League.headerLeagues();
    divContent.appendChild(buttonDiv);

    var buttonAdd = document.createElement("button");
    buttonAdd.textContent = "Add league"
    buttonAdd.onclick = formAddLeague;
    var buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove league(s)"
    buttonRemove.onclick = League.removeLeague;
    var buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit league"
    buttonEdit.onclick = League.updateLeague;
    var buttonDetails = document.createElement("button");
    buttonDetails.textContent = "League details"
    buttonDetails.onclick = League.detailsLeague;

    buttonDiv.appendChild(buttonAdd);
    buttonDiv.appendChild(buttonRemove);
    buttonDiv.appendChild(buttonEdit);
    buttonDiv.appendChild(buttonDetails);

    listAllLeagues(allLeagueList);
}

function cupsPage() {
    clearContentElement();
}

/**
 * Enumerado de Países existentes para representar a nacionalidade dos jogadores
 */

var countries = {
    POR: "Portugal",
    ESP: "Spain",
    URU: "Uruguay",
    ITA: "Italy",
    DEU: "Germany",
    ENG: "England",
    BRA: "Brasil",
    ARG: "Argentina",
    SWE: "Sweden",
    NED: "Netherlands",
    FRA: "France"
}

/**
 * Enumerado das posições existentes para representar a posição dos jogadores em campo (GR - Guarda-Redes | DF - Defesa | MC - Médio | AV - Avançado)
 */
var positionType = {
    GK: "GK", DF: "DF", MF: "MF", ST: "ST"
};

function startUpFunction() {

    //Jogadores do Benfica
    allPlayerList.push(new Player("Paulo Lopes", "29/06/1976", countries.POR, 1.81, positionType.GK));
    allPlayerList.push(new Player("Luisão", "13/02/1981", countries.BRA, 1.92, positionType.DF));
    allPlayerList.push(new Player("Victor Lindelöf", "17/07/1994", countries.SWE, 1.87, positionType.DF));
    allPlayerList.push(new Player("André Horta", "07/11/1996", countries.POR, 1.74, positionType.DF));
    allPlayerList.push(new Player("Eliseu", "01/10/1983", countries.POR, 1.76, positionType.DF));
    allPlayerList.push(new Player("Pizzi", "06/10/1989", countries.POR, 1.77, positionType.MF));
    allPlayerList.push(new Player("Salvio", "13/07/1990", countries.ARG, 1.72, positionType.MF));
    allPlayerList.push(new Player("Filipe Augusto", "12/08/1993", countries.BRA, 1.84, positionType.MF));
    allPlayerList.push(new Player("Fejsa", "14/08/1988", countries.URU, 1.83, positionType.MF));
    allPlayerList.push(new Player("Jonas", "01/04/1984", countries.BRA, 1.83, positionType.ST));
    allPlayerList.push(new Player("Cervi", "26/05/1994", countries.ARG, 1.66, positionType.ST));

    //Jogadores do Sporting
    allPlayerList.push(new Player("Rui Patrício", "15/02/1988", countries.POR, 1.90, positionType.GK));
    allPlayerList.push(new Player("Jefferson", "5/07/1988", countries.BRA, 1.78, positionType.DF));
    allPlayerList.push(new Player("Rúben Semedo", "4/04/1994", countries.POR, 1.89, positionType.DF));
    allPlayerList.push(new Player("Paulo Oliveira", "08/01/1991", countries.POR, 1.87, positionType.DF));
    allPlayerList.push(new Player("Douglas", "12/01/1988", countries.NED, 1.92, positionType.DF));
    allPlayerList.push(new Player("William Carvalho", "07/04/1992", countries.POR, 1.87, positionType.MF));
    allPlayerList.push(new Player("Bruno César", "03/01/1988", countries.BRA, 1.78, positionType.MF));
    allPlayerList.push(new Player("Adrien Silva", "15/03/1989", countries.POR, 1.75, positionType.MF));
    allPlayerList.push(new Player("João Palhinha", "09/07/1995", countries.POR, 1.90, positionType.MF));
    allPlayerList.push(new Player("Bas Dost", "31/05/1989", countries.NED, 1.96, positionType.ST));
    allPlayerList.push(new Player("Matheus Pereira", "05/05/1996", countries.ARG, 1.75, positionType.ST));

    //Jogadores do Porto
    allPlayerList.push(new Player("Iker Casillas", "20/05/1981", countries.ESP, 1.82, positionType.GK));
    allPlayerList.push(new Player("Maxi Pereira", "8/06/1984", countries.URU, 1.73, positionType.DF));
    allPlayerList.push(new Player("Alex Telles", "15/12/1992", countries.BRA, 1.81, positionType.DF));
    allPlayerList.push(new Player("Felipe Monteiro", "16/05/1989", countries.BRA, 1.91, positionType.DF));
    allPlayerList.push(new Player("Iván Marcano", "23/06/1987", countries.ESP, 1.89, positionType.DF));
    allPlayerList.push(new Player("Danilo Pereira", "09/09/1991", countries.POR, 1.88, positionType.MF));
    allPlayerList.push(new Player("Óliver Torres", "10/11/1994", countries.ESP, 1.74, positionType.MF));
    allPlayerList.push(new Player("Otávio", "08/02/1995", countries.BRA, 1.72, positionType.MF));
    allPlayerList.push(new Player("Rúben Neves", "13/03/1997", countries.POR, 1.80, positionType.MF));
    allPlayerList.push(new Player("André Silva", "06/11/1995", countries.POR, 1.85, positionType.ST));
    allPlayerList.push(new Player("Soares", "17/01/1991", countries.BRA, 1.87, positionType.ST));

    //Jogadores do Vitória
    allPlayerList.push(new Player("Lukas Raeder", "30/12/1993", countries.DEU, 1.94, positionType.GK));
    allPlayerList.push(new Player("Frederico Venâncio", "04/02/1993", countries.POR, 1.86, positionType.DF));
    allPlayerList.push(new Player("Pedro Pinto", "09/11/1994", countries.POR, 1.87, positionType.DF));
    allPlayerList.push(new Player("Luís Felipe", "08/04/1991", countries.BRA, 1.78, positionType.DF));
    allPlayerList.push(new Player("Nuno Pinto", "06/08/1986", countries.POR, 1.73, positionType.DF));
    allPlayerList.push(new Player("Fábio Pacheco", "26/05/1988", countries.POR, 1.80, positionType.MF));
    allPlayerList.push(new Player("Nenê Bonilha", "17/02/1992", countries.BRA, 1.75, positionType.MF));
    allPlayerList.push(new Player("João Costinha", "25/08/1992", countries.POR, 1.70, positionType.MF));
    allPlayerList.push(new Player("André Pedrosa", "12/04/1997", countries.POR, 1.85, positionType.MF));
    allPlayerList.push(new Player("Nuno Santos", "13/02/1995", countries.POR, 1.76, positionType.ST));
    allPlayerList.push(new Player("Thiago Santana", "04/02/1994", countries.BRA, 1.84, positionType.ST));

    allTeamList.push(new Team("Sport Lisboa e Benfica", "SLB", countries.POR, "http://www.slbenfica.pt/", "O Sport Lisboa e Benfica é um clube multidesportivo sediado na freguesia de São Domingos de Benfica, em Lisboa, Portugal."));
    allTeamList.push(new Team("Sporting Clube de Portugal", "SCP", countries.POR, "http://www.sporting.pt/", "O Sporting Clube de Portugal é um clube português, eclético e multi-desportivo, fundado a 1 de julho de 1906, com sede em Lisboa no Complexo Alvalade XXI."));
    allTeamList.push(new Team("Futebol Clube do Porto", "FCP", countries.POR, "http://www.fcporto.pt/", "Futebol Clube do Porto, mais conhecido como FC Porto ou simplesmente Porto, é um clube multidesportivo português sedeado na cidade do Porto."));
    allTeamList.push(new Team("Vitória Futebol Clube", "VFC", countries.POR, "https://vfc.pt/", "Vitória Futebol Clube, também conhecido como Vitória de Setúbal, é um clube desportivo português da cidade de Setúbal."));

    allLeagueList.push(new League("Liga NOS", 2018, "TBD"));

    console.log(allLeagueList);

    /* NÃO ELIMINAR CLAUDIA!!!
    
    //Adiciona jogadores à primeira equipa
    for (i = 0; i < allPlayerList.length; i++) {
        for(j=0; allTeamList[i].playerList.length <= 11 ; j++){
            allTeamList[i].addPlayer(allPlayerList[j]);
            allPlayerList[j].isOnTeamToogle();
        }     
    }
    */

    //Adiciona jogadores à primeira equipa
    for (i = 0; i < 11; i++) {
        allTeamList[0].addPlayer(allPlayerList[i]);
        allPlayerList[i].isOnTeamToogle();
    }
    //Verifica se a equipa é válida;
    allTeamList[0].valid = allTeamList[0].isTeamValid();

    //Adiciona a primeira equipa à primeira Liga
    for (i = 0; i < allLeagueList[0].numTeams; i++) {
        allLeagueList[0].addLeagueTeam(allTeamList[i]);
    }


    //TESTES
    
}







