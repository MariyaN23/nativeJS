import {CityType, governmentBuildingType} from '../02-objects/02_02'

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter((h)=>h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (government:  governmentBuildingType[], countStaff: number) => {
    return government.filter((g)=>g.staffCount > countStaff)
}