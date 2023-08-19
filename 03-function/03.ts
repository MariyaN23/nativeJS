import {StudentType} from '../02-objects/02';
import {CityType, governmentBuildingType, HouseType} from '../02-objects/02_02';

//function expression: callback, component
export const sum = (a:number, b: number) => {
    return a + b
}

//function declaration
export function sum2(a:number, b: number) {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
      id: new Date().getTime(),
      title: skill
  })
}

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function doesStudentLiveInCity(stu: StudentType, cityCompare:string) {
    return (stu.address.city.title === cityCompare)
}

export const addMoneyToBudget = (building: governmentBuildingType, budget: number) => {
building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (staff: governmentBuildingType, reducedPeople: number) => {
    staff.staffCount -= reducedPeople
}

export const toHireStaff = (staff: governmentBuildingType, increasePeople: number) => {
    staff.staffCount += increasePeople
}

export function createMessage(cityCity: CityType) {
    //return "Hello " + cityCity.title + " citizens. I want you be happy. All of " + cityCity.citizensNumber
    return `Hello ${cityCity.title} citizens. I want you be happy. All of ${cityCity.citizensNumber}`
}