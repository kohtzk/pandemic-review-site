const sqlite = require('sqlite3');
var db = new sqlite.Database('./pandemicDatabase.db');
/* Code for return's
   Login Code's
   0 - Login Successful
   1 - Password Incorrect
   2 - Email not found
   Create User Codes
   3 - Email already in use
   4 - Account Created
 */


function databaseUserQuery(email){
    return new Promise(function (resolve,reject) {
        info = []
        db.each("SELECT Email emailS, Password pword FROM Users WHERE Email  = ?", [email], (err, row) => {
            info[0] = row.emailS;
            info[1] = row.pword;
            resolve(info);
        })
        setTimeout(() => {
            resolve(info);
        },10)
    })
}

async function loginVer(email, password) {
    return new Promise((async (resolve, reject) => {
        await databaseUserQuery(email).then(result => {
            if (result[0] == email) {
                if (result[1] == password) {resolve (0)}
                else {resolve (1)}
            } else {resolve (2)}})
    }))
}

async function createUser(name,email,password){
    return new Promise((async (resolve, reject) => {
        db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name,email,password], function (err){
            if (err) {resolve(3)} //Did a naughty and assumed any error would be because the email is already in use
            else{resolve(4)}
        })
    }))
}

/* function createEntitiy(email, password, business, name){
    if(business == null) {
        db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name, email, password], function (err) {
            if (err) {console.log("Email already exists!");}
            else(console.log("Created!"))})}
    else {
        console.log(loginVer(email, password))
    }} */

module.exports = {loginVer, createUser};

