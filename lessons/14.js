//this
// !"use strict" - {}
// "use strict" - undefined, {}, null, [], string

//1. Global scope
console.log(this)

//2. Function: f, arrow

const foo = ()=> {
    console.log(this)
}
foo() // из global

function bar() {
    const foo = ()=> {
        console.log(this)
    }
    foo()
}
bar() //window

const car = {
    foo: ()=> {
        console.log(this) //global
    }
}
car.foo()

function foo1 () {
    console.log(this)
}
foo1() // window

'use strict'
function foo2 () {
    console.log(this)
}
foo2() //undefined

const car2 = {
    foo() {
        console.log(this)
    },
    foo2: function () {
        console.log(this)
    },
    foo3: () => {
        console.log(this)
    },
    foo4() {
        console.log(this);
        (() => {
            console.log(this)
        })()
    },
    foo5: ()=> {
        console.log(this);
        (() => {
            console.log(this)
        })()
    }
}
car2.foo() //car2
car2.foo2() //car2
car2.foo3() //window
car2.foo4() //car2, car2
car2.foo5() //window, window

const car3 = {
    maxSpeed: 200,
    showMaxSpeed(){
        console.log(this.maxSpeed)
    },
    showMaxSpeed1:() =>{
        console.log(this.maxSpeed)
    }
}
car3.showMaxSpeed() //200
car3.showMaxSpeed1() //undefined

let car4 = {
    maxSpeed: 200,
    showMaxSpeed(){
        console.log(this.maxSpeed)
    }
}
let car5 = car4
car4 = null
car5.showMaxSpeed() //this - 200

const car6 = {
    maxSpeed: 200
}
const car7 = {
    maxSpeed: 300
}
function carSpeed() {
    console.log(this.maxSpeed)
}
car6.showMaxSpeed = carSpeed
car7.showMaxSpeed = carSpeed
car6.showMaxSpeed() //200
car7.showMaxSpeed() //300

//3. call, apply, bind
const scooter = {
    maxSpeed: 20
}

const car = {
    maxSpeed: 300,
    showMaxSpeed(a, b) {
        console.log(this.maxSpeed + a + b)
    }
}

car.showMaxSpeed.call(scooter, 20, 30)
const arr = [10, 20]
car.showMaxSpeed.apply(scooter, arr)

car.showMaxSpeed.bind(scooter, 70, 50)()

const scooter2 = {
    maxSpeed: 20
}
const car2 = {
    maxSpeed: 300,
    showMaxSpeed(a, b, c, d) {
        console.log(this.maxSpeed + a + b)
        console.log(c, d)
    }
}
car2.showMaxSpeed.bind(scooter2, 10, 20)(30, 40)

const scooter = {
    maxSpeed: 20
}
const bus = {
    maxSpeed: 40
}
const car = {
    maxSpeed: 300,
    showMaxSpeed() {
        console.log(this.maxSpeed)
    }
}
car.showMaxSpeed.bind(scooter).call(bus)

const ferrari = {
    maxSpeed: 333
}

var maxSpeed = 100
const car = {
    maxSpeed: 300,
    showMaxSpeed() {
        console.log(this.maxSpeed)
    },
    showMaxSpeed2: ()=> {
        console.log(this.maxSpeed)
    }
}
car.showMaxSpeed2() //global - undefined, window - 100
car.showMaxSpeed2.call(ferrari)

//4. Function constructor
function Car(maxSpeed, color = 'gold') {
    //this - новый {}
    this.maxSpeed = maxSpeed // {maxSpeed: 200}
    this.color = color // {maxSpeed: 200, color: 'red'}
    //return {maxSpeed: 200, color: 'red'}
}
const car1 = new Car(200, 'red')
const car2 = new Car(220)
console.log(car1)
console.log(car2)

//Потеря контекста
const car = {
    maxSpeed: 300,
    showMaxSpeed() {
        console.log(this.maxSpeed)
    }
}
setTimeout(car.showMaxSpeed, 1000) //undefined

setTimeout(()=> car.showMaxSpeed(), 1000)
setTimeout(car.showMaxSpeed.bind(car), 1000)


function foo() {
    const x = 10
    return {
        x: 20,
        bar: ()=> {
            console.log(this.x)
        },
        baz: function () {
            console.log(this.x)
        }
    }
}

const obj1 = foo()
obj1.bar() //undefined
obj1.baz() //20

const obj2 = foo.call({x: 30})
obj2.bar() //30
obj2.baz() //20

let r = obj2.bar
let z = obj2.baz
r() // 30
z() // undefined