import axios from 'axios';

const makeGoogleRequest =()=> {
    const pr = axios.get('https://www.google.com')
    const pr2 = pr.then(res => res.data)
    const pr3 = pr2.then(data=>data.vacansies)
    return pr3
}

makeGoogleRequest().then(vacansies=>console.log(vacansies))

axios.get('https://www.google.com')
    .then(res => res.data)
    .then(data => console.log(data))

const callbackHell = findUserInDB(1)
    .then(user => {
        console.log(user)
        findUserInDB(user.friend)
            .then(user => {
                console.log(user)
                findUserInDB(user.friend)
                    .then(user => {
                        console.log(user)
                    })
            })
    })
const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user=>findUserInDB(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => {
        console.log(friend2)
        return friend2
    })
    .then(friend2 => findUserInDB(friend2.friend))
    .then(friend3 => {
        console.log(friend3)
    })

let run = async () => {
    let user = await findUserInDB(1)
    console.log(user)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2)
    let friend3 = await findUserInDB(friend2.friend)
    console.log(friend3)
}


function getNumber() {
    //const promise = Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject)=> {
        //reject('some error')
        setTimeout(()=> {
            resolve(Math.random())
        }, 2000)
    })
    return promise
}

getNumber().then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem('some key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
            const promise = new Promise((resolve, reject) => {
                try {
                    localStorage.setItem('some key', JSON.stringify(data))
                    resolve(true)
                } catch (error) {
                    reject(error)
                }
            })
        return promise
    },
    read() {
        const data = localStorage.getItem('some key')
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    readAsync() {
         return new Promise((resolve, reject)=> {
             const data = localStorage.getItem('some key')
             if (!data) {
                 resolve(null)
             } else {
                 resolve(data)
             }
        })
    }
}

const result = repo.save({name: 'Dimych'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}
const data = repo.read()
console.log(data)


repo.saveAsync({name: 'Dimych'})
    .then(()=>console.log('SAVED'))
    .catch((error)=>console.warn('NOT SAVED' + error))

const run2 = async ()=> {
    await repo.saveAsync({name: 'Dimych'})
    console.log('SAVED')
    const data = await repo.readAsync()
    console.log(data)
}


let count = 0
const time = setTimeout(()=> {
    console.log(count)
    count++
}, 1000)


function wait(time) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve()
        }, time)
    })
}

const run3 = async ()=> {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)
}

run3()