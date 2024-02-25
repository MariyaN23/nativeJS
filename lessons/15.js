//function
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
console.log(createCar('kia', 200))


//function constructor
function CreateCar(model, maxSpeed) {
    this.model = model
    this.maxSpeed = maxSpeed
}
CreateCar.prototype.startEngine = function (){
    console.log(`Start ${this.model}`)
}
const car1 = new CreateCar('bmw', 300)
car1.startEngine()

//class

class Car {
    constructor(model, maxSpeed) {
        this.model = model
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`Start ${this.model}`)
    }
    showMaxSpeed =()=> {
        console.log(`Max speed ${this.maxSpeed}`)
    }
}

const car1 = new Car('bmw', 300)
car1.startEngine()
car1.showMaxSpeed()

//private
class Car {
    #model
    constructor(model, maxSpeed) {
        this.#model = model
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`Start ${this.#model}`)
    }
    /*getModel() {
        return this.#model
    }
    setModel(newModel) {
        if (newModel.length < 3) {
            throw new Error('error')
        }
        this.#model = newModel
    }*/
    get model() {
        return this.#model
    }
    set model(newModel) {
        this.#model = newModel
    }
}

const car1 = new Car('bmw', 300)
console.log(car1.getModel())
car1.setModel('toyota')
console.log(car1.getModel())
console.log(car1.model)
car1.model = 'toyota'
console.log(car1.model)


//static methods
class Car {
    constructor(model, maxSpeed) {
        this.model = model
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`Start ${this.model}`)
    }
    showMaxSpeed =()=> {
        console.log(`Max speed ${this.maxSpeed}`)
    }
    static compareCars(car1, car2) {
        car1.maxSpeed > car2.maxSpeed ? console.log(`${car1.model} faster than ${car2.model}`)
            : console.log(`${car2.model} faster than ${car1.model}`)
    }
}

const car1 = new Car('bmw', 300)
const car2 = new Car('toyota', 3000)
Car.compareCars(car1,car2)


//наследование
class Car {
    constructor(model, maxSpeed) {
        this.model = model
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`Start ${this.model}`)
    }
}

class SuperCar extends Car {
    constructor(model, maxSpeed, canFly) {
        super(model, maxSpeed);
        this.canFly = canFly
    }
}

const car3 = new SuperCar('tesla', 8500, true)
console.log(car3)
car3.startEngine()