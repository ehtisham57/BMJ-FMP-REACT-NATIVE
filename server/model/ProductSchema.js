const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        min:2,
        max:30
    },
    discription:{
        required:true,
        type:String,
        min:100,
        max:500
    },
})


const Product = mongoose.model('Product',ProductSchema)

module.exports = Product;