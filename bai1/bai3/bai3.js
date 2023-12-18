//Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó.
// In ra giá trị trung bình của các phần tử trong mảng.

let array1 = [13, 14, 17, 24, 35];
let max = array1[0];
let tong = 0;
for(i = 0; i < array1.length; i++){
    if(max < array1[i]){
        max = array1[i];
    }
    tong += array1[i];
}
console.log(max);
console.log(tong / array1.length);