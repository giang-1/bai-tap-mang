let array1 = [3,1,17,23,15,7,4];
let temp;
let giang = "giang"


// for(i =0 ; i < array1.length; i++){
//         for(j = 0; j < array1.length; j++){
//          if(array1[i] < array1[j]){
//              temp = array1[i];
//              array1[i] = array1[j];
//              array1[j] = temp;
//         }
//      }
// }
    
// console.log(array1);

// in cuối

// for(i = array1.length ; i >= 0; i--){
//      // console.log(array1[i])
//      if ( i == array1.length){
//           array1[i] = "giang" 
//      }
// }
// console.log(array1)
 //chèn vô đầu
for(i = 0; i <= array1.length - 1; i++){
     for(j = 0 ; j <= array1.length; j++){
          if(i == 0 && j == array1.length){
               array1[j] = array1[i];
               array1[i] = giang

          }
     }
}
console.log(array1)

//in ngược array

// for(i = array1.length-1 ; i >= 0; i--){
//      console.log(array1[i])
// }
