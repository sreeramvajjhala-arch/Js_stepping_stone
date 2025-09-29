let score = "445abc"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// NaN - Not a Number 
console.log(score) 
console.log(valueInNumber) // NaN string to number conversion is not possible

//null to 0
let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2)  // 0

//true to 1 and false to 0
let isLoggedIn = true
let booleanToNumber = Number(isLoggedIn)
console.log(booleanToNumber) 

let isLoggedIn2 = "hitesh"
let isLoggedIn3 = ""
console.log(Boolean(isLoggedIn2)) // 1
console.log(Boolean(isLoggedIn3)) // 0
// "", 0, null, undefined, NaN -> false
// "hitesh", " "-> true

let someNumber = 123
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
//123 -> "123"






