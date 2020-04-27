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
      });
};

module.exports = {
    employeeTracker: employeeTracker
}