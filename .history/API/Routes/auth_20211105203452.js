const express = require('express');
const router = express.Router();

router.get('/', (req , res) => {
    console.log(req.body)
    res.send("Hello , this came from auth")
})

module.exports = router

// Here we are doiungthe module exports //

