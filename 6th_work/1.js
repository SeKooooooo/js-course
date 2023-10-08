let user1={
    name: 'Игорь',
    age: 17
}
let user2={
    name: 'Оля',
    age: 21
}
function getOlderUser(userFirst,userSecond)
{
    return userFirst.age>userSecond.age?userFirst.name:userSecond.name;
}
console.log(getOlderUser(user1,user2));