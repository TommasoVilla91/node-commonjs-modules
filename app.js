const functions = require('./functions');

const names = functions.userName();
const allHobbies = functions.userHobbies();

function userInfo() {
    return {
        fullName: names.name + " " + names.surname,
        hobbies: allHobbies.hobbies
    };
};

const userBio = userInfo();
console.log(userBio);
