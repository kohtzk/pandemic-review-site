const express = require('express');
const database = require('./database');
//express app
const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.static("frontend"));//Allows public access to the public folder

//listen for requests, uses localhost by default
app.listen(3000);

// request: { "username" : username, "password" : password}
// response: { "result" : "success" OR "failed" }
app.post('/newaccount', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    // add new username and password is correct
    let result = { "result": "failed" };
    res.send(JSON.stringify(result));
})

// request: { "businessname" : businessname, "businessowner" : userid, "contact" : { "phone" : number, "email" : email }, 
//            "location" : { "number" : number, "street" : street, "postcode" : postcode }, "type" : businesstype }
// response: { "result" : "success" OR "failed" }
app.post('/addbusiness', function (req, res, next) {
    let review = req.body;
    // put data in database
    let result = { "success": true };
    res.send(JSON.stringify(result));
})

// request: { "user" : userid, "business" : businessid, "oneway" : rating, "sanitizer" : rating, "personlimit" : rating, 
//            "masks" : rating, "bouncers" : rating, "tempcheck" : rating, "staffppe" : rating }
// response: { "result" : "success" OR "failed" }
app.post('/addreview', function (req, res, next) {
    let review = req.body;
    // put data in database
    let result = { "result": "success" };
    res.send(JSON.stringify(result));
})

// checks to make sure the username and password is correct
// request: { "username" : username, "password" : password}
// response: { "result" : "failed" OR "some sort of unique ID" }
app.post('/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    // check username and password is correct
    let result = { "result": "failed" };
    res.send(JSON.stringify(result));
})

// request: { "userid" : userid }
// response: { "username" : username, "name" : name, "businessID" : businessid }                      
app.post('/profile', function (req, res, next) {
    let username = req.body.username;
    // get user information
    let profiledata = { 
        "username" : "theTree",
        "name": "Trevor Wood",
        "email" : "theTree@theTree.tree",
        "businessID": "null"
        };
    res.send(JSON.stringify(profiledata));
})

// request: { "businessid" : businessid }
// response: { "username" : username, "name" : name, "businessID" : businessid }                      
app.post('/business', function (req, res, next) {
    let username = req.body.username;
    // get user information
    let profiledata = { 
        "username" : "theTree",
        "name": "Trevor Wood",
        "businessID": "thetreecompany"
        };
    res.send(JSON.stringify(profiledata));
})

// request: { "businessid" : businessid }
// response: { "businessname" : businessname, "businessowner" : userid, "contact" : { "phone" : number, "email" : email }, 
//             "location" : { "number" : number, "street" : street, "postcode" : postcode }, "type" : businesstype }
app.post('/getreviews', function (req, res, next) {
    let business = req.body.businessid;
    // get data from database
    let reviews = { "reviews": [] };
    res.send(JSON.stringify(reviews));
})

app.get('/', (req, res) => {
    res.sendFile('frontend/index.html', { root: __dirname });
});

app.get('/test', (req, res) => {
    res.sendFile('frontend/test.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('frontend/404.html', { root: __dirname });
});