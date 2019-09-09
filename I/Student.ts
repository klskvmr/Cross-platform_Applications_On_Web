class Student implements IPerson {
    Name: string
    Patronymic: string
    LastName: string
    BirthDate?: Date
    Weight?: number
    Course: number
    Group: string
    GPA: number
    
    constructor(person: IPerson, course: number, group: string, gpa: number) {
        this.Name = person.Name
        this.Patronymic = person.Patronymic
        this.LastName = person.LastName
        this.BirthDate = person.BirthDate
        this.Weight = person.Weight
        this.Course = course
        this.Group = group
        this.GPA = gpa
    }
}