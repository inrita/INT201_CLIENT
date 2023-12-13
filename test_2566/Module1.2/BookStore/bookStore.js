const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

// 65130500090 Inrita Warajirawiroj
class BookStore {
    constructor() {
        this.stores = []
    }

    // returns the index of first element in the array that matches the provided parameter isbn. 
    // If no object matches, -1 is returned.
    findBookIndex(isbn) {
        const find = this.stores.findIndex((a) => a.isbn === isbn)
        if (find !== -1) {
            return find
        } else {
            return -1
        }
    }

    // adding a new book in a bookstore. All objects in the stores property must have a unique isbn. 
    // You must check whether the provided isbn parameter is in stores array or not. If there is no isbn 
    // in the stores array then creates an object with two properties: isbn and stocks with the provide 
    // parameters and adding it to the end of stores array. Returns stock value in case adding a new book 
    // into array successfully, otherwise return -1 if there are duplicate isbn in the stores array.
    addNewBook(isbn, stocks) {
        if (this.findBookIndex(isbn) === -1) { // ไม่เจอ isbn ก็จะเพิ่มเข้าไปใหม่
            this.stores.push({isbn: isbn, stocks: stocks})
            return stocks
        } else {
            return -1
        }
    } 

    // reducing stocks value with a selling quantity. Firstly, you must search the provide parameter isbn 
    // in the stores array. If not found, return -1. If found, then you must check whether stocks value is 
    // enough for selling or not. In case the selling quantity is more than stocks value, return 0 
    // (means unsuccessfully selling). Otherwise, decreases the selling quantity from stocks value and 
    // returns a selling quantity (means successfully selling).
    sellBook(isbn, quantity) {
        if (this.findBookIndex(isbn) === -1) { // ดูว่ามี isbn มั้ย
            return -1
        } else {
            let checkInStock = this.stores[this.findBookIndex(isbn)]
            if (quantity > checkInStock.stocks) { // selling quantity is more than stocks value, return 0 
                return 0
            } else {
                checkInStock.stocks -= quantity // ลดปริมาณการขาย from stocks value
                return quantity 
            }
        }
    }
}

module.exports = BookStore



