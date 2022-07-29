const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  bookingAt: {
    type: Date,
    required: true,
  },
  bookingOn: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  drive: { type: mongoose.ObjectId, required: true, ref: "drive" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  is: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
    enum: ["pending", "approve", "cancel"],
  },
});

var Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
