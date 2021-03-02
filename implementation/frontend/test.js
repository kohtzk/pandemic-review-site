
$(document).ready(function () {
input = { "username" : "theTree", "password" : "123456" };
$.post("/login", input, function(result) {
    var response = JSON.parse(result);
    if (response.result == "failed") {
        // do something
        console.log("log in failed");
    } else {
        // log them in
        console.log("log in success");
        console.log(response.result);
    }
});
});