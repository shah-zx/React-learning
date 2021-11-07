const express = require('express');
const router = express.Router();
const User = require('../src/models/User');
const { body, validationResult } = require('express-validator');

// Create a user using : POST "/api/auth/". Doesn't require Authentication //

router.post('/', [  // Giving the validations in an array //
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
],
  async (req, res) => {

        console.log(req.body)     // This is all for validation //
        const errors = validationResult(req);   
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); 
        }
        
    const user = User(req.body);
    await user.save()
    res.send(req.body);


       

    })

module.exports = router

// Here we are doing the module exports //
// console.log(req.body)

// async (req, res) => {

//     console.log(req.body)     // This is all for validation //
//     const errors = validationResult(req);   
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() }); 
//     }

//     const user = User(req.body);
//     await user.save()
//     res.send(req.body);


// })

// User.create({
//     name : req.body.name,
//     password : req.body.password , 
//     email : req.body.email , 
// }).then((user => res.json(user)).catch(err=> {console.log(err)
//     res.json({error : 'Please enter valid email'})