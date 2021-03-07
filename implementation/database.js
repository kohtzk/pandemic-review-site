const sqlite = require('sqlite3');
var db = new sqlite.Database('./pandemicDatabase.db');
var promise = require('promise')

//Input required => username & password.
//Return => Whether combo exists
function checkName(email, password) {
    emailD = null;
    passwD = null;
    db.each("SELECT Email emailS, Password pword FROM Users WHERE Email  = ?", [email], (err, row) => {
        emailD = row.emailS;
        passwD = row.pword;
    })
    setTimeout(() => {
        if(emailD == email){
            if(passwD == password){console.log("Correct")}
            else{console.log("Wrong PW")}
        } else {console.log("Email not found")}
    },10)
}

function createUser(name, email, password){
    db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name, email, password], function(err) {
        if (err) {
            console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    })
}

function end(){
    db.close();
}

module.exports = {checkName, createUser, end};


