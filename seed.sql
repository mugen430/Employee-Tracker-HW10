USE employee_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Levi", "Dog", 1, 1)
, ("Mikasa", "Cat", 2, 1)
, ("Arthur", "Dragon", 3, NULL);

INSERT INTO roles (title, salary, department_id)
VALUES ("Boss", 100000, 1)
, ("Mini-Boss", 90000, 1)
, ("Baby-Boss", 80000, 1)
, ("Not-The-Boss", 50000, 1);

INSERT INTO department (name)
VALUES ("Administrative")
, ("Accounting")
, ("Services")

