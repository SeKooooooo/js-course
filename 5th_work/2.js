let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
function filter(whiteList,blackList){
    let clearList=[];
    for (let mail of whiteList){
        if (!blackList.includes(mail))
            clearList.push(mail);
    }
    return clearList;
}
console.log(filter(whiteList,blackList));

