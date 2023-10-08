let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]
function getOlderUserArray(arrUsers)
{
    let nameOld;
    let maxAge=0;
    for (user of arrUsers)
    {
        if (user.age>maxAge)
        {
            nameOld=user.name;
            maxAge=user.age;
        }
    }
    return nameOld;
}
console.log(getOlderUserArray(allUsers));