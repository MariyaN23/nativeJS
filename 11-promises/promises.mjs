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
