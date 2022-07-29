const mongoose = require("mongoose");

// const StaffSchema = new mongoose.Schema({});
// const VehicleOwnerSchema = new mongoose.Schema({});
const options = { discriminatorKey: "kind" };
const DriverSchema = new mongoose.Schema({
  details: {
    nic: {
      type: String,
      required: true,
    },
  },
});

const NormalPassangerSchema = new mongoose.Schema({
  details: {
    routor: {
      type: String,
      default: "wifi normal passa",
    },
  },
});
// const ChildSchema = new mongoose.Schema({});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: [String],
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    details: {
      type: {
        type: String,
        enum: ["normal", "staff", "child", "driver", "admin", "owner"],
        default: "normal",
      },
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: [String],
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: [String],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  options
);

var User = mongoose.model("User", UserSchema);
var Driver = User.discriminator("driver", DriverSchema);
var Normal = User.discriminator("normal", NormalPassangerSchema);
module.exports.Driver = Driver;
module.exports.Normal = Normal;

module.exports.types = {normaluser:"normal", staffuser:"staff",child:"child", driver:"driver", admin:"admin", admin:"owner"};
