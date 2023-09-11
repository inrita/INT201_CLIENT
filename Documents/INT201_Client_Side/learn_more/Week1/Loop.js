// for-loop
for (let i = 0 ; i <= 5 ; i++) { 
    // (การประกาศตัวนับ; check conditional ไม่อย่างงั้นมันจะลูปไปเรื่อย; เมื่อ console.log เรียบร้อยมันจะบวกค่าเพิ่มมาหนึ่งให้กับค่าต่อไป)
    console.log("This is For loop")
}


const array1 = [5,10,15,20,25] // index = [0, 1, 2, 3, 4, 5]
// for-of เอาไว้ใช้กับ array (use with array or iterable object)
for (data of array1) { // data คือ ชื่อตัวแปรที่เก็บข้อมูลตั้งชื่ออะไรก็ได้
    console.log(data)
}


const student = {firstname: 'Inrita', lastname: 'Warajirawiorj', age: 19}
for (property in student) {
    console.log(student[property]) // การเรียก values ให้ใช้ [] ไม่สามารถใช้ . ได้ใน loop
    console.log(property)
}


const object1 = {a:2,b:3,c:9}
// for-in (use with object data type)
for (data in object1) {
    console.log(object1[data]) // ได้ค่า values (การเข้าถึงข้อมูลของ object1) >> 2, 3, 9
    console.log(object1) // การเข้าถึง object1 >> {a:2,b:3,c:9}
    console.log(data) // ได้ชื่อ propoty >> a, b, c
}
console.log(object1.a) // ได้ค่า values ของ a >> 2


// do-while
let counter = 0
do {
    console.log(counter) // ทำบรรทัดนี้ก่อน
    counter++ // แล้วค่อยมาทำบรรทัดนี้
}
while (counter < 5) ; // น้อยกว่า 5 ก็จะหลุดออกจาก loop


// check เงื่อนไขก่อน
let messageCount = 0
while (messageCount < 5) {
    console.log("Hello")
    messageCount++
}