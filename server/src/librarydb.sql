/*
start a local mysql server in localhost
*/

CREATE DATABASE `librarydb`;
USE `librarydb`;

CREATE TABLE `librarydb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `inventory_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('Administrator', 'admin', 'root', 'admin');
INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('testname', 'testusername', 'testpassword', 'user');


CREATE TABLE `librarydb`.`book` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `ISBN` VARCHAR(17) NOT NULL,
  `bookTitle` VARCHAR(45) NOT NULL,
  `author_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  `inventory_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`book_id`),
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC) VISIBLE,
  UNIQUE INDEX `ISBN_UNIQUE` (`ISBN` ASC) VISIBLE);


CREATE TABLE `librarydb`.`genre` (
  `genre_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre_id`));


CREATE TABLE `librarydb`.`inventory` (
  `inventory_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `borrow_id` INT NOT NULL,
  PRIMARY KEY (`inventory_id`));


CREATE TABLE `librarydb`.`bookstatus` (
  `status_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `available` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`status_id`));


CREATE TABLE `librarydb`.`author` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `book_id` INT NOT NULL,
  `authorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE INDEX `authorName_UNIQUE` (`authorName` ASC) VISIBLE);


CREATE TABLE `librarydb`.`borrow` (
  `borrow_id` INT NOT NULL AUTO_INCREMENT,
  `inventory_id` INT NOT NULL,
  `borrowDate` DATE NOT NULL,
  `returnDate` DATE NOT NULL,
  PRIMARY KEY (`borrow_id`));

