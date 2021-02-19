const express = require('express');

//express app
const app = express();

//listen for requests, uses localhost by default
app.listen(3000);

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