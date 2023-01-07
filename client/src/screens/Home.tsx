import React, { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import User from "../components/User"
import categories from "../components/Categories";

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
const defaultInventory = {
  id: 0,
  bookTitle: '',
  authorName: ''
}

const Home: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { search } = formFields
  const navigate = useNavigate()
  const location = useLocation()
  const user: User = location.state.user
  const [results, setResults] = useState([defaultResults])
  const [inventory, setInventory] = useState([defaultInventory])

  const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }

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
    const input = { bookTitle: book, id: user.id }
    await Axios.post('http://localhost:3000/inventory/add', input)
    .then((response) => {
      if(response.data === "fail") {
        alert("Book unavailable or already in inventory!")
      } else {
        alert('The book is added to your inventory.')
      }
    })
  }

  const removeFromInventory = async (book: string) => {
    const input = { bookTitle: book}
    await Axios.post('http://localhost:3000/inventory/delete', input)
  }

  const handleInventory = async () => {
    const input = { id: user.id }
    await Axios.post('http://localhost:3000/inventory/fetch', input).then((response) => {
      setInventory(response.data)
    })
  }

  const handleBorrow = async () => {
    const input = { id: user.id }
    await Axios.post('http://localhost:3000/borrow/', input).then((response) => {
      if (response.data === "success")
      alert('Borrowed Successfully')
    })
  }

  const handleUserSettings = () => {
    navigate('/user', {state: {user: user}})
  }

  return (
    <div>
      <div className='App-header'>
      <button type="button" onClick={handleUserSettings}>Go to User Settings</button>
      <div className="card">
        <span>
          <button type="button" onClick={handleInventory}>Open Inventory</button>
          <button type="button" onClick={handleBorrow}>Borrow</button>
        </span>
      <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
          </thead>
            <tbody>
              {inventory.map((book) => (
              <tr key={book.id}>
                <td>{book.bookTitle}</td>
                <td>{book.authorName}</td>
                <td>
                  <button onClick={() => removeFromInventory(book.bookTitle)
                    .then(handleInventory)}>Remove</button>
                </td>
              </tr>))}
            </tbody>
      </table>
      </div>
      </div>
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
            </div>
          </form>
          <div>
              <h2>Results</h2>
              <table>
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((book) => (
                    <tr key={book.id}>
                      <td>{book.bookTitle}</td>
                      <td>{book.authorName}</td>
                      <td>{book.isAvailable}</td>
                      <td>
                        <button onClick={() => addToInventory(book.bookTitle)}>
                          Add</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;