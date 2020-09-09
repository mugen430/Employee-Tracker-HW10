DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

-- Design the following database schema containing three tables:
CREATE TABLE department (

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL 
, name VARCHAR(30)
);
-- on read me it is said to name it "ROLE" but it turned blue making it a saved syntax so i just named it "ROLES"
CREATE TABLE roles (

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL 
, title VARCHAR(30) NOT NULL
, salary DECIMAL(10, 4) NOT NULL
, department_id INT NULL
);

CREATE TABLE employee (

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL 
, first_name VARCHAR(30) NULL
, last_name VARCHAR(30) NULL
, role_id INT NOT NULL
, manager_id INT NULL
);

SELECT * FROM department;

