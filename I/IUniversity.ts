export interface IUniversity {
    persons: IPerson[]
    students: Student[]
    teachers: Teacher[]

    FindByLastName(lastName: string): IPerson[]
}