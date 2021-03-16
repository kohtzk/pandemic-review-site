


$(document).ready(function () {
// input = { "username" : "theTree", "password" : "123456" };
// $.post("/login", input, function(result) {
//     var response = JSON.parse(result);
//     if (response.result == "failed") {
//         // do something
//         console.log("log in failed");
//     } else {
//         // log them in
//         console.log("log in success");
//         console.log(response.result);
//     }
// });
});

let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 51.37791023537809, lng: -2.382052811117202 },
          zoom: 15,
        });
      }