const express = require("express");
const app = express();
const connectDB  = require('./database/connection')
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const dotenv = require("dotenv")
dotenv.config()

// load assets
app.use('/', require('./routes/router'))

//calling database
connectDB();

app.get('/',(req,res) => {
    res.send("hello world")
})

app.listen(8080, () => console.log(`server running on ${8080}`));

