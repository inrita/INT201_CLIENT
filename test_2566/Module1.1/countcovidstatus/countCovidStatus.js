const { template } = require('@babel/core')

// 65130500090 Inrita Warajirawiroj
function countCovidStatus(covidStatusArray) {
  // กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined
  }

  // กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }
  if (covidStatusArray.length === 0) {
    return {}
  }

  // check สถานะโควิด
  let negativeLow = 0
  let negativeHigh = 0
  let positive = 0

  for (const status of covidStatusArray) {
    if (status === 'negative and low risk') {
      negativeLow++
    } else if (status === 'negative and high risk') {
      negativeHigh++
    } else if (status === 'positive') {
      positive++
    } 
  }

  // ตรงนี้สำคัญต้องมา check อีกครั้งว่าตรงตามเงื่อนไขหรือไม่
  // กรณี covidStatusArray ปรากฎรายการที่ไม่ใช่สถานะโควิดที่กำหนด ไม่ต้องนับรายการนั้น 
  // และถ้าไม่มีรายการอื่นที่ต้องนับ ให้คืนเป็น empty object { }
  const covidStatus = {}
  if (negativeLow > 0) covidStatus['negative and low risk'] = negativeLow
  if (negativeHigh > 0) covidStatus['negative and high risk'] = negativeHigh
  if (positive > 0) covidStatus['positive'] = positive
  return covidStatus
}

module.exports = countCovidStatus
