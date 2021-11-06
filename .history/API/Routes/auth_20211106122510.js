const express = require('express');
const router = express.Router();
// const User = require('../src/models/User');
const { body ,  validationResult } = require('validator');

// Create a user using : POST "/api/auth/". Doesn't require Authentication //

router.post('/', [
body('name').isLength({min : 3}) , 
body('email').isEmail() , 
body('password').isLength({min:5}) 
] , 
 (req , res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array() });
    }
    res.send(req.body);
})

module.exports = router

// Here we are doiungthe module exports //

// console.log(req.body)
//     const user = User(req.body);
//     user.save()
//     res.send(req.body)