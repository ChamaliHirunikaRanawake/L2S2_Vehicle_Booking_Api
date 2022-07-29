const vehicleController = require("../controllers/vehicle.controller");


var router = require("express").Router();

router.post("/", (req, res) => {
  console.log("vehicle");
  vehicleController
    .addVehicle(req.body)
    .then((d) => {
      res.send(d);
      console.log("sucsess");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

router.get("/", (req, res) => {
  vehicleController
    .getVehicles(req.query.limit,)
    .then((d) => {
     console.log(d);
      res.send(d);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send(e);
    });
});






router.post("/setDriver", (req, res) => {
  console.log("vehicle");
  vehicleController
    .setDriver(req.body)
    .then((d) => {
      res.send(d);
      console.log("sucsess");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});
module.exports = router;
