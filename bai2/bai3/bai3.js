let array1 = [ 'c', 's', 'c', 2, 6, 1 ];
let tong = 0;
for(i =0; i < array1.length; i++){
    if(isFinite(array1[i]) == true){
        tong +=1;

    }
}
document.write(tong);