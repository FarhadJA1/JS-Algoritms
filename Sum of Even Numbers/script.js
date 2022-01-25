let arr = [2,3,4,8]

function sumSquare(array){
    let sum=0;
for (const item of arr) {
    if(item%2==0){
        sum += item*item
    }
}
console.log(sum);
}
sumSquare(arr);

