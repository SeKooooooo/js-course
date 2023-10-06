let currentDate=new Date();
let currentYear=currentDate.getFullYear();
function getAge(birthYear){
    return currentYear-birthYear;
}
console.log(getAge(1991));