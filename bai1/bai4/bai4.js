let array1 = [1,2,3,4,5,6,7,8,9];
let temp
// for(i = array1.length -1;i >= 0; i--){
//     console.log(array1[i])
// }
// array1.reverse();
// console.log(array1)
for(i = array1.length -1; i>= 0 ;i--){
    for(j = 0; j <= array1.length -1 ;j++ ){
            temp = array1[j]
            array1[j] = array1[i]
            array1[i] = temp    
    }
    
}
console.log(array1)
