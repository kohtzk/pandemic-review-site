const Database = require('better-sqlite3');
var db = new Database('pandemicDatabase.db');

function login_verification(iemail){
    const verify = db.prepare('SELECT password password FROM users WHERE email = ?').get(iemail)
    if(verify != undefined){return verify.password}
    else{return "Fail"}}

function user_details(iemail){
    const details = db.prepare('SELECT name name FROM users WHERE email = ?').get(iemail)
    if(details != undefined){return details.name}
    else {return "Fail"}}

function business_details(iemail){
    const details = db.prepare('SELECT business_name name, location loc, post_code code FROM businesses WHERE email = ?').get(iemail)
    if(details != undefined){
        const toSend = [details.name, details.loc, details.code]
        return toSend }
    else {return "Fail"}}

function create_user(iname, iemail, ipassword){
    const create = db.prepare('INSERT INTO users(name, email, password) VALUES(?, ?, ?)')
    try {create.run(iname, iemail, ipassword)}
    catch (err) {return "Fail"}}

function delete_user(iemail){
    const del_user = db.prepare('DELETE from users WHERE email = ?')
    try {del_user.run(iemail)}
    catch (err) {return "Fail"}}

function insert_business(iemail, ibusiness_name, ilocation, ipost_code){
    const business_insert = db.prepare('INSERT INTO businesses(business_name, location, post_code, email) VALUES(?, ?, ?, ?)')
    const get_id = db.prepare('SELECT business_id business FROM businesses WHERE email  = ?')
    const update_user = db.prepare('UPDATE users SET business_id = ? WHERE email = ?')
    try{
        business_insert.run(ibusiness_name, ilocation, ipost_code, iemail)
        const id = get_id.get(iemail)
        update_user.run(id.business, iemail)
    } catch (err) {return "Fail"}}

function delete_business(iemail){
    const select = db.prepare('SELECT business_id business FROM businesses WHERE email  = ?')
    const update = db.prepare('Update users SET business_id = NULL WHERE business_id = ?')
    const remove = db.prepare('DELETE from businesses WHERE business_id = ?')
    try{
        const id = select.get(iemail)
        update.run(id.business)
        remove.run(id.business)
    } catch (err) {return "Fail"}}

function add_review(iemail, ibusiness_name, body, scores){
    const user = db.prepare('SELECT user_id id FROM users WHERE email = ?').get(iemail)
    const business = db.prepare('SELECT business_id id FROM business WHERE name = ?').get(ibusiness_name)
    const ins = db.prepare('INSERT INTO reviews(business_id, user_id, text, oneway, sanitizer, mask_usage, bouncers, temperature_checking, staff_ppe, social_distancing, ventilation) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)')
    try{ins.run(business.id, user.id, body, scores[0], scores[1], scores[2], scores[3], scores[4], scores[5], scores[6], scores[7])}
    catch (err) {return "Fail"}
}

function get_reviews(ibusiness_name){
    const business = db.prepare('SELECT business_id id FROM business WHERE name = ?').get(ibusiness_name)
    const reviews = db.prepare('SELECT * FROM reviews WHERE business_id = ?').all(business.id)
    return reviews
}
module.exports = {login_verification, user_details, business_details, create_user, insert_business, delete_business, delete_user, add_review, get_reviews};

