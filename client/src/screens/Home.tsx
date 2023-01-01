import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios';
import { useLocation } from "react-router-dom";
import User from "../components/User"
import categories from "../components/Categories";
import { handleFormFields } from "../components/FormFields";

const defaultFormFields = {
  search: '',
  password: '',
}
const defaultResults = {
  id: 0,
  bookTitle: '',
  authorName: '',
  isAvailable: false
}

const Home: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { search } = formFields
  const location = useLocation()
  const user: User = location.state.user
  const [results, setResults] = useState([defaultResults])

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = { search: search }
    await Axios.post('http://localhost:3000/search/book', input).then((response) => {
      setResults(response.data)
    })
  }

  const handleCategorySearch = async (category: string) => {
    const input = { search: category }
    await Axios.post('http://localhost:3000/search/genre', input).then((response) => {
      setResults(response.data)
    })
  }

  const addToInventory = async (book: string) => {
    const input = { book: book, id: user.id }
    await Axios.post('http://localhost:3000/inventory/add', input)
      .then((response) => {
        // backend needs to return a callbock for confirmation
        // alert("Added Successfully")
      })
  }

  const removeFromInventory = async (book: string) => {
    const input = { book: book }
    await Axios.post('http://localhost:3000/inventory/delete', input)
      .then((response) => {
        // backend needs to return a callbock for confirmation
        // alert("Removed Successfully")
      })
  }

  const handleInventory = async () => {
    const input = { id: user.id }
    await Axios.post('http://localhost:3000/inventory/fetch', input).then((response) => {
      setResults(response.data)
    })
  }

  return (
    <div>
      <div className='App-header'>
        <div className="card">
          <h2>Category Search</h2>
          {categories.map((category, index) => {
            return <button onClick={() => handleCategorySearch(`${category}`)}>{category}</button>
          })}
          <form onSubmit={handleSearch}>
            <FormInput
              label="Search"
              type="text"
              required
              name="search"
              value={search}
              onChange={handleFormFields}
            />
            <div className="button-group">
              <button type="submit">Search</button>
              <span>
                <button type="button" onClick={handleInventory}>Open Inventory</button>
              </span>
            </div>
            <form onSubmit={handleSearch}>
              <FormInput
                label="Search"
                type="text"
                required
                name="search"
                value={search}
                onChange={handleFormFields}
              />
              <div className="button-group">
                <button type="submit">Search</button>
                <span>
                  <button type="button" onClick={handleInventory}>Open Inventory</button>
                </span>
              </div>
            </form>
            <div>
              <h2>Results</h2>
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>isAvailable?</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((book, index) => (
                    <tr key={book.id}>
                      <td>{book.bookTitle}</td>
                      <td>{book.authorName}</td>
                      <td>{book.isAvailable}</td>
                      <td>
                        <button onClick={() => addToInventory(book.bookTitle)}>
                          Add</button>
                      </td>
                      <td>
                        <button onClick={() => removeFromInventory(book.bookTitle)
                          .then(handleInventory)}>
                          Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;