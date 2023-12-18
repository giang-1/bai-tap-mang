let array1 = [1,2,3,6,8,12,4,35,14];
let temp;
// array1.sort((a,b) => b -a)
// console.log(array1)
for(i =0 ; i < array1.length; i++){
        for(j = 0; j < array1.length; j++){
         if(array1[i] > array1[j]){
             temp = array1[i];
             array1[i] = array1[j];
             array1[j] = temp;
        }
     }
}
console.log(array1)