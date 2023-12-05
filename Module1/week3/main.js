// Types Values Variabl
// Identifier การตั้งชื่อ
const $a = 3;
// $a = 10 reassign ค่าไม่ได้ const ต้องใช้ค่านี้ไปตลอด
const _b1c = 1;
console.log($a);
console.log(_b1c);

let y = 1;
console.log(typeof y); // >> number
console.log(y); // -> 1
// weakly and dynamic data types
y = "A";
console.log(y);
console.log(typeof y); // >> String
y = true;
console.log(typeof y); // >> boolean
console.log(typeof undefined); // >> undefined
console.log(typeof null); // >> object

// Array uses []
let nums = [1, 3, 5, 7, 9];
console.log(typeof nums); // >> object

// Objeact uses {}, {propertyKey1: propertyValue1, propertyKey2: propertyValue2, ... }
const obj = { id: 65130500090, title: "JavaSript" };
console.log(typeof obj); // >> oblect

// obj = nums -> error, not allow เพราะ obj เป็น const
nums = obj; // nums มีค่า momory address เดียวกับ obj ทำให้เวลาเปลี่ยนค่ามันคือค่าเดียวกัน
nums.id = 201;
console.log(nums);
console.log(obj);

// ids is array type
const ids = [101, 105, 110, 120];
ids[0] = 0;
console.log(ids); // >> [0, 105, 110, 120]

// ตัวสุดท้าย
ids[ids.length - 1] = 444;
console.log(ids); // >> [0, 105, 110, 444]
// ตัวสุดท้าย ต่อท้่าย (ขยายขนาด size ได้)
ids[ids.length] = 121;
console.log(ids); // >> [0, 105, 110, 444, 121]

let m,
  n,
  o = 1,
  p = true,
  q = null
console.log(m) // >> undefined
console.log(n) // >> undefined
console.log(o) // >> 1
console.log(p) // >> true
console.log(q) // >> null

// ใช้ === แทน == 
if (m === undefined) console.log('m is undefined') // >> 'm is undefined'
if (q === null) console.log('q is null') // >> 'q is null'

// == check only value, do not care data types
if ('2' == 2) console.log(`'2' == 2`)

// === check data types first, if the data type does not match then return false
// otherwise value will be check
if ('2' === 2) console.log(`'2' === 2`)
else console.log(`'2' !== 2`) // >> `'2' !== 2`

//check typeof ต้องใส่ '' เพราะจะคืนค่าเป็น String
if (typeof m === 'undefined') console.log(`typeof m === 'undefined'`)
// null has typeof object
if (typeof q === 'object') console.log(`typeof q === 'object'`)

// Function typeof is function
function doSomething(activity) {
    return activity // จะหยุดการทำงานที่เหลือ และ return
}
console.log(doSomething('online learning')) // >> 'online learning'
console.log(typeof doSomething) // >> function

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// JavaScript Scope
// a is a global scope
let a = 1
console.log(a)

// ไม่สามารถตั้งชื่อเหมือนกันถ้าอยู่ใน scope เดียวกัน
{
    // a is a block scope
    let a = 5
    console.log(a)
    var b = 111 // var เป็น global เพราะ var ไม่รู้จัก  block scope
}
console.log(b) // var has no block scope, so b is a global scope

// let a = 55 ตั้งชื่อซ้ำไม่ได้เพราะ ประกาศชื่อไปแล้ว และอยู่ใน scope เดียวกันที่เป็น global scope
a = 10 // declared(ประกาศ,ถูกสร้าง) ค่าใหม่ 
console.log(a) // >> 10

function doIt() {
    if (1) { // if (1) => true
        // Block scope
        let a = 555
        console.log(a) // 555
    } else console.log(`not 1`)
    console.log(`a: ${a}`) // global scope a of line#85 >> 1
}
doIt()

function doSomething() {
    let a = 'A' // function scope
    console.log(a) // 'A'
}
doSomething()
console.log(a) // global scope a of line#85 (ของที่อยู่ตลอดเวลา) >> 1

// เพราะ a เป็นชื่อที่ซ้ำกันและอยู่ใน scope เดียวกันใน global scope
// let a = 10

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Type Conversions

let c = 1
// explicit type conversion
console.log(typeof c) // -> number
//number -> String
console.log(typeof String(c)) // -> String
// number -> boolean
console.log(typeof Boolean(c)) // -> boolean

// if need boolean but 1 is number, so implicit conversion is called automatically
// มันจะทำ implicit ให้อัตโนมัติจาก number -> boolean
if (1) console.log('implicit conversion is working')

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let num = [1, 2, 3, 4, 5] 
console.log(num[0]) // reading num array at index:0 -> 1

