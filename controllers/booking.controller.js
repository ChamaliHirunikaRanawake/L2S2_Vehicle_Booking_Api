const Booking = require("../models/bookingdetail.model");
const Vehicle = require("../models/vehicle.model");
const Drive = require("../models/drive.model");
const { sendNotification } = require("../Notifier");

const getNVehicle = (module.exports.getNVehicle = async function (data) {
  const limit = parseInt(data.limit) || 4;
  const skip = parseInt(data.skip) || 0;
  try {
    var ag = [
      {
        $lookup: {
          from: "bookings",
          localField: "_id",
          foreignField: "drive",
          as: "res",
        },
      },
      {
        $match: {
          "res._id": {
            $exists: false,
          },
        },
      },
      {
        $project: {
          __v: 0,
          res: 0,
        },
      },
      {
        $lookup: {
          from: "drivers",
          localField: "driver",
          foreignField: "_id",
          as: "driver",
        },
      },
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicle",
          foreignField: "_id",
          as: "vehicle",
        },
      },
      {
        $unwind: {
          path: "$driver",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$vehicle",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];
    var data = await Drive.aggregate(ag);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports.setBooking = async function (body) {
  body.bookingAt = new Date(body.bookingAt);
  body.bookingOn = new Date(body.bookingOn);
  console.log("driver =>", body.driver);
  var Model = new Booking(body);
  if (Model) {
    try {
      await Model.save();
      sendNotification(body.driver, Model);
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

module.exports.deleteBooking = async function (body) {
  var Model = await Booking.findByIdAndUpdate(body, { is: false });

  if (Model) {
    try {
      await Model.save();
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

const getSucsess = (module.exports.getSucsess = async function (id) {
  var Model = await Booking.find({ is: true, user: id });

  if (Model) {
    try {
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});

const setApprove = (module.exports.setApprove = async function (id) {
  var Model = await Booking.findByIdAndUpdate(id, { status: "approve" });
  if (Model) {
    try {
      await Model.save();
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});

const setCancel = (module.exports.setCancel = async function (id) {
  var Model = await Booking.findByIdAndUpdate(id, { status: "cancel" });
  if (Model) {
    try {
      await Model.save();
      return Model;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
