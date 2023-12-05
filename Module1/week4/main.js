// Conversions and Equality
// Equality with type conversion
if (undefined == null) console.log('undefined == null')
else console.log('undefined != null')

if (undefined === null) console.log('undefined === null')
else console.log('undefined !== null')

// == do not care types but only check value
if ('2' == 2) console.log(`'2 == 2`)
else console.log(`'2' != 2`)

// === start to check data type first. if data types are not the same return
// false, otherwise then check value
if ('2' === 2) console.log(`'2' === 2`)
else console.log(`'2' !== 2`)

// ** recommend to use === for equality and !== for inequality **
// avoid to use == and !=

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// JavaScript String 
// การเปรียบเทียบ String
let str1 = 'apple'
let str2 = 'Apple'
let str3 = 'APPLE'
let str4 = 'apple'

console.log(str1 === str2) // 'a' === 'A' return false
console.log(str1 !== str2) // 'a' !== 'A' return true

console.log(str1 === str4) // 'a' === 'a', 'p' === 'p', 'p' === 'p', 'l' === 'l', 'e' === 'e' return true

console.log(str1 < str2) // 'a' < 'A' | 97 < 65 return false -> เช็คจาก ascii

// check ทีละตัวถ้าเจอตัวที่ไม่เท่าก็จะหยุดทำงาน แต่ถ้ายังไม่เจอก็จะ check ไปเรื่อยๆ

console.log(str1.includes('App')) // return false เพราะ A มันไม่ contain(บรรจุ) มันคนละตัว
console.log(str1.includes('app')) // return true

// ให้ check contain
// includes with case insensitive ไม่แคร์ตัวเล็กตัวใหญ่
console.log(str1.toLocaleLowerCase().includes('app'.toLocaleLowerCase())) // return true
console.log(str1.toLocaleUpperCase().includes('app'.toLocaleUpperCase())) // return true

// === vs includes() ไม่เหมือนกัน
// 'apple' === 'apple' return true
// 'app' === 'apple' return false
// 'apple'.toLowerCase() === 'Apple'.toLowerCase() return true
// 'apple'.includes('apple') return true
// 'apple'.includes('app') return true

// startwith()
// endwith()

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Comparing Objects : give memory address
// Array data type is an object
const a = [1, 2, 3] // a = memory address
const b = [1, 2, 3] // b = memory address
console.log(a === b) // memory address of a === memory address of b // false

const c = b // alias(รูมเมต) give memory address of b to c (ถือกุญแจคนละดอกแต่ไขได้เหมือนกัน)
console.log(c === b) // true
c[0] = 'A'
console.log(b) // ['A', 2, 3]
console.log(c) // ['A', 2, 3]

a[0] = 555
console.log(a) // [555, 2, 3] เพราะ a ไม่ได้เป็นรูมเมตกับใคร
console.log(b) // ['A', 2, 3]
console.log(c) // ['A', 2, 3]

// object data types is an object
const x = {id: 1, title: 'JS'}
const y = {id: 1, title: 'JS'}
const z = y // alias(รูมเมต) give memory address of y to z
console.log(x === y) // memory address of x === memory address of y //false
console.log(y === z) // memory address of y === memory address of z //true

y.id = 888
console.log(x) // {id: 1, title: 'JS'}
console.log(y) // {id: 888, title: 'JS'}
console.log(z) // {id: 888, title: 'JS'}

// Comparing Primitive เก็บค่านั้นเลย
let m = 5 // m stores 5
let n = 10 // n stores 10
let o = n // n assign 10 to o then stores 10

m = 999 // m reassign to 999 then m stores 999
o = 1000 // o reassign to 1000 then o stores 1000
console.log(o === n) // 1000 === 10 >> false
console.log(m) // 999 
console.log(n) // 10
console.log(o) // 1000

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Control Structures

// if-else
// <= 40 => 'F', 41-70 => 'B', 71-100 => 'A'
let score = 88
let grade
if (score < 0 || score > 100) grade = 'invalid scores'
else {
    if (score <= 40)
        grade = 'F'
    else if (score <= 70)
        grade = 'B'
    else 
        grade = 'A'
}
console.log(grade)

// Switch case
let gradeMeaning
switch(grade) {
    case 'F' :
        gradeMeaning = 'Need Improvement'
        break
    case 'B' :
        gradeMeaning = 'Good'
        break
    case 'A' :
        gradeMeaning = 'Very Good'
        break
    default :
        gradeMeaning = 'No meaning'
}
console.log(gradeMeaning)

// ประโยชน์ของมันคือ
let ch = 'O'
switch(ch) {
    case 'A' :
    case 'a' :
    case 'E' :
    case 'e' :
    case 'I' :
    case 'i' :
    case 'O' :
    case 'o' :
    case 'U' :
    case 'u' :
        isVowel = true
}
console.log(isVowel)

for (let index = 0; index < 10; index++) {
    console.log(index)
}

// for of (use with array or iterable object)
let nums = [10, 20, 30]
for (const num of nums) {
    console.log(num)
}

for (let index = 0; index < 10; index++) {
    console.log(nums[index])
}

// for in (use with object data type)
let obj = {id: 1, title: 'JS'}
for (const key in obj) {
    console.log(key)
    console.log(obj[key])
    console.log(`${key}:${obj[key]}`)
}