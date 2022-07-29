var router = require("express").Router();
const userRoutes = require("./routes/user.routes");
const bookingRoutes = require("./routes/booking.routes");
const VehicleRoutes = require("./routes/vehicle.routes");

router.use("/user", userRoutes);
router.use("/booking", bookingRoutes);
router.use("/vehicle", VehicleRoutes);


module.exports = router;
