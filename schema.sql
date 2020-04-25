-- Drops the employeeDB if it exists currently --
DROP DATABASE IF EXISTS employeeDB;
-- Creates the "employeeDB" database --
CREATE DATABASE employeeDB;

-- Makes it so all of the following code will affect employeeDB --
USE employeeDB;

-- Creates the table "department" within employeeDB --
CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Creates the table "department" within employeeDB --
CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- Creates the table "department" within employeeDB --
CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

