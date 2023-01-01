import React, { useState, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useLocation } from "react-router-dom";
import User from "../components/User"
import { handleFormFields } from "../components/FormFields";

const defaultFormFields = {
  userId: '',
  bookTitle: '',
  authorName: '',
}

const Admin: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { userId, bookTitle, authorName } = formFields
  const location = useLocation()
  const user: User = location.state.user

  const handleUserAdmin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { userId: userId }
    await Axios.post('http://localhost:3000/admin/user', input).then((response) => {
      // response here
    })
  };

  const handleBookAdmin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { bookTitle: bookTitle, authorName: authorName }
    await Axios.post('http://localhost:3000/admin/book', input).then((response) => {
      // response here
    })
  };

  return (
    <div className='App-header'>
      <div className='card'>
        <h2>User</h2>
        <form onSubmit={handleUserAdmin}>
          <FormInput
            label="id"
            type="number"
            required
            name="userId"
            value={userId}
            onChange={handleFormFields} />
          <div className="button-group">
            <button type="submit">Delete</button>
            <span>
              <button type="button">Cancel</button>
            </span>
          </div>
        </form>
      </div>

      <div className='card'>
        <h2>Book</h2>
        <form onSubmit={handleBookAdmin}>
          <FormInput
            label="bookTitle"
            type="text"
            required
            name="bookTitle"
            value={bookTitle}
            onChange={handleFormFields}
          />
          <FormInput
            label="authorName"
            type="text"
            required
            name="authorName"
            value={authorName}
            onChange={handleFormFields}
          />
          <div className="button-group">
            <button type="button">Add</button>
            <button type="button">Delete</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Admin;