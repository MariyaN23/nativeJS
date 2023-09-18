type userTestType = {
    name: string
    age: number
}

function increaseAge(user: userTestType) {
    user.age++
}

test('reference type test', () => {
    let user: userTestType = {
        name: 'Dimych',
        age: 32
    }
    increaseAge(user)
    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array type test', () => {
    let petushki = [
        {
            name: 'Zaremba',
            age: 26
        },
        {
            name: 'Lis',
            age: 25
        }
    ]

    var admins = petushki
    admins.push({name: 'Basik', age: 32})

    expect(petushki[2]).toEqual({name: 'Basik', age: 32})
})

test('value type test', () => {
    let usersCount = 100
    let adminCount = usersCount

    adminCount ++
})

test('reference test', () => {
    type newUserTestType = {
        name: string
        age: number
        city: {title: string}
    }

    let user: newUserTestType = {
        name: 'Dimych',
        age: 32,
        city: {
            title: 'Minsk'
        }
    }

    let user2: newUserTestType = {
        name: 'Natasha',
        age: 30,
        city: user.city
    }

    user2.city.title = 'Kanary'

    expect(user.city.title).toBe('Kanary')
    expect(user.city).toBe(user2.city)
})

test('reference array type test', () => {
    type newUserTestType = {
        name: string
        age: number
        city: {title: string}
    }

    let address = {
        title: 'Minsk'
    }

    let user: newUserTestType = {
        name: 'Dimych',
        age: 32,
        city: address
    }

    let user2: newUserTestType = {
        name: 'Natasha',
        age: 30,
        city: address
    }

    const users = [user, user2, {name:"Misha", age: 4, city:address}]
    const admins = [user, user2]

    admins[0].name="Dmitry"

    expect(users[0].name).toBe("Dmitry")
})

test('sort array test', () => {
    const letters = ['b', 'd', 'a', 'c']
    passportist(letters)
    expect(letters).toEqual(['b', 'd', 'a', 'c'])
})

function passportist(letters:Array<string>){
    letters.sort()
    console.log(letters)
}
