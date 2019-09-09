interface IPerson {
    Name: string
    Patronymic: string
    Surname: string
    BirthDate?: string
    Weight?: number
}

class Student implements IPerson {
    Name: string
    Patronymic: string
    Surname: string
    BirthDate?: string
    Weight?: number
    Course: number
    Group: string
    GPA: number
    
    constructor(person: IPerson, course: number, group: string, gpa: number) {
        this.Name = person.Name
        this.Patronymic = person.Patronymic
        this.Surname = person.Surname
        this.BirthDate = person.BirthDate
        this.Weight = person.Weight
        this.Course = course
        this.Group = group
        this.GPA = gpa
    }
}

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
    Surname: string
    BirthDate?: string
    Weight?: number
    Department: string
    Rank: Rank
    Experience: number

    constructor (person: IPerson, department: string, experience: number, rank: Rank) {
        this.Name = person.Name
        this.Patronymic = person.Patronymic
        this.Surname = person.Surname
        this.BirthDate = person.BirthDate
        this.Weight = person.Weight
        this.Department = department
        this.Experience = experience
        this.Rank = rank
    }
}

class University {
    persons: IPerson[]

    constructor() {
        this.persons = []
    }

    public FindBySurname(surname: string): IPerson[] {
        let finded: IPerson[] = []

        for (let i: number = 0; i < this.persons.length; i++) {
            if(this.persons[i].Surname === surname)
                finded.push(this.persons[i])
        }

        return finded
    }

    public FindByDepartment(department: string): Teacher[] {
        let finded: Teacher[] = []

        this.persons.forEach(person => {
            if (isTeacher(person)) {
                if(~person.Department.indexOf(department)) {
                    finded.push(person)
                }
            }
        })

        return finded.sort((a, b) => {
            if (a.Rank < b.Rank) return -1
            if (a.Rank > b.Rank) return 1
            return 0
        })
    }

    public GetPersons() {
        this.persons.sort((a, b) => {
            if (a.Surname < b.Surname) return 1
            if (a.Surname > b.Surname) return -1
            return 0
        })

        return this.persons
    }

    public GetTeachers() {
        let result: Teacher[] = []

        for (var person of this.persons) {
            if (isTeacher(person)) {
                result.push(person)
            }
        }

        result.sort((a, b) => {
            if (a.Surname < b.Surname) return 1
            if (a.Surname > b.Surname) return -1
            return 0
        })
        return result
    }

