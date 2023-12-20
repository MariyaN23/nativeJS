console.log(1)

setTimeout(()=> {
    console.log(2)
}, 3000)

setTimeout(()=> {
    console.log(3)
    setTimeout(()=> {
        console.log(6)
    }, 1000)
}, 1000)

setTimeout(()=> {
    console.log(4)
}, 2000)

console.log(5)