import { IUniversity  } from "./IUniversity"

export class University implements IUniversity {
    public persons: IPerson[]
    public students: Student[]
    public teachers: Teacher[]

    constructor(iuniversity: IUniversity) {
        this.persons = this.SortByName(iuniversity.persons)
        this.students = <Student[]>this.SortByName(iuniversity.students)
        this.teachers = <Teacher[]>this.SortByName(iuniversity.teachers)
    }

    public FindByLastName(lastName: string): IPerson[] {
        let finded: IPerson[] = []
        let i: number = 0
        while(i != this.persons.length) {

            if(this.persons[i].LastName === lastName)
                finded.push(this.persons[i])
            ++i
        }
        return finded
    }

    public FindByDepartment(department: string): Teacher[] {
        let finded: Teacher[] = []
        this.teachers.forEach(teacher => {

            if(~teacher.Department.indexOf(department)) {

                finded.push(teacher)
            }
        })
        return finded.sort((a, b) => {

            if (a.Rank < b.Rank) return -1
            if (a.Rank > b.Rank) return 1
            return 0
        })
    }

    private SortByName(persons: IPerson[]): IPerson[] {
        persons.sort((a, b) => {
            if (a.Name < b.Name) return -1
            if (a.Name > b.Name) return 1
            return 0
        })
        return persons
    }
}