// Week 15 | Client-Side Storage
// Cookies
import { CookieUtil } from './mylib/cookieUtil.js'

// Set-Cookie ('name = value')
document.cookie = 'username = Inrita'
document.cookie = 'course = INT201'
document.cookie = 'credit = 3'
document.cookie = 'credit = 2' // ถ้ามี cookie ซ้ำจะ retake ค่าล่าสุดให้เลย
const currentCookies = document.cookie
console.log(currentCookies)

// get cookie name ตัวที่ต้องการ (ต้องเขียน function เองในที่นี้มี class CookieUtil จากอาจารย์มาช่วยแล้ว)
console.log(CookieUtil.get('course'))

// set new Date(year, monthIndex, day)
CookieUtil.set('username', 'Inrita', new Date(2023, 11, 25))
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', '2', new Date(2023, 0, 1))

console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))

// unset
console.log(CookieUtil.unset('credit'))
console.log(CookieUtil.get('credit'))


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Web Storage
// มี method เข้ามาช่วยไม่ต้องไปใช้ library เหมือน Cookie

// localStorage : ค่าคงอยู่ถาวรเหมือนเดิม (เก็บยาว)
let counter = localStorage.getItem('count')
if (counter === null) {
    counter = 1
    localStorage.setItem('count', counter)
} else localStorage.setItem('count', ++counter) //บวกค่าต่อเนื่อง
alert(`counter = ${counter}`)
localStorage.removeItem('count')
localStorage.clear() // all items removed

// sessionStorage : เปิด-ปิด browser,tab ใหม่จะเริ่มนับค่าใหม่ (เก็บสั้น)
// let counter = sessionStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     sessionStorage.setItem('count', counter)
// } else sessionStorage.setItem('count', ++counter) //บวกค่าต่อเนื่อง
// alert(`counter = ${counter}`)

// sessionStorage.removeItem('count')
// sessionStorage.clear() // all items removed

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// โจทย์ : ให้เก็บ font size แล้วคงขนาด font size ที่ user ได้เลือกเอาไว้ 
const form = document.getElementById('form');
const input = document.getElementById('input');
const text = document.getElementById('text');
 
if (localStorage.getItem('fontSize')) {
  text.style.fontSize = `${localStorage.getItem('fontSize')}px`;
}
 
form.addEventListener('submit', function (e) {
  e.preventDefault();
  text.style.fontSize = `${input.value}px`;
  localStorage.setItem('fontSize', input.value);
});


// โจทย์ : ให้เก็บ background color แล้วคง background color ที่ user ได้เลือกเอาไว้ 
window.addEventListener('load', () => {
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
  })
  const colorInput = document.getElementById('color-input')
  colorInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
  })


