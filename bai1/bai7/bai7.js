let array1 = [12,4,5,7,11,6,9,32,25,1]
let v = array1[2]

if(array1.indexOf(v) == -1){
    console.log('v không nằm trong array1')
}else{
    array1.splice(array1.indexOf(v),1)

    for(i=0 ; i <= array1.length -1; i++){
        if(i == array1.length -1){
            array1[i] = 0
        }
    }
    console.log(array1)
}