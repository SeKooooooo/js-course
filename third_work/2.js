let userName='seRGey'
let userSurname='KoCHNeV'
let userNameFinal=userName[0].toUpperCase()+userName.substring(1).toLowerCase();
let userSurnameFinal=userSurname[0].toUpperCase()+userSurname.substring(1).toLowerCase();
console.log(userNameFinal);
console.log(userSurnameFinal);
console.log(userName===userNameFinal?'Имя осталось без изменений':'Имя было преобразовано')
console.log(userSurname===userSurnameFinal?'Фамилия осталась без изменений':'Фамилия была преобразована')