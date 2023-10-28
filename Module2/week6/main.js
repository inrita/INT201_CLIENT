// // Object -> {key : value}
// // 1. create object with object literals
// const st1 = {
//     student: 65130500090, 
//     firstname: 'Inrita', 
//     lastname: 'Warajirawiroj',
//     student: 65 // เกิดการชนกันของ property name มันจะเอาตัวสุดท้ายที่เจอมาใช้
// }
// console.log(typeof st1) // object
// console.log(st1)

// const st2 = {} //empty object {} === const st2 = new Object()
// console.log(Object.prototype.isPrototypeOf(st2)) // true
// console.log(typeof st2) // object

// console.log(Object.keys(st1)) // array of property key (return key)
// console.log(Object.values(st1)) // array of property value (return value)

// // Unordered (ไม่มีลำดับ) : อะไรจะมาก่อนมาหลังไม่ส่งผล
// const st3 = {firstname: 'Warittinan', lastname: 'Khundiloklulton', student: 64130500075} 
// console.log(st3)

// // Composite object : address object is nested in st4 object (มี object ซ้อน object เท่าที่ต้องการ)
// const st4 = {
//     firstname: 'Inrita',
//     lastname: 'Warajirawiroj',
//     studentId: 65130500090,
//     address: {province: 'Bangkok', country: 'Thailand'},
//     getFullname: function() {
//         return `${this.firstname} ${this.lastname}`
//     }
//     // // remove :function ออก (shortcut)
//     // getFullname() {
//     //     return `${this.firstname} ${this.firstname.lastname}`
//     // }
// }

// console.log(st4.getFullname()) // Inrita Warajirawiroj
// // get property หลายชั้น
// console.log(st4.address.country) // Thailand
// console.log(st4['address']['country']) // Thailand

// // get property 
// // 1) objectname.propertykey (.)
// console.log(st4.firstname) // ทำ dynamic key ไม่ได้
// // 2) objectname['propertykey'] ([]) 
// console.log(st4['lastname']) // ทำ dynamic key ได้

// // dynamic property (เปลี่ยนแปลงได้ตลอดเวลา): add a new one, update or delete existing property
// st4.email = 'inrita.2004@gmail.com' // add a new property
// st4.firstname = 'Pimkul' // edit property value
// delete st4.email // delete a property
// st4.getAddress = function () {
//     // add a new property that stores function
//     return this.address
// }
// console.log(st4) 
// // ตรวจสอบว่า object st4 ว่าเป็น Prototype รึเปล่า
// console.log(Object.prototype.isPrototypeOf(st4)) // True
// console.log(Date.prototype.isPrototypeOf(st4)) // False มันไม่เกี่ยวกับ date
// console.log(st4.getFullname) // Inrita Warajirawiroj

// // Prooperty value can store function
// const st5 = {
//     firstname: 'Somjai', 
//     lastname: 'Jaidee',
//     studentId: 651305889,
//     getFullname: function() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// console.log(st5.getFullname()) // Somjai Jaidee

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Constructor function
function Person(id, fn, ln) {
    this.id = id
    this.firstname = fn // this.propertyName(ชื่ออะไรก็ได้มันไม่ fix) = ค่า parameter
    this.lastname = ln
}

// 2. create object by using constructor function
const p1 = new Person(1001, 'Eye', 'Jaa')
const p2 = new Person(1002, 'Garfair', 'Juu')
const p3 = new Person(1003, 'Sea', 'Jii')
console.log(p1) // Person { id: 1001, firstname: 'Eye', lastname: 'Jaa' }
console.log(p2) // Person { id: 1002, firstname: 'Garfair', lastname: 'Juu' }
console.log(p3) // Person { id: 1003, firstname: 'Sea', lastname: 'Jii' }
p1.email = 'eye.1001@gmail.com'
console.log(p1) // เพิ่ม email ให้กับ p1 จะเห็นว่าไม่มีความผูกผันกับ p2,p3 object มันคนละตัวกัน
// Object prototype <- Person prototype <- p1
console.log(Object.prototype.isPrototypeOf(p1)) // true
console.log(Person.prototype.isPrototypeOf(p1)) // true


// 3. create object by using Class
// javaScript is a property based, not class based
// Syntactic sugar (Syntax ที่ถูกออกแบบมาเพื่อทำให้อ่านง่าย/เข้าใจง่ายขึ้น)
class Circle {
    constructor(r) {
        this.radius = r
    }
    // แชร์ method among circle objects
    area() { 
        return Math.PI * Math.pow(this.radius, 2)
    }
    // แชร์ method 
    getRadius() { 
        return this.radius
    }
}
const c1 =  new Circle(2)
const c2 =  new Circle(3)
const c3 =  new Circle(4)
console.log(c1.area()) // 12.566370614359172
console.log(c2.area()) // 28.274333882308138
console.log(c3.area()) // 50.26548245743669

