const path = require('path');
const express = require('express');
const rootDir = require('../utils/path')
const users = require('../utils/userArray');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','home.html'));
})
router.get('/view-users',(req,res)=>{
    res.send(res.json(users));
})

module.exports = router;