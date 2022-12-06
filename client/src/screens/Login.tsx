import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'

const defaultFormFields = {
    username: '',
    password: '',
}

const Login: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password } = formFields

    const resetFormFields = () => {
      return (
        setFormFields(defaultFormFields)
      );
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {

        await Axios.post('http://localhost:3000/users', {username: username, password: password})
        .then(() => {
            alert('Created a new user')
          })

        resetFormFields()
      } catch (error) {
        alert('User Sign In Failed');
      }
    };
  
  return (
    <div className='App-header'>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type='password'
            required
            name='password'
            value={password}
            onChange={handleChange}
          />
          <div className="button-group">
            <button type="submit">Sign In</button>
            <span>
              <button type="button" onClick={resetFormFields}>Clear</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;