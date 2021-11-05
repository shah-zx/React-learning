const express = require('express');
const app = express();
require("./db/connection")  // For checking wether the mogodb database is connected or not connected //
const port  = process.env.PORT || 8000;


// app.get("/" , (req , res) => {    // This is one of the endpoint //
//     res.send("Hello there , app listening here !!")
// })

app.use('/api/auth' , require('../routes/auth'))
app.use('/api/notes' , require('../routes/notes'))



// app.get("/api/v1/login" , (req , res) => {    // This is one of the endpoint //
//     res.send("Hello there , login here !!")
// })


// app.get("/api/v1/signup" , (req , res) => {    // This is one of the endpoint //
//     res.send("Hello there , app signup here !!")
// })




app.use(express.json());  // This is used for coverting the data into the json format //


app.listen(port , () => {
    console.log(`Connection established at port ${port}`)
})


