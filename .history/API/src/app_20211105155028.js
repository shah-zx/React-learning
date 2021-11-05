const express = require('express');
const app = express();
require("./db/connection")  // For checking wether the mogodb database is connected or not connected //
const port  = process.env.PORT || 8000;


app.get("/" , (req , res) => {
    res.send("Hello there , created successfuly !!")
})

app.use(express.json());  // This is used for coverting the data into the json format //


app.listen(port , () => {
    console.log(`Connection established at port ${port}`)
})


