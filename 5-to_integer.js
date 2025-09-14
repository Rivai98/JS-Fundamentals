let args = process.argv.slice(2);
let number = Number(args[0]);
if(isNaN(number)){ 
    console.log("Not a number");

}else {
    console.log(`My number: ${number}`); 
}