let userName = prompt("enter you name? : "); 
console.log(`Hello, ${userName}`); 


let userAge = prompt("Enter you age : "); 
console.log(userAge); 

let yearDate = new Date().getFullYear();    

let yearOfBith = yearDate - userAge ; 
alert("My name is "+ userName + " and year of birth is " + yearOfBith   ); 