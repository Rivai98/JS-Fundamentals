let arg = process.argv ; 
if(arg[2]== null ){
    console.log("No argument"); 
}else{
    let result = "" ; 
    for(i = 2 ; arg[i]!= null ; i++){
        result += arg[i]+ " ";  
        
    }
    console.log(result); 

}