const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors");


////////////////////PORT
dotenv.config({path:"./config.env"})
const app = express()
const PORT = process.env.PORT || 5000
//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const router = require("./route/auth")
require("dotenv").config();

// const User = require("./model/UserScheme")
require("./DB/conn")

///////////////////////////middleware

app.use(express.json())
app.use(router)

///////////////heroku setup

if(process.env.Node_ENV == "production"){
    app.use(express.static("frontend/build/index.html"))
}


////////////////////////server listen

app.listen(PORT ,()=>{console.log(`localhost://${PORT}`)})