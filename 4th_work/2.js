let count=15;
let array=[];
for (let i=1;i<=count;++i)
{
    array.push(i);
}
for (let i=0;i<count;++i)
{
    let j=Math.round(Math.random()*(count-1))
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}
console.log(array);