import {StudentType} from '../02-objects/02';
import {addSkill, doesStudentLiveInCity, makeStudentActive} from './03';

let student: StudentType
beforeEach(()=> {
    student = {
        id: 1,
        "name": "Valera",
        age: 54,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "CSS"
            },
            {
                id: 2,
                title: "HTML"
            },
            {
                id: 3,
                title: "React"
            }
        ]

    }
})

test('new tech skill should be added to student', ()=> {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('student should live in city', ()=> {
    let result1 = doesStudentLiveInCity(student, "Moskow")
    let result2 = doesStudentLiveInCity(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})