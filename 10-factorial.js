function fact(number){
   
   if (number === 1 || isNaN(number) || number===0  ){
    return 1 ; 
   }

   return number * fact(number-1); 
   
}

let args = process.argv.slice(2) ; 
let number = parseInt(args[0]);


let result = fact(number); 
console.log(result); 

