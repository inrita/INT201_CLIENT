const { template } = require('@babel/core')
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

// 65130500090 Inrita Warajirawiroj
class LoyaltyPoint {
    constructor(customerId) {
        this.memberId = customerId
        this.points = 0
        this.memberType = this.calculateMembershipLevel()
    }
 
    // calculates the number of points on a given purchase amount. For each 25 baht, you get one point. 
    // Then add calculated points to "points" property and returns the updated total number of points.
    // For example, if purchaseAmount is 10,500 baht, you will get 400 points.
    calculatePoints(purchaseAmount) {
        let point = Math.floor(purchaseAmount/25) // 25 Bath = 10 point 
        this.points = this.points += point // add point ที่ซื้อเพิ่มเข้ามา
        return this.points
    }

    // You must not allow to redeem if a given redeemPoints less than 800 points or more than the member's 
    // current total number of points and -1 will be returned. Otherwise, calculates the number of cash coupons 
    // on a given redeemPoints parameter. 800 redeemPoints will get 1 cash coupon with 100 Baht and then 
    // return the object that consists of the following properties:
    redeem(redeemPoints) {
        if (redeemPoints < 800 || redeemPoints > this.points) {
            return -1
        }

        let cash = Math.floor(redeemPoints/800) // 800 redeemPoints = 1 cash
        let redeem = cash * 800 // ได้แต้ม
        let current = this.points -= redeem // redeem ลดลงเพราะเอาแต้มไปแลกเป็นเงินสด
        this.points = current
        return {
            memberId: this.memberId,
            cashCoupons: cash,
            redeemPoints: redeem,
            currentPoints: current
        }

    }

    calculateMembershipLevel() {
        if (this.points < 10000) {
            return this.memberType = 'SILVER'
        } else if (this.points >= 10000 && this.points <= 20000) {
            return this.memberType = 'GOLD'
        } else if (this.points > 20000) {
            return this.memberType = 'PLATINUM'
        }
    }
}

module.exports = LoyaltyPoint
