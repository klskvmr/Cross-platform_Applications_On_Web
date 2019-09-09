"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class University {
    constructor(iuniversity) {
        this.persons = this.SortByName(iuniversity.persons);
        this.students = this.SortByName(iuniversity.students);
        this.teachers = this.SortByName(iuniversity.teachers);
    }
    FindByLastName(lastName) {
        let finded = [];
        let i = 0;
        while (i != this.persons.length) {
            if (this.persons[i].LastName === lastName)
                finded.push(this.persons[i]);
            ++i;
        }
        return finded;
    }
    FindByDepartment(department) {
        let finded = [];
        this.teachers.forEach(teacher => {
            if (~teacher.Department.indexOf(department)) {
                finded.push(teacher);
            }
        });
        return finded.sort((a, b) => {
            if (a.Rank < b.Rank)
                return -1;
            if (a.Rank > b.Rank)
                return 1;
            return 0;
        });
    }
    SortByName(persons) {
        persons.sort((a, b) => {
            if (a.Name < b.Name)
                return -1;
            if (a.Name > b.Name)
                return 1;
            return 0;
        });
        return persons;
    }
}
exports.University = University;
//# sourceMappingURL=University.js.map