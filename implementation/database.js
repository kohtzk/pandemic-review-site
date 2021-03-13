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
   Business Codes
   5 - Business insertion successful
   6 - User table successfully updated */

// Function that handles all instances of "Select", searches and returns things from the database when a search is needed
function databaseUserQuery(email, mode){
    info = []
    if (mode == "Login"){ //Mode for login verification
        return new Promise(function (resolve,reject) {
            db.each("SELECT Email emailS, Password pword FROM Users WHERE Email  = ?", [email], (err, row) => { //Get's login and password of an account with a given email
                let info = [row.emailS, row.pword]; //returns the data in array
                resolve(info);
            })
            setTimeout(() => { // If the search yields nothing, return nothing as annoyingly there is no inbuilt way of getting a "We didn't find it" thing
                resolve(info);
            },10)})}

    else if (mode == "UserDetails"){//Mode for getting user details
        return new Promise(function (resolve, reject) {
            db.each("SELECT Email emailS, Name nameS FROM Users WHERE Email  = ?", [email], (err, row) => { //Placeholder only gets email and name
              let info = [row.emailS, row.nameS] //returns this
                resolve(info)
            })
            setTimeout(() => { // If the search yields nothing, return nothing as annoyingly there is no inbuilt way of getting a "We didn't find it" thing
                resolve(info);
            },10)})}

    else if (mode == "BusinessID"){ //mode for getting business id
        return new Promise(function (resolve, reject) {
            db.each("SELECT Email emailS, BusinessID ID FROM Businesses WHERE Email  = ?", [email], (err, row) => {
                resolve(row.ID)})
            setTimeout(() => { // If the search yields nothing, return nothing as annoyingly there is no inbuilt way of getting a "We didn't find it" thing
                resolve(info);
            },10)
        })}
}

// Function verifying login, queries database then checks if the input matches what the database said it should be
async function loginVer(email, password) {
    return new Promise((async (resolve, reject) => {
        await databaseUserQuery(email, "Login").then(result => {
            if (result[0] == email) {
                if (result[1] == password) {resolve (0)}
                else {resolve (1)}
            } else {resolve (2)}})}))}

//Function that quries and returns User details
async function userDetails(email){
    return new Promise(async (resolve, reject) => {
        await databaseUserQuery(email, "UserDetails").then(result => {
            resolve(result)})})}

//Function that inserts a new user into the database
async function createUser(name,email,password){
    return new Promise((async (resolve, reject) => {
        db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name,email,password], function (err){
            if (err) {resolve(3)} //Did a naughty and assumed any error would be because the email is already in use
            else{resolve(4)}})}))}

//Function that specifically updates a user when that user has a business added to them
async function updateUser(email, id){
    return new Promise((async (resolve, reject) => {
            db.run("UPDATE Users SET BusinessID = ? WHERE Email = ?", [id, email], function(err){
                if (err) {resolve(err)}
                else{resolve(6)}})}))}

//Function that inserts a new business into the business table
function insertBusiness(email, businessName, location, postCode){
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO Businesses(BusinessName, Location, PostCode, Email) VALUES(?, ?, ?, ?)", [businessName, location, postCode, email], function (err){
          if (err) {resolve(err)}
          else{resolve(5)}})})}

//Function that handles the steps to create and update the database upon the creation of a business sequentially
async function createBusiness(email, password, businessName, location, postCode){
    return new Promise((async (resolve, reject) => {
        await loginVer(email, password).then(result => {
            if (result == 0) { //Code for verified
                insertBusiness(email, businessName, location, postCode).then(result => {
                    if(result == 5){
                        databaseUserQuery(email, "BusinessID").then(result2 => {
                            updateUser(email, result2).then(result3 => {
                                resolve(result3)})})}
                    else{resolve(result)}})}
            else {resolve(result)}})}))}


module.exports = {loginVer, createUser, userDetails, createBusiness};

