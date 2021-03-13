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
   6 - User table successfully updated
 */
function databaseUserQuery(email, mode){
    info = []
    if (mode == "Login"){
        return new Promise(function (resolve,reject) {
            db.each("SELECT Email emailS, Password pword FROM Users WHERE Email  = ?", [email], (err, row) => {
                let info = [row.emailS, row.pword];
                resolve(info);
            })
            setTimeout(() => {
                resolve(info);
            },10)})}

    else if (mode == "UserDetails"){
        return new Promise(function (resolve, reject) {
            db.each("SELECT Email emailS, Name nameS FROM Users WHERE Email  = ?", [email], (err, row) => {
              let info = [row.emailS, row.nameS]
                resolve(info)
            })})}

    else if (mode == "BusinessID"){
        return new Promise(function (resolve, reject) {
            db.each("SELECT Email emailS, BusinessID ID FROM Businesses WHERE Email  = ?", [email], (err, row) => {
                resolve(row.ID)})})}
}

async function loginVer(email, password) {
    return new Promise((async (resolve, reject) => {
        await databaseUserQuery(email, "Login").then(result => {
            if (result[0] == email) {
                if (result[1] == password) {resolve (0)}
                else {resolve (1)}
            } else {
                console.log("YYY")
                resolve (2)}})}))}

async function userDetails(email){
    return new Promise(async (resolve, reject) => {
        await databaseUserQuery(email, "UserDetails").then(result => {
            resolve(result)})})}

async function createUser(name,email,password){
    return new Promise((async (resolve, reject) => {
        db.run("INSERT INTO Users(Name, Email, Password) VALUES(?, ?, ?)", [name,email,password], function (err){
            if (err) {resolve(3)} //Did a naughty and assumed any error would be because the email is already in use
            else{resolve(4)}})}))}

async function updateUser(email, id){
    return new Promise((async (resolve, reject) => {
            db.run("UPDATE Users SET BusinessID = ? WHERE Email = ?", [id, email], function(err){
                if (err) {resolve(err)}
                else{resolve(6)}})}))}

function insertBusiness(email, businessName, location, postCode){
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO Businesses(BusinessName, Location, PostCode, Email) VALUES(?, ?, ?, ?)", [businessName, location, postCode, email], function (err){
          if (err) {resolve(err)}
          else{resolve(5)}})})}

async function createBusiness(email, password, businessName, location, postCode){
    return new Promise((async (resolve, reject) => {
        await loginVer(email, password).then(result => {
            if (result == 0) {
                insertBusiness(email, businessName, location, postCode).then(result => {
                    if(result == 5){
                        databaseUserQuery(email, "BusinessID").then(result2 => {
                            updateUser(email, result2).then(result3 => {
                                resolve(result3)})})}
                    else{resolve(result)}})}})}))}


module.exports = {loginVer, createUser, userDetails, createBusiness};

