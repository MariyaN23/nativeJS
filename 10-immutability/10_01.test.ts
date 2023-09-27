import {
    addNewBooks, filteredBook,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, updateBook, updateCompany, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 45
        }
    }

    const cutUser = makeHairstyle(user, 2)

    expect(cutUser.hair).toBe(25)
    expect(user.hair).toBe(50)
    expect(cutUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Lenovo')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Lenovo')
    expect(user.laptop.title).toBe('MacBook')
})

test('move to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        },
        books: [
            'css',
            'html',
            'js',
            'react'
        ]
    }

    const userCopy = moveUserToOtherHouse(user, 54)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).not.toBe(user.address)
    expect(userCopy.address.house).toBe(54)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        },
        books: [
            'css',
            'html',
            'js',
            'react'
        ]
    }

    const userCopy = addNewBooks(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        },
        books: [
            'css',
            'html',
            'js',
            'react'
        ]
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        },
        books: [
            'css',
            'html',
            'js',
            'react'
        ]
    }

    const userCopy = filteredBook(user,'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).toBe(user.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Svetlana',
        hair: 50,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'MacBook'
        },
        companies: [
            {
                id: 1,
                title: 'Яндекс'
            },
            {
                id: 2,
                title: 'Google'
            }
        ]
    }

    const userCopy = updateCompany(user, 1, 'Apple') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(userCopy.address).toBe(user.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Apple')
})

test('update company', () => {
    let companies = {
        'Dimych': [{id: 1, title: 'Яндекс'}, {id: 2, title: 'Google'}],
        'Oleg': [{id: 2, title: 'Google'}],
    }

    const copy = updateCompanyTitle(companies, 'Dimych', 1, 'Apple')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Oleg']).toBe(companies['Oleg'])
    expect(copy['Dimych'][0].title).toBe('Apple')
})