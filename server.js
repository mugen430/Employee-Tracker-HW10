const mysql       = require("mysql");
const inquirer    = require("inquirer");

const connection = mysql.createConnection({
  host     : "LocalHost",
  port     : 3306,
  user     : "root",
  password : "Averie430",
  database : "employee_db",
});

connection.connect((err) => {
  if (err) {
    console.error("woops no connection for port: " + err.stack);
    return;
  }
  console.log("This port is spicily connected to port: " + connection.threadId);
  runSearch();
});
//======================================================
const runSearch = () => {
  inquirer.prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add Department",
        "Add Role",
        "Add Employee",
      ]
    }).then((answer) => {
      switch (answer.action) {
      case "View Employees":
        viewEmployee();
        break;
      case "View Departments":
        viewDepartment();
        break;
      case "View Roles":
        viewRoles();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRoles();
        break;
      case "Add Employee":
        addEmployee();
        break;
      }
    });
}
//======================================================
const viewEmployee = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    }
  );
}

const viewDepartment = () => {
  connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.table(res)
      runSearch();
    }
  );
}

const viewRoles = () => {
  connection.query("SELECT * FROM roles", (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    }
  );
}
//======================================================
const addEmployee = () => {
  let newEmployee = [];
  let roles = [];
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    res.forEach((role) => roles.push(role.title));
  });
  inquirer.prompt(
    [ 
      {
        message: "Employee first name",
        name: "first_name",
        type: "input",
      },
      {
        message: "Employee last name",
        name: "last_name",
        type: "input",
      },
    ]
  ).then((res) => {
    newEmployee = [res.first_name, res.last_name]
    inquirer.prompt(
      [
        {
          message: 'Role Id?',
          name: 'role_id',
          type: 'input',
        },
      ]
    ).then((answer) => {
      connection.query("SELECT id FROM roles WHERE title = ?", [answer.employeeRoles], (err) => {
        if (err) throw err;
        const newEmployeeInfo = {
          first_name: newEmployee[0],
          last_name: newEmployee[1],
          role_id: answer.role_id,
        }
        connection.query("INSERT INTO employee SET ?", newEmployeeInfo, (err, res) => {
          if (err) throw err;
          runSearch();
        });
      });
    });
  });
}

const addDepartment = () => {
    inquirer.prompt({
      type: "input",
      message: "New department name",
      name: "department"    
    }).then((answer) => {
      console.log("Department is being added to Database");
      connection.query("INSERT INTO department SET ?", { name : answer.department }, (err) => {
        if (err) throw err;
        console.log("Generated new department per request");
        runSearch();
      });
    });
}

const addRoles = () => {
  let department = [];
  connection.query("SELECT name FROM department", (err, res) => {
      if (err) throw err;
      res.forEach((item) => department.push(item.name));
      inquirer.prompt([
        {
          message: "New role name",
          name: "roles",
          type: "input",
        },
        {
          message: "How much salary for new role",
          name: "salary",
          type: "input",
        },
        {
          message: "Select department allocation",
          name: "department",
          type: "list",
          choices: department,
        },
      ]).then((answer) => {
        connection.query("INSERT INTO roles SET ?", { title : answer.roles, salary : answer.salary }, (err) => {
            if (err) throw err;
            console.log("Generated new role per request");
            runSearch();
          }
        );
      });
  });
};  
