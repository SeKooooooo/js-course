let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]
function filter(arrObjects,property,value)
{
    return arrObjects.filter(el=>el[property]===value);
}
console.log(filter(objects,'name','Пётр'));