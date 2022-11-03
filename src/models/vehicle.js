const connection = require("../config/postgresql");

module.exports = {
  getAllVehicles: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM vehicles", (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
        }
      });
    }),
  getVehicleById: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM vehicles WHERE "vehicleId" = $1`,
        [id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
};
