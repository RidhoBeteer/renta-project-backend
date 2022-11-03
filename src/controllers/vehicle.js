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
  getVehicleById: async (request, response) => {
    try {
      const { id } = request.params;

      const result = await vehicleModel.getVehicleById(id);

      if (result.rowCount < 1) {
        return wrapper.response(
          response,
          404,
          "No Vehicle with given id is found on the database",
          []
        );
      }
      return wrapper.response(
        response,
        200,
        "Success get vehicle data",
        result.rows
      );
    } catch (error) {
      return console.log(error);
    }
  },
};
