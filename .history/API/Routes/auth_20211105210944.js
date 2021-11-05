const express = require('express');
const router = express.Router();
const User = require('./models/User');

// Create a user using : POST "/api/auth/". Doesn't require Authentication //






router.get('/', (req , res) => {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router

// Here we are doiungthe module exports //

