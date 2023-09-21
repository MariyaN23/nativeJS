//сортировка пузырьком
const bubbles = [2, 5, 3, 23, 12, 88, 96, 54, 76, 4, 71, 10]; //по возрастанию

//let count = 0; //чтобы посчитать кол-во циклов
for (let j = 0; j<bubbles.length-1 ; j++) {            //(-1 - чтобы последний оставшийся эл.не проверять)
    //count++
    let isSorted = true;
    for (let i = 0; i < bubbles.length-1-j; i++) {   //-1 чтоб не выйти за предел массива, -j чтоб не доходить каждый раз до последнего эл.
        if (bubbles[i] > bubbles[i + 1]) {
            isSorted = false;  // если дальше не пойдет то нужно остановить
            /*const temp = bubbles[i];
            bubbles[i] = bubbles[i + 1];
            bubbles[i + 1] = temp;*/

            //если перед {}, [] не ставить ; то не работает! 
            [bubbles[i + 1], bubbles[i]] = [bubbles[i], bubbles[i + 1]];  //деструктуризация
        }
       // count++;
    }
    //if (isSorted)break;
}
//console.log(count)
console.log(bubbles);

//Метод sort - сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива 
const names = ['Vasya', 'Valera', 'Maksim', 'Igor', 'Svetlana', 'svetlana', 100, 5000];
names.sort();
    console.log(names);
//1. сортирует по алфавиту строки без доп.параметров

//2. сортирует по unicode без доп параметров
// 1)цифры
// 2)лат алфавит (заглавные, потом строчные)
// 3)остальные алфавиты (заглавные-строчные)

//3. работает мутабельно (сортирует наш исх. массив на месте)

//4. возвращает ссылку на исходный массив
console.log(names === names.sort());  // в консоли будет true


//5. Метод toSorted сортирует иммутабельно
const sortNames = names.toSorted();
console.log(names === sortNames);  //будет false

//6. Для остальных случаев нужно передать ф-цию сравнения callback

//сортировка по убыванию 
const numbers = [88, 54, 41, 1, 32, 7, 13, 96, 104, 18, 73];
/*const compareFunc = (a, b) => {
// a = 3, b = 5 => > 0
// a = 5, b = 3 => < 0
    if (a >=b) {
        return -5;  //перестановку не выполняем, пишется ЛЮБОЕ отриц. число
    } else {
        return 10;  //перестановку выполняем, а здесь ЛЮБОЕ положит.
    }
} */
//более короткая, правильная запись: 
const compareFunc = (a, b) => b - a;
console.log(numbers.sort(compareFunc));
//7. Ф-ция сравнения должна возвращать число больше или меньше 0

//8. вместе с sort часто работает reverse
console.log(numbers.reverse());

const students = [
    {
        name: 'Igor',
        age: 55,
        isMarried: true,
        scores: 87
    },
    {
        name: 'Oleg',
        age: 45,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Svetlana',
        age: 21,
        isMarried: true,
        scores: 12
    },
    {
        name: 'Pasha',
        age: 26,
        isMarried: false,
        scores: 74
    },
    {
        name: 'Vasya',
        age: 51,
        isMarried: true,
        scores: 16
    },
    {
        name: 'vasya',
        age: 51,
        isMarried: true,
        scores: 16
    }
]

//сортировка студентов по убыванию возраста
console.log(students.sort((a, b)=>{a.age - b.age}));
console.log(students.sort((a, b)=>{a.name.localeCompare(b.name)}));