//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (str, count, separator) => {
    return (str+separator).repeat(count).trim()
}
console.log(repeatString("yo", 3, " "))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStart = (str, substr) => {
    //return str.toLowerCase().startsWith(substr)
    //return str.toLowerCase().indexOf(substr) === 0
    return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase()
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (str, number) => {
    return str.slice(0, number) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (str) => {
    if (str === '') {
        return null
    }
    let arrOfWords = []
    arrOfWords = str.split(' ')
    let shortWord = arrOfWords[0]
    for (let i=0; i<arrOfWords.length; i++) {
        if (arrOfWords[i].length < shortWord.length) {
            shortWord = arrOfWords[i]
        }
    }
    return shortWord
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (str) => {
    let arrOfWords = []
    arrOfWords = str.split(' ')
    for (let i= 0; i<arrOfWords.length; i++) {
        arrOfWords[i] = arrOfWords[i][0].toUpperCase()+arrOfWords[i].slice(1, arrOfWords[i].length).toLowerCase()
    }
    return arrOfWords.join(" ")
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, substr) => {
    let arrOfWords = []
    arrOfWords = substr.toLowerCase().split('')
    for (let i= 0; i<arrOfWords.length; i++) {
        if (!str.toLowerCase().includes(arrOfWords[i])) return false
    }
    return true
}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))