let btn=document.createElement('button');
btn.textContent='Показать список';
document.body.append(btn);
let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ];
function createStudentsList(listArr){  
    let ul=document.createElement('ul');
    document.body.append(ul);
    for (let stud of listArr){
        let li=document.createElement('li');
        ul.append(li);
        let h2=document.createElement('h2');
        h2.textContent=stud.name;
        li.append(h2);
        let span=document.createElement('span');
        span.textContent='Возвраст: '+ stud.age +' лет';
        h2.after(span);
    }
}

btn.addEventListener('click',()=>createStudentsList(allStudents));