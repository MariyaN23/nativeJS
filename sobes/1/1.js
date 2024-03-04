var x = 10
function bar(funcArg) {
    var x = 30
    funcArg()
}
function foo() {
    console.log(x)
}
foo.x = 20
bar.x = 40
bar(foo)


let a = 10
a.b = 10
console.log(a)

console.log(0 || 1 && 2 || 3)

class GODListener {
    constructor() {
        this.counter = 0
    }
    handleClick(){
        this.counter += 1
        console.log(this.counter)
    }
}

const element = document.getElementById('testBtn')
const listener = new GODListener()
console.log(element)
element.addEventListener('click', listener.handleClick)

var obj = {
    a: ()=> {
        console.log(this.prop)
    },
    prop: 1
}
obj.a()
var fn = obj.a.bind(obj)
fn()



const obj1 = {
    x: 10
}
//const obj2 = Object.create(obj1.x)
//const obj2 = obj1.create('x')
//const obj2 = obj1.create({x: 10})
const obj2 = Object.create(obj1)
console.log(obj2.x)

console.log('abc' == new String('abc'))
console.log(typeof new String('abc'))

const s1 = ['a', 'b', 'c']
const s2 = ['d', 'e', 'f']
const result = s1.concat(s2).join('+')
console.log(result)


function foo() {}
foo.x = 10
console.log(foo.x)


new function () {
console.log(this)
}

const map = new Map()
map.set('0', '1')
map.set('s2', '2s')
map.set('3s', 's3')

const arr = [...map.values()]
const result = arr.map(value => parseInt(value, 10))
console.log(result)