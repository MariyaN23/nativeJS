//лексическое окружение

/*const globalLexicalEnvironment = {
    environmentsVariables: {
        //все переменные
    },
    outer: null //ссылка на внешнее окружение, выше глобального окружения ничего нет
}*/

// globalLE {startEngine: function, car2: undefined} -> null

let car = 'bmw'  // globalLE {startEngine: function, car2: undefined, car: 'bmw'} -> null
var car2 = 'kia' // globalLE {startEngine: function, car2: 'kia', car: 'bmw'} -> null

startEngine() // function declaration, var - всплывают

function startEngine() {
    //outer: globalLE
    // startEngineLE {} - когда вызывается ф-ция создается новое лексическое окружение (+ когда for, if, {}, кроме объекта)
    let car = 'kia'
    console.log(`Start ${car}`)
}

const obj = {
    //не создается лексическое окружение
}

const startEngine2 = function () { // globalLE {startEngine: function, car: 'bmw', startEngine2: function } -> null
    console.log(`Start ${car}`)
}

startEngine() // function expression, let, const ... - не всплывает

//startEngine()
//car = 'audi' // globalLE {startEngine: function, car2: 'kia', car: 'audi', } -> null
//startEngine()

const a = 10
const b = 20
const c = 50

function foo() {
    const a = 30
    const b = 40
    console.log(a)
    foo2()
    const bar =()=> {
        console.log(c)
    }
    bar()
}
// замыкание - св-во ф-ции запомнить свое лексическое окружение

foo()

function foo2() {
    console.log(b)
}

const counterCreator =()=> {
    let count = 0

    return ()=> {
        console.log(++count)
    }
}

const counter = counterCreator()
const counter2 = counterCreator()

counter()
counter()
counter()

counter2()
counter2()
counter2()

// 2(4) => 2*2(3) => 2*2*2(2) => 2*2*2*2(1)

//рекурсия
function exp (a,n) {
    if (n===1) { //условие выхода
        return a
    } else {
        return a * exp(a, n-1)
    }
}

console.log(exp(4,4))
// стек выполнение ф-ций

//faq(5) => 1*2*3*4*5

function faq(x) {
    if (x===1) {
        return x
    } else {
        return x * faq(x-1)
    }
}

console.log(faq(6))

//fib(5) => 1+1+2+3+5

function fib(x) {
    if (x<=1) {
        return x
    } else {
        return fib(x-1)+fib(x-2)
    }
}

console.log(fib(8))