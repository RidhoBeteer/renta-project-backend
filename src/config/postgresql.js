const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "posApp",
//   password: "Rahasia123!",
//   port: 5432,
// });

const pool = new Pool({
  user: process.env.SUPABASE_USER,
  host: process.env.SUPABASE_HOST,
  database: process.env.SUPABASE_DATABASE_NAME,
  password: process.env.SUPABASE_PASSWORD,
  port: process.env.SUPABASE_PORT,
});

module.exports = pool;
