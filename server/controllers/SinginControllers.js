const bcryptjs = require("bcryptjs");
const User = require("../model/UserScheme");

const signinController = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Required field are missing" });
  }

  User.findOne({ email }, async (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      //   console.log(user.password);
      await bcryptjs
        .compare(password, user.password)
        .then((password) => {
          if (password) {
            res.send({ message: "user successfully login", data: user });
          } else {
            res.send({ error: "Invalid User" });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.json({ error: "Invalid User" });
    }
  });
};

module.exports = signinController;
