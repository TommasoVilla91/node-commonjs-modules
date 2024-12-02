const functions = require('./functions');

const names = functions.userName('aaa', 'vvv');
const allHobbies = functions.userHobbies('111', '222', '333');

function userInfo() {
    return {
        fullName: names,
        hobbies: allHobbies.hobbies
    };
};

const userBio = userInfo();
console.log(userBio);
