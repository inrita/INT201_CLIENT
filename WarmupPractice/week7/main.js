// function declaration
function arrayStats(arr) { // คาดหวังผลลัพธ์เข้ามาเป็น array type
    // min, max, sum, avg
    if (arr === null || arr === undefined)
        return {}
    let min = arr[0], // ให้ค่าใน array เป็นค่าเริ่มต้น
        max= arr[0],  // ให้ค่าใน array เป็นค่าเริ่มต้น
        sum = 0, 
        avg = 0
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        if (arr[index] < min) min = arr[index]
        if (arr[index] > max) max = arr[index]
        // 2 if ต้องทำทั้งสอง if (ต้องถูก check ทั้ง min และ max)
        // ส่วน if-else เลือกทำอย่างใดอย่างหนึ่ง
    }
    return {sum:sum, avg:sum/arr.length, min:min, max:max}
}
console.log(arrayStats([2, 4, 6, 8])) //{ sum: 20, avg: 5, min: 2, max: 8 }
console.log(arrayStats([1, 3, 5, 7])) //{ sum: 16, avg: 4, min: 1, max: 7 }