const db = require("../db");
let accountDeatails = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 500, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 600, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 15000, password: "user5" },
    1005: { acno: 1005, name: "usersix", balance: 6000, password: "user6" },
};
const register = (acno, name, password) => {
    console.log("Register called");
    return db.User.findOne({ acno }).then((user) => {
        console.log(user);
        if (User) {
            return {
                status: false,
                statuscode: 422,
                message: "User alredy exist please login",
            };
        } else {
            const newUser = new db.User({
                acno,

                name,
                balance: 0,
                password,
            });
            newUser.save();
            return {
                status: true,
                statuscode: 200,
                message: "Registration successful",
            };
        }
    });
    if (acno in accountDeatails) {
        return {};
    }
    accountDeatails[acno] = {
        acno,
        balance: 0,
        name,
        password,
    };

    console.log(this.accountDeatails);
    return {
        status: true,
        message: "REGISTRATION SUCCESSFUL,",
    };
};
module.exports = {
    register,
};