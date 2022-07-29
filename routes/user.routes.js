const userController = require("../controllers/user.controller");

var router = require("express").Router();

router.post("/", (req, res) => {
  userController
    .addUser(req.body)
    .then((d) => {
      res.send(d);
      console.log("sucsess");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
