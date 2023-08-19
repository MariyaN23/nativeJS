export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type governmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION" //примитивные типы
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: governmentBuildingType[]
    citizensNumber: number
}

