let arg = process.argv ; 
if(arg[2]== null ){
    console.log("No argument"); 
}else{
    for(i = 2 ; arg[i]!= null ; i++){
        console.log(arg[i]); 
    }

}