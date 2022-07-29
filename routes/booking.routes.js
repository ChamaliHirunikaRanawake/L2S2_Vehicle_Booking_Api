const bookingController = require("../controllers/booking.controller");
const { route } = require("./vehicle.routes");

var router = require("express").Router();

router.get("/success", (req, res) => {
  bookingController
    .getSucsess(req.query.id)
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.delete("/", async (req, res) => {
  bookingController
    .deleteBooking(req.query.id)
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.get("/getNvehicles", (req, res) => {
  const { limit, skip } = req.query;
  bookingController
    .getNVehicle({ limit, skip })
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.post("/", (req, res) => {
  bookingController
    .setBooking(req.body)
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
router.post("/setApprove", async (req, res) => {
  bookingController
    .setApprove(req.query.id)
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.post("/setCancel", async (req, res) => {
  bookingController
    .setCancel(req.query.id)
    .then((d) => {
      res.send(d);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
module.exports = router;
