let array=[5,1,3,2,7,6,4];
let n=1;
let number=null;
for (let i in array){
    if (array[i]==n)
    {
        number=i;
        flag=true;
        break;
    }
}
console.log(number!==null?number:'Такого элемента нет(')