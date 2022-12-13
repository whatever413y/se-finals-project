/*
start a local mysql server in localhost
*/

DROP DATABASE `librarydb`;

CREATE DATABASE `librarydb`;
USE `librarydb`;

DROP TABLE IF EXISTS `librarydb`.`user`;

CREATE TABLE `librarydb`.`user` (
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NOT NULL,
  `role` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`username`));

INSERT INTO `librarydb`.`user` (`username`, `password`, `fullname`, `role`) 
VALUES ('admin', 'root', 'Administrator', 'admin');
INSERT INTO `librarydb`.`user` (`username`, `password`, `fullname`, `role`) 
VALUES ('testusername', 'testpassword', 'testname', 'user');

DROP TABLE IF EXISTS `librarydb`.`inventory`;

CREATE TABLE `librarydb`.`inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bookTitle` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_username` FOREIGN KEY (`username`) REFERENCES `user` (`username`));

DROP TABLE IF EXISTS `librarydb`.`book`;

CREATE TABLE `librarydb`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bookTitle` VARCHAR(45) NOT NULL,
  `authorName` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `isAvailable` BOOLEAN NOT NULL,
  `inventory_id`INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_inventory` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`id`));

INSERT INTO `librarydb`.`book` (`bookTitle`, `authorName`, `genre`, `isAvailable`) VALUES 
('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 'Fantasy', TRUE);
INSERT INTO `librarydb`.`book` (`bookTitle`, `authorName`, `genre`, `isAvailable`) VALUES 
('Game of Thrones', 'George R. R. Martin', 'Fantasy', TRUE);
INSERT INTO `librarydb`.`book` (`bookTitle`, `authorName`, `genre`, `isAvailable`) VALUES 
('Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);

CREATE TABLE `librarydb`.`borrow` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `borrowDate` DATE NOT NULL,
  `returnDate` DATE NOT NULL,
  PRIMARY KEY (`id`)
  );