// // Array
// // array can contain(บรรจุ) different data types in one array
// const x = [1, true, 'A']
// console.log(x)
// console.log(x.length) // lenght is size of array
// console.log(x[0]) // get the first element array 
// x[expression to find index number]
// console.log(x[x.length - 1]) // get the last element array 

// //เอาค่า false ไปแทนค่า true
// x[1] = false // retake ค่าแทนที่
// x[x.length] = 555 // เพิ่มค่าให้ x เข้าไปที่ตัวสุดท้าย (append a new element : ต่อท้าย array)
// x.push(888) // หรือสามารถใช้ push ได้เหมือนกันจะต่อท้ายให้เลย
// console.log(x)

// // x[expression to find index number]
// console.log(x[x.length-1]) // get the last element of array

// const y = [] // y is an empty array
// let z // undefined

// console.log(y) // >> [] : empty array
// console.log(z) // >> undefined
// console.log(typeof y) // >> object
// console.log(typeof z) // >> undefined

// // check เวลาบอกว่า array เป็น empty array หรือไม่
// let y = []
// if (y.length === 0) {
//     console.log('y is an empty array')
// } else {
//     console.log('y is not an empty arra')
// }

// if (z?.length === 0) {
//     console.log('y is an empty array')
// } else {
//     console.log('y is not an empty arra')
// }

// // 1. create array by literal
// const x = [1, 3, 5, 7, 9]
// // elements are object data types
// const students = [
//     {id: 1, name: 'Eye'},
//     {id: 2, name: 'Tle'},
//     {id: 3, name: 'Fair'}
// ]
// console.log(students.length) // >> 3
// console.log(students[0]) // >> {id: 1, name: 'Eye'}

// // elements are array data types
// const studentIds = [
//     [1001, 1002, 1003], 
//     [645001, 648789], 
//     [65989,65900],
//     [123]
// ]
// console.log(studentIds.length) // >> 4
// console.log(studentIds[1]) // >> [645001, 648789]
// console.log(studentIds[studentIds.length-1]) // >> [123] ดูตัวสุดท้าย
// console.log(studentIds[0][1]) // >> 1002 


// // 2. Create array with Spread Operator
// const x = [1, 0, 11]
// const y = [3, 5, 7]

// // using spread operator [...] to copy elements of x and y
// const z = [...x, ...y]
// console.log(z) // >> [ 1, 0, 11, 3, 5, 7 ]

// const a = [1, ...y, 11]
// console.log(a[2]) // >> 5
// console.log(a) // >> [ 1, 3, 5, 7, 11 ]

// const str = 'hello world'
// const collStr = [...str]
// console.log(collStr)
// // แตก String ออกมาเป็น array of charactor
// // [
// //   'h', 'e', 'l', 'l',
// //   'o', ' ', 'w', 'o',
// //   'r', 'l', 'd'
// // ]

// for (const ch of  collStr) { // วนลูปพิมค่าเข้าถึงแต่ละตัว
//     console.log(ch)
// }


// // 3. Create array with Constructor
// // 3.1 with empty parameter
// const x = new Array() // x = []
// console.log(x) // >> []
// console.log(x.length) // >> 0

// // 3.2 with inital size of array
// const y = new Array(5)
// console.log(y) // >> [ <5 empty items> ] มีการจองเอาไว้ 5 ที่
// console.log(y.length) // >> 5

// // 3.3 with inital value
// const z = new Array(1, 3, 5, 7)
// console.log(z) // >> [ 1, 3, 5, 7 ]
// console.log(z.length) // >> 4

// // 3.4 Create array with Array.of()
// const x = Array.of(10)
// console.log(x) // >> [10]
// console.log(x.length) // >> 1

// const y = Array.of(x) -> กลายเป็น array 2 มิิติ เพราะ x ก็เป็น array
// console.log(y) // >> [[10]]
// console.log(y.length) // >> 1

// const z = Array.of('1', 1 + 1, true)
// console.log(z) // >> [ '1', 2, true ]
// console.log(z.length) // >> 3

// // 3.5 Create array with Array.from()
// const x = [1, 2, 4, 8, 16, 32]
// const y = Array.from(x)
// console.log(x) // [1, 2, 4, 8, 16, 32]
// console.log(y) // [1, 2, 4, 8, 16, 32]
// console.log(y.length) // >> 6

