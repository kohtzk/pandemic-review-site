


$(document).ready(function () {
input = { "username" : "theTree", "password" : "123456" };
$.post("/testrequest", input, function(result) {
    
    // if (response.result == "failed") {
    //     // do something
    //     console.log("log in failed");
    // } else {
        // log them in
        console.log("log in success");
        console.log(result);//asdfa
        $("#testdiv").text(result.data[0].Name)
        // var response = JSON.parse(result);
        // console.log(response.result);//asdfa
    // }
});
});

// let map;

//       function initMap() {
//         map = new google.maps.Map(document.getElementById("map"), {
//           center: { lat: 51.37791023537809, lng: -2.382052811117202 },
//           zoom: 15,
//         });
//       }