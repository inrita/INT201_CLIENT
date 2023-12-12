class Person {
    // constructor
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }

    getFullName() {
        //return string in the format 'lastName, firstName'
        return `${this.lastName} ${this.firstName}` // ใต้ `` เป็น String
    }

    getAge() {
        // 1000 milliseconds = 1 second
        const currentDateMilli = Date.now() // return the number of milliseconds (ณ วันปัจจุบัน)
        const birthDateMilli = this.dateOfBirth.getTime() // returns the number of milliseconds
        const diffMilli = currentDateMilli - birthDateMilli
        console.log(currentDateMilli, birthDateMilli, diffMilli)

        // คำนวณอายุ
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970 // (1970 ฐานในการคำนวณ)
    }

    // compare this firstname and lastname to the specified another person object.
    // Returns false if the fillname are differrent and true, if 
    isEqual(anotherPerson) {
        return (
            this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
        )
    }

    // return a string representing fullname and age
    toString() {
        return `FullName: ${this.getFullName()} , age: ${this.getAge()}`
    }
}

const p1 = new Person("Inrita", "Wara", new Date(2004, 4, 12))
const p2 = new Person("Warittinan", "Khun", new Date(2003, 4, 13))

console.log(p1.getFullName()) // Wara Inrita
console.log(p1.getAge()) // 19
console.log(p1.isEqual(p2)) // false

console.log(p2.getFullName()) // Khun Warittinan
console.log(p2.getAge()) // 20
console.log(p2.isEqual(p1)) // false

console.log(p2.isEqual(p2)) // true
console.log(p1.toString()) // FullName: Wara Inrita , age: 19
