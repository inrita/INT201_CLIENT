// ทวน JS Module
// เรียกไฟล์ utils.js

// Common JS
const {echo, sum, MAX_VALUE} = require('./libs/utils.js')
console.log(echo('Practice makes perfect'))
console.log(sum(1,5,4))
console.log(MAX_VALUE)

//ES Modules 
// Named export ต้องใส่ชื่อให้ตรงกัน และต้องอยู่ใน {}
import {echo, sum, MAX_VALUE} from './libs/utils.js'
console.log(echo('Practice makes perfect'))
console.log(sum(1,5,4))
console.log(MAX_VALUE)

// Default export มีได้แค่ 1 unit ต่อ 1 ไฟล์
import total from './libs/utils.js' // ไม่ต้องอยู่ใน {}
import sum, {echo} from './libs/utils.js'