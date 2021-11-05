const express = require('express');
const router = express.Router();

router.get('/', (req , res) => {
    obj = {
        a: 'thanos' , 
        number  : 67
    }
    res.json(obj)
})
module.exports = router

// Here we are doiungthe module exports //