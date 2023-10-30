const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },

  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },

  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },

  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },

  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]
    
// 1.1
function getAttendanceRate(student) {
  const pDay = student.filter(Boolean).length // return เฉพาะตัวที่เป็น True เท่านั้น
  //console.log(pDay)
  const attendenceRate = (pDay / student.length) * 100
  return attendenceRate
}
console.log(getAttendanceRate(students[0].attendance)) //80

// 1.2
function getAvgScore({testScores}) { // {testScores} ใช้ destructuring : แยกองค์ประกอบของ object ที่เราจะรับเช้ามา
  const sumScore = testScores.reduce((total, score) => total + score, 0) 
  // ใช้ reduce() เพื่อ return ค่าสะสมออกมาค่าเดียว
  // ค่าสะสมของแต่ละคน
  return sumScore / testScores.length // เอาค่าสะสมของแต่ละคนมาหารจำนวนข้อมูลที่มีอยู่ใน array เพื่อหาค่าเฉลี่ย
}
console.log(getAvgScore(students[0])) //86.6 (ค่าเฉลี่ยของ -> 'Sophia')
console.log(getAvgScore(students[1])) //75.4 (ค่าเฉลี่ยของ -> 'Mason')

// 1.3
function underPerformStudents(students) { // รับ array ของ object ทั้งหมดเลย
    const underPerform = students.filter( // ใช้ filter() ในการกรองเอาเฉพาะ 2 เงื่อนไขที่กำหนดนี้
      (student) => getAttendanceRate(student.attendance) < 80 && getAvgScore(student) < 70)
      // จะได้ array object มาและทำการเก็บลงใน underPerform

    const pass = underPerform.map((obj) => { // เอา underPerform มาจัดรูปแบบตามที่โจทย์ต้องการ
      return {
        name: obj.name,
        attendanceRate: getAttendanceRate(obj.attendance),
        avgScore: getAvgScore(obj)
      }
    })
    return pass
  }
  console.log(underPerformStudents(students)) // [ { name: 'Isabella', attendanceRate: 60, avgScore: 69.4 } ]