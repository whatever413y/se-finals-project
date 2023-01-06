import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  userId: 0,
  username: '',
  bookTitle: '',
  authorName: '',
  genre: '',
  book: ''
}

const Admin: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { userId, username, bookTitle, authorName, genre, book } = formFields
  const navigate = useNavigate()

  const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleUserDelete = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { id: userId, username: username }
    await Axios.post('http://localhost:3000/user/delete', input).then((response) => {
      if (response.data === "fail") {
        alert("No account found to delete.")
      } else {
        alert('The account is now deleted.')
      }
    })
  };

  const handleBookAdd = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { bookTitle: bookTitle, authorName: authorName, genre: genre }
    await Axios.post('http://localhost:3000/book/add', input).then((response) => {
      if (response.data === "fail") {
        alert("The attempt to add a book has failed.")
      } else {
        alert('The book is now added.')
      }
    })
  };

  const handleBookDelete = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { bookTitle: book }
    await Axios.post('http://localhost:3000/book/delete', input).then((response) => {
      if (response.data === "fail") {
        alert("No book found to delete")
      } else {
        alert('The book has been deleted.')
      }
    })
  };

  const handleLogout = () => {
    if (confirm("Confirm Logout?") == true) {
      navigate('/')
    }
  }

  return (
    <div className='App-header'>
      <button type="button" onClick={handleLogout} >Logout</button>
      <br></br>
      <div className='card'>
        <div>
          <h2>Delete a User Account</h2>
          <form onSubmit={handleUserDelete}>
            <FormInput
              label="id"
              type="number"
              min="2"
              name="userId"
              value={userId}
              onChange={handleFormFields} />
            <FormInput
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={handleFormFields} />
            <div className="button-group">
              <button type="submit">Delete</button>
            </div>
          </form>
        </div>
        <div>
          <h2>Add Book</h2>
          <form onSubmit={handleBookAdd}>
            <FormInput
              label="Book Title"
              type="text"
              required
              name="bookTitle"
              value={bookTitle}
              onChange={handleFormFields}
            />
            <FormInput
              label="Author Name"
              type="text"
              required
              name="authorName"
              value={authorName}
              onChange={handleFormFields}
            />
            <FormInput
              label="Genre"
              type="text"
              required
              name="genre"
              value={genre}
              onChange={handleFormFields}
            />
            <div className="button-group">
              <button type="submit">Add</button>
            </div>
          </form>
          <h2>Delete Book</h2>
          <form onSubmit={handleBookDelete}>
            <FormInput
              label="Book Title"
              type="text"
              required
              name="book"
              value={book}
              onChange={handleFormFields}
            />
            <div className="button-group">
              <button type="submit">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;