    public GetStudents() {
        let result: Student[] = []

        for (var person of this.persons) {
            if (isStudent(person)) {
                result.push(person)
            }
        }

        result.sort((a, b) => {
            if (a.Surname < b.Surname) return 1
            if (a.Surname > b.Surname) return -1
            return 0
        })

        return result
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

function isStudent(person: IPerson): person is Student {
    return (<Teacher>person).Department == undefined && (<Student>person).Group != undefined;
}

function isTeacher(person: IPerson): person is Teacher {
    return (<Student>person).Group == undefined && (<Teacher>person).Department != undefined;
}

let university = new University();

university.persons.push(<Student>
    {
        Name: "John",
        Patronymic: "Valeryevich",
        Surname: "Smith",
        BirthDate: "1999-30-08",
        Weight: 70,
        Course: 3,
        Group: "B613",
        GPA: 4.6
    })

university.persons.push(<Student>
    {
        Name: "Dustin",
        Patronymic: "Vasilyevich",
        Surname: "Gray",
        BirthDate: "1998-15-04",
        Weight: 83,
        Course: 3,
        Group: "B613",
        GPA: 3.9
    })

university.persons.push(<Student>
    {
        Name: "Eliazar",
        Patronymic: "Aleksandrovich",
        Surname: "Parkson",
        BirthDate: "2001-01-12",
        Course: 1,
        Group: "A701",
        GPA: 4.0
    })

university.persons.push(<Student>
    {
        Name: "Robert",
        Patronymic: "Robertovich",
        Surname: "Glass",
        Course: 4,
        Group: "G302",
        GPA: 3.3
    })

university.persons.push(<Student>
    {
        Name: "Rasmus",
        Patronymic: "Semenovich",
        Surname: "Johansson",
        Weight: 92,
        Course: 2,
        Group: "C200",
        GPA: 4.7
    })

university.persons.push(<Teacher>
    {
        Name: "Igor",
        Patronymic: "Gennadyevich",
        Surname: "Solovyev",
        BirthDate: "1980-07-07",
        Weight: 85,
        Department: "am",
        Rank: 3,
        Experience: 10
    })

university.persons.push(<Teacher>    
    {
        Name: "Mark",
        Patronymic: "Vitalyevich",
        Surname: "Grass",
        BirthDate: "1963-26-10",
        Weight: 93,
        Department: "ai",
        Rank: 5,
        Experience: 26
    })

    university.persons.push(<Teacher>
        {
            Name: "Mark",
            Patronymic: "Gennadyevich",
            Surname: "Bresman",
            BirthDate: "1989-11-07",
            Weight: 85,
            Department: "ai",
            Rank: 1,
            Experience: 10
        })

university.persons.push(<Teacher>          
    {
        Name: "Bob",
        Patronymic: "Vladimirovich",
        Surname: "Young",
        BirthDate: "1990-12-09",
        Weight: 75,
        Department: "am",
        Rank: 2,
        Experience: 3
    })

university.persons.push(<Teacher>       
    {
        Name: "Olga",
        Patronymic: "Mikhailovna",
        Surname: "Kholodkova",
        Department: "wd",
        Rank: 4,
        Experience: 17
    })

university.persons.push(<Teacher>      
    {
        Name: "Nick",
        Patronymic: "K",
        Surname: "Johnas",
        Weight: 85,
        Department: "hr",
        Rank: 1,
        Experience: 1
    })

function showPersonsTable() {
    let elem = document.getElementById("DisplayTableID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML ="<table> <caption> processing </caption> </table>"
        let persons = university.GetPersons()

        let table = `
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Name</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Patronymic</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Surname</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">BirthDate</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Weight</th>
            </tr>
        </thead>
        `
        table += '<tbody>'

        for (var person of persons) {
            table += `<tr>`
            table += `<td> ${person.Name} </td>`
            table += `<td> ${person.Patronymic} </td>`
            table += `<td> ${person.Surname} </td>`
            table += `<td> ${person.BirthDate != undefined ? person.BirthDate : "XXXX-XX-XX"} </td>`
            table += `<td> ${person.Weight != undefined ? person.Weight : "XX"} </td>`
            table += `</tr>`
        }

        table += `</tbody> </table>`
        elem.innerHTML = table
    }
}

function showTeachersTable() {
    let elem = document.getElementById("DisplayTableID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML ="<table> <caption> processing </caption> </table>"
        let teachers = university.GetTeachers()

        let table = `
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Name</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Patronymic</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Surname</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">BirthDate</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Weight</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Department</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Rank</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Experience</th>
            </tr>
        </thead>
        `
        table += '<tbody>'

        for (var teacher of teachers) {
            table += `<tr>`
            table += `<td> ${teacher.Name} </td>`
            table += `<td> ${teacher.Patronymic} </td>`
            table += `<td> ${teacher.Surname} </td>`
            table += `<td> ${teacher.BirthDate != undefined ? teacher.BirthDate : "XXXX-XX-XX"} </td>`
            table += `<td> ${teacher.Weight != undefined ? teacher.Weight : "XX"} </td>`
            table += `<td> ${teacher.Department} </td>`
            table += `<td> ${teacher.Rank} </td>`
            table += `<td> ${teacher.Experience} </td>`
            table += `</tr>`
        }

        table += `</tbody> </table>`
        elem.innerHTML = table
    }
}

function showStudentsTable() {
    let elem = document.getElementById("DisplayTableID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML ="<table> <caption> processing </caption> </table>"
        let students = university.GetStudents()

        let table = `
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col" 
                style="background-color:pink; border: 2px solid white;">Name</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Patronymic</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Surname</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Birth Date</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Weight</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Course</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Group</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">GPA</th>
            </tr>
        </thead>
        `
        table += '<tbody>'

        for (var student of students) {
            table += `<tr>`
            table += `<td> ${student.Name} </td>`
            table += `<td> ${student.Patronymic} </td>`
            table += `<td> ${student.Surname} </td>`
            table += `<td> ${student.BirthDate != undefined ? student.BirthDate : "XXXX-XX-XX"} </td>`
            table += `<td> ${student.Weight != undefined ? student.Weight : "XX"} </td>`
            table += `<td> ${student.Course} </td>`
            table += `<td> ${student.Group} </td>`
            table += `<td> ${student.GPA} </td>`
            table += `</tr>`
        }

        table += `</tbody> </table>`
        elem.innerHTML = table
    }
}

function showFindedTeachersTable() {
    let form = document.forms.namedItem("form1")

    if (form == null) {
        return null
    } 

    var department = (<any>form[0]).value
    let finded: Teacher[] = university.FindByDepartment(department)

    let elem = document.getElementById("DisplayTableID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML ="<table> <caption> processing </caption> </table>"

        let table = `
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Name</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Patronymic</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Surname</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">BirthDate</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Weight</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Department</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Rank</th>
                <th scope="col" style="background-color:pink; border: 2px solid white;">Experience</th>
            </tr>
        </thead>
        `
        table += '<tbody>'

        for (var teacher of finded) {
            table += `<tr>`
            table += `<td> ${teacher.Name} </td>`
            table += `<td> ${teacher.Patronymic} </td>`
            table += `<td> ${teacher.Surname} </td>`
            table += `<td> ${teacher.BirthDate != undefined ? teacher.BirthDate : "XXXX-XX-XX"} </td>`
            table += `<td> ${teacher.Weight != undefined ? teacher.Weight : "XX"} </td>`
            table += `<td> ${teacher.Department} </td>`
            table += `<td> ${teacher.Rank} </td>`
            table += `<td> ${teacher.Experience} </td>`
            table += `</tr>`
        }

        table += `</tbody> </table>`
        elem.innerHTML = table
    }
}

function hideTable() {
    let elem = document.getElementById("DisplayTableID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML = ""
    }
}

function addPersonForm() {
    let elem = document.getElementById("addFormID")
    if(elem == null)  {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML = `
        <form id="form">
            <div class="row">
                <div class="col">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col">
                    <label>Patronymic</label>
                    <input type="text" class="form-control" placeholder="Patronymic">
                </div>
                <div class="col">
                    <label>Surname</label>
                    <input type="text" class="form-control" placeholder="Surname">
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label>Birth Date</label>
                    <input type="text" class="form-control" placeholder="yyyy-dd-mm">
                </div>
                <div class="col">
                    <label>Weight</label>
                    <input type="text" class="form-control" placeholder="Number">
                </div>
            </div>

            <h3>    </h3>
            <button type="button"  class="btn btn-outline-light btn-lg btn-block" onclick="addPerson()">Input</button>
        </form> `
    }
}

function addPerson() {
    let form = document.forms.namedItem("form")

    if(form != null) {
        let name = (<any>form[0]).value
        let patronymic = (<any>form[1]).value
        let surname = (<any>form[2]).value
        let birthDate = (<any>form[3]).value
        let weight = (<any>form[4]).value

        university.persons.push(
            {
                Name: name,
                Patronymic: patronymic,
                Surname: surname,
                BirthDate: birthDate,
                Weight: weight
            })
    }
}

function addTeacherForm() {
    let a = document.getElementById("addFormID")
    
    if(a == null) {
        alert("Element by ID not found.")
    } else {
        a.innerHTML = `
        <form id="form">
        <div class="row">
            <div class="col">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col">
                <label>Patronymic</label>
                <input type="text" class="form-control" placeholder="Patronymic">
            </div>
            <div class="col">
                <label>Surname</label>
                <input type="text" class="form-control" placeholder="Surname">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label>Birth Date</label>
                <input type="text" class="form-control" placeholder="yyyy-dd-mm">
            </div>
            <div class="col">
                <label>Weight</label>
                <input type="text" class="form-control" placeholder="Number">
            </div>
            <div class="col">
                <label>Department</label>
                <input type="text" class="form-control" placeholder="Department">
            </div>
            <div class="col">
                <label>Experience</label>
                <input type="text" class="form-control" placeholder="Number">
            </div>
            <div class="col">
                <label>Rank</label>
                <input type="text" class="form-control" placeholder="Rank">
            </div>
        </div>
    
        <h3>    </h3>
        <button type="button"  class="btn btn-outline-light btn-lg btn-block" onclick="addTeacher()">Input</button>
        </form>
        `
    }
}

function addTeacher() {
    let form = document.forms.namedItem("form")

    if (form != null) {
        let name = (<any>form[0]).value
        let patronymic = (<any>form[1]).value
        let surname = (<any>form[2]).value
        let birthDate = (<any>form[3]).value
        let weight = (<any>form[4]).value
        let department = (<any>form[5]).value
        let rank = (<any>form[6]).value
        let experience = (<any>form[7]).value

        university.persons.push(<Teacher>
        {
            Name: name,
            Patronymic: patronymic,
            Surname: surname,
            BirthDate: birthDate,
            Weight: weight,
            Department: department,
            Rank: rank,
            Experience: experience
        })
    }
}

function addStudentForm() {
let a = document.getElementById("addFormID")

if(a == null) {
        alert("Element by ID not found.")
    } else {
        a.innerHTML = `
        <form id="form">
        <div class="row">
            <div class="col">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col">
                <label >Patronymic</label>
                <input type="text" class="form-control" placeholder="Patronymic">
            </div>
            <div class="col">
                <label>Surname</label>
                <input type="text" class="form-control" placeholder="Surname">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label>Birth Date</label>
                <input type="text" class="form-control" placeholder="yyyy-dd-mm">
            </div>
            <div class="col">
                <label>Weight</label>
                <input type="text" class="form-control" placeholder="Number">
            </div>
            <div class="col">
                <label>Course</label>
                <input type="text" class="form-control" placeholder="Number">
            </div>
            <div class="col">
                <label>Group</label>
                <input type="text" class="form-control" placeholder="Group">
            </div>
            <div class="col">
                <label>GPA</label>
                <input type="text" class="form-control" placeholder="Number">
            </div>
        </div>
    
        <h3>    </h3>
        <button type="button"  class="btn btn-light btn-lg btn-block" onclick="addStudent()">Input</button>
        </form>
        `
    }
}

function addStudent() {
    let form = document.forms.namedItem("form")

    if (form != null) {
        let name = (<any>form[0]).value
        let patronymic = (<any>form[1]).value
        let lastName = (<any>form[2]).value
        let birthDate = (<any>form[3]).value
        let weight = (<any>form[4]).value
        let course = (<any>form[5]).value
        let group = (<any>form[6]).value
        let gpa = (<any>form[7]).value

        university.persons.push(<Student>
        {
            Name: name,
            Patronymic: patronymic,
            Surname: lastName,
            BirthDate: birthDate,
            Weight: weight,
            Course: course,
            Group: group,
            GPA: gpa
        })
    }
}

function findByDepartmentForm() {
    let elem = document.getElementById("addFormID")
    if(elem == null)  {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML = `
        <form id="form1">
            <div class="row">
                <div class="col">
                    <label>Department</label>
                    <input type="text" class="form-control" placeholder="Department">
                </div>
            </div>
            <h3>    </h3>
            <button type="button"  class="btn btn-outline-light btn-lg btn-block" onclick="findByDepartment1()">Find</button>
        </form> `
    }
}

function hideForm() {
    let elem = document.getElementById("addFormID")

    if (elem == null) {
        alert("Element by ID not found.")
    } else {
        elem.innerHTML = ``
    }
}