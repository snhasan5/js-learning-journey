const express = require('express');
const home = require('./routes/client')
const admin = require('./routes/admin');
const app = express();
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname+'/public'));
app.use(admin);
app.use(home);
app.listen(3000,()=>{
    console.log("We are listening at http://localhost:3000/")
})