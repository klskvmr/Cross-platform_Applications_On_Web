enum Rank {
    Graduate = 1,
    Assistant,
    CandidateOfScience,
    Docent,
    Professor
}

class Teacher implements IPerson {
    Name: string
    Patronymic: string
    LastName: string
    BirthDate?: Date
    Weight?: number
    Department: string
    Rank: Rank
    Experience: number

    constructor (person: IPerson, department: string, experience: number, rank: Rank) {
        this.Name = person.Name
        this.Patronymic = person.Patronymic
        this.LastName = person.LastName
        this.BirthDate = person.BirthDate
        this.Weight = person.Weight
        this.Department = department
        this.Experience = experience
        this.Rank = rank
    }
}