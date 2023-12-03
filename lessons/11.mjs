import fetch from 'node-fetch';

//самый быстрый придет по скорости ответа
fetch("https://bing.com/query=js").then((data) => {
    console.log(data.url)
})
fetch("https://yandex.ru/query=js").then((data) => {
    console.log(data.url)
})
fetch("https://google.com/query=js").then((data) => {
    console.log(data.url)
})

//последовательно придут
fetch("https://bing.com/query=js")
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
        return fetch("https://yandex.ru/query=js")
    })
    .then((dataFromYandex) => {
        console.log(dataFromYandex.url)
        return fetch("https://google.com/query=js")
    })
    .then((dataFomGoogle) => {
        console.log(dataFomGoogle.url)
    })

async function bar() {}

const baz = async function(){}

//async await
const foo = async ()=> {
    try {
        const dataFromBing = await fetch('https://bing.com/query=js')
        console.log(dataFromBing.url)
        const dataFromYandex = await fetch('https://yandex7889.ru/query=js')
        console.log(dataFromYandex.url)
        const dataFromGoogle = await fetch('https://google.com/query=js')
        console.log(dataFromGoogle.url)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finallyy finalyy')
    }
}
foo()
console.log('hoba')

//all
//в той последовательности как написаны
const superPromise = Promise.all([
    fetch("https://bing.com/query=js"),
    fetch("https://yandex.ru/query=js"),
    fetch("https://google.com/query=js")])
superPromise.then((bigData) => {
    console.log(bigData[0].url)
    console.log(bigData[1].url)
    console.log(bigData[2].url)
})

//race
const superPromise = Promise.race([
    fetch('https://bing.com/query=js'),
    fetch('https://yandex.ru/query=js'),
    fetch('https://google.com/query=js')])
superPromise.then((bigData) => {
    console.log(bigData.url)
})


//ошибка быстрее чем запросы
const superRace = Promise.race([
    fetch('https://bing.com/query=js'),
    fetch('https://yandex.ru/query=js'),
    fetch('https://yahoo85485.com/query=js'),
    fetch('https://google.com/query=js')])
superRace
    .then((bigData) => {
        console.log(bigData.url)
    })
    .catch((err) => {
        console.log(err)
    })

//any
//какой-нибудь из результатов
const superAny = Promise.any([
    fetch('https://bing.com/query=js'),
    fetch('https://yandex.ru/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://google.com/query=js')])
superAny
    .then((bigData) => {
        console.log(bigData.url)
    })
    .catch((err) => {
        console.log(err)
    })


//allSettled
//не попадем в catch, будет другой статус
const superAllSettled = Promise.allSettled([
    fetch('https://bing4555.com/query=js'),
    fetch('https://yandex48468.ru/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://google846.com/query=js')])
superAllSettled
    .then((bigData) => {
        console.log('Then ---------> ', bigData)
    })
    .catch((err) => {
        console.log(err)
    })
