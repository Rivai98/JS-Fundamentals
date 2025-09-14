let args = process.argv.slice(2); 
let x =parseInt( args[0]) ;
if(isNaN(x)){
    console.log("Missing number of occurrences"); 
}else{
    while(x > 0 ){
        console.log("C is fun"); 
        x-- ; 
        

    }
}

