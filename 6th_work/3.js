let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
function filter(arrObjects,property,value)
{
    let arrResult=[];
    for(obj of arrObjects)
    {
        if (obj[property]==value)
            arrResult.push(obj);
    }
    return arrResult;
}
console.log(filter(objects,'name','Иван'));