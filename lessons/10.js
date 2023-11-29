//объект промис:
function MyPromise(callback) {
    const resolved = (data) => {
        return {
            PromiseState: 'fulfilled',
            PromiseResult: data
        }
    }
    const rejected = (err) => {
        return {
            PromiseState: 'rejected',
            PromiseResult: err
        }
    }
    callback(resolved, rejected)
}

//библиотека
const fs = require('fs')

const getDataFromFS = ()=> {
    return new Promise((res, rej)=> {
        fs.readFile('/index.js', (error, data)=> {
            if (error) {
                console.log("can't read file")
                rej(error)
            } else {
                console.log(data)
                res(data)
            }
        })
    })
}

const server = {
    getData() {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve('some data')
                //reject("error")
            }, 2000)
        })
    }
}
const promise = server.getData()
console.log(promise)

promise.then((data) => {
    console.log(data)
})

promise.catch((error) => {
    console.log(error)
})

//для собеседования:
promise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

promise.finally((error) => {
    console.log('finally, finally')
})

server.getData()
    .then((data) => {
        console.log('then 1', data)
        throw new Error('wrong data')
        return 10
    })
    .finally(()=> {
        console.log('finally1, finally1')
    })
    .catch((error) => {
        console.log('error 1', error)
    })
    .then((data) => {
        console.log('then 2', data)
        console.log(b)
        return 20
    })
    .then((data) => {
        console.log('then 3', data)
        return 30
    })
    .catch((error) => {
        console.log('error 2', error)
    })
    .finally(()=> {
        console.log('finally2, finally2')
    })



Promise.reject('reject1')
    .catch((t) => t + 'catch1')  //reject1 + catch1
    .catch((t) => t + 'catch2')
    .then((t) => t + 'then1') //reject1 + catch1 + then1
    .finally((t) => t + 'finally') //finally
    .then((t) => console.log(t)) //reject1 + catch1 + then1