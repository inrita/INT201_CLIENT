const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

class BookMark{
  constructor(isbn, totalPages=0){
    this.bookMarks = []
    this.isbn = isbn
    this.totalPages = totalPages
  }
  addBookMark(pageNumber){
    if(pageNumber<1||pageNumber>this.totalPages){
      return this.bookMarks.length
    } else return this.bookMarks.push(pageNumber)
  }
  removeBookMark(pageNumber){
    if (this.bookMarks.includes(pageNumber)) { //ดูว่ามีหรือไม่มี
      this.bookMarks = this.bookMarks.filter((item) => item !== pageNumber) //ถ้ามีก็ใช้ filter ในการลบออก
      return pageNumber
   } else {
      return undefined //ถ้าไม่มี
   }
  }
  goToFirstBookMark(){
    return this.bookMarks[0]??undefined
  }
  goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]??undefined
  }
  getBookMarks(){
    return this.bookMarks
  }

}

module.exports = BookMark

