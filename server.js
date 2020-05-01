var mysql = require("mysql");
// var cms = require("./apps/app.js")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yourRootPassword",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
});

// cms.employeeTracker();

// function createDepartment() {
//   console.log("Inserting a new department...\n");
//   var query = connection.query(
//     "INSERT INTO department SET ?",
//     {
//       name: "IT"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " department inserted!\n");
//     }
//   );

  // logs the actual query being run
//   console.log(query.sql);
// }


