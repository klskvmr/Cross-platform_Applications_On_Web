"use strict";
var Rank;
(function (Rank) {
    Rank[Rank["Graduate"] = 1] = "Graduate";
    Rank[Rank["Assistant"] = 2] = "Assistant";
    Rank[Rank["CandidateOfScience"] = 3] = "CandidateOfScience";
    Rank[Rank["Docent"] = 4] = "Docent";
    Rank[Rank["Professor"] = 5] = "Professor";
})(Rank || (Rank = {}));
class Teacher {
    constructor(person, department, experience, rank) {
        this.Name = person.Name;
        this.Patronymic = person.Patronymic;
        this.LastName = person.LastName;
        this.BirthDate = person.BirthDate;
        this.Weight = person.Weight;
        this.Department = department;
        this.Experience = experience;
        this.Rank = rank;
    }
}
//# sourceMappingURL=Teacher.js.map