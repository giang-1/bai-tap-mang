let array1 = [-1, -12, 4, 15, -3, -3.14]
let tong = 0;
for(i = 0; i < array1.length; i++){
    if(Number.isInteger(array1[i])&& array1[i] < 0 ){
        tong += 1
    }
}
console.log(tong)