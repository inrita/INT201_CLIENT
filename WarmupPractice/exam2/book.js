class Book {
    constructor(isbn, title = 'untitle', ebook = 'false') {
        this.authors = []
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
    }

    addAuthor(fn, ln) {
        return this.authors.push({firstname: this.fn, lastname: this.ln})
    }

    getFirstAuthor() {
        return this.authors[0] ?? undefined
    }

    getCoAuthors() {
        return this.authors.slice(1)
    }

    findAuthor(firstname, lastname) {
        return this.authors.find(author => 
            author.firstname.toLowerCase() === firstname.toLowerCase() && 
            author.lastname.toLowerCase() === lastname.toLowerCase()) ?? undefined
    }

    hasEbook() {
        return this.ebook
    }
}