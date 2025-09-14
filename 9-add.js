function sum(first_number, second_number){
    if(isNaN(first_number) && isNaN(second_number)){
        console.log( NaN) ; 
    }
    return first_number + second_number; 
}

let args = process.argv.slice(2); 
let number1 = parseInt(args[0]); 
let number2 = parseInt(args[1]); 



let result = sum(number1, number2); 
console.log(result);


