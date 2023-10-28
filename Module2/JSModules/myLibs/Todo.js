class Todo { // class จะเรียกต้องมี this
    // properties
    static nextId = 1
    constructor(id, description) {
        this.id = Todo.nextId++
        this.description = description
    }

    // methods
    // returns {id, description} object
    getTodo() {
        return this
        // return {id : this.id, description : this.description}
    }
    
    // allows to edit description
    setDescription(newDescription) {
        this.description = newDescription
    }
}

module.exports = Todo
// module.exports = {Todo} // ใช้แบบ object