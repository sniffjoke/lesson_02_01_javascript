// Лексическое окружение

// Глобальные переменные

// const globalLE = {
//     environmentRecords: {car: 'bmw'},
//     outer: null // ссылка на внешнее лексические окружение
// }

// globalLE {} --> null

// let car = "bmw" // globalLE {car: 'bmw} --> null
//
// function startEngine() {
//     // startEngineLE {} --> globalLE
//     // const car = 'toyota'
//     const foo = () => {
//         // {} --> startEngineLE
//         console.log(`Start ${car}`)
//     }
//     foo()
//     console.log(`Start ${car}`)
// } // globalLE {car: 'bmw'; startEngine: func} --> null
//
// car = 'audi' // globalLE {car: 'audi'; startEngine: func} --> null
// startEngine()

// ----------------------------------------------------------------------- //

// globalLE {startEngine: func, car2: undefined} --> null
// подлежат хостингу (всплытию) только переменные созданные с помощью var и function

// let car1 = 'bmw'
//
// startEngine()
//
// var car2 = 'kia'
//
// stopEngine()
//
// function startEngine() {
//     // startEngineLE {}
//     console.log(`Start ${car1}`)
//     var foo
// }
//
// for(i = 0; i < 10; i++){} {
//     var bar
// }
//
// const stopEngine = () => {}

// -------------------------------------------------- //

// globalLE {} --> null

// const counterCreator = () => {
//     // counterCreatorLE {} --> globalLE
//     let count = 0
//
//     return () => {
//         // counterLE {} --> counterCreatorLE
//         console.log(++count)
//     }
// }
//
// const couter1 = counterCreator() // globalLE {counter: func} --> null
// const couter2 = counterCreator() // globalLE {counter: func} --> null
//
// couter1()
// couter1()
// couter1()

// couter2()
// couter2()
// couter2()

// ---------------------------------------------------- //

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// const pow = (x, n) => {
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
//
// pow(2, 4) // 16
//
// console.log(pow(2, 4))

// --------------------------------------- //

// 5(!) --> 5 * 4(!) --> 5 * 4 * 3(!) --> 5 * 4 * 3 * 2(!) --> 5 * 4 * 3 * 2 * 1(!)

// const factorial = (n) => {
//     if (n === 1) {
//         return n
//     } else {
//         return n * factorial(n - 1)
//     }
// }
//
// factorial(5)
//
// console.log(factorial(5))

// ----------------------------------------- //

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTO(n) { /*... ваш код ...*/}
// console.log(sumTo(100))

// const sumTo = (n) => {
//     if (n === 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1)
//     }
// }
//
// console.log(sumTo(5))

// -------------------------------------------- //

// 321 / 10 = 32.1 (1) --> 32 /10 = 3.2 (2) --> 3/10 --> 3

function genSum(n) {
    if (n < 10) {
        return n
    } else {
        return (n % 10) + genSum(Math.floor(n/10))
    }
}

console.log(genSum(321))
