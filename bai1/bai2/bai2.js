let array1 = [1,2,3,4,5,60,7,15];
let max = array1[0]
for(i = 0; i <= array1.length; i++){
    if(max < array1[i]){
        max = array1[i]
    }
}
console.log(max)