const city = "New York"
const population = 8419600

console.log(`The city of ${city} has a population of ${population}.`)   
//new way of writing string intercolation using backticks and ${}

console.log("The city of " + city + " has a population of " + population + ".")  
//old way of writing string intercolation using + operator
//same output



const greeting = new String('Hello, World!')
console.log(greeting[0])  //creates a string object
//not an array but can be accessed like one

console.log(greeting.length) 
console.log(greeting.toUpperCase()) //similarly toLowerCase()

console.log(greeting.charAt(7)) //which charecter is at which position
console.log(greeting.indexOf('World')) //position of the word

const newString = greeting.substring(0, 4)
console.log(newString) 

const sliceString = greeting.slice(-7, 10) //negative index counts from the end
console.log(sliceString)

//trim removes whitespace from both ends of a string
const stringWithWhitespace = "   Hello, World!   "
console.log(stringWithWhitespace.trim())

//string conversted to array
const str = "apple,banana,cherry,watermelon,kiwi,mango";
const fruitsArray = str.split(",")
console.log(fruitsArray[0])
console.log(fruitsArray[3])