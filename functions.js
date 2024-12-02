function fullName(firstName, lastName) {
    return { 
        firstName,
        lastName
    };
};

function hobbiesList(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [
            hobbyOne, hobbyTwo, hobbyThree
        ]
    };
};



module.exports = {
    userName: fullName,
    userHobbies: hobbiesList
};