//1
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
//1, 5, 3, 4, 6, 2

//2
function a1() {
    console.log(1)
}

setTimeout(function a() {
    console.log(2)
})

Promise.resolve().then(function b() {
    console.log(3)
})

function a4() {
    console.log(4)
}

a1()
a4()
//1, 4, 3, 2

//3
function a() {
    setTimeout(() => {
        console.log('a');
    });
}

function b() {
    console.log('b');
}

a();
new Promise(function (res, rej) {
    console.log('create promise');
    res();
}).then(() => {
    console.log('5')
    setTimeout(function timer() {
        console.log('timeout');
    }, 0);
});
b();
//create promise, b, 5, a, timeout

//4

setTimeout(() => {
    console.log('s1');
}, 0);
setTimeout(() => {
    console.log('s2');
}, 1000);
new Promise(function (res, rej) {
    console.log('p1');
    res();
    console.log('p2');
}).then(() => {
    console.log('p3');
});
console.log('w1');

async function test1() {
    console.log('a1');
    await test2();
    console.log('a2');
}

async function test2() {
    console.log('a3');
}

test1();
console.log('w2');
//p1, p2, w1, a1, a3, w2, p3, a2, s1, s2


//5
console.log(1);
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    });
});
new Promise((res, rej) => {
    console.log(4);
    res(5);
}).then((data) => {
    console.log(data);
    Promise.resolve().then(() => {
        console.log(6);
    })
        .then(() => {
            console.log(7);
            setTimeout(() => {
                console.log(8);
            }, 0);
        });
});
setTimeout(() => {
    console.log(9);
});
console.log(10);
//1, 4, 10, 5, 6, 7, 2, 3, 9, 8


//6
async function first() {
    console.log(9);
    await Promise.resolve(2).then((r) => console.log(r));
    console.log(0);
    await Promise.resolve(3).then((r) => console.log(r));
}

async function second() {
    console.log(10);
    await Promise.resolve(4).then((r) => console.log(r));
    console.log(11);
    await Promise.resolve(5).then((r) => console.log(r));
}
first();
second();
const promises = Promise.resolve('new Promise');
promises.then((str) => console.log(str));
//9, 10, 2, 4, new Promise, 0, 11, 3, 5