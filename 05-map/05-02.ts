import {governmentBuildingType, HouseType} from '../02-objects/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: governmentBuildingType[]) => {
    return buildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (house: HouseType[]) => {
    return house.map(h => h.address.street.title)
}

export const greetingMessageForStreet = (houses: HouseType[]) => {
    return houses.map(m => `Hello ${m.address.street.title}`)
}