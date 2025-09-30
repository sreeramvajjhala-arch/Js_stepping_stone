console.log(2 > 3);
console.log(2 < 3);
//bolean and all of them are too simple to discuss

//ok this is important always remeber that the objects in comparision should be of the same type

console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)//true (not predictable)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)//false not predictable

//=== strict equality operator---use this most of the time
//== loose equality operator---avoid this most of the time
console.log(2 === '2')//false
console.log(2 == '2')//true

console.log(undefined === null)//false
console.log(undefined == null)//true
