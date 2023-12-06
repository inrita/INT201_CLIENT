// Week 14 | Event Part 1

// Adding event handlers
// ตัวอย่าง 1 : submit button
// 1. select target HTML object
const submitButton = document.querySelector('button')
console.log(submitButton)
// const submitButton2 = document.getElementById('btn-001')
// console.log(submitButton2)
// const submitButton3 = document.getElementsByTagName('button')
// console.log(submitButton3)

// 2. register handler function on a target HTML object
const doSomething = (e) => { 
    // e is parameter รับค่า event object มา
    // e จะทำงานเมื่อถูก click แล้วจะเรียกฟังก์ชัน doSomething มาทำงาน
    console.log('submit button is clicks')
    console.log(e)
    console.log(e.type)
    console.log(e.target.id)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
    console.log(`Good bye, ${e.target.id}`)
}
submitButton.addEventListener('click', doSomething)
// หรือเรียกใช้แบบนี้ก็ได้

// Adding multiple event handlers funtion on the same event type and HTML object
submitButton.addEventListener('click', (e) => {
    console.log(`hello, ${e.target.id}`)
})
// const doSomething = (e) => {
//     console.log(`Good bye, ${e.target.id}`)
// }

// Removing event handlers
submitButton.removeEventListener('click', doSomething) // Good bye ถูกลบออกไป

// ตัวอย่าง 2 : inner div
const innerDiv = document.getElementById('inner-div')
// console.log(innerDiv)
innerDiv.addEventListener('click', (event) => {
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
})

// ตัวอย่าง 3 : outer div
const outerDiv = document.getElementById('outer-div')
// console.log(outerDiv)
outerDiv.addEventListener('click', (event) => {
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
})

// Note: ถ้าเรากดปุ่ม submit ตัว innerDiv และ outerDiv มันจะรับรู้ถึงกัน