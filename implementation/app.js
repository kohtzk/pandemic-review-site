const express = require('express');

//express app
const app = express();

//listen for requests, uses localhost by default
app.listen(3000);

// request: { "username" : username, "password" : password}
// response: { "result" : "failed" OR "some sort of unique ID" }
app.post('/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    // check username and password is correct
    let result = { "result": "failed" };
    res.send(JSON.stringify(result));
})

// request: { "username" : username, "password" : password}
// response: { "result" : "success" OR "failed" }
app.post('/newaccount', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    // add new username and password is correct
    let result = { "result": "failed" };
    res.send(JSON.stringify(result));
})

// request: { "username" : username }
// response: { "name" : name, "businessID" : businessid }                      
app.post('/profile', function (req, res, next) {
    let username = req.body.username;
    // get user information
    let profiledata = { 
        "name": "Trevor Wood",
        "businessID": "null"
        };
    res.send(JSON.stringify(profiledata));
})

app.get('/', (req, res) => {
    res.sendFile('frontend/map.html', { root: __dirname });
});

app.get('/login', (req, res) => {
    res.sendFile('frontend/login.html', { root: __dirname });
});

app.get('/map', (req, res) => {
    res.sendFile('frontend/map.html', { root: __dirname });
});

app.get('/profile', (req, res) => {
    res.sendFile('frontend/profile.html', { root: __dirname });
});

app.get('/reviews', (req, res) => {
    res.sendFile('frontend/reviews.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('frontend/404.html', { root: __dirname });
});