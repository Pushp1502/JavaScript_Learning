// function updateName(student){
//     student.name = "Hi " + student.name; 
//     console.log(student);

// }
// let objS = {name: "Azhar"};
// updateName(objS);
// console.log("old object is  ", objS);

function addOne(arr){
    arr[0] = arr[0] +1;
    arr[1] = arr[1] +1;
    arr[2] = arr[2] +1;
    arr[3] = arr[3] +1;
    arr[4] = arr[4] +1;
    arr[5] = arr[5] +1;
    arr[6] = arr[6] +1;
    arr[7] = arr[7] +1;
    arr[8] = arr[8] +1;
    arr[9] = arr[9] +1;

}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
addOne(arr1);
console.log("Old array is  ", arr1);