/*
start a local mysql server in localhost
*/

DROP DATABASE `librarydb`;

CREATE DATABASE `librarydb`;
USE `librarydb`;

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NOT NULL,
  `role` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id`INT DEFAULT NULL,
  `bookTitle` VARCHAR(45) NOT NULL,
  `authorName` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `isAvailable` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE `inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `book_id` INT DEFAULT NULL,
  `bookTitle` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC) VISIBLE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`)  
  REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book` FOREIGN KEY (`book_id`)  
  REFERENCES book(id)  
  ON DELETE CASCADE  
  ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `borrow`;

CREATE TABLE `borrow` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `borrowDate` DATE NOT NULL,
  `returnDate` DATE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_inventory` FOREIGN KEY (`user_id`)  
  REFERENCES inventory(user_id) 
  ON DELETE CASCADE 
  ON UPDATE CASCADE
);

/* USERS */
INSERT INTO user (username, password, fullname, role) 
VALUES ('admin', 'root', 'Administrator', 'admin');
INSERT INTO user (username, password, fullname, role) 
VALUES ('testusername', 'testpassword', 'testname', 'user');

/* BOOKS */
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Game of Thrones', 'George R. R. Martin', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 'Fantasy', TRUE);

/* INVENTORY */
/* Add books to inventory */
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (1, 'Game of Thrones');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (1, 'Sherlock Holmes');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (2, 'Harry Potter and the Chamber of Secrets');

/* Update book_id on inventory */
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Game of Thrones';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Sherlock Holmes';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Harry Potter and the Chamber of Secrets';

/* Update inventory_id on book */   
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Game of Thrones'; 
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Sherlock Holmes';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Harry Potter and the Chamber of Secrets';

/* Remove from Inventory */
/* Update user_id on book to NULL */
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Game of Thrones';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Sherlock Holmes';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Harry Potter and the Chamber of Secrets';

DELETE FROM inventory WHERE bookTitle='Game of Thrones';
DELETE FROM inventory WHERE bookTitle='Sherlock Holmes';
DELETE FROM inventory WHERE bookTitle='Harry Potter and the Chamber of Secrets';

/* Get all books in the user's inventory */
SELECT bookTitle from inventory WHERE user_id='2';

/* BORROW */
/* Change book availability to false */
UPDATE book INNER JOIN inventory ON book.user_id=inventory.user_id 
    SET isAvailable=FALSE WHERE inventory.user_id=1;

/* Create borrow */
INSERT INTO borrow (user_id, borrowDate, returnDate) 
    VALUES (1, '2022-12-19', '2022-12-26');