// // y = x // alias เป็น roommate กันถ้าเปลี่ยนเป็น let y จะได้ 'x === y'

// //memory address of x equals to memory address of y
// if (x === y) {
//     console.log('x === y') 
// } else {
//     console.log('x !== y') // >> 'x !== y' เพราะมันคนละ memmory address แต่ถ้าเอา y = x จะเป็น alias
// }

// // Delete
// const x = [1, 3, 5, 7]
// delete x[1]
// console.log(x) // >> [ 1, <1 empty item>, 5, 7 ]
// console.log(x.length) // >> 4

// // Destructuring array
// const x = [1, 3, 5]
// const y = [2, 4, 6, 8, 10, 12]

// // destructuring array on independent variables a, m, n
// // rest ใช้ร่วมกับ destructing และใช้เป็นตัวสุดท้าย
// const [a] = x // a = x[0]

// // o use a rest operator
// const [m, n, ...o] = y // m = y[0], n = y[1], o = y[2], y[3], y[4], y[y.length-1]
// const [i, ...j] = y
// console.log(a) // >> 1
// console.log(m) // >> 2
// console.log(n) // >> 4
// console.log(o) // >> [ 6, 8, 10, 12 ]

// // ... in front of x is a spread oparator ใช้กี่ได้เท่าที่ต้องการ
// const z = [...x, 2, 4, ...x]
// console.log(z) // >> [1, 3, 5, 2, 4, 1, 3, 5]

// // destructuring with skip element
// const [, e] = x
// console.log(e) // >> 3 ข้ามมาได้เลย

// //const y = [2, 4, 6, 8, 10, 12]
// const [k, , l, , ...h] = y
// console.log(k) // >> 2
// console.log(l) // >> 6
// console.log(h) // >> [10,12]

// const str = [...'hello world']

// for (const [ind, value] of str.entries()) {
//     console.log(ind)
//     console.log(value)
// }

// for (const entry of str.entries()) {
//     console.log(entry) // return ออกมาเป็น index กับ value
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // 1. function declaration
// function concat(str1, str2) { // ไม่เป็น higher function
//     return str1 + str2
// }
// // Calling function, execute function
// console.log(concat('hello', 'world')) // helloworld

// // 2. function expression 
// const toLower = function(str) { // ไม่เป็น higher function
//     return str.toLowerCase()
// }
// // Calling function, execute function
// console.log(toLower('HELLOWORLD')) // helloworld

// const doSomething = toLower // toLower -> doSomething เป็น function
// console.log(doSomething('HI'))
// console.log(typeof doSomething) // >> function

// const y = toLower('Hey') // toLower('Hey') return 'hey' ให้ y
// console.log(y) // >> 'hey'
// console.log(typeof y) // >> string

// const doIt = function(op, str1, str2) { // เป็น higher function
//     // parameter passing คือ การทำประโยค assignment
//     // op = concat, str1 = 'good', str2 = 'morning'
//     return op(str1, str2)
// }
// console.log(doIt(concat, 'good', 'morning')) // >> goodmorning
// console.log(doIt(toLower, 'GOOD', 'MORNING')) // >> good ที่เหลือก็ทิ้งไปเลย เพราะ ไม่มี parameter รับค่า

// function a() {
//     return toLower // return ชื่อฟังก์ชัน
// }
// const m = a() // m เป็น function
// console.log(m('ABC')) // >> abc

// // Primitive Parameter Passing
// function double(a) {
//     // a = m, a = 5
//     // m, a ไม่มีผลกระทบเกี่ยวข้องกันเลย
//     a = a * 2
//     return a
// }
// let m = 5
// console.log(double(m)) // >> 10
// console.log(m) // >> 5

// // Object parameter passing
// function upDate(a) {
//     // a = n, a = memory address of n because a accept array object
//     // a, n มีความเกี่ยวข้องกัน
//     a[0] = 555
// }
// const n = [1, 2, 3]
// console.log(upDate(n))
// console.log(n) // >> [ 555, 2, 3 ]

// const sliceArr = ["one", "two", "three", "four", "five", "iloveyou"]
// sliceArr.slice(1, 3)
// let a = sliceArr.slice(1, 3)
// console.log(a) 
// // exampleArr[] will be the same even we use slice method for sliceArr
// console.log(sliceArr)

// let x = 20
// const y = () => {
//     var x = 25 
//     return x + 5
// }
// console.log(y()) // >> 30