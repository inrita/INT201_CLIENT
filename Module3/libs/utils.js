// ทวน JS Module

export function echo(msg) {
    return msg
}

export default function sum(...nums) {
    let total = 0 //เป็น const เลยเกิด error
    for (const num of nums) {
        total += num
    }
    return total
}
// console.log(sum(1,3,4,5))

// const MAX_VALUE = 100
// // Common JS
// // อนุญาตให้ไฟล์อื่นใช้ได้ต้อง export
// module.exports = {echo, sum, MAX_VALUE}

// ES Modules : ใส่ export หน้า funciton/ตัวแปร
// Named export ต้องใส่ชื่อให้ตรงกัน
export const MAX_VALUE = 100
export {echo, sum, MAX_VALUE} // export list หรือจะใส่หน้า functio/ตัวแปรก็ได้

// Default export มีได้แค่ 1 unit ต่อ 1 ไฟล์
export {sum as default, echo } // export list หรือจะใส่หน้า functio/ตัวแปรก็ได้