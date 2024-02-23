let pr = new Promise((res, rej)=> res('Oleg'))
console.log(pr.then(value => value) === pr.then(value => value)) // false

console.log(1)
let pr = new Promise((res, rej)=> {
    res('Oleg')
    console.log(2)
})
pr.then(value => console.log(3))
pr.then(value => console.log(4))
console.log(5)
//1, 2, 5, 3, 4

Promise.all([Promise.resolve(3), Promise.resolve(5)])
    .then(data => data.map(el=>console.log(el)))


let pr = new Promise((res, rej) => {
    rej('Oleg')
})

pr.then(()=> console.log(1))
.catch(()=> console.log(2))
.catch(()=> console.log(3))
.then(()=> console.log(4))
//2, 4

async function yo() {
    return 5
}
let a = yo()
console.log(a)
//Promise { 5 }

async function yo() {
    return 5
}
(async function () {
    let res = await yo()
    console.log(res)
})()
//5

axios.get('http://google.com/users/12')
.then(user => axios.get('http://belarusbank.by' + user.account))
.then(money => console.log(money))

let pr = new Promise(res => {
    res(1)
})
pr.then(res => res)
.then(res => Promise.resolve(res + 2))
.then(res => Promise.resolve(res - 1))
.then(res => res + 2)
.then(res => console.log(res))
//4

let pr = new Promise((resolve, reject)=> {
    reject('Oleg')
})
pr.then((res)=> {}, (rej)=> {alert(2)})

pr.then((res)=> {}).catch((rej)=> {alert(2)})

let pr = new Promise((resolve, reject)=> {
    reject('Sasha')
});
(async function () {
    try {
        let res = await pr
        console.log(res)
    } catch (error) {
        console.log(`error: ${error}`)
    }
}())
