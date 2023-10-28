// // Functions are First-class citizens
// function op1(fn) {
//     return fn()
// }
// function op2(fn) {
//     return fn
// }
// function greeting() {
//     return 'Hello'
// }
// function goodBye() {
//     return 'Bye Bye'
// }

// const a = greeting
// const b = greeting()
// console.log(a) // typeof function greeting
// console.log(b) // typeof String -> 'Hello'
// console.log(a()) // typeof String, 'Hello'
// console.log(b()) // error : b is not a function

// const result1 = op1(greeting)
// console.log(typeof result1) // String
// console.log(result1) // 'Hello'
// const result2 = op1(goodBye)
// console.log(typeof result2) // String
// console.log(result2) // 'Bye Bye'
// const result3 = op2(greeting) 
// console.log(typeof result3) // function
// console.log(result3) // greeting function
// const result4 = op2(goodBye)
// console.log(typeof result4) // function
// console.log(result4) //  goodBye function

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // Function scope
// let a = 1 // global scope
// function x(m) {
//     let a = 555 // shadowing // function scope ไปบังการทำงานของ global
//     let b = 2
//     function y(n) {
//         let c = 3
//         console.log(`a: ${a}, m: ${m}, b: ${b}, n: ${n}, c: ${c}`)
//         function z(o) {
//             let d = 4
//             console.log(`a: ${a}, m: ${m}, b: ${b}, n: ${n}, c: ${c}, o: ${o}, d: ${d}`)
//         }
//     }
//     console.log(`a: ${a}, m: ${m}, b: ${b}`) // a: 1, m: 100, b: 2 -> a: 555, m: 100, b: 2
//     return y // ให้ x return y เพื่อเข้าถึง y

// }
// console.log(`a: ${a}`) // a: 1
// x(100)
// // y() // cannot access
// // z() // cannot access
// const yfn = x(100)
// yfn(888) // a: 555, m: 100, b: 2, n: 888, c: 3

let a = 1
function x() {
    console.log(a,b)
}
// x() // error : cannot access 'b' before initialization
let b = 5 
x() // 1,5

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Closures

function counter() {
    let count = 100
    function increment() {
        return ++count
    }
    function descrement() {
        return --count
    }
    function getCount() {
        return count
    }
    return {
        increment,
        descrement,
        getCount
    }
    // return getCount // เข้าถึงได้แค่ getCount() ส่สนที่เหลือเข้าถึงไม่ได้ เพราะ ไม่ได้ return
    // // ถูกรักษาสถานภาพไว้
    // return {getCount:getCount, increment: increment, descrement: descrement} // Full systax เก็บผลลัพธ์เป็นฟังก์ชัน property function
    // return {getCount, increment, descrement} // shortcut
}
// getCount() // cannot direct access nested frunction

// const fn = counter()
// console.log(typeof fn) // function
// console.log(fn) // [Function: getCount]
// console.log(fn()) // 1

console.log(typeof fn.getCount) // function
console.log(fn.getCount) // [Function: getCount]
console.log(fn.getCount()) // 100

console.log(typeof fn.increment) // function
console.log(fn.increment) // [Function: increment]
console.log(fn.increment()) // 101

console.log(typeof fn.descrement) // function
console.log(fn.descrement) // [Function: descrement]
console.log(fn.descrement()) // 100

const { getCount, increment, descrement } = counter(0) //destructuring
console.log(getCount()) // 100
console.log(increment()) // 101
console.log(descrement()) // 100