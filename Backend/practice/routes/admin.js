const express = require('express');
const rootDir = require('../utils/path');
const path = require('node:path');
const users = require('../utils/userArray');
const router = express.Router();

router.get('/create-user',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','form.html'))
})
router.post('/create-user',(req,res)=>{
    console.log(req.body);
    users.push(req.body.username);
    res.redirect('/');
})

module.exports = router;