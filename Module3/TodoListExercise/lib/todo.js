class Todo { // class จะเรียกต้องมี this
    // properties
    static runningId = 1 // เป็น static เรียกผ่านชื่อ class ไม่ต้องสร้าง object

    static setRunningId(loadingId) {
        Todo.runningId = loadingId
    }

    constructor(id, description, done = false) {
        this.id = id ?? Todo.runningId++
        // console.log(this.id)
        this.description = description
        this.done = done
        // this.done = done ?? false
        // console.log(this.done)
    }

    // methods
    // returns {id, description} object
    getTodo() {
        return this
        // return {id: this.id, description: this.description}
    }

    // allows to edit description
    setDescription(newDescription) {
        this.description = newDescription
    }

    setDone(value) {
        this.done = value
    }
}

// ES Modules
export {Todo}

// CommonJS
// module.exports = Todo