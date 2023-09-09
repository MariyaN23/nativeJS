const userD = {
    "name": "Dimych",
    "age": 38,
    "address": {
        "city": {
            "title": "Minsk"
        }
    }
}

console.log(userD.address.city.title)
console.log(userD["address"]["city"]["title"])

const userList = ['Dimych', 'Svetlana', 'Valera', 'Katya']
userList["map"]((e)=>e.toUpperCase())

export const userObj = {
    '0': 'Dimych',
    '1': 'Svetlana',
    '2': 'Valera',
    '3': 'Katya'
}

console.log(userObj['0'])
console.log(userObj[0])
// userObj.0 -- нельзя

Object.keys(userObj)
Object.values(userObj)

//Ассоциативный массив:
type userType = {
    [key: string] : {id: number, name: string}
}

const users: userType = {
    '101': {id: 101, name: 'Dimych'},
    '1': {id: 1, name: 'Svetlana'},
    '854': {id: 854, name: 'Valera'},
    '45': {id: 45, name: 'Katya'},
}

//users[1] - быстро получить элемент
//Создать нового:
const user = {id: 100500, name: 'Oleg'}
users[user.id] = user
//Удаление:
delete users[user.id]
//Перезапись:
users[user.id].name = "Igor"


//Обычный массив:
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1, name: 'Svetlana'},
    {id: 854, name: 'Valera'},
    {id: 45, name: 'Katya'}
]

// usersArray.find(e=>e.id === 1) - долго ищет
// usersArray.push(user) - добавить мутабельно
// const userCopy = [...usersArray.filter(), user] - добавить иммутабельно
// usersArray = usersArray.filter(el=>el.id !== user.id) - удалить