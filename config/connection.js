var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 3306,
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("ERROR: MySQL connection error " + err.stack + "\n\n");
    return;
  }
  console.log(
    "Connected to MySQL database as id " + connection.threadId + "\n\n"
  );
});

// Export connection for ORM use
module.exports = connection;
