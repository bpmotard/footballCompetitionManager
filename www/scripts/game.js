/*
 * Função construtora de um jogo
*/
function Game(teamA, teamB){
this.teamA = teamA;
this.teamB = teamB;
this.teamAGoals = 0;
this.teamBGoals = 0;
}

Game.prototype.randomGoal = function(){
    return Math.floor((Math.random() * 6));
}

Game.prototype.playGame = function(teamA, teamB){

    teamAGoals = this.randomGoal();
    teamBGoals = this.randomGoal();

alert("Golos da team A -> " + teamAGoals);
alert("Golos da team B -> " + teamBGoals);

    if (teamAGoals > teamBGoals) {
        teamA.points += 3;
    } else if (teamAGoals < teamBGoals) {
        teamB.points += 3;
    } else if (teamAGoals === teamBGoals) {
        teamA.points += 1;
        teamB.points += 1;
    }
}