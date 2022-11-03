const wrapper = require("../utils/wrapper");
const vehicleModel = require("../models/vehicle");

module.exports = {
  getAllVehicles: async (request, response) => {
    try {
      const result = await vehicleModel.getAllVehicles();

      if (result.rows.length < 1) {
        return wrapper.response(
          response,
          404,
          "Ooops!, There's no vehicle right now.",
          null
        );
      }
      return wrapper.response(
        response,
        200,
        "Success get all vehicle",
        result.rows
      );
    } catch (error) {
      return console.log(error);
    }
  },
};
