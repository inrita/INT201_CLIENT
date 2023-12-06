// Week 13 - Document Object Modeling (DOM)
// Selecting Elements

// Select 1 node
// Select the first node with its id (ถ้ามี id มาให้ = ง่ายสุด)
const ulStudents1 = document.getElementById('students')
console.log(ulStudents1)
// console.log(document.getElementById('students'))

// Select the first node with CSS selector
const ulStudents2 = document.querySelector('#students') // id selector (# syntax ของ CSS)
console.log(ulStudents2)

// querySelector สามารถใส่ CSS ได้มากกว่า 1 condition และดูลำดับที่ match ขึ้นต้นด้วยตัวเลขไม่ได้ อีกทั้งลำดับมีผล
// แต่ไม่ควรใส่มากกว่า 1 เพราะมัน return first element
// incorrect, give more than one string selector
const programmingLect1 = document.querySelector(
    '#std-655000888',
    '#int201',
    '.programming',
    '#p-01')
console.log(programmingLect1)

const programmingLect2 = document.querySelector('.programming') // class selector
console.log(programmingLect2) // return first element >> Pichet Limvajiranan

// ต้องทำแบบนี้ใส่แค่ '' แค่อันเดียวพอ
// correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)

// incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)

// หา ul 
const ulStudents3 =document.querySelector('ul[id="students"]') // tag with attribute selector
console.log(ulStudents3)

const ulEle = document.querySelector('ul') // tag name
console.log(ulEle)

const divU1 = document.querySelector('div>ul') // ul ที่มี parent เป็น dvi
console.log(divU1)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Select a collection of specified condition
// return HTMLCollection data type - array-like (can use index or length),
// cannot use array function (filter, map, ...))
const programmingLect = document.getElementsByClassName('programming')
console.log(programmingLect)
console.log(programmingLect.length)

const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// querySelectorAll
// NodeList data type - array-like (can use index, length) but NodeList
// inplements only forEach but can not use other array functions
const courseEle = document.querySelectorAll('.course')
console.log(courseEle)

const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.course')
console.log(courseUnderDiv)

const underDoc = document.querySelectorAll('.course')
console.log(underDoc)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // NodeList, implement only forEach, not all array function implemented
// const programmingLect = document.querySelectorAll('.programming')
// console.log(programmingLect)
// programmingLect.forEach((p1) => {
//     console.log(p1)
//     console.log(p1.nodeName)
//     console.log(p1.nodeType) 
//     console.log(p1.nodeValue)
//     console.log(p1.attributes) //get all attributes of element หรือ NameNodeMap does not implement forEach
//     Array.from(p1.attributes).forEach((attr) => console.log(attr))
//     // ใช้ Array.from แปลงเป็น array
// })

// const pEle = document.getElementById('p-01')
// const pEleAttributes = pEle.attributes //ดู attribute ของมันทั้งหมด
// console.log(pEleAttributes)
// console.log(pEleAttributes.length)
// Array.from(pEleAttributes).forEach((attr) => {
//     console.log(attr.name)
//     console.log(attr.value)
// })
// console.log(pEle.getAttribute('id')) //รู้ชื่อ id ของ attribute ที่เราสนใจ

// const ulEle = document.getElementsByTagName('ul')
// // return HTMLCollection -array-like, not implement forEach
// const ulEleArray = Array.from(ulEle)
// ulEleArray.forEach((ul) => console.log(ul))
// // ต้องใช้ Array.from เปลี่ยนเป็น array เอง


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// innerHTML, innerText and textContent
// เป็นการจัดการดึง text ระหว่าง tag เปิด-ปิด ออกมา

// const divEle = document.getElementById('exampleElement')
// console.log(divEle.textContent) // ดึงเอา text ออกมาไม่รู้ความหมาย tag
// console.log(divEle.innerText) // รู้ความหมาย tag แต่เอาเฉพาะ text ออกมา
// console.log(divEle.innerHTML) // เอาทั้ง tag และ text ออกมา


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//CRUD on any element node
//Create, Read(ดึงค้นหาข้อมูล), Update, Delete

//1. create element, <li></li>
const newLiEle = document.createElement('li')

//2. create attribute <li class="devops" name="devopsLect">
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')

//3. add text value to element,
//<li class="devops" name="devopsLect">Siam Yamsangsung</li>
// newLiEle.textContent = 'Siam Yamsangsung'
// newLiEle.style = 'color:red'
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'

//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
divParent.appendChild(newLiEle) // add element ที่สร้างมาใหม่เป็นลูกสุดท้าย
console.log(divParent)

// ให้ใส่ขื่อ Siam อยู่ก่อน Kriengkrai
const liEle = document.querySelectorAll('div.lecturers>ul>li')
console.log(liEle)
const refNode = liEle[1]
console.log(refNode)

// divParent.insertBefore(newLiEle, refNode) // ย้าย node ใหม่มาแทรกกลาง (ให้ใส่ขื่อ Siam อยู่ก่อน Kriengkrai) 
// divParent.replaceChild(newLiEle, refNode) // แทนที่ node (ให้ใส่ขื่อ Siam แทนที่ Kriengkrai)
// divParent.removeChild(refNode) // ลบ Kriengkrai ออก


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// System Dialogs

// window.alert, window.prompt, window.confirm
// เอาไว้ใช้ตอน dev mode

// // 1.window.alert : บอก alert
// window.alert('Do you want to exit?') 

// // 2.window.prompt
// const userName = window.prompt('Please enter your name', 'ex. Inrita') // (ข้อความที่จะสื่อสาร, default message)
// console.log(userName) // return user input,
// // ok = user input, cancel = null

// // 3.window.confirm
// const isExit = window.confirm(`Goodbye, ${userName}`)
// console.log(isExit) // return Boolean (true or false),
// // ok = true, cancel = false


// 1.window.alert : บอก alert
window.alert('Welcome, Umaporn') 

// 2.window.prompt
const userName = window.prompt('What is your name?', 'write your name') // (ข้อความที่จะสื่อสาร, default message)
console.log(userName) // return user input,
// ok = user input, cancel = null

// 3.window.confirm
const isExit = window.confirm('Do you want to exit?')
console.log(isExit) // return Boolean (true or false),
// ok = true, cancel = false


