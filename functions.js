function fullName(firstName, lastName) {
    return { 
        name: firstName,
        surname: lastName
    };
};

module.exports = {
    userName: fullName
};