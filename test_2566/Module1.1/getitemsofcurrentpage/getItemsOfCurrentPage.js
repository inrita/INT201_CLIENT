const { template } = require('@babel/core')

// 65130500090 Inrita Warajirawiroj
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined
  if (allItems.length === 0) return []
  if (rowsPerPage <= 0) return allItems
  if (currentPage <= 0) return allItems

  // allItems จำนวน item ที่เก็บไว้ทั้งหมด
  // currentPage หน้าปัจจุบันที่เปิดอยู่จะแสดง item อะไรบ้าง
  // rowsPerPage จำนวนที่เก็บ item ได้สูงสุดต่อ 1 หน้า

  const itemsOfCurrentPages = allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  // มี allItems 20 item นำมา slice ตัดมาโชว์ว่า CurrentPage จะมี item อะไรอยู่บ้าง
  // มี rowsPerPage 10
  // CurrentPage 2
  if (itemsOfCurrentPages.length > 0) {return itemsOfCurrentPages}
  if (itemsOfCurrentPages.length < 0) {return []} 
  // return itemsOfCurrentPages.length>0?itemsOfCurrentPages:[] 
  return itemsOfCurrentPages
  // return itemsOfCurrentPages ถ้า > 0 
  // return [] ถ้า < 0
}

module.exports = getItemsOfCurrentPage
