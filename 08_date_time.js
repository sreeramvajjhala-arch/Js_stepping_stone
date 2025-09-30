let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());//better representation
console.log(mydate.toDateString());//only date
console.log(mydate.toTimeString()); //only time
console.log(typeof mydate);//object important

let mydate2 = new Date(2020,0,23,5,23,45,23);//month starts from 0 to 11
console.log(mydate2.toString()); 