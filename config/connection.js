var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root",
    database: process.env.MYSQL_DB || "burger_db",
    port: process.env.MYSQL_PORT || 8889,
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
    return;
  }
  console.log(
    "Connected to MySQL database as id " + connection.threadId + "\n\n"
  );
});

// Export connection for ORM use
module.exports = connection;
