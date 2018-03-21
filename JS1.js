/*
 * Filename: d:\node_demo\JS1.js
 * Path: d:\node_demo
 * Created Date: Tuesday, March 20th 2018, 6:56:23 pm
 * Author: Aamir
 * 
 * Copyright (c) 2018 VLIT
 * Project 01
 */

var express = require(express);
var app = express();
var port = 3000;
app.use("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log("Listening at " + port);
});