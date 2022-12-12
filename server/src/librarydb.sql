/*
start a local mysql server in localhost
*/

DROP DATABASE `librarydb`;
CREATE DATABASE `librarydb`;

USE `librarydb`;

DROP TABLE IF EXISTS `librarydb`.`inventory`;

CREATE TABLE `librarydb`.`inventory` (
  `inventory_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  PRIMARY KEY (`inventory_id`));

DROP TABLE IF EXISTS `librarydb`.`user`;

CREATE TABLE `librarydb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `inventory_id` INT DEFAULT NULL,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  CONSTRAINT `fk_inventory_id` FOREIGN KEY (`inventory_id`) REFERENCES `librarydb`.`inventory` (`inventory_id`)
);

INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('Administrator', 'admin', 'root', 'admin');
INSERT INTO `librarydb`.`inventory` (`inventory_id`, `username`) VALUES (NULL, 'admin');
UPDATE `librarydb`.`user` SET `inventory_id` = `user_id` WHERE `username`='admin';

INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('testname', 'testusername', 'testpassword', 'user');
INSERT INTO `librarydb`.`inventory` (`inventory_id`, `username`) VALUES (NULL, 'testusername');
UPDATE `librarydb`.`user` SET `inventory_id` = `user_id` WHERE `username`='testusername';

DROP TABLE IF EXISTS `librarydb`.`author`;

CREATE TABLE `librarydb`.`author` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `authorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE INDEX `authorName_UNIQUE` (`authorName` ASC) VISIBLE);

INSERT INTO `librarydb`.`author` (`authorName`) VALUES ('J. K. Rowling');
INSERT INTO `librarydb`.`author` (`authorName`) VALUES ('George R. R. Martin');

DROP TABLE IF EXISTS `librarydb`.`genre`;

CREATE TABLE `librarydb`.`genre` (
  `genre_id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre_id`));

INSERT INTO `librarydb`.`genre` (`category`) VALUES ('Fantasy');
INSERT INTO `librarydb`.`genre` (`category`) VALUES ('Mystery');

DROP TABLE IF EXISTS `librarydb`.`book`;

CREATE TABLE `librarydb`.`book` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `author_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  `inventory_id` INT DEFAULT NULL,
  `bookTitle` VARCHAR(45) NOT NULL,
  `authorName` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `availability` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`book_id`),
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC) VISIBLE);

INSERT INTO `librarydb`.`book` (`bookTitle`, `authorName`, `category`, `availability`) VALUES 
('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 'Fantasy', 'Yes');

CREATE TABLE `librarydb`.`borrow` (
  `borrow_id` INT NOT NULL AUTO_INCREMENT,
  `inventory_id` INT NOT NULL,
  `borrowDate` DATE NOT NULL,
  `returnDate` DATE NOT NULL,
  PRIMARY KEY (`borrow_id`));

