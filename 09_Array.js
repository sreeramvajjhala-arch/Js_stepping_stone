//array //can be heterogeneous in js
// //a dataype that can hold multiple values withn a single varaible
// //zero based index 
// //array copy operations create shallow copies

const numbers = [1, 2, 3, 4, 5];

const arr1 = new Array(1, 2, 3, 4, 5);

//***array methods***


console.log(numbers.length); //length of array
console.log(numbers.push(6)); //add element at the end
console.log(numbers);
console.log(numbers.pop());//delete last element
console.log(numbers);
console.log(numbers.shift()); //remove first element
console.log(numbers.unshift(0)); //add element at the beginning
console.log(numbers.includes(3)); //check if element is present
console.log(numbers.indexOf(3)); //index of element 
console.log(numbers.splice(1,2)); //remove or replace elements
console.log(numbers.slice(1,3)); //extract a section of an array
console.log(numbers.reverse()); //reverse the array
console.log(numbers.sort()); //sort the array
console.log(numbers.concat([7,8,9])); //merge two or more arrays

//foreach function is used to iterate over an array
numbers.forEach(num => console.log(num));   


//map function is used to iterate over an array and apply a function to each element
const squared = numbers.map(x => x * x);
console.log(squared);

//filter function is used to filter elements based on a condition
const even = numbers.filter(x => x % 2 === 0);
console.log(even);




