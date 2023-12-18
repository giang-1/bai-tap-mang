let array1 = [1,2,3,"giang", 15,"hải",16, 5,6,7];
let v = prompt("nhập")
let b = false
// if(array1.indexOf(v) == -1){
//     console.log("V is not in the array")
// }else{
//     console.log("V is in the array")
// }
for(i = 0; i < array1.length; i++){
    if(v === array1[i]){
        b = true
        
    }
    
}
if(b){
    document.write("nằm trong array")
}else{
    document.write("không nằm trong array")
}