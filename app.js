var express = require("express");
var path = require ("path");
var bodyParser =require ("body-parser");
var csv= require("ya-csv")

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (request, response){
    response.sendFile(path.join(__dirname, "Welcome.html"));

});

app.post("/booking",function(request,response){
    var fullName = request.body.fullName;
    var emailAddress =request.body.emailAddress;
    var database = csv.createCsvFileWriter("bookings.csv",{"flags": "a"});
    var data = [fullName, emailAddress];
    database.writeRecord(data);
    database.writeStream.end();
    response.send("Thanks"+ fullName+
    ", we've sent a confirmation to " +emailAddress
    );

});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Wagamama web app listening at http://%s:%s", host, port);
})