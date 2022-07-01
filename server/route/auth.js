const express = require("express")
const { createProduct, getProduct, upateProduct, deleteProduct } = require("../controllers/ProductControllers")


const signupController = require("../controllers/SignupController")
const signinController = require("../controllers/SinginControllers")


// const bcryptjs = require("bcryptjs");
const router = express.Router()

///////////requires DB

require("../DB/conn")

///////////requires SCHEEMA
const User = ("../model/UserScheme.js")

/////////////////////////All routers
router.post("/register", signupController);
router.post("/login", signinController);

router.post("/api/product", createProduct);
router.get("/api/product", getProduct);
router.put("/api/product/:id", upateProduct);
router.delete("/api/product/:id", deleteProduct);

module.exports = router
