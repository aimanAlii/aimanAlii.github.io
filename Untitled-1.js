const secondMax = (arr) => {
    let largest = arr[0];
    let secondMax = arr[0] ;
    arr.forEach((num, index) => {
       if(num > largest) largest = num;
    })

    arr.forEach((num, index) => {
       if(num > secondMax && num < largest) secondMax = num;
    })
    return secondMax;
}

const arr1 = [1,3,5,8,3,7];

console.log(secondMax(arr1));