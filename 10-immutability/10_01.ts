export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    //делаем копию:
    const copy = {
        ...u,  //поверхностная копия - shallow copy
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy  //обязательно return у чистой ф-ции
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    /* copy.address = {
         ...copy.address,
         city: city
     }*/
    //return copy
}

export function upgradeUserLaptop(u: UserWithLaptopType, noteBook: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: 'Lenovo'
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const filteredBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompany = (u: WithCompaniesType, companyId: number, updateTitle: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === companyId ? {...c, title: updateTitle} : c)
})

export const updateCompanyTitle = (companies: {[key: string]: Array<CompanyType>},
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {
    let companiesCopy = {...companies}
    companiesCopy[userName] = companiesCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companiesCopy
}
