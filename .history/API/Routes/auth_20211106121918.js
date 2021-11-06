const express = require('express');
const router = express.Router();
const User = require('../src/models/User');
const { body ,  validationResult } = require('express-validator')

// Create a user using : POST "/api/auth/". Doesn't require Authentication //

router.post('/', [
body('name').isLength({min : 3}) , 
body('email').isEmail() , 
body('password').isLength({min:5}) 
] , 
 (req , res) => {
    
    console.log(req.body)
    const user = User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router

// Here we are doiungthe module exports //

