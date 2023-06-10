const mysql = require("mysql");

const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "2009ego",
});

const sqlClient = (sql, arr, callback) => {
  client.query(sql, arr, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    callback(result);
  });
};

module.exports = sqlClient;
