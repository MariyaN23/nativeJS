const deleteUser = (userId)=> {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId
        }
    }
    return action
}

const action1 = deleteUser(12)
console.log(action1)


function commonHello () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric =(name)=> {
    const user = {
        name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1999, 1, 2),
        hello: commonHello
    }
    return user
}

const u1 = userFabric('Dimych')
console.log(u1)

u1.hello()