const { template } = require('@babel/core')

// 65130500090 Inrita Warajirawiroj
function countPosNegValue(posNegIntegerArray) {
    // กรณี posNegIntegerArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
        return undefined
    }

    // กรณี posNegIntegerArray เป็น empty array [ ] ให้คืนค่าเป็น empty object { }
    if (posNegIntegerArray.length === 0) {
        return {}
    }

    // check ตัวเลขจำนวนเต็มลบและเต็มบวก
    let positive = 0
    let negative = 0

    for (let i = 0; i < posNegIntegerArray.length; i++) {
        if (posNegIntegerArray[i] > 0) { // ลูปเลขออกมาได้ค่าบวกเก็บค่าใน -> positive
            positive++
        } else if (posNegIntegerArray[i] < 0) {  // ลูปเลขออกมาได้ค่าลบก็บค่าใน -> negative
            negative++
        }
    }

    // ตรงนี้สำคัญต้องมา check อีกครั้งว่าตรงตามเงื่อนไขหรือไม่
    // กรณี ไม่พบรายการตัวเลขที่เป็นจำนวนเต็มบวกและจำนวนเต็มลบ ให้คืนค่าเป็น {positive: 0, negative: 0}
    const countValue = {}
    if (positive >= 0) countValue['positive'] = positive
    if (negative >= 0) countValue['negative'] = negative
    return countValue
}

module.exports = countPosNegValue
