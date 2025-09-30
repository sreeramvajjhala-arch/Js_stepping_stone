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


//********************OPERATIONS********************/

let value = 23
let negValue = -value
console.log(negValue) // -23

// basic operations are too simple to be written
// +, -, *, /, % (modulus), ++, --

let str1 = "sreeram"
let str2 = "reddy"
let fullstr = str1 + " " + str2
console.log(fullstr)

console.log( "5" + 5 ) // "55"
console.log( 1 + 5 + "5" ) // "65"
console.log( "5" + 1 + 5 ) // "515"

console.log(+true) // 1
console.log(+"") // 0

//precedence operators is also simple prefix and postfix
let newValue = 5
console.log(newValue++) // 5
console.log(newValue) // 6
console.log(++newValue) // 7
console.log(newValue) // 7