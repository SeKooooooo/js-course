function createStudentCard(name,age){
    let h2=document.createElement('h2');
    h2.textContent=name;
    document.body.append(h2);
    let span=document.createElement('span');
    span.textContent='Возвраст: '+ age +' лет';
    h2.after(span);
}
createStudentCard('Иван', 17);