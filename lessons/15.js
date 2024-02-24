//function
/*
function createCar(model, maxSpeed) {
    return {
        model,
        maxSpeed,
        startEngine() {
            console.log(`Start ${this.model}`)
        }
    }
}

console.log(createCar('bmw', 300))
console.log(createCar('kia', 200))*/


//function constructor
/*function CreateCar(model, maxSpeed) {
    this.model = model
    this.maxSpeed = maxSpeed
}
CreateCar.prototype.startEngine = function (){
    console.log(`Start ${this.model}`)
}
const car1 = new CreateCar('bmw', 300)
car1.startEngine()*/

//class

class Car {
    constructor(model, maxSpeed) {
        this.model = model
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`Start ${this.model}`)
    }
}

const car1 = new Car('bmw', 300)
car1.startEngine()