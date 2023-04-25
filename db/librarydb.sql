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
  UNIQUE INDEX `username_UNIQUE` (`username` ASC)
);

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id`INT DEFAULT NULL,
  `bookTitle` VARCHAR(100) NOT NULL,
  `authorName` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `isAvailable` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC)
);

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE `inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `book_id` INT DEFAULT NULL,
  `bookTitle` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `bookTitle_UNIQUE` (`bookTitle` ASC),
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
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC),
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
ALTER TABLE user AUTO_INCREMENT=4;

/* BOOKS */
/*Fantasy*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Game of Thrones', 'George R. R. Martin', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Half-Blood Prince', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Harry Potter and the Deathly Hallows', 'J.K. Rowling', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Lord of the Rings: The Two Towers', 'J.R.R. Tolkien', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Lord of the Rings: The Return of the King', 'J.R.R. Tolkien', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Wheel of Time', 'Robert Jordan', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Name of the Wind', 'Patrick Rothfuss', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Elfstones of Shannara', 'Terry Brooks', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Sword of Shannara', 'Terry Brooks', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Eye of the World', 'Robert Jordan', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Great Hunt', 'Robert Jordan', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Dragon Reborn', 'Robert Jordan', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Horse and His Boy', 'C.S. Lewis', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Silver Chair', 'C.S. Lewis', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Last Battle', 'C.S. Lewis', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Chronicles of Narnia', 'C.S. Lewis', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Sword in the Stone', 'T.H. White', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Once and Future King', 'T.H. White', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Silmarillion', 'J.R.R. Tolkien', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Children of Hurin', 'J.R.R. Tolkien', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Little Prince', 'Antoine de Saint-Exupéry', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ("Alice's Adventures in Wonderland", 'Lewis Carroll', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Tale of Peter Rabbit', 'Beatrix Potter', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Coraline', 'Neil Gaiman', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Attack on Titan', 'Hajime Isayama', 'Fantasy', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Wonderful Wizard of Oz', 'L. Frank Baum', 'Fantasy', TRUE);

/*Mystery*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Murder on the Orient Express', 'Agatha Christie', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The A.B.C. Murders', 'Agatha Christie', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Mysterious Affair at Styles', 'Agatha Christie', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Murder of Roger Ackroyd', 'Agatha Christie', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Body in the Library', 'Agatha Christie', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Memoirs of Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Return of Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Case-Book of Sherlock Holmes', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Hound of the Baskervilles', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Sign of Four', 'Arthur Conan Doyle', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Nine Tailors', 'Dorothy L. Sayers', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Unpleasantness at the Bellona Club', 'Dorothy L. Sayers', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Five Red Herrings', 'Dorothy L. Sayers', 'Mystery', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Cloud of Unknowing', 'Dorothy L. Sayers', 'Mystery', TRUE);

/*Adventure*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Treasure Island', 'Robert Louis Stevenson', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventures of Huckleberry Finn', 'Mark Twain', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventures of Tom Sawyer', 'Mark Twain', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Jungle Book', 'Rudyard Kipling', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Call of the Wild', 'Jack London', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Sea Wolf', 'Jack London', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Time Machine', 'H.G. Wells', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The War of the Worlds', 'H.G. Wells', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Invisible Man', 'H.G. Wells', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Island of Dr. Moreau', 'H.G. Wells', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Around the World in Eighty Days', 'Jules Verne', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Twenty Thousand Leagues Under the Sea', 'Jules Verne', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Journey to the Center of the Earth', 'Jules Verne', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Kidnapped', 'Robert Louis Stevenson', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Black Arrow', 'Robert Louis Stevenson', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Master of Ballantrae', 'Robert Louis Stevenson', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Three Musketeers', 'Alexandre Dumas', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Man in the Iron Mask', 'Alexandre Dumas', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventure of the Speckled Band', 'Arthur Conan Doyle', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventures of Tintin: The Secret of the Unicorn', 'Hergé', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Adventures of Tintin: The Seven Crystal Balls', 'Hergé', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Life of Pi', 'Yann Martel', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Hobbit', 'J. R. R. Tolkien', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Mysterious Island', 'Jules Verne', 'Adventure', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('DA VINCI CODE', 'Dan Brown', 'Adventure', TRUE);


/*Science Fiction*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Maze Runner', 'James Dashner', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Maze Runner: The Scorch Trials', 'James Dashner', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Maze Runner: The Death Cure', 'James Dashner', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Maze Runner: The Kill Order', 'James Dashner', 'Science Fiction', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Maze Runner: The Fever Code', 'James Dashner', 'Science Fiction', TRUE);
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
    VALUES ('Something Phenomenal;', 'April Avery', 'Science Fiction', TRUE);

/*Horror*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Shining', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Carrie', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Stand', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Dark Tower', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('It', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Gunslinger', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Misery', 'Stephen King', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Haunting of Hill House', 'Shirley Jackson', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Hell House', 'Richard Matheson,', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Exorcist', 'William Peter Blatty', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Hunger', 'Alma Katsu', 'Horror', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Other', 'Tom Tyron', 'Horror', TRUE);

/*Romance*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Broken Souls Plea', 'CeCeLib', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Broken Mans Affliction', 'CeCeLib', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Safe Skies, Archer', 'Gwy Saludes', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('The Golden Scenery of Tomorrow', 'Gwy Saludes', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Maybe Someday', 'Colleen Hoover', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Avenues of the Diamond', 'Gwy Saludes', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Forrest Gump', 'winston groo', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Me Before You', 'Jojo Moyes', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Pride and Prejudice', 'Jane Austen', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('To All the Boys Ive Loved Before', 'Jenny Han', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Call Me By Your Name', 'Andre Aciman', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Fifty Shades', 'E. L. James', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Fifty Shades Darker', 'E. L. James', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Fifty Shades Freed', 'E. L. James', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('Before I Let Go', 'Kennedy Ryan', 'Romance', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable) 
    VALUES ('It Ends with Us', 'Colleen Hoover', 'Romance', TRUE);

/*Novel*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Moby-Dick', 'Herman Melville', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('To Kill a Mockingbird', 'Harper Lee', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Catcher in the Rye', 'J.D. Salinger', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Wuthering Heights', 'Emily Brontë', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Jane Eyre', 'Charlotte Brontë', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Bell Jar', 'Sylvia Plath', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Picture of Dorian Gray', 'Oscar Wilde', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Grapes of Wrath', 'John Steinbeck', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Great Expectations', 'Charles Dickens', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('War and Peace', 'Leo Tolstoy', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Anna Karenina', 'Leo Tolstoy', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Madame Bovary', 'Gustave Flaubert', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Brothers Karamazov', 'Fyodor Dostoevsky', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Don Quixote', 'Miguel de Cervantes', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Count of Monte Cristo', 'Alexandre Dumas', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Waste Land', 'T.S. Eliot', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Sun Also Rises', 'Ernest Hemingway', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('For Whom the Bell Tolls', 'Ernest Hemingway', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Old Man and the Sea', 'Ernest Hemingway', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Of Mice and Men', 'John Steinbeck', 'Novel', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Red Badge of Courage', 'Stephen Crane', 'Novel', TRUE);

/*Mythology*/
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Iliad', 'Homer', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES('The Odyssey', 'Homer', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Aeneid', 'Virgil', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Metamorphoses', 'Ovid', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Epic of Gilgamesh', 'Anonymous', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Ramayana', 'Valmiki', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Mahabharata', 'Vyasa', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Bhagavad Gita', 'Vyasa', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Popol Vuh', 'Anonymous', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Mabinogion', 'Anonymous', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Edda', 'Anonymous', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Kalevala', 'Anonymous', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Prose Edda', 'Snorri Sturluson', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Argonautica', 'Apollonius of Rhodes', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Golden Fleece', 'Apollonius of Rhodes', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Theogony', 'Hesiod', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('The Works and Days', 'Hesiod', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Theogonies', 'Hesiod', 'Mythology', TRUE);
INSERT INTO book (bookTitle, authorName, genre, isAvailable)
    VALUES ('Theogony', 'Hesiod', 'Mythology', TRUE);