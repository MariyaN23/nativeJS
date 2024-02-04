class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE-USER';
        this.payload = {
            userId
        }
    }
}

const action1 = new DeleteUserAction(12)
console.log(action1)

class User {
    #name = ""

    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }
    hello() {
        this.counter++
        console.log(`I am ${this.#name} from ${this.site}`)
    }
    get name() {
        return this.#name
    }
    set name(value) {
        if (value === 'Igor') throw new Error('Igor is not allowed name')
        this.#name = value
    }
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988, 1, 2))
const u2 = new User('Valera', 'it-pizza', new Date(1979, 1, 2))
console.log(u1)
u1.hello()
u2.hello()
u2.hello()
console.log(u1.hello === u2.hello) // у обоих один метод функция (в свойсве prototype)
console.log(u1.counter) //у каждого свой counter

//console.log(u1.name) //undefined if name private

//console.log(u1.getName())

console.log(u1.name)

u2.name="Igor" //setter
console.log(u2.name) //getter