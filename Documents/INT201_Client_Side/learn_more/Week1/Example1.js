// Using switch to show Subject detail

// case   : console.log
// INT201 : "Client Side"
// INT202 : "Server Side"
// INT205 : "Database Management"
const Subject1 = "INT205"
switch (Subject1) {
    case ('INT201') :
        console.log('Client Side')
        break
    case ('INT202') :
        console.log('Server Side')
        break
    case ('INT205') :
        console.log('Database Management')
        break
}


// Now try using If-Else to show Subject detail
const Subject2 = 'INT202'
if (Subject2 === 'INT201') {
    console.log('Client Side') 
} else if (Subject2 === 'INT202') {
    console.log('Server Side')
} else if (Subject2 === 'INT205') { // ควรใส่ else if ไว้กันอาจารย์
    console.log('Database Management')
}


// Did you see any difference between Switch and If-Else?


const students = ["Kongphop", "Jittra", "Suksawat", "Supa", "Wanchana", "Walaiporn", "Pasutorn"]
// Make a For Loop program that say "Greeting <student_name>" all students
// for ...of ใช้ key
for (name of students) {
    console.log('Greeting' + ' ' + (name))
}

// for ...in ใช้เลข index
for (name in students) {
    console.log('Greeting' + ' ' + students[name])
}


const dataSet1 = ["Male", "Female", "Female", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male"]
// Make a program that can count "Male" and "Female" in dataSet
// And then console.log how many count in "Male" and "Female"
// "Male : xx"
// "Female : xx"

// บรรทัด 55-56 ประกาศตัวแปรไว้เพื่อเก็บค่าตัวเลข
let maleCount = 0
let femaleCount = 0
for (value of dataSet1)
    if (value === 'Male') {
        maleCount++
    } else if (value === 'Female') {
        femaleCount++
    }
console.log(maleCount) // 10
console.log(femaleCount) // 9
