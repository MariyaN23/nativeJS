type userType = {
    [key: string] : {id: number, name: string}
}

let users: userType = {

}

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1': {id: 1, name: 'Svetlana'},
        '854': {id: 854, name: 'Valera'},
        '45': {id: 45, name: 'Katya'},
    }
})

/*test('should select corresponding user from obj', ()=> {
    expect(userObj[0]).toBe('Dimych')
    expect(userObj[1]).toBe('Svetlana')
    expect(userObj[2]).toBe('Valera')
    expect(userObj[3]).toBe('Katya')
})*/

test('should update corresponding user from obj', ()=> {
    users['45'].name = "Ekaterina"
    expect(users["45"]).toEqual({id: 45, name: 'Ekaterina'})
})

test('should delete corresponding user from obj', ()=> {
    delete users['45']
    expect(users["45"]).toBeUndefined()
})