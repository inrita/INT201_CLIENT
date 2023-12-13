// 65130500090 Inrita Warajirawiroj

function isPasswordValid(password) {
  // check undefined or a null value return false
  if (password === null || password === undefined) {
    return false;
  }

  // check password at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  let checkUpper = 0
  let checkLower = 0
  let checkDigit = 0
  let checkSpecial = 0

  let valid = [...password];

  for (let i = 0; i < valid.length; i++) {
    if (valid[i] >= 0) {
      checkDigit++
    } else if (
      valid[i] === "@" ||
      valid[i] === "#" ||
      valid[i] === "$" ||
      valid[i] === "%" ||
      valid[i] === "^" ||
      valid[i] === "&" ||
      valid[i] === "*" ||
      valid[i] === "!"
    ) {
      checkSpecial++
    } else if (valid[i] === valid[i].toUpperCase()) {
      checkUpper++
    } else if (valid[i] === valid[i].toLowerCase()) {
      checkLower++
    } else {
      return false
    }
  }

    if (
      checkUpper === 0 ||
      checkLower === 0 ||
      checkSpecial === 0 ||
      checkDigit === 0
    ) {
      return false
    } else {
      return true
    }
}

module.exports = isPasswordValid;

// // 65130500090 Inrita Warajirawiroj

// function isPasswordValid(password) {
//   // Check if the password is undefined or null
//   if (password === null || password === undefined) {
//     return false;
//   }

//   // Check the length requirement
//   if (password.length < 8) {
//     return false;
//   }

//   // Check for at least one uppercase letter
//   if (!/[A-Z]/.test(password)) {
//     return false;
//   }

//   // Check for at least one lowercase letter
//   if (!/[a-z]/.test(password)) {
//     return false;
//   }

//   // Check for at least one digit
//   if (!/\d/.test(password)) {
//     return false;
//   }

//   // Check for at least one special character
//   if (!/[@#$%^&*!]/.test(password)) {
//     return false;
//   }

//   return true
// }

// module.exports = isPasswordValid;