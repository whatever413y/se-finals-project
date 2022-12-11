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
  UNIQUE INDEX `userscol_UNIQUE` (`name`, `username` ASC) VISIBLE);

INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('Administrator', 'admin', 'root', 'admin');
INSERT INTO `librarydb`.`user` (`name`, `username`, `password`, `role`) VALUES ('testname', 'testusername', 'testpassword', 'user');

CREATE TABLE `book`;

CREATE TABLE `genre`;

CREATE TABLE `inventory`;