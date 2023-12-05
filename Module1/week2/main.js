console.log('Good Morning!')
let food = 'pizza' // expression (นิพจน์) ต้องให้ค่าๆ นึงออกมาเสมอ >> 'pizza'
function greeting(someone) {
    // backtick
    return `hello, ${someone}` // ${expression}
}
console.log(greeting('Inrita')) // >> hello, Inrita

// let : ประกาศตัวแปรเปลี่ยนแปลงค่าได้
let name = 'Inrita' 
console.log(name)
// const : เปลี่ยนแปลงค่าไม่ได้
const totalStudent = 70 
name = 100 // dynamic and weakly type => จะเห็นว่าตัวแปรนี้ควรเก็บ String แต่มาเก็บ number แทนแต่มันไม่ error
console.log(name)

// Object is a collection of property
const obj = {id: 101}
const std = {id: 65130500090, name: 'Inrita'} // one property contains key and value {key:value}
console.log(std)
// std = obj // const จะไม่ยอมให้ reassign จาก std กลายเป็น obj 
std.id = obj.id
std.id = 65130500077
std.name = 'Sarunyu'
console.log(std) // เปลี่ยนค่าใน property ได้หมด แต่มันจะไม่สามารถเปลี่ยนค่า memory address ได้

// Array
const nums = [5, 10, 15, 20]
console.log(nums)

// const i = 5 // เปลี่ยนแปลงค่าไม่ได้ => ประกาศแล้วจะเป็นค่าแรกและค่าสุดท้ายทันที
// i = 10

// จำลองสถานการณ์งานที่ต้องใช้เวลา => Asynchronous
setTimeout(() => {
    console.log('Task 1: a complex task was done.')
}, 5000) // millisecond (1000 ms = 1 second)

console.log('Good Night!')

setTimeout(() => {
    console.log('Task 2: a complex task was done.')
}, 3000) // millisecond (1000 ms = 1 second)

console.log('Bye Bye Jub Jub PeeTle!')

let a
console.log(a) // >> undefined
if (a === undefined || a === null) console.log('no value')

// = assign ค่า
// == เปรียบเทียบ value ไม่เปรียบเทียบ type
// === ไม่ยอมเปรียบเทียบ value ให้ถ้า type of ไม่ตรง
if ('2' == 2) console.log('compare value only') // true >> 'compare value only'
if ('2' === 2) console.log('compare value and data type') // false
if (2 === 2) console.log('compare value and data type') // true >> 'compare value and data type'

// Immutable ไม่เปลี่ยนรูป
let str = 'hello'
str.toUpperCase // return 'HELLO'
console.log(str) // 'hello'

let str2 = 'hello'
str2 = str2.toUpperCase // reasign ค่าเพื่อให้ str2 เปลี่ยน
console.log(str2) 

// Tutor section by Pleum kub hihihi
const ab = Math.floor(Math.random() * 10)
function greetingVarr(someone) {
    console.log(`hello, ${someone}`)
}
greetingVarr(ab)

function greeting(someone) {
    console.log(`hello, ${someone}`)
}
greeting("title")