DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;
-- Design the following database schema containing three tables:
CREATE TABLE department (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
, name VARCHAR(30)
);
-- on read me it is said to name it "ROLE" but it turned blue making it a saved syntax so i just named it "ROLES"
CREATE TABLE roles (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
, title VARCHAR(30) NOT NULL
, salary DECIMAL(10, 4) NOT NULL
, department_id INT NULL
);

CREATE TABLE employee (

id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
, first_name VARCHAR(30) NULL
, last_name VARCHAR(30) NULL
, role_id INT NOT NULL
, manager_id INT NULL
);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;