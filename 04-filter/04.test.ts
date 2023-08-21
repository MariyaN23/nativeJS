test ('should take older than 90', ()=> {
    const ages = [81, 18, 12, 36, 100, 6]

/*    const predicate = (age: number) => {
        return age > 90
    }*/
    //const predicate = (age: number) => age > 90

    //const oldAges = ages.filter((age: number) => age > 90)
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should return courses cheaper than 160', ()=> {
    type CourseType = {
        title: string
        price: number
    }

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

  /*  const chipPredicate = (course: CourseType) => {
        return course.price < 160
    }*/

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0]).toStrictEqual({title: "CSS", price: 110})
    expect(chipCourses[1]).toStrictEqual({title: "REACT", price: 150})
})

test('get only completed tasks', ()=> {
    const tasks = [
        {
            id: 1,
            title: "bread",
            isDone: false
        },
        {
            id: 2,
            title: "eggs",
            isDone: true
        },
        {
            id: 3,
            title: "milk",
            isDone: true
        },
        {
            id: 4,
            title: "chips",
            isDone: false
        }
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(3)
})

test('get uncompleted tasks', ()=> {
    const tasks = [
        {
            id: 1,
            title: "bread",
            isDone: false
        },
        {
            id: 2,
            title: "eggs",
            isDone: true
        },
        {
            id: 3,
            title: "milk",
            isDone: true
        },
        {
            id: 4,
            title: "chips",
            isDone: false
        }
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(4)
})