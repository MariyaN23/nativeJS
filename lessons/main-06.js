const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const student = {
  name: "Bob",
  age: 23,
  isMarried: false,
  friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Поверхностная копия student
const newStudent = {...student}

//2. Полная (глубокая) копия student
const fullCopyStudent = {...student, friends: [...student.friends]}

//3. Поверхностная копия students
const newStudents = [...students]

//4*. Полная (глубокая) копия students
const fullCopyStudents = students.map(s => {return {...s}})

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
console.log(fullCopyStudents.sort((a,b)=>b.scores-a.scores))

//5a. Отсортируйте студентов по алфавиту
console.log(fullCopyStudents.sort((a, b)=>a.name.localeCompare(b.name)))

//6. Сформируйте массив студентов, у которых 100 и более баллов
console.log(students.filter(s=> s.scores >=100))

//6a.Сформируйте массив из трёх лучших студентов
const topStudents = fullCopyStudents.sort((a,b)=>b.scores-a.scores).splice(0, 3)
console.log(topStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const newFullCopyStudents = fullCopyStudents.concat(topStudents)
console.log([...fullCopyStudents, ...topStudents])

//7. Сформируйте массив холостых студентов
console.log(students.filter(s => !s.isMarried))

//8. Сформируйте массив имён студентов
console.log(students.map(s=> s.name))

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
console.log(students.map(s=> s.name).join(' '))
console.log(students.map(s=> s.name).join(', '))

//9. Добавьте всем студентам свойство "isStudent" со значением true
console.log(students.map(s => {return {...s, isStudent: true}}))

//10. Nick женился. Выполните преобразование массива students
console.log(students.map(s => {return s.name="Nick" ? {...s, isMarried: true} : {...s}}))

//11. Найдите Студентку по имени Ann
const result = students.find(el=>el.name === 'Ann')
console.log(result)

//12. Найдите студента с самым высоким баллом
const highScores = students.reduce((max, el)=> {
  if (el.scores > max.scores) {
    max = el
  }
  return max
})
console.log(highScores)

//12a. Найдите 2 студента с самым высоким баллом

const students2 = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 190,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 50,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 40,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 130,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 25,
  },
];

let best1 = students2[0]
let best2 = students2[1]

for (let i = 1; i < students2.length; i++) {
  if (students2[i].scores > best1.scores) {
    best2 = best1
    best1 = students2[i]
  } else  if (students2[i].scores > best2.scores ){
    best2 = students2[i]
  }
}
console.log(best1,best2)

//13. Найдите сумму баллов всех студентов
const sumScores = students.reduce((sum, el)=> sum + el.scores, 0)
console.log(sumScores)

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends =(students)=> {
  return students.map(s => {return {...s, friends: students.filter(el=> el.name !== s.name).map(el=>el.name)}})
}
console.log(addFriends(students))