//__proto__, prototype
const pr = new Promise (()=> {})
console.log(pr)

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
const car1 = new Car('toyota', 750)
console.dir(car1)

console.log(car1.__proto__ === Car.prototype) //true
const car2 = new Car('toyota', 450)
console.log(car1.__proto__ === car2.__proto__) //true

console.log(car1.__proto__.__proto__ === Car.prototype.__proto__) //true
console.log(car1.__proto__.__proto__ === Object.prototype) //true
console.log(car1.__proto__.__proto__.__proto__ === null) //true

car1.__proto__ = {}*/
//car1.startEngine() //не получится
//car1.showMaxSpeed() //получится стрелочная функция

const a = new Array(1, 2)
console.log(a.__proto__ === Array.prototype) //true

const b = 23
console.log(b.__proto__ === Number.prototype) //true

const c = new Number(2)
console.log(c)

const str = 'str'
console.log(str.__proto__ === String.prototype) //true

const boo = true
console.log(boo.__proto__ === Boolean.prototype) //true

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

function CarFoo(model, maxSpeed) {
    this.model = model
    this.maxSpeed = maxSpeed
}

const carFoo1 = new CarFoo('tesla', 8940)
CarFoo.prototype.startEngine = function (){
    console.log(`Start ${this.model}`)
}
carFoo1.startEngine()
CarFoo.compareCars = function () {
    console.log('compare')
}

/*
Function.prototype = {}
console.log(Function)*/

function SuperCarFoo(model, maxSpeed, canFly) {
    this.model = model
    this.maxSpeed = maxSpeed
    this.canFly = canFly
}

const superCarFoo1 = new SuperCarFoo('kia', 200, true)
//обычный метод
SuperCarFoo.prototype.__proto__ = CarFoo.prototype
superCarFoo1.startEngine()

//статический метод
SuperCarFoo.__proto__ = CarFoo
CarFoo.compareCars()
SuperCarFoo.compareCars()

console.log(Function.__proto__ === Function.prototype)