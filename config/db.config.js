const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b529a839ec3973",
  password: "81a543d1",
  database: "heroku_445edc95d4127e7",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;