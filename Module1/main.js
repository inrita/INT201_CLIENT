// // 1
// function countCovidStatus (covidStatusArray) {
//     if (covidStatusArray === null || countCovidStatus === undefined) {
//         return undefined
//     } else if (covidStatusArray.length === 0) {
//         return {}
//     }

//     let negativeLow = 0
//     let negativeHigh = 0
//     let positive = 0

//     for (const status of covidStatusArray) {
//         switch (status) {
//             case ('negative and low risk') : {
//                 negativeLow++
//                 break
//             }
//             case ('negative and high risk') : {
//                 negativeHigh++
//                 break
//             }
//             case ('positive') : {
//                 positive++
//                 break
//             }
//         }
//     }

//     // build object
//     const covidStatus = {}
//     if (negativeLow > 0) covidStatusArray['negative and low risk'] = negativeLow
//     if (negativeHigh > 0) covidStatusArray['negative and high risk'] = negativeHigh
//     if (positive > 0) covidStatusArray['positive'] = positive

//     return covidStatus
// }

// // 2
// function countPosNegValue (posNegIntegerArray) {
//     if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
//         return  undefined
//     } else if (posNegIntegerArray.length === 0) {
//         return {}
//     }

//     //let len = posNegIntegerArray.length
//     let positiveCount = 0
//     let negativeCount = 0

//     for (let i = 0; i < posNegIntegerArray.length; i++) {
//         if (posNegIntegerArray[i] > 0) {
//             positiveCount++
//         } else if (posNegIntegerArray[i] < 0) {
//             negativeCount++
//         }
//     }

//     // build object
//     const countPosNegValue = {}
//     if (positiveCount >= 0) countPosNegValue['positive'] = positiveCount
//     if (negativeCount <= 0) countPosNegValue['negative'] = negativeCount

//     return countPosNegValue
// }




// // 3
// function getItemsOfCurrentPage (allItems, currentPage, rowsPerPage) {
//     if (allItems === null || allItems === undefined) {
//         return undefined
//     } else if (allItems.length === 0) {
//         return []
//     } else if (rowsPerPage <= 0) {
//         return allItems
//     } else if (currentPage <= 0) {
//         return allItems
//     }

//     // build object
//     const itemsOfCurrentPage = allItems.slice(rowsPerPage*(currentPage-1, rowsPerPage*currentPage))
//     return itemsOfCurrentPage.length > 0 ? itemsOfCurrentPage : []
// }

function myFunction(a, b) {
    let result = a + b
    return result
}
console.log(myFunction(1,2))




function isPasswordValid(password) {
    if(password === undefined || password === null) {
      return false
    }
  
    if(password.length < 8) {
      return false
    }
  
    let checkUpper = 0
    let checkLower = 0
    let checkSpecial = 0
    let checkDegit = 0
    let a = [...password]

    for(i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
        checkDegit++
      }
    // Check special character (I think it have other ways but also don't know how to do💀)
        else if (a[i] === '@'
          || a[i] === '#'
          || a[i] === '$'
          || a[i] === '%'
          || a[i] === '^'
          || a[i] === '&'
          || a[i] === '*'
          || a[i] === '!') {
        checkSpecial++
        }
    // Check uppercase
        else if(a[i] === a[i].toUpperCase()) {
        checkUpper++
        }
    // Check lowercase
        else if (a[i] === a[i].toLowerCase()) {
        checkLower++
        }
    // If nothing return false
        else {
        return false
        }
    }
    
    if (checkUpper === 0 || checkLower === 0 || checkSpecial === 0 || checkDegit === 0) {
      return false
    } else {
      return true
    }
  }
  module.exports = isPasswordValid