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
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE
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
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Little Prince', 'Antoine de Saint-Exupéry', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Forrest Gump', 'winston groo', 'Romantic Comedy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Maze Runner', 'James Dashner', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Shining', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Haunting of Hill House', 'Shirley Jackson', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Me Before You', 'Jojo Moyes', 'Romance', TRUE);

INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Hunger Games', 'Suzanne Collins', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('2001: A Space Odyssey', 'Arthur C. Clarke', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Martian', 'Andy Weir', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Frankenstein', 'Mary Shelley', 'Science fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Lost World', 'Arthur Conan Doyle', 'Science fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ("Alice's Adventures in Wonderland", 'Lewis Carroll', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Tale of Peter Rabbit', 'Beatrix Potter', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Coraline', 'Neil Gaiman', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Hell House', 'Richard Matheson,', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Misery', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Bag of Bones', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Pride and Prejudice', 'Jane Austen', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Life of Pi', 'Yann Martel', 'Adventure', TRUE);



/* INVENTORY */
/* Add books to inventory */
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (1, 'Game of Thrones');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (1, 'Sherlock Holmes');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (2, 'Harry Potter and the Chamber of Secrets');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (3, 'The Little Prince');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (4, 'Forrest Gump');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (5, 'The Maze Runner');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (6, 'The Shining');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (7, 'The Haunting of Hill House');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (8, 'Me Before You');

INSERT INTO inventory (user_id, bookTitle) 
    VALUES (9, 'The Hunger Games');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (10, '2001: A Space Odyssey');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (11, 'The Martian');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (12, 'Frankenstein');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (13, 'The Lost World');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (14, "Alice's Adventures in Wonderland");
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (15, 'The Tale of Peter Rabbit');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (16, 'Coraline');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (17, 'Hell House');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (18, 'Misery');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (19, 'Bag of Bones');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (20, 'Pride and Prejudice');
INSERT INTO inventory (user_id, bookTitle) 
    VALUES (21, 'Life of Pi');




/* Update book_id on inventory */
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Game of Thrones';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Sherlock Holmes';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Harry Potter and the Chamber of Secrets';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Little Prince';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Forrest Gump';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Maze Runner';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Shining';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Haunting of Hill House';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Me Before You';

UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Hunger Games';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='2001: A Space Odyssey';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Martian';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Frankenstein';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Lost World';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle="Alice's Adventures in Wonderland";
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='The Tale of Peter Rabbit';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Coraline';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Hell House';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Misery';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Bag of Bones';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Pride and Prejudice';
UPDATE inventory INNER JOIN book ON inventory.bookTitle=book.bookTitle 
    SET inventory.book_id=book.id WHERE book.bookTitle='Life of Pi';


/* Update inventory_id on book */   
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Game of Thrones'; 
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Sherlock Holmes';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Harry Potter and the Chamber of Secrets';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Little Prince';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Forrest Gump';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Maze Runner';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Shining';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Haunting of Hill House';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Me Before You';

UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Hunger Games';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='2001: A Space Odyssey';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Martian';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Frankenstein';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Lost World';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle="Alice's Adventures in Wonderland";
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='The Tale of Peter Rabbit';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Coraline';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Hell House';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Misery';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Bag of Bones';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Pride and Prejudice';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=inventory.user_id WHERE inventory.bookTitle='Life of Pi';

/* Remove from Inventory */
/* Update user_id on book to NULL */
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Game of Thrones';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Sherlock Holmes';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Harry Potter and the Chamber of Secrets';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Little Prince';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Forrest Gump';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Maze Runner';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Shining';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Haunting of Hill House';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Me Before You';

UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Hunger Games';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='2001: A Space Odyssey';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Martian';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Frankenstein';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Lost World';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle="Alice's Adventures in Wonderland";
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='The Tale of Peter Rabbit';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Coraline';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Hell House';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Misery';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Bag of Bones';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Pride and Prejudice';
UPDATE book INNER JOIN inventory ON book.bookTitle=inventory.bookTitle 
    SET book.user_id=NULL WHERE inventory.bookTitle='Life of Pi';


DELETE FROM inventory WHERE bookTitle='Game of Thrones';
DELETE FROM inventory WHERE bookTitle='Sherlock Holmes';
DELETE FROM inventory WHERE bookTitle='Harry Potter and the Chamber of Secrets';
DELETE FROM inventory WHERE bookTitle='The Little Prince';
DELETE FROM inventory WHERE bookTitle='Forrest Gump';
DELETE FROM inventory WHERE bookTitle='The Maze Runner';
DELETE FROM inventory WHERE bookTitle='The Shining';
DELETE FROM inventory WHERE bookTitle='The Haunting of Hill House';
DELETE FROM inventory WHERE bookTitle='Me Before You';

DELETE FROM inventory WHERE bookTitle='The Hunger Games';
DELETE FROM inventory WHERE bookTitle='2001: A Space Odyssey';
DELETE FROM inventory WHERE bookTitle='The Martian';
DELETE FROM inventory WHERE bookTitle='Frankenstein';
DELETE FROM inventory WHERE bookTitle='The Lost World';
DELETE FROM inventory WHERE bookTitle="Alice's Adventures in Wonderland";
DELETE FROM inventory WHERE bookTitle='The Tale of Peter Rabbit';
DELETE FROM inventory WHERE bookTitle='Coraline';
DELETE FROM inventory WHERE bookTitle='Hell House';
DELETE FROM inventory WHERE bookTitle='Misery';
DELETE FROM inventory WHERE bookTitle='Bag of Bones';
DELETE FROM inventory WHERE bookTitle='Pride and Prejudice';
DELETE FROM inventory WHERE bookTitle='Life of Pi';

/* Get all books in the user's inventory */
SELECT bookTitle from inventory WHERE user_id='2';

/* BORROW */
/* Change book availability to false */
UPDATE book INNER JOIN inventory ON book.user_id=inventory.user_id 
    SET isAvailable=FALSE WHERE inventory.user_id=1;

/* Create borrow */
INSERT INTO borrow (user_id, borrowDate, returnDate) 
    VALUES (1, '2022-12-19', '2022-12-26');