function DeleteUserAction(userId) {
    //this = {}
    this.type = 'DELETE-USER';
    this.payload = {
        userId
    }
}

const action1 = DeleteUserAction(12)
console.log(action1) //undefined

const action2 = new DeleteUserAction(12)
console.log(action2)

function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}

User.prototype.hello = function() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988, 1, 2))
console.log(u1)
u1.hello()