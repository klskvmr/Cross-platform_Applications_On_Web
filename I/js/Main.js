"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const University_1 = require("./University");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let iuniversity = {};
        iuniversity.students = JSON.parse(yield fs_1.promises.readFile("students.json", "utf8"));
        iuniversity.teachers = JSON.parse(yield fs_1.promises.readFile("teachers.json", "utf8"));
        iuniversity.persons = [];
        iuniversity.persons = iuniversity.persons.concat(iuniversity.students, iuniversity.teachers);
        let university = new University_1.University(iuniversity);
        fs_1.promises.writeFile("sorted.json", JSON.stringify(university.persons, null, '\t'));
        fs_1.promises.writeFile("finded_by_last_name.json", JSON.stringify(university.FindByLastName("Brown"), null, '\t'));
        fs_1.promises.writeFile("finded_by_department.json", JSON.stringify(university.FindByDepartment("a"), null, '\t'));
    });
}
main();
//# sourceMappingURL=Main.js.map