// import { Loader } from '@googlemaps/js-api-loader';
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

app.post('/login', function (req, res, next) {
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
  console.log("Request to /profile");
  console.log(req.body);

  var user_id = req.body.user_id;
  var details = database.user_details(user_id);
  
  if (details == "Fail") {
    var result = { "message": "failure" };
  } else {
    var profile = { 
      "name": details[0],
      "username": details[1],
      "email": details[2],
      "business_id": details[3]
     }
     var result = { "message": "success",
                    "data": profile };
  }
  res.json(result);
})

app.post('/linkbusiness', function (req, res, next) {
  console.log("Request to /linkbusiness");
  console.log(req.body);
  
  var user_id = req.body.user_id;
  var business_id = req.body.business_id;

  var error = database.claim_ownership(business_id, user_id);

  if (error == "Fail") {
    var result = { "message": "failure" };
  } else { 
    var result = { "message": "success" };
  }
  res.json(result);
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
                     
app.post('/businessprofile', function (req, res, next) {
  console.log("Request to /businessprofile");
  console.log(req.body);

  var business_id = req.body.business_id;
  var details = database.business_details(business_id);
  
  if (details == "Fail") {
    var result = { "message": "failure" };
  } else {
    var profile = { 
      "name": details[0],
      "address": details[1],
      "postcode": details[2],
      "email": details[3],
      "description": details[4]
     }
     var result = { "message": "success",
                    "data": profile };
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

app.post('/getreviews', function (req, res, next) {
  console.log("Request to /getreviews");
  console.log(req.body);
  
  var user_id = req.body.user_id;
  var business_id = req.body.business_id;

  if (user_id != null) {
    var reviews = database.get_user_reviews(user_id);
  } else if (business_id != null) {
    var reviews = database.get_business_reviews(business_id);
  } else {
    var reviews = "Fail";
  }

  if (reviews == "Fail") {
    var result = { "message": "failure" };
  } else {
    var result = { "message": "success",
                 "data": reviews};
  }
  res.json(result);
})

app.get('/businesses', (req, res, next) => {
    res.json(database.all_businesses());
  })
// console.log(database.all_businesses());

// var service = new google.maps.DistanceMatrixService();


  // const businesses = [
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   },
  //   {
  //     name: "The Whole Bagel",
  //     location: "Upper Borough Walls",
  //     rating: "5",
  //     type: "food",
  //   },
  //   {
  //     name: "Lush",
  //     location: "Union St.",
  //     rating: "5",
  //     type: "cosmetics",
  //   }
  // ];