function createStudentCard(studentObj){
    let h2=document.createElement('h2');
    h2.textContent=studentObj.name;
    document.body.append(h2);
    let span=document.createElement('span');
    span.textContent='Возвраст: '+ studentObj.age +' лет';
    h2.after(span);
}
let studentObj={
    name: 'Иван',
    age: 17
}
createStudentCard(studentObj);