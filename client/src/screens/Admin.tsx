import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'

const defaultFormFields = {
  userId: 0,
  username: '',
  bookTitle: '',
  authorName: '',
  genre: ''
}

const Admin: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { userId, username, bookTitle, authorName, genre } = formFields

  const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  

  const handleUserDelete = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { userId: userId, username: username }
    await Axios.post('http://localhost:3000/user/delete', input).then((response) => {
      // response here
      // alert("Delete Successfully")
    })
  };

  const handleBookAdd = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { bookTitle: bookTitle, authorName: authorName, genre: genre }
    await Axios.post('http://localhost:3000/book/add', input).then((response) => {
      // response here
      //  alert("Add Successfully")
    })
  };

  const handleBookDelete = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { id: userId }
    await Axios.post('http://localhost:3000/book/delete', input).then((response) => {
      // response here
      //  alert("Add Successfully")
    })
  };

  return (
    <div className='App-header'>
      <div className='card'>
      <div>
        <h2>Delete a User Account</h2>
        <form onSubmit={handleUserDelete}>
          <FormInput
            label="id"
            type="number"
            min="2"
            required
            name="userId"
            value={userId}
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
            name="bookTitle"
            value={bookTitle}
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