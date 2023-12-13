const { template } = require("@babel/core");
const { re } = require("@babel/core/lib/vendor/import-meta-resolve");

// 65130500090 Inrita Warajirawiroj
class Membership {
    static autoId = 1
    constructor() {
        this.members = []
    }

    // returns the index of first element in the array that matches the provided parameter id. If no object matches, -1 is returned.
    findMemberId(id) {
        return this.members.findIndex((a) => a.memberId === id) ?? -1
    }

    //  returns the index of first element in the array that matches the provided parameter name with case-insensitive. If no object matches, -1 is returned.
    findMemberName(name) {
        return this.members.findIndex((a) => a.memberName.toLowerCase() === name.toLowerCase()) ?? -1
    }
 
    subscribe(name) {
        if (this.findMemberName(name) === -1) { //หาไม่เจอ add เพิ่มเข้าไป
            return this.members.push({memberId: Membership.autoId++, memberName: name})
        } else {
            return -1
        }
    }

    unsubscribe(id) {
        if (this.findMemberId(id) === -1) {
            return -1
        } else {
            this.members.splice(this.findMemberId(id), 1) // ลบไอดีที่เจอออก 1 ตัว
            return id
        }
    }
}
module.exports = Membership;
