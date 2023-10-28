// Array Iterator Methods
const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "DAVID", score: 79 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 },
  { name: "david", score: 85 },
]

// find() : หา element แรกเจอปุปหยุดทำงานเลย
// หา student ที่ชื่อ David คนแรกของ array ที่เจอ
// return student who has name equals to david with in casesensitive and score more than 80
console.log(studentScores.find(
  (student) => student.name.toLowerCase() == "david" && student.score > 80))

// หา david ทุกคนที่คะแนนมากกว่า 80
const result = studentScores.filter(
  (student) => student.name.toLowerCase() === "david" && student.score > 80)
  console.log(result)

// findIndex() : หาตำแหน่ง index
const foundIndex = studentScores.findIndex(
  (student) => student.name.toLowerCase() === "eve")
  console.log(foundIndex) // 5 ("eve" อยู่ใน index เบอร์ 5 / element ตัวที่ 6)

const foundAnn = studentScores.findIndex(
  (student) => student.name.toLowerCase() === 'ann')
  console.log(foundAnn) // -1 คือ ไม่เจอ


// every() : ทุก element เป็น "true" ทั้งหมด -> every() ถึงจะ return เป็น true
// some() : อย่างน้อย 1 element เป็น "true" -> some() ถึงจะ return เป็น true
const fruits = ["apple", "mango", "orange", "pineapple"]
// return boolean to check whether all fruits start with vowel characters [a,e,i,o,u]
// วิธีที่ 1
console.log(
  fruits.every((fruit) => {
    return ["a", "e", "i", "o", "u"].includes(fruit[0].toLowerCase()) // fruit[0] = charAt(0)
  })) // false

// วิธีที่ 2
const isStartWithVowel = fruits.every((fruit) => {
  for (vowel of ["a", "e", "i", "o", "u"]) {
    if (fruit.toLowerCase().startsWith(vowel)) {
      return true
    }
  }
  return false
}) 
console.log(isStartWithVowel) // false

// วิธีที่ 3
let check = fruits.every(
  (n) =>
    n.toLowerCase().startsWith("a") ||
    n.toLowerCase().startsWith("e") ||
    n.toLowerCase().startsWith("i") ||
    n.toLowerCase().startsWith("o") ||
    n.toLowerCase().startsWith("u")
)

// reduce() : มีหลายค่ามายุบรวมให้เหลือ 1 ค่า
// concat with the first character of all fruits
// output : 'amop'
const result1 = fruits.reduce(
  (firstChars, fruit) => firstChars.concat(fruit.charAt(0)), "") // charAt(0) = fruit[0]
console.log(result1) // ถ้าไม่ระบุ initialValue จะเริ่มต้นด้วยตัวแรก

const nums = [1, 2, 3, 4, 5];
const mulResult2 = nums.reduce((mul, num) => mul * num)
console.log(mulResult2) // 120

const sellProducts = [
  { id: 1, price: 100, sell: 5 },
  { id: 2, price: 50, sell: 2 },
  { id: 3, price: 25, sell: 10 },
]

// return selling's total prices
const sellTotalPrices =  sellProducts.reduce(
    (total, sellproduct) => total + (sellproduct.price * sellproduct.sell), 0) // 0 คือกำหนดค่าเริ่มต้น (initialValue)
console.log(sellTotalPrices) // 850

// [object Object]100250 -> ที่ขึ้น object เพราะ เป็นการคำนวณต่อ string
// ถ้าไม่กำหนดค่าเริ่มต้น (initialValue)
// const sellTotalPrices = sellProducts.reduce(
//   (total, sellproduct) => total + (sellproduct.price * sellproduct.sell))
// console.log(sellTotalPrices) // [object Object]100250

// มีการใช้ destructuring เข้ามาช่วย
const sellTotal = sellProducts.reduce((total, {price, sell}) => total + (price*sell), 0)
console.log(sellTotal) // 850

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Subarray Methods

// splice() : start, delete, add
const fruits2 = ["apple", "mango", "orange", "pineapple", "banana", "grape"];
// splice with "remove"
// return an array containing the deleted elements. (return ผลลัพธ์จาการ delete ถ้าไม่มี delete จะ return [])
const removeElement = fruits2.splice(1, 2) // เริ่มที่ตำแน่งที่ 1 ลบออก 2 ตัว
console.log(removeElement) //['mango', 'orange']
console.log(fruits2) // ['apple', 'pineapple', 'banana', 'grape']

// splice with "add"
const addElement = fruits2.splice(2, 0, "mango", "rambutant"); // เริ่มที่ตำแน่งที่ 2 | add เข้าไป
console.log(addElement); // [] ไม่มี delete จะ return empty array
console.log(fruits2); // [ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]

// splice with "replace"
const deleteFruit = fruits2.splice(2, 1, "mangosteen");  // เริ่มที่ตำแน่งที่ 2 | ลบ 1 ตัว | replace
console.log(deleteFruit); // [ 'mango' ]
console.log(fruits2); // [ 'apple', 'pineapple', 'mangosteen', 'rambutant', 'banana', 'grape' ]

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Searching and Sorting Methods

// includes() : ดูว่ามีค่าใน array มั้ย
const animals = ["ant", "dogs", "cats", "bird"];
const message = "Practices make perfact";
// string includes - includes substring (case sensitive)
// ดู string ที่มีอยู่ไม่ได้ check เป็นคำ
console.log(message.includes("ics")); //true
console.log(message.includes("make")); //true

// array includes - includes string in array elements (case sensitive)
// ต้อง includes ทั้ง elemeant ใน array
console.log(animals.includes("ats")); // false
console.log(animals.includes("cats")); //true

// reverse() : ย้อนกลับกระทำกับ original array
animals.reverse();
console.log(animals); // [ 'bird', 'cats', 'dogs', 'ant' ]

// sort() : เรียงลำดับ
const animals2 = ["ant", "dogs", "cats", "Bird", "Birds"];
animals2.sort();
console.log(animals2); // [ 'Bird', 'Birds', 'ant', 'cats', 'dogs' ]

const nums1 = [5, 1, 10, 1000, 2, 3, 50];
nums1.sort();
console.log(nums1); // เรียงตาม assci
//  [
//     1, 10, 1000,
//     2,  3,    5,
//    50
//  ]

// เรียงลำดับเลข
// วิธีที่ 1
nums1.sort((a, b) => a - b); // (a - b ถ้าติดลบแสดงว่าน้อยกว่า a)
console.log(nums1)
// [
//     1,  2,  3,
//     5, 10, 50,
//  1000
// ]

// วิธีที่ 2
nums.sort((a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
})
console.log(nums)

const persons = [
    {id:1, fullname:'Susan Jo'},
    {id:3, fullname:'John Lee'},
    {id:2, fullname:'ann Smith'}
]
// return sorted array by fullname (ascending order and ignore case)
// [ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]

// วิธีที่ 1
persons.sort((a,b) => {
  return a.fullname.localeCompare(b.fullname)
})
console.log(persons)
// localeCompare มี 3 ค่า negative number, 0, 1
// -1, 0 ไม่สลับที่ แต่ถ้า 1 จะสลับที่

// // วิธีที่ 2
const sortignorecase = persons.sort((a, b) => {
  if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
      return -1
  } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
      return 1
  } else return 0
})
console.log(sortignorecase)

// join() : เปลี่ยน array เป็น "String"
const animals3 = ["ant", "dogs", "cats", "Bird", "Birds"]
const results = animals3.join('/')
console.log(results) // ant/dogs/cats/Bird/Birds






