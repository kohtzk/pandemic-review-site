const Database = require('better-sqlite3');
var db = new Database('pandemicDatabase.db');

function get_userid(un){
    const id = db.prepare('SELECT user_id uid FROM users WHERE user_name = ?').get(un)
    if(id != undefined){
        return id.uid
    } else {return "Fail"}}

function login_verification(id){
    const verify = db.prepare('SELECT password password FROM users WHERE user_id = ?').get(id)
    if(verify != undefined){
        return verify.password
    }
    else{return "Fail"}}

function user_details(id){
    const details = db.prepare('SELECT name name, user_name un FROM users WHERE user_id = ?').get(id)
    if(details != undefined){
        info = [details.name, details.un]
        return info
    } else {return "Fail"}}

function business_details(id){ //Text details column
    const details = db.prepare('SELECT business_name name, location loc, post_code code FROM businesses WHERE business_id = ?').get(id)
    if(details != undefined){
        const toSend = [details.name, details.loc, details.code]
        return toSend }
    else {return "Fail"}}

function create_user(iname, i_user_name, iemail, ipassword){ //add to database
    const create = db.prepare('INSERT INTO users(name, user_name, email, password) VALUES(?, ?, ?, ?)')
    const id = db.prepare('SELECT user_id id FROM users WHERE email = ?')
    try {
        create.run(iname, i_user_name, iemail, ipassword)
        let val = id.get(iemail)
        return val.uid
    } catch (err) {return "Fail"}}

function delete_user(id){
    const del_user = db.prepare('DELETE from users WHERE user_id = ?')
    try {
        del_user.run(id)
        //return id
    } catch (err) {return "Fail"}}

function claim_ownership(bid, uid){
    try {
        const update_user = db.prepare('UPDATE users SET business_id = ? WHERE user_id = ?').run(bid, uid)
        //return bid
    } catch (err) {return "Fail"}
}

function insert_business(iemail, ibusiness_name, ilocation, ipost_code, desc){
    const business_insert = db.prepare('INSERT INTO businesses(business_name, location, post_code, email, description) VALUES(?, ?, ?, ?, ?)')
    try{
        business_insert.run(ibusiness_name, ilocation, ipost_code, iemail, desc)
        //return id
    } catch (err) {return "Fail"}}

function delete_business(id){
    const update = db.prepare('Update users SET business_id = NULL WHERE business_id = ?')
    const remove = db.prepare('DELETE from businesses WHERE business_id = ?')
    try{
        update.run(id)
        remove.run(id)
        //return id
    } catch (err) {return "Fail"}}

function add_review(bid, uid, body, scores){
    const ins = db.prepare('INSERT INTO reviews(business_id, user_id, text, oneway, sanitizer, mask_usage, bouncers, temperature_checking, staff_ppe, social_distancing, ventilation) VALUES(?,?,?,?,?,?,?,?,?,?,?)')
    const get_id = db.prepare('SELECT review_id rid FROM reviews WHERE rowid = ?')
    try{
        const insert = ins.run(bid, uid, body, scores.oneway, scores.sanitizer, scores.mask_usage, scores.bouncers,
            scores.temperature_checking, scores.staff_ppe, scores.social_distancing, scores.ventilation);
        const id = get_id.get(insert.lastInsertRowid)
        return id
    } catch (err) {return "Fail"}}

function get_business_reviews(id){ //User ID version
    const reviews = db.prepare('SELECT * FROM reviews WHERE business_id = ?').all(id)
    return reviews}

function get_user_reviews(id){
    const reviews = db.prepare('SELECT * FROM reviews WHERE user_id = ?').all(id)
    return reviews}

module.exports = {get_userid, claim_ownership, login_verification, user_details, business_details, create_user, insert_business, delete_business, delete_user, add_review, get_business_reviews, get_user_reviews};

