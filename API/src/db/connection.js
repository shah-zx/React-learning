const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/newss-api",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to mongo db database")
    }).catch((e) => {
        console.log(e);
    })
