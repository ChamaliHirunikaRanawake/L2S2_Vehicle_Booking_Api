const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  checkIn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  checkOut: {
    type: Date,
    required: true,
    default: Date.now,
  },
  driver: {
    type: mongoose.ObjectId,
    required: true,
    ref: "drivers",
  },
  vehicle: { type: mongoose.ObjectId, required: true, ref: "Vehicles" },
  currentloc: {
    type: [String],
  },
});

var Booking = mongoose.model("drive", BookingSchema);

module.exports = Booking;
