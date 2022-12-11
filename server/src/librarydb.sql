/*
start a local mysql server in localhost
*/

CREATE DATABASE `librarydb`;
USE `librarydb`;

CREATE TABLE `librarydb`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE;
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('Administrator', 'admin', 'root', 'admin');
INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('testname', 'testusername', 'testpassword', 'user');

CREATE TABLE `librarydb`.`book` (
  `idbook` INT NOT NULL AUTO_INCREMENT,
  `isbn` VARCHAR(17) NOT NULL,
  `bookTitle` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idbook`),
  UNIQUE INDEX `isbn_UNIQUE` (`isbn` ASC) VISIBLE,
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC) VISIBLE);

CREATE TABLE `genre`;

CREATE TABLE `inventory`;