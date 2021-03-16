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
 */

// function testquery(sql) {
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//           throw err;
//         }
//         console.log(rows[0]);
//         // rows.forEach((row) => {
//         //   console.log(row.name);
//         // });
//         return rows[0];
//       });
// }

// console.log(testquery("SELECT * FROM Users"));

// module.exports = {};