// เก็บค่า radius
console.log(c1.getRadius()) //2
console.log(c2.getRadius()) //3
console.log(c3.getRadius()) //4

// การ check prototype
// Object prototype <- Circle prototype <- c1
console.log(Object.prototype.isPrototypeOf(c1)) // True
console.log(Circle.prototype.isPrototypeOf(c1)) // True

console.log(Object.prototype.isPrototypeOf(c2)) // True
console.log(Circle.prototype.isPrototypeOf(c2)) // True

console.log(Object.prototype.isPrototypeOf(c3)) // True
console.log(Circle.prototype.isPrototypeOf(c3)) // True

console.log(Person.prototype.isPrototypeOf(c3)) // False


// 4. create object by using Object.create()
// const p1 = new Person(1001, 'Eye', 'Jaa')
const pp1 = Object.create(p1) // copy object Person มา
console.log(pp1) // Person {} เพราะ copy มาแค่โครงสร้างของ Person แต่ไม่มีข้อมูลของตัวเอง (แต่มีข้อมูลของ p1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)

// การ check prototype
console.log(Object.prototype.isPrototypeOf(pp1)) // true จะมีโครงสร้างเหมือน p1 เลย
console.log(Person.prototype.isPrototypeOf(pp1)) // true จะมีโครงสร้างเหมือน p1 เลย

pp1.hobbies = ['reading', 'shopping'] // เพิ่มข้อมูลของตัวเองเข้าไปแล้ว จะไม่เป็น {} แล้ว
console.log(pp1) // Person { hobbies: [ 'reading', 'shopping' ] }
console.log(Object.keys(pp1)) // return key
console.log(Object.values(pp1)) // return value
console.log(Object.entries(pp1)) // return key,value

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Compare Objects
const st1 = {
    student: 65130500090, 
    firstname: 'Inrita', 
    lastname: 'Warajirawiroj',
    student: 65 
}
const st3 = {firstname: 'Warittinan', lastname: 'Khundiloklulton', student: 64130500075} 
const st4 = {firstname: 'Warittinan', lastname: 'Khundiloklulton', student: 64130500075} 
const st2 = st1

// 1.Referential equality
// === or == compare referrence address between two objects
console.log(st1 === st3) // false
console.log(st1 === st2) // true
console.log(st3 === st4) // false

// 2.Manual Comparison
// create compare function to compare two students
function compareStudent(st1, st2) {
    return st1.studentId === st2.studentId // นิยามความเท่ากันขึ้นมาเอง
}
console.log(compareStudent(st1, st2)) // true
console.log(compareStudent(st3, st4)) // true เพราะ มันไม่ได้เกี่ยวกับนิยามที่เราตั้งไว้
console.log(compareStudent(st1, st3)) // false

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ใช้ JSON ในการ check object empty
const obj1 = {}
const obj2 = {id: 90}

// check object empty แบบนี้ไม่ได้ ผิด!!
if (obj1 == {}) console.log('object is an empty')
else console.log('object is not empty')

// check object empty แบบนี้ถูก!!
console.log(JSON.stringify(obj1)) // return string -> {}
console.log(JSON.stringify(obj2)) // return string -> {"id":90}

// Compare whether object is empty or not by using JSON.stringify()
if (JSON.stringify(obj1) === '{}') console.log('object is an empty')
else console.log('object is not empty')
// object is an empty

if (JSON.stringify(obj2) === '{}') console.log('object is an empty')
else console.log('object is not empty')
// object is not empty

// เอามาทำเป็น function เพื่อลดโค้ด
function isEmpty(obj) {
    return JSON.stringify(obj) === '{}'
}
console.log(isEmpty(obj1)) // true
console.log(isEmpty(obj2)) // false

// Spread (...) กระจาย in object literals
// copy property content
const obj3 = {id: 23, name: 'Eye'}
const obj4 = {...obj3} // Spread operator

console.log(obj3) // { id: 23, name: 'Eye' }
console.log(obj4) // { id: 23, name: 'Eye' }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Object Destructuring (แยกโครงสร้าง)
const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
        firstname: 'Inrita',
        lastname: 'Warajirawiroj'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
        sentDate: new Date(Date.now()),
        host: {
            name: '@sit.kmutt'
        }
    }
}

// Object Destructuring
let {recipent} = mail
let {sentDate, title: header} = mail // title: header เปลี่ยนชื่อ property ได้
console.log(recipent)
console.log(sentDate)
console.log(header)

// ต้องการ firstname, lastname
let {recipent: {firstname, lastname}} = mail
console.log(firstname)
console.log(lastname)

// ต้องการ host name
let {sentDetail: {host: {name}}} = mail
console.log(name)