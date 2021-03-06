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
    } else{return "Fail"}}

function login(username, password) {
    var id = get_userid(username);
    if (password == login_verification(id)) {
        return id;
    } else {
        return "Fail";
    }
}

function user_details(id){
    const details = db.prepare('SELECT name name, user_name un, email email, business_id bid FROM users WHERE user_id = ?').get(id)
    if(details != undefined){
        info = [details.name, details.un, details.email, details.bid]
        return info
    } else {return "Fail"}}

function business_details(id){ //Text details column
    const details = db.prepare('SELECT business_name name, location loc, post_code code, email email, description desc FROM businesses WHERE business_id = ?').get(id)
    if(details != undefined){
        const toSend = [details.name, details.loc, details.code, details.email, details.desc]
        return toSend
    } else {return "Fail"}}

function all_businesses(){ //Text details column
    const details = db.prepare('SELECT * FROM businesses').all()
    return details}

function create_user(iname, i_user_name, iemail, ipassword){ //add to database
    const create = db.prepare('INSERT INTO users(name, user_name, email, password) VALUES(?, ?, ?, ?)')
    const id = db.prepare('SELECT user_id id FROM users WHERE email = ?')
    try {
        create.run(iname, i_user_name, iemail, ipassword)
        let val = id.get(iemail)
        return val.id
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
    } catch (err) {return "Fail"}}

function insert_business(iemail, ibusiness_name, ilocation, ipost_code, desc){
    const business_insert = db.prepare('INSERT INTO businesses(business_name, location, post_code, email, description) VALUES(?, ?, ?, ?, ?)')
    const get_id = db.prepare('SELECT business_id bid FROM businesses WHERE rowid = ?')
    try{
        const insert = business_insert.run(ibusiness_name, ilocation, ipost_code, iemail, desc)
        const id = get_id.get(insert.lastInsertRowid)
        return id.bid
    } catch (err) { throw err;
        return "Fail"}}

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
        return id.rid
    } catch (err) {return "Fail"}}

function get_business_reviews(id){
    const reviews = db.prepare('SELECT date date, review_id review_id, reviews.business_id business_id, users.user_id user_id, user_name username, business_name business_name, text text,' +
        ' oneway oneway, sanitizer sanitizer, mask_usage mask_usage, bouncers bouncers, temperature_checking temperature_checking, staff_ppe staff_ppe, social_distancing social_distancing, ventilation ventilation FROM reviews' +
        ' INNER JOIN users ON users.user_id = reviews.user_id INNER JOIN businesses ON reviews.business_id = businesses.business_id WHERE' +
        ' reviews.business_id = ?').all(id)
    return reviews}

function get_user_reviews(id){
    const reviews = db.prepare('SELECT date date, review_id review_id, reviews.business_id business_id, users.user_id user_id, user_name username, business_name business_name, text text,' +
    ' oneway oneway, sanitizer sanitizer, mask_usage mask_usage, bouncers bouncers, temperature_checking temperature_checking, staff_ppe staff_ppe, social_distancing social_distancing, ventilation ventilation FROM reviews' +
        ' INNER JOIN users ON users.user_id = reviews.user_id INNER JOIN businesses ON reviews.business_id = businesses.business_id WHERE' +
        ' reviews.user_id = ?').all(id)
    return reviews}

function search(query){
    const like = db.prepare('SELECT * FROM businesses WHERE business_name LIKE ?')
    let format = '%' + query + '%'
    let data = like.all(format)
    return data}
    // if(data.length != 0){
    //     return data
    // } else {return "Fail"}}

module.exports = {search, get_userid, claim_ownership, login_verification, user_details, business_details, create_user, insert_business, delete_business, delete_user, add_review, get_business_reviews, get_user_reviews, login, all_businesses};

