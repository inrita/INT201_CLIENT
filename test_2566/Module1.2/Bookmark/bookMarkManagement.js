const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

// 65130500090 Inrita Warajirawiroj
class BookMark {
  constructor(isbn, totalPages = 0) {
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }
 
  // returns the 'new length' of bookMarks array. If pageNumber is less than one 
  // or greater than the totalPages, no pageNumber added.
  addBookMark(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.totalPages) {
      return this.bookMarks.length
    } else {
      return this.bookMarks.push(pageNumber)
    }
  }

  // returns a remove bookmark and then shift the rest of it to the left, if no pageNumber found, return undefined.
  removeBookMark(pageNumber) {
    let page = this.bookMarks.findIndex((a) => a === pageNumber)
    if (page !== -1) { // หาเจอ
      this.bookMarks.splice(page, 1)
      return pageNumber
    } else {
      return undefined
    }
  }

  // returns the first bookMarks pageNumber. If there are no bookMarks in an array, return undefined.
  goToFirstBookMark() {
    return this.bookMarks[0] ?? undefined
  }

  // returns the last bookMarks pageNumber. If there are no bookMarks in an array, return undefined.
  goToLastBookMark() {
    return this.bookMarks[this.bookMarks.length-1] ?? undefined
  }

  // returns the bookMarks.
  getBookMarks() {
    return this.bookMarks
  }
}

module.exports = BookMark

