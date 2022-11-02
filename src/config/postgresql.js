const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "posApp",
//   password: "Rahasia123!",
//   port: 5432,
// });

const pool = new Pool({
  user: "postgres",
  host: "db.zduwgqhwatzejcwcisiq.supabase.co",
  database: "postgres",
  password: "01a83OVR3TneP9i6",
  port: 5432,
});

module.exports = pool;
