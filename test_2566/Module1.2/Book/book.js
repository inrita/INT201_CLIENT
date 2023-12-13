const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

// 65130500090 Inrita Warajirawiroj
class Book{
    constructor(isbn, title = 'untitled' , ebook = false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    // creates an author object by assigning the firstname property with the provided parameter named 
    // fn and the lastname property with the provided parameter named ln. Then adding it to the end 
    // of authors array. You must return the new length of the authors array.
    addAuthor(fn, ln) {
        return this.authors.push({firstname: fn, lastname: ln})
    }

    // returns the first author object of book, if no author then returns undefined.
    getFirstAuthor() {
        return this.authors[0] ?? undefined
    }

    // returns array of all authors except the first author, if no co-author, returns an empty array ([]).
    // ไม่เอาตัวแรกที่เหลือเอาหมด
    getCoAuthors() {
        return this.authors.slice(1) ?? []
    }

    // returns the first author object that matches both firstname and lastname parameters (case insensitive). 
    // If no author matches, undefined is returned.
    findAuthor(firstname, lastname) {
        return this.authors.find((author) => 
            author.firstname.toLowerCase() === firstname.toLowerCase() &&
            author.lastname.toLowerCase() === lastname.toLowerCase()
            ) ?? undefined

        // const find = this.authors.find((author) => 
        //     author.firstname.toLowerCase() === firstname.toLowerCase() &&
        //     author.lastname.toLowerCase() === lastname.toLowerCase())
        
        //     if (find) {
        //         return find
        //     } else {
        //         return undefined
        //     }
    }

    hasEbook(){
        return this.ebook
    }
}
module.exports = Book


