var mysql      = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'LocalHost',
  port     : 7000,
  user     : 'root',
  password : 'Averie430'
  database : 'employee_db'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('woops no connection for port: ' + err.stack);
    return;
  }
 
  console.log('This port is spicily connected to port: ' + connection.threadId);
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Role"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add Department":
        addDep();
        break;

      case "Add Role":
        addRole();
        break;

      case "Add Employee":
        addEmp();
        break;

      case "View Departments":
        viewDep();
        break;

      case "View Roles":
        viewRoles();
        break;

      case "View Employees":
        viewEmp();
        break;

      case "Update Employee Role":
        upEmpRole();
        break;
      }
    });
}
