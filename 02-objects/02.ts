type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    "name": string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}

const student:StudentType = {
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

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)