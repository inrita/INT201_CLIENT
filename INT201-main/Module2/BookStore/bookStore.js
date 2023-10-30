const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");


class BookStore {
    constructor(){
        this.stores=[]
    }
    findBookIndex(isbn){
        return this.stores.findIndex(a => a.isbn === isbn);
    }
    addNewBook(isbn, stocks){
        if(this.findBookIndex(isbn)===-1){ //ไปดู isbn จาก findBookIndex(isbn) ถ้าไม่มี isbn เก็บอยู่ใน stores 
            this.stores.push({isbn: isbn, stocks: stocks}); //ให้สร้าง two property add เข้าไป
            return stocks
        } else return -1
    }
    sellBook(isbn, quantity){
        if(this.findBookIndex(isbn)===-1){ //ต้องการเข้าถึงใน array
            return -1
        } else{
            let find = this.stores[this.findBookIndex(isbn)]
            if(find.stocks<quantity){
                return 0
            } else find.stocks -= quantity // quantity - stocks
            // find.stocks = find.stocks - quantity
            return quantity
        }
    }
}

module.exports = BookStore



