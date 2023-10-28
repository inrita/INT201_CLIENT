// Working Function
// arguments[i] : รู้ว่า funtion นั้นรับ parameter มากี่ตัวกี่รายการ และรู้ว่าแต่ละรายการคืออะไร

function ops(n1, n2, ...n3) { // Formal parameters (ตัวส่ง)
    // arguments[0] = n1, arguments[1] = n2, arguments[2] = n3
    console.log('arguments length:', arguments.length) //3 
    // arguments[0] = 555
    // console.log(n1) //555

    for (const argu of arguments) {
        console.log(argu) // 1, true, 'xyz'
    }
    console.log('n3:', n3) // n3: [ 'xyz', 100, 2 ] <- type of array
}
ops(1, true, 'xyz', 100, 2) // Actual parameters (ตัวรับ), arguments object stores collections at actual parameters
// ops(1, true) // ส่ง parameter ไม่ครบก็จะไม่ error เพราะ n3 จะเป็น undefined
// ops(1, true, 'xyz', 10.5) // ส่ง parameter เกินก็จะไม่ error เพราะ มันเก็บผลตอนตัวส่ง ไม่เกี่ยวกับตัวรับ


// Rest parameter (...) : ยุบค่าที่เหลือ ใช้ได้แค่ครั้งเดียวที่ตำแหน่งสุดท้าย
function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0)
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Default parameters (ใช้ = กำหนดค่า) : ถ้าส่ง parameter มาไม่ครบ (ไม่ส่งค่ามา) ให้คืน "ค่าที่กำหนด"
function ops(n1 = 'F', n2 = 'false', n3 = 'unknown') { // ถ้าไม่ส่งมาให้เป็นค่าที่กำหนด
    return {n1, n2, n3}
}
// 1.กรณีไม่ส่งค่าไป -> retake ค่า default
console.log(ops()) // { n1: 'F', n2: 'false', n3: 'unknown' }
console.log(ops('A')) // { n1: 'A', n2: 'false', n3: 'unknown' }
console.log(ops('A', true)) // { n1: 'A', n2: true, n3: 'unknown' }
console.log(ops('A', true, 'Tle')) // { n1: 'A', n2: true, n3: 'Tle' }

// 2.กรณีส่งค่าเป็น undefined -> retake ค่า default
console.log(ops(undefined, undefined, undefined)) // { n1: 'F', n2: 'false', n3: 'unknown' }
console.log(ops('A', undefined, 'Tle')) // { n1: 'A', n2: 'false', n3: 'Tle' }

// 3.กรณีส่งค่าเป็น null คือ value -> ไม่ retake ค่า default
console.log(ops(null, null, null)) // { n1: null, n2: null, n3: null } Null คือ value ไม่ retake ค่า


// Spread parameter (...) : กระจายค่า
function sum(num1, num2, num3) {
    return num1 + num2 + num3
}
let nums = [5, 20, 15]
// spread parameter
console.log(...nums) // 5 20 15 (ค่า spread)
console.log([...nums]) // [ 5, 20, 15 ] (ค่า spread)
console.log(sum(...nums)) // 40, spread opetator
console.log(sum(nums)) // 5,20,15undefinedundefined 
//array -> String และค่าของ num2, num3 เป็น undefined และมันก็จะเอามา + concat ถ้าไม่ใส่ spread


const num = [10, 20, 30, 40, 50]
const obj = {
    id: 1001, 
    title: 'JS Beginner', 
    isbn: 3434345656, 
    authors: {fullname: 'Jame Smitch'}
}

//destructuring on array variable
const [num1, num2] = nums 
console.log(num1) //10
console.log(num2) //20

//destructuring on object variable
const { isbn: bookId } = obj // เปลี่ยนชื่อ propertyKey
console.log(bookId) //3434345656

const { is } = obj 
console.log(is) //undefined เพราะชื่อไม่ตรงกับชื่อ propertyKey

// Nested objects
const {
  authors: { fullname: authorName }
} = obj
console.log(authorName) //Jame Smith

// การทำ destructuring บน parameter ทำได้ทั้ง (array, object)
function getFirstName({ displayName, fullName: { firstName: fn } }) {
    return `${displayName} is ${fn}`
  }
  const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
      firstName: 'Somchai',
      lastName: 'DeeJai'
    }
  }
  console.log(getFirstName(students))

