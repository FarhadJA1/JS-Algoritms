let n = 0;

function divide(n){
    if(n%3==0 && n%7==0){
        console.log("The number is divisible by 3 and 7");
    }
    else{
        console.log("The number is not divisible by 3 and 7");
    }
}
divide(21);