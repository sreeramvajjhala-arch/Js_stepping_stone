//for, while, do-while
//break and continue statements
//for-of ,forEach for arrays
//for, objectEntries for objects
 
//99% of the time, we use for loops
//for loop structure: for(initialization; condition; increment/decrement)
for (let i = 0; i <= 100; i++) {
    console.log(i);
    if(i===50){
        break; //break statement to exit the loop when i is 50
    }

}


//while loop structure: while(condition)
let i=1
while(i<=9){
    console.log(i)
    i++
}

//do-while loop structure: do{code block} while(condition)
let k = 1;
do{
    if(k%3===0){
        k=k+2
        continue;
    }
    console.log(k)
    k=k+2
}while(k<=29)


let sentence = new String ("Javascript is awesome")
let count = 0
for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if(char ==="a"||char ==='e'||char ==='i'||char ==='o'||char==='u'){
   
        count++
    }
}
console.log(count)

