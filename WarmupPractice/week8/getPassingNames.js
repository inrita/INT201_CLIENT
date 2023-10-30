// วิธีที่ 1
function getPassingNames(students) {
    const filterStudents = students.filter((students => students.score >= 70)) // เข้าได้ทุก element แต่เอาเฉพาะตัวที่ตรงเงื่อนไขออกมา
    console.log(filterStudents)
//     [
//         { name: 'Alice', score: 85 },
//         { name: 'Bob', score: 92 },
//         { name: 'Eve', score: 78 }
//     ]
    const studentNames = filterStudents.map(
        (filterStudents) => filterStudents.name.toUpperCase())
        return studentNames
        // [ 'ALICE', 'BOB', 'EVE' ]
}

// วิธีที่ 2 (เขียนให้สั้นขึ้น)
function getPassingNames(students) {
    return students
        .filter((student) => student.score >= 70) // กรองคนที่คะแนนผ่าน >= 70
        .map((filterStudent) => filterStudent.name.toUpperCase()) // ดึงรายชื่อเฉพาะคนที่ผ่าน >= 70
}

// Example usage:
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const passingNames = getPassingNames(studentScores)
console.log(passingNames)
// Output should be: ["ALICE", "BOB", "EVE"]