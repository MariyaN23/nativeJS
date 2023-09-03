import {ManType} from './Destructuring';

let props: ManType

beforeEach(()=>{
    props = {
        name: 'Andrew Ivanov',
        age: 33,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', nameL: 'react'}],
        address: {
            street: {
                title: "South Str"
            }
        }
    }
})

test('object', ()=>{
   /* let age = props.age
    let lessons = props.lessons*/
    let {age, lessons} = props
    /*let {age: a, lessons: l} = props*/

    let {title} = props.address.street

   /* let l = props.lessons
    let a = props.age*/

    expect(lessons.length).toBe(3)
    expect(age).toBe(33)
    expect(title).toBe("South Str")

    /*expect(l.length).toBe(2)
    expect(a).toBe(33)*/
})

test('array', ()=>{
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [,ls2,...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    /*expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')*/
    expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")

    expect(restLessons[0]).toStrictEqual({nameL: 'react', title: '3'})
})
