let arr1=[2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2=[12, 44, 23, 5];
let arrFinal=[];
for (let i=0;i<arr1.length+arr2.length;i++)
{
    if(i<arr1.length)
        arrFinal.push(arr1[i]);
    else
        arrFinal.push(arr2[i-arr1.length]);
}
console.log(arrFinal);