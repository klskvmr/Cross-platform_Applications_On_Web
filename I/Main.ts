import { promises as fsPromises } from "fs"
import { University } from "./University"
import { IUniversity } from "./IUniversity"

async function main() {
    let iuniversity: IUniversity = {} as IUniversity

    iuniversity.students = <Student[]>JSON.parse(await fsPromises.readFile("students.json", "utf8"))
    iuniversity.teachers = <Teacher[]>JSON.parse(await fsPromises.readFile("teachers.json", "utf8"))
    iuniversity.persons = []
    iuniversity.persons = iuniversity.persons.concat(iuniversity.students, iuniversity.teachers)

    let university: University = new University(iuniversity)

    fsPromises.writeFile("sorted.json", JSON.stringify(university.persons, null, '\t'))
    fsPromises.writeFile("finded_by_last_name.json", JSON.stringify(university.FindByLastName("Brown"), null, '\t'))
    fsPromises.writeFile("finded_by_department.json", JSON.stringify(university.FindByDepartment("a"), null, '\t'))
}

main()