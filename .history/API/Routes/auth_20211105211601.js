const express = require('express');
const router = express.Router();
const User = require('../src/models/User');

// Create a user using : POST "/api/auth/". Doesn't require Authentication //






router.get('/', (req , res) => {
    console.log(req.body)
    const User = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router

// Here we are doiungthe module exports //
