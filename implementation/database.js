var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE testdb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });