let score = 400
console.log(score)

const bonus = new Number(100)
console.log(bonus)
console.log(bonus.toFixed(3))//used in ecoomerce applications
console.log(bonus.toString().length)

const otherScore = 100.23232323
console.log(otherScore.toPrecision(4))//used in scientific calculations
console.log(typeof(otherScore.toPrecision(2)))

const hundreds = 1000000
console.log(hundreds.toLocaleString())//used in currency formatting


//*****************Maths*****************************
console.log(Math.abs(-100))
console.log(Math.round(4.6))//similarly floor and ceil
console.log(Math.PI)
console.log(Math.min(2,3,4,5,6,7,8,9))
console.log(Math.pow(3,3))
console.log(Math.sqrt(5))


//most important
console.log(Math.random())//gives random number between 0 and 1
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*100))//random number between 0 and 99


//random number between 50 and 100
//50 + (0 to 50)ll
