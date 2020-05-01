var inquirer = require("inquirer");

var employeeTracker = () => {
    inquirer.prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "list",
          choices: [
            "Add Employee",
            "Add Department",
            "Add Role",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Roles"
          ]
        }
      ]).then(function(answer) {
      console.log(answer.list);  

      if (answer.list === "Add Employee") {
          inquirer.prompt([
            {
              name: "first",
              message: "What is the employee's first name?"
            },
            {
                name: "last",
                message: "What is the employee's last name?"
            }
        ]).then((name) => {
            console.log(name.first);
            function createEmployee() {
              console.log("Creating new employee...\n");
              var query = connection.query(
                "INSERT INTO department SET ?",
              {
                first: name.first,
                last: name.last
              },
              function(err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " employee inserted!\n");
              }
              );
            };
        })
      }
      });
};

module.exports = {
    employeeTracker: employeeTracker
}