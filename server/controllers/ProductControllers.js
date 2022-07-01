const Product = require("../model/ProductSchema");

const createProduct =async (req, res) => {
  const { productname , discription } = req.body;

 if (!productname || !discription) {
    return res.json({ message: "Required field are missing" });
  }
 await Product.create(req.body, (err, data) => {
    if (err) {
      //res.send("error", err);
      res.send(err)
    } else {
      res.send(data);
    }
  });
};

const getProduct = async (req, res) => {
  try {
    const Products = await Product.find({}).sort({
      created_on: "-1",
    });
    
    res.send(Products);
  } catch (error) {
    res.send("product not found", error);
  }
};

const upateProduct = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  Product.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;



  Product.deleteOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send(data);
    }
  });
};

module.exports = {
  createProduct,
  getProduct,
  upateProduct,
  deleteProduct,
};