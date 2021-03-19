const express = require('express');
const database = require('./database');
const cors = require('cors')
//express app
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static("../frontend"));//Allows public access to the public folder

//listen for requests, uses localhost by default
app.listen(3000);

app.post('/newaccount', function (req, res, next) {
    console.log("Request to /newaccount");
    console.log(req.body);

    var details = req.body;
    var name = details.name;
    var username = details.username;
    var email = details.email;
    var password = details.password;

    // check if user exists

    var id = database.create_user(name, username, email, password);
    
    // check if business id is not null, then connect the user to the business

    if (id == "Fail") {
      var result = { "message": "failure" };
    } else {
      var result = { "message": "success",
                      "data": { "user_id": id }};
    }
    res.json(result);
})

app.get('/login', async function (req, res, next) {
  console.log("Request to /login");
  console.log(req.body);

  var username = req.body.username;
  var password = req.body.password;

  var id = database.login(username, password);

  if (id == "Fail") {
    var result = { "message": "failure" };
  } else {
    var result = { "message": "success",
                    "data": { "user_id": id }};
  }
  res.json(result);
})
                 
app.post('/profile', function (req, res, next) {
    let user_id = req.body.user_id;
    // get user information
    // let profiledata = { 
    //     "id": 1,
    //     "username" : "theTree",
    //     "name": "Trevor Wood",
    //     "email" : "theTree@theTree.tree",
    //     "businessID": "null"
    //     };
    // resdata = { "message": "success",
    //             "data": profiledata}
    res.json(resdata);
})

app.post('/newbusiness', function (req, res, next) {
  console.log("Request to /newbusiness");
  console.log(req.body);

  var name = req.body.name;
  var email = req.body.email;
  var address = req.body.address;
  var postcode = req.body.postcode;
  var description = req.body.description;

  // check if business exists
  
  var id = database.insert_business(email, name, address, postcode, description);

  // check if user_id exists, and if it does tie the user to the business
  
  if (id == "Fail") {
    var result = { "message": "failure" };
  } else {
    var result = { "message": "success",
                   "data": { "business_id": id }};
  }
  res.json(result);
})

app.post('/addreview', function (req, res, next) {
  console.log("Request to /addreview");
  console.log(req.body);

  var business_id = req.body.business_id;
  var user_id = req.body.user_id;
  var text = req.body.text;
  var scores = req.body.scores;
  // var scores = {
  //   "oneway": 0,
  //   "sanitizer": 0,
  //   "mask_usage": 0,
  //   "bouncers": 0,
  //   "temperature_checking": 0,
  //   "staff_ppe": 0,
  //   "social_distancing": 0,
  //   "ventilation": 0
  // }

  var id = database.add_review(business_id, user_id, text, scores);

  if (id == "Fail") {
    var result = { "message": "failure" };
  } else {
    var result = { "message": "success",
                 "data": { "review_id": id }};
  }
  res.json(result);
})
                     
// can use window.location.hostname to get the host

app.post("/testrequest", (req, res, next) => {
    console.log("got a request");
    console.log(req.body);
    // res.send(JSON.stringify(req));
    var sql = "select * from Users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        });
        // res.send(JSON.stringify({
        //     "message":"success",
        //     "data":rows
        // }));
      });
});

// request: { "businessid" : businessid }
// response: { "username" : username, "name" : name, "businessID" : businessid }                      
app.post('/business', function (req, res, next) {
    // let username = req.body.username;
    // get business information
    let profiledata = { 
        "businessID": 0,
        "business_name" : "theTreeco",
        "location": "90 West Avenue",
        "postcode": "BA23QB",
        "email": "thetree@tree.com",
        "description": "this is a company description"
        };
    res.json(profiledata);
})

app.post('/getreviews', function (req, res, next) {
  console.log("Request to /newaccount");
  console.log(req.body);
  // get data from database
  let reviews = { 
    "message":"success",
    "data": [{
      "review_id": 0,
      "business_id": 0,
      "user_id": 0,
      "date": "21/01/2001",
      "text": "this is a review",
      "oneway": 0,
      "sanitizer": 0,
      "mask_usage": 0,
      "bouncers": 0,
      "temperature_checking": 0,
      "staff_ppe": 0,
      "social_distancing": 0,
      "ventilation": 0
    }, {
      "review_id": 1,
      "business_id": 4,
      "user_id": 0,
      "date": "21/01/2001",
      "text": "this is another review",
      "oneway": 0,
      "sanitizer": 0,
      "mask_usage": 0,
      "bouncers": 0,
      "temperature_checking": 0,
      "staff_ppe": 0,
      "social_distancing": 0,
      "ventilation": 0
    }, {
      "review_id": 1,
      "business_id": 8,
      "user_id": 0,
      "date": "21/01/2001",
      "text": "review review review, this is a review",
      "oneway": 0,
      "sanitizer": 0,
      "mask_usage": 0,
      "bouncers": 0,
      "temperature_checking": 0,
      "staff_ppe": 0,
      "social_distancing": 0,
      "ventilation": 0
    }
  ] };
  res.json(reviews);
})

// app.get('/', (req, res) => {
//     res.sendFile('/frontend/build/index.html', { root: __dirname + "/.."});
// });

app.get('/test', (req, res) => {
    res.sendFile('test.html', { root: __dirname });
});

// app.get('/login', (req, res) => {
//     res.sendFile('frontend/login.html', { root: __dirname });
// });

// 404 page
// app.use((req, res) => {
//     res.status(404).sendFile('frontend/404.html', { root: __dirname });
// });

app.get('/businesses', (req, res, next) => {
    const businesses = [
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      },
      {
        name: "The Whole Bagel",
        location: "Upper Borough Walls",
        rating: "5",
        type: "food",
      },
      {
        name: "Lush",
        location: "Union St.",
        rating: "5",
        type: "cosmetics",
      }
    ];
  
    res.send(JSON.stringify(businesses));
  })
  