import mongoose from "mongoose";

const TripsSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
  driverId: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
