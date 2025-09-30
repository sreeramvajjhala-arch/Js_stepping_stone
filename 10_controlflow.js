//a single code will split into two or multiple tangents
//if-else 
// else if 
// ternary 
// switch

//eraly return pattern
if (condition) {
    //code
}  
if (condition2) {
    //code
}
else {
    //more code
}


switch (expression) {
    case x:
        //code block
        break;
    case y:
        //code block
        break;
    default:
        //code block
}
//fallout case :: always execute's the next case if break is not used


//ternary
condition ? expr1 : expr2   


//example
function getval(val){
    if(val>100) return 'greater than 100'
    else if(val>50) return 'greater than 50'
    else if(val>10) return 'greater than 10'
    else return '10 or less'
}

console.log(getval(70))


// question
function getGrade(score){
    if(score>=90 && score<=100) return 'A+'
    else if(score>=80 && score <=89) return 'A'
    else if (score>=70 && score <=79) return 'B'
    else if(score>=60 && score <= 69) return 'C'
    else if (score>=33 && score <=59) return 'D'
    else if (score>=0 && score <=32) return 'F'
    else return 'Invalid score'
}


console.log(getGrade(45))
console.log(getGrade(105))
console.log(getGrade(-5))
console.log(getGrade(75))
 


//rock paper scissors game
function rps(p1, p2){
    if(p1==="rock" && p2==="scissors") return "Player 1 wins"
    else if(p1==="rock" && p2==="paper") return "Player 2 wins"
    else if(p1==="scissors" && p2==="paper") return "Player 1 wins"
    else if(p1==="scissors" && p2 === "rock") return "Player 2 wins"
    else if(p1==="paper" && p2 ==="rock") return "Player 1 wins"
    else if(p1==="paper" && p2==="scissors") return "Player 2 wins"
    else if(p1===p2) return "It's a tie"
    else return "Invalid input"
}

console.log(rps("rock", "scissors"))
console.log(rps("rock", "paper"))
console.log(rps("rock", "rock"))
