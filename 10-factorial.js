function fact(number){
    let result = 1 ; 
   if (number === 1 || isNaN(number) || number===0  ){
    return 1 ; 
   }
   for (i = number ; i > 0 ; i-- ){
    result *=i;      
   }
   return result ;

}

let args = process.argv.slice(2) ; 
let number = parseInt(args[0]);


let result = fact(number); 
console.log(result); 

