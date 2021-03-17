const sqlite = require('sqlite3');
var db = new sqlite.Database('./pandemicDatabase.db');


function login_verification(iemail, ipassword){
    db.all("SELECT Email db_email, Password db_password FROM Users WHERE Email  = ?", [iemail, ipassword], (err,rows) => {
        if(err){throw err;}
        rows.forEach((row) => {
            var obj = {email:row.db_email, password:row.db_password}
            JSON.stringify(obj)})})}

function user_details(iemail){
    db.all("SELECT Email db_email, Name db_name FROM Users WHERE Email  = ?", [iemail], (err,rows) => {
        if(err){throw err;}
        rows.forEach((row) => {
            var obj = {name:row.db_name}
            JSON.stringify(obj)})})}

function business_details(iemail){
    db.all("SELECT email emailS, business_name business_name, location loc, post_code post_code FROM businesses WHERE email  = ?", [iemail], (err,rows) => {
        if(err){throw err;}
        rows.forEach((row) => {
            var obj = {"name":row.business_name, "location":row.loc, "post_code":row.post_code}
            JSON.stringify(obj)})})}

function create_user(iname, iemail, ipassword){
    db.run("INSERT INTO users(name, email, password) VALUES(?, ?, ?)", [iname,iemail,ipassword], (err) => {
        if (err) {throw err;}
        //Return Acceptance
    })}

function insert_business(iemail, ibusiness_name, ilocation, ipost_code){
    db.run("INSERT INTO businesses(business_name, location, post_code, email) VALUES(?, ?, ?, ?)", [ibusiness_name, ilocation, ipost_code, iemail], (err) => {
        if (err) {throw err}
        db.all("SELECT email emailS, businessID business_id FROM businesses WHERE email  = ?", [iemail], (err,rows) => {
            if(err){throw err;}
            id = rows[0].business_id
            db.run("UPDATE users SET business_id = ? WHERE email = ?", [id, iemail], (err) => {
              if(err) {throw err}
            })})})}

function delete_business(iemail){
    db.all("SELECT email emailS, business_id business_id FROM businesses WHERE email  = ?", [iemail], (err,rows) => {
        if(err) {throw err}
        bid = rows[0].business_id
        db.run("Update users SET business_id = NULL WHERE business_id = ?", [bid], (err) => {
            if (err) {throw err}
            db.run("DELETE from businesses WHERE business_id = ?", [bid], (err) => {
                if(err) {throw err}
            })})})}

function delete_user(iemail){
    db.run("DELETE from users WHERE email = ?", [iemail], (err) => {
        if (err) {throw err}
    })
}

module.exports = {login_verification, user_details, business_details, create_user, insert_business, delete_business, delete_user};

