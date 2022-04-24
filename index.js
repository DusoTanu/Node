const express = require("express");
const bodyparser = require("body-parser");
const authRoute = require('./Route/userRoute');

require("./Database/connection");

const app =  express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const port = 3000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
})

app.use('/api', authRoute);