function Competition(name, edition) {
    this.name = name;
    this.edition = edition;
    this.allTeamsList = [];
}

Competition.prototype.addTeam = function (team) {
    this.allTeamsList.push(team);
    return this;
}