// ใส่ ?. ไม่ให้โชว์ error แต่จะขึ้น undefined แทน >> ใช้กับ array and object 
let values = null
console.log(values?.[0])

let obj1 = {id: 1, title: 'JS'}
console.log(obj1.id)

let obj2
console.log(obj2?.id)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Demo

let someone = '' // เป็น empty string ที่ไม่มีตัวอักษร แต่ถ้า space จะนับ
let who // who = undefined
console.log(typeof someone) // >> String
if (someone) who = 'member' // ทำ Implicit ให้เราเลยจาก String -> Boolean
else who = 'guest'
console.log(who) // >> guest

// ?: 
someone ? 'member' : 'guest'

// ?: if-else with expression (แนะนำให้เขียนแบบนี้)
let whoes = someone ? 'member' : 'guest'
console.log(whoes) // >> guest

let discount = 0
let x = 5
console.log(x) // >> 5 : Global scope
if (someone) {
    let x = 1 
    console.log(x) // >> 1 : Block scope
    who = 'member'
    discount = 0.10
} else {
    let x = 2
    console.log(x) // >> 2 : Block scope
    who = 'guest'
    discount = 0.05
}
console.log(x) // >> 5 : Global scope
console.log(who) // >> guest
console.log(discount) // >> 0.05

// พอเปลี่ยน let x เป็น var x จะเห็นว่ามัน redecare ปริ้นค่าตัวสุดท้ายอีกมากลายเป็น 1 

// let x = 20
// const y = () => {
//     var x = 25 
//     return x + 5
// }
// console.log(y()) // >> 30

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Demo

// Optional Chaining (?.) -> จะไม่หยุดโปรแกรมเราแต่จะให้ค่าเป็น "undefined" or "null"
// แต่ถ้ามีค่าตัว (?.) ก็ยังทำงานได้ปกติ
let str = 'Guest'
console.log(str?.toLowerCase())

let nums1
console.log(nums1?.[0])

let objs
console.log(objs?.id)

// Nullish Coalescing (??)
let arr // undefined
arr = arr ?? [1, 2, 3] // เป็น undefined คืนค่าฝั่งขวา
console.log(arr)

let arr2  = null // undefined
arr2 = arr2 ?? [1, 2, 3] // เป็น undefined คืนค่าฝั่งขวา
console.log(arr2)

// [] represents an empty array
// {} represents an empty object
let arr3 = []
arr3 = arr3 ?? [1, 2, 3] // เป็น undefined คืนค่าฝั่งขวา
console.log(arr3)
console.log(arr3.length)

let nums = [1, 2, 3]
let arr4
arr4 = nums ?? []
console.log(nums) // [1, 2, 3]
console.log(arr4) // [1, 2, 3]

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Math
// Ceil : ปัดขึ้น
console.log(Math.ceil(1.2)) // 2
console.log(Math.ceil(1.5)) // 2
console.log(Math.ceil(1.7)) // 2
console.log('@@@@@@@@@@@@@@@@')

// Floor : ปัดลง
console.log(Math.floor(1.2)) // 1
console.log(Math.floor(1.5)) // 1
console.log(Math.floor(1.7)) // 1
console.log('@@@@@@@@@@@@@@@@')

// Round : equals to or more than 0.5 then round up, otherwise round down
console.log(Math.round(1.2)) // 1
console.log(Math.round(1.5)) // 2
console.log(Math.round(1.7)) // 2
console.log('@@@@@@@@@@@@@@@@')

// Pow Math.pow(base,exp)
console.log(Math.round(2, 3)) // 8
console.log(Math.sqrt(9)) // 3
console.log(Math.PI) // 3.14

console.log(Math.random()) // random number in a range 0 to less thsn 1 (0 - 0.999) ไม่ถึง 1

// random Dice 1-6
// สูตร >> Math.floor(Math.random() * (max - min + 1) + min)
let dice = Math.floor(Math.random() * (6) + 1)
console.log(dice)

// random in a range 10 to 50
let rand = Math.floor(Math.random() * (41) + 10)
console.log(rand)
// 0-40
// 10-50

// random in range 100 - 1000
let rand1 = Math.floor(Math.random() * (901) + 100)
console.log(rand1)
// 0-900
// 100-1000

// random
let min = 1
let max = 100
let rand2 = Math.floor(Math.random() * (max - min + 1) + min)
// สูตรในการสุ่มค่า
// 1. Math.random() -> 0. 0.99999
// 2. No1. * 100 -> 99.999999
// 3. Math.floor(No2.) -> 0 - 99
// 4. No3. + min -> 1 - 100

//เขียนเป็น Function เพื่อให้ใช้งานง่ายขึ้น
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// build object
let rand3 = randomNumber(1,6)
let rand4 = randomNumber(10,100)
console.log(rand3)
console.log(rand4)