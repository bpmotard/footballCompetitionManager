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
    BRA: "Brazil",
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
    allPlayerList.push(new Player("Paulo Lopes", new Date(1976, 06, 29), countries.POR, 1.81, positionType.GK));
    allPlayerList.push(new Player("Luisão", new Date(1981, 02, 13), countries.BRA, 1.92, positionType.DF));
    allPlayerList.push(new Player("Victor Lindelöf", new Date(1994, 07, 17), countries.SWE, 1.87, positionType.DF));
    allPlayerList.push(new Player("André Horta", new Date(1996, 11, 07), countries.POR, 1.74, positionType.DF));
    allPlayerList.push(new Player("Eliseu", new Date(1983, 10, 01), countries.POR, 1.76, positionType.DF));
    allPlayerList.push(new Player("Pizzi", new Date(1989, 10, 06), countries.POR, 1.77, positionType.MF));
    allPlayerList.push(new Player("Salvio", new Date(1990, 07, 13), countries.ARG, 1.72, positionType.MF));
    allPlayerList.push(new Player("Filipe Augusto", new Date(1993, 08, 12), countries.BRA, 1.84, positionType.MF));
    allPlayerList.push(new Player("Fejsa", new Date(1988, 08, 14), countries.URU, 1.83, positionType.MF));
    allPlayerList.push(new Player("Jonas", new Date(1984, 04, 01), countries.BRA, 1.83, positionType.ST));
    allPlayerList.push(new Player("Cervi", new Date(1994, 05, 26), countries.ARG, 1.66, positionType.ST));

    //Jogadores do Sporting
    allPlayerList.push(new Player("Rui Patrício", new Date(1988, 02, 05), countries.POR, 1.90, positionType.GK));
    allPlayerList.push(new Player("Jefferson", new Date(1988, 07, 05), countries.BRA, 1.78, positionType.DF));
    allPlayerList.push(new Player("Rúben Semedo", new Date(1994, 04, 04), countries.POR, 1.89, positionType.DF));
    allPlayerList.push(new Player("Paulo Oliveira", new Date(1991, 01, 08), countries.POR, 1.87, positionType.DF));
    allPlayerList.push(new Player("Douglas", new Date(1988, 01, 12), countries.NED, 1.92, positionType.DF));
    allPlayerList.push(new Player("William Carvalho", new Date(1992, 04, 07), countries.POR, 1.87, positionType.MF));
    allPlayerList.push(new Player("Bruno César", new Date(1988, 01, 03), countries.BRA, 1.78, positionType.MF));
    allPlayerList.push(new Player("Adrien Silva", new Date(1989, 03, 15), countries.POR, 1.75, positionType.MF));
    allPlayerList.push(new Player("João Palhinha", new Date(1995, 07, 09), countries.POR, 1.90, positionType.MF));
    allPlayerList.push(new Player("Bas Dost", new Date(1989, 05, 31), countries.NED, 1.96, positionType.ST));
    allPlayerList.push(new Player("Matheus Pereira", new Date(1996, 05, 05), countries.ARG, 1.75, positionType.ST));

    //Jogadores do Porto
    allPlayerList.push(new Player("Iker Casillas", new Date(1981, 05, 20), countries.ESP, 1.82, positionType.GK));
    allPlayerList.push(new Player("Maxi Pereira", new Date(1984, 06, 08), countries.URU, 1.73, positionType.DF));
    allPlayerList.push(new Player("Alex Telles", new Date(1992, 12, 15), countries.BRA, 1.81, positionType.DF));
    allPlayerList.push(new Player("Felipe Monteiro", new Date(1989, 05, 16), countries.BRA, 1.91, positionType.DF));
    allPlayerList.push(new Player("Iván Marcano", new Date(1987, 06, 23), countries.ESP, 1.89, positionType.DF));
    allPlayerList.push(new Player("Danilo Pereira", new Date(1991, 09, 09), countries.POR, 1.88, positionType.MF));
    allPlayerList.push(new Player("Óliver Torres", new Date(1994, 11, 10), countries.ESP, 1.74, positionType.MF));
    allPlayerList.push(new Player("Otávio", new Date(1995, 02, 08), countries.BRA, 1.72, positionType.MF));
    allPlayerList.push(new Player("Rúben Neves", new Date(1997, 03, 13), countries.POR, 1.80, positionType.MF));
    allPlayerList.push(new Player("André Silva", new Date(1995, 11, 06), countries.POR, 1.85, positionType.ST));
    allPlayerList.push(new Player("Soares", new Date(1991, 01, 17), countries.BRA, 1.87, positionType.ST));

    //Jogadores do Vitória
    allPlayerList.push(new Player("Lukas Raeder", new Date(1993, 12, 30), countries.DEU, 1.94, positionType.GK));
    allPlayerList.push(new Player("Frederico Venâncio", new Date(1993, 02, 04), countries.POR, 1.86, positionType.DF));
    allPlayerList.push(new Player("Pedro Pinto", new Date(1994, 11, 09), countries.POR, 1.87, positionType.DF));
    allPlayerList.push(new Player("Luís Felipe", new Date(1991, 04, 08), countries.BRA, 1.78, positionType.DF));
    allPlayerList.push(new Player("Nuno Pinto", new Date(1986, 08, 06), countries.POR, 1.73, positionType.DF));
    allPlayerList.push(new Player("Fábio Pacheco", new Date(1988, 05, 26), countries.POR, 1.80, positionType.MF));
    allPlayerList.push(new Player("Nenê Bonilha", new Date(1992, 02, 17), countries.BRA, 1.75, positionType.MF));
    allPlayerList.push(new Player("João Costinha", new Date(1992, 08, 25), countries.POR, 1.70, positionType.MF));
    allPlayerList.push(new Player("André Pedrosa", new Date(1997, 04, 12), countries.POR, 1.85, positionType.MF));
    allPlayerList.push(new Player("Nuno Santos", new Date(1995, 02, 13), countries.POR, 1.76, positionType.ST));
    allPlayerList.push(new Player("Thiago Santana", new Date(1994, 02, 04), countries.BRA, 1.84, positionType.ST));

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







