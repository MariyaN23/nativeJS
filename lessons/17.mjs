//генераторы

const generator.next = {
    value: value,
    done: true/false
}

function* generateSalaryWithBonus(salary) {
    const a = yield salary + (salary / 100) * 15
    console.log(a)
    yield salary + (salary / 100) * 20
    yield salary + (salary / 100) * 25
    yield salary + (salary / 100) * 30
    return  salary + (salary / 100) * 35
}

const salary = generateSalaryWithBonus(500)
console.log(salary.next()) //{ value: 575, done: false }
console.log(salary.next(1500000)) //{ value: 600, done: false }
console.log(salary.next()) //{ value: 625, done: false }
console.log(salary.next()) //{ value: 650, done: false }
console.log(salary.next()) //{ value: 675, done: true }
console.log(salary.next()) //{ value: undefined, done: true }


function* random() {
    while (true) {
        yield Math.floor(Math.random() * 10)
    }
}

const result = random()
console.log(result.next().value)

import fetch from 'node-fetch';

const foo = async ()=> {
    const data = await fetch("https://yahoo.com/?query=js")
    console.log('dataFromYahoo: ', data.url)
}
console.log('start')
foo()
console.log('end')



const foo2 = newAsync(function* () {
    const data = yield fetch("https://yahoo.com/?query=js")
    console.log('dataFromYahoo: ', data.url)
})

function newAsync(generationFunction) {
    return function () {
        const generator = generationFunction()

        function resolve(next) {
            if (next.done) {
                return Promise.resolve(next.value)
            }
            return Promise.resolve(next.value).then((res)=> {
                return resolve(generator.next(res))
            })
        }
        return resolve(generator.next())
    }
}
console.log('start foo2')
foo2()
console.log('end foo2')