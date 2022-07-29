const { Driver, Normal, types } = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.addUser = async function (body) {
  var Model = null;
  switch (body.details.type) {
    case "driver":
      Model = new Driver(body);
      break;
    case types.normaluser:
      Model = new Normal(body);
      break;
  }
  console.log(Model);

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

console.log("hello");



