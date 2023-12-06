// // Week 14 | Event Part 2

// Event Objects
const submitButton = document.querySelector("button");
// console.log(submitButton)

// preventDefault() : จะยกเลิก default การทำงานทั้งหมดแล้วให้เราควบคุมการทำงานเอง
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cancle sumbit to server");
});

// โจทย์ : check validate เมื่อกด submit จะตรวจสอบข้อมูลว่ากรอกข้อมูลครบทั้ง username, password มั้ย
// ถ้าครบ: แสดงข้อความขึ้น | ถ้าไม่ครบ: ก็ให้แสดงข้อความขึ้น 
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const allInputElement = document.querySelectorAll('input')
    const isComplete = Array.from(allInputElement).every(
      (input) => input.value.length > 0
    )

    const showMessage = document.querySelector('p')
    // const showMessage = document.getElementsByTagName('p')[0] // return HTMLCollection เลยเอาช่องที่ 0 มาดู
    console.log(showMessage)
    if (isComplete) {
        showMessage.textContent = 'Your input are complete'
    } else {
      showMessage.innerHTML = '<span style="color:red"> Missing some value, plese enter </span>'
    }
})

// Note : ถ้าต้องการจะติดต่อ server ก็ต้องติดต่อเอง เพราะเรายกเลิก default ไปแล้ว

// // Solution by ปลิ้มม
// const submitBtn = document.querySelector("button");
// const inputUser = document.querySelector("#input-user");
// const inputPsw = document.querySelector("#input-psw");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Cancel submit listen the server");
//   const pEl = document.querySelector("p");
//   if (inputUser.value === "" || inputPsw.value === "") {
//     pEl.textContent = "กรอกข้อมูลไม่ครบ";
//   } else {
//     pEl.textContent = "กรอกข้อมูลครบ";
//   }
// });

// // Solution by เบสสิเก้
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Cancel submit listen the server");
//   const pEl = document.querySelector("p");
//   if (!inputUser.value || !inputPsw.value) {
//     pEl.textContent = "กรอกข้อมูลไม่ครบ";
//   } else {
//     pEl.textContent = "กรอกข้อมูลครบ";
//   }
// });

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Event Types

// State Change Events
document.addEventListener("DOMContentLoaded", () => {
  console.log("Your DOM tree built");
});

window.addEventListener("load", () => {
  console.log("Your Application loaded");
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("myCat", "Tom"); // อยู่ใน applicaiton
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Focus Events

const username = document.getElementById("input-user");
// console.log(username)
const password = document.getElementById("input-psw");
// console.log(password)

// เอาเม้าส์ไปคลิก
username.addEventListener("focus", () => {
  console.log("Your focus is on username");
});
// เอาเม้าส์ออกไปคลิกที่อื่น
username.addEventListener("blur", () => {
  console.log("Your username input textbox is blured");
});


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Mouse Events

window.addEventListener("mousemove", (e) => {
  console.log(`x:${e.screenX}, y:${e.screenY}`);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Keyboard Events

const userElement = document.getElementById('input-user')
//using 'keydown' and 'keypress' only to detect number characters 0-9
userElement.addEventListener('keypress', (e) => { // ไม่ต้องแสดงผลถ้าเป็นตัวเลข
  console.log(`${e.key}, ${e.code}`)
  if (e.key >= 0 && e.key <= 9) { // username ห้ามใส่ตัวเลข
    e.preventDefault()
  }
})

// when user release enter key, text value on username will show at <p> element
// เมื่อกด enter ให้เอาค่า username มาแสดงผลที่ <p>
userElement.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  }
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Input Events

userElement.addEventListener('input', (e) => {
  const pElement = document.querySelector('p')
  pElement.textContent = e.target.value
})