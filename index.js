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


