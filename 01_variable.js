const accountId = 14453
let accountEmail = "sreeram04@gmail.com"
var accountPassword = "vizag123"
accountCity = "Vizag" // not recommended because it creates a global variable
let accountstate // value not assigned understood as undefined

accountEmail = "1234"


console.log(accountEmail)
console.log(accountCity)
console.log(accountId)
console.log(accountPassword)

/* 
prefer not to use var
use const by default
use let if value is changing
*/