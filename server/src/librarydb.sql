/*
start a local mysql server in localhost
*/

CREATE DATABASE `librarydb`;
USE `librarydb`;

CREATE TABLE `librarydb`.`user` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `userscol_UNIQUE` (`name`, `username` ASC) VISIBLE);

CREATE TABLE `book`;

CREATE TABLE `genre`;

CREATE TABLE `inventory`;