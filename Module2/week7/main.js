// Object Destructuring (แยกโครงสร้าง)
const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
        firstname: 'Inrita',
        lastname: 'Warajirawiroj'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
        sentDate: new Date(Date.now()),
        host: {
            name: '@sit.kmutt'
        }
    }
}

// Object Destructuring
let {recipent} = mail
let {sentDate, title: header} = mail // title: header เปลี่ยนชื่อ property ได้
console.log(recipent)
console.log(sentDate)
console.log(header)

// ต้องการ firstname, lastname
let {recipent: {firstname, lastname}} = mail
console.log(firstname)
console.log(lastname)

// ต้องการ host name
let {sentDetail: {host: {name}}} = mail
console.log(name)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Function types

// function declaration, named function
function sum(n1, n2) {
    return n1 + n2
}

// function expression, annonymous function
const sum2 = function (n1, n2) {
    return n1 + n2
}

// function expression, named function
const sum3 = function sumfn(n1, n2) { // เกินความจำเป็น
    return n1 + n2 // เรียกไม่ได้เรียกได้แค่ภายใน scope มันเอง
}
// arrow funciton, annonymous function
const sum4 = (n1, n2) => n1 + n2 // ไม่ต้องใส่ return เพราะมีแค่ statement เดียว

console.log(sum(1,2)) //3
console.log(sum2(1,2)) //3
console.log(sum3(1,2)) //3
console.log(sum4(1,2)) //3

const sum5 = (n1, n2) => {
    return n1 + n2 // ต้องใส่ return ถ้ามีหลาย statement หรือมี {} ถ้าไม่ใส่ return จะขึ้น undefined
}
console.log(sum5(1,2)) //3

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Array Iterator Methods

const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
    {
        id: 65130500090,
        sender: {
            firstname: 'Inrita',
            lastname: 'Wara'
    },
    subjec: 'Welcome to SIT, KMUTT'
    },

    {
        id: 64130500075,
        sender: {
            firstname: 'Warittinan',
            lastname: 'Khun'
        },
    subject: 'Reminder: INT201 Class'
    }
]

// forEach() : วนลูปให้เราไปเอาค่าที่ต้องการ และไม่ return ค่า
keywords.forEach((keyword) => console.log(keyword)) 
// destructuring
// spread
// rest
// prototypes
// function

mails.forEach((mail) => console.log(mail))
// {
//     id: 65130500090,
//     sender: { firstname: 'Inrita', lastname: 'Wara' },
//     subjec: 'Welcome to SIT, KMUTT'
//   }
//   {
//     id: 64130500075,
//     sender: { firstname: 'Warittinan', lastname: 'Khun' },
//     subject: 'Reminder: INT201 Class'
//   }

// 1.string contains the first charactor of each keyword
// output : 'dsrpf'
let firstChars = ''
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
console.log(firstChars) // dsrpf

// ใช้ push() เพิ่มข้อมูลเข้าไปใน array
keywords.push('optional chaining')
console.log(keywords)

// 2. all mail ids of mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))
console.log(mailIds) // [ 65130500090, 64130500075 ]

// filter() : คัดกรองเงื่อนไขที่ถูกต้องเท่านั้น
// 3.return array that contains keywords which include 'es' (case insensitive)
const es = keywords.filter(keyword => keyword.toLowerCase().includes('es'))
console.log(es) // [ 'destructuring', 'rest', 'prototypes' ]

// map() : จะคืนทุก element บนเงื่อนไขที่กำหนด
// 4.array that contains all senders'firstname
const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders) // [ 'Inrita', 'Warittinan' ]

// 5.array that contains all mailids that start with 'logId-'
// result : ['logId-65130500090', 'logId-64130500075']
const logMailIds = mails.map((mail) => 'logId-' + mail.id)
console.log(logMailIds) // [ 'logId-65130500090', 'logId-64130500075' ]

// สามารถเลือกตัวที่เราต้องการออกมา (ดึงออกมาได้เฉพาะตัวที่เราต้องการ) เอาทุก record แต่บาง column
// where cause = filter()
// select บาง column = map()