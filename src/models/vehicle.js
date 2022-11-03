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
};
