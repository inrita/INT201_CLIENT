// Week 12 - Document Object Modeling (DOM)

// DOCUMENT_NODE (value : 9)
// document ที่เป็น root node/document node
const rootNode = window.document
console.log(rootNode) 
console.log(rootNode.nodeName) // #document
console.log(rootNode.nodeType) // 9 
console.log(rootNode.nodeValue) // null

// documentElement, body, head เรียกใช้โดยตรงได้เลย เพราะ ถูกเรียกใช้บ่อย

// ELEMENT_NODE (vlue : 1)
// document ที่เป็น root element/document element
console.log(document.documentElement) // แสดงสิ่งที่อยู่ใน html element
console.log(document.documentElement.nodeName) // HTML
console.log(document.documentElement.nodeType) // 1
console.log(document.documentElement.nodeValue) // null

// ELEMENT_NODE (vlue : 1)
// document ที่เป็น body element
console.log(document.body) // แสดงสิ่งที่อยู่ใน body element
console.log(document.body.nodeName) // BODY
console.log(document.body.nodeType) // 1
console.log(document.body.nodeValue) // null

// ELEMENT_NODE (vlue : 1)
// document ที่เป็น head element
console.log(document.head) // แสดงสิ่งที่อยู่ใน head element
console.log(document.head.nodeName) // HEAD
console.log(document.head.nodeType) // 1
console.log(document.head.nodeValue) // null

// ELEMENT_NODE (vlue : 1)
// document ที่เป็น title element
console.log(document.title) // Introduction to DOM
console.log(document.title.nodeName) // undefined
console.log(document.title.nodeType) // undefined
console.log(document.title.nodeValue) // undefined
// document.tilte ไม่สามารถ ckeck nodeName, nodeType, nodeValue ได้

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const headElement = document.head
console.log(headElement) // แสดงสิ่งที่อยู่ใน head element

// Child relationship
// 1.childNodes (ผลลัพธ์คือ NodeList data types) = query children with all node types (เอาทั้งหมด)
// นับ tag เปิด-ปิด รวมถึง spared ด้วย
// ต้องการ query node ลูกของ head element ทั้งหมด??
const headChildren = headElement.childNodes 
console.log(headChildren) 
console.log('length:', headChildren.length)
headChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

// ต้องการ query node ลูกของ #document (root node/document node) ทั้งหมด??
const documentChildren = document.childNodes
console.log(documentChildren) 
console.log('length:', documentChildren.length)
documentChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

// 2.children (ผลลัพธ์คือ HTMLCollectoin data type) = query children with ELEMENT type only (เฉพาะ element node type)
// นับแค่ tag เปิด-ปิด ไม่รวม spared 
console.log('length:', headElement.children.length)
// ใช้ forEach โดยตรงกับ HTMLCollectoin ไม่ได้เลยต้องใช้ Array.from เข้ามาช่วย
// convert array-like to array before using forEach
Array.from(headElement.children).forEach((hc) => { 
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Element Traversal

// Parent relationship
// get parent including all node types (เอาทั้งหมด)
const headParentNode = headElement.parentNode
// get parent only element node types (เอาเฉพาะ element type)
const headParentElement = headElement.parentElement

console.log(headParentNode)
console.log(headParentElement)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Sibling relationship
// previous sibling (ทางซ้าย)
// get previous sibling including all node types (เอาทั้งหมด)
const headPreviousSibling = headElement.previousSibling
console.log(headPreviousSibling) // <!-- This is a sibling comment -->

// get previous sibling only element node type (เอาเฉพาะ element type)
const headPreviousSiblingElement = headElement.previousElementSibling
console.log(headPreviousSiblingElement) // null

// next sibling (ทางขวา)
// get next sibling including all node types (เอาทั้งหมด)
const headNextSlbling = headElement.nextSibling
console.log(headNextSlbling) // เป็น #text เพราะ มี spread

// get next sibling only element node type (เอาเฉพาะ element type)
const headNextSlblingElement = headElement.nextElementSibling
console.log(headNextSlblingElement) // มาที่ tag body เลย

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// get first child
console.log(headElement.firstChild)
console.log(headElement.firstElementChild) // (เอาเฉพาะ element type)

// get last child
console.log(headElement.lastChild) //#text
console.log(headElement.lastElementChild) //<title>Introduction to DOM</title> | (เอาเฉพาะ element type)