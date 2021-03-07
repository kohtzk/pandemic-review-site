const sqlite = require('sqlite3');
var db = new sqlite.Database('./pandemicDatabase.db');

//Input required => username & password.
//Return => Whether combo exists
function checkName(email, password) {
    emailD = null;
    passwD = null;
    db.each("SELECT Email emailS, Password pword FROM Users WHERE Email  = ?", [email], (err, row) => {
        emailD = row.emailS;
        passwD = row.pword;
    }, () => {
        if(emailD == email){
            if(passwD == password){console.log("Correct")}
            else{console.log("Wrong PW")}
        } else {console.log("Email not found")}
    })
}

function createUser(name, email, password){
    db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name, email, password], function(err) {
        if (err) {
            console.log("Email already exists!");
        }
    })
}

function end(){
    db.close();
}

module.exports = {checkName, createUser, end};


