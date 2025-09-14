/* Write a script that prints a square

The first argument is the size of the square
If the first argument can’t be converted to an integer, print “Missing size”
You must use the character X to print the square
You must use console.log(...) to print all output
You are not allowed to use var
You must use a loop (while, for, etc.)
*/

let args = process.argv.slice(2); 
let x =parseInt( args[0]) ;
let result ; 
if(isNaN(x)){
    console.log("Missing size"); 
}else{
    for (row = 1 ; row<= x ; row++){
        result = "" ; 
        for (col = 1 ; col<= x ; col++){
            result +="X"; 
            
        }
        console.log(result); 
    }
}
