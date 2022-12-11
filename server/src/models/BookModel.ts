import Genre from "./GenreModel";

type Book = {
    id: number,
    ISBN: string,
    bookTitle: string,
    author: string,
    genre: Genre[]
}
  
export default Book;