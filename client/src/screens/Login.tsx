import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
    username: '',
    password: '',
}

const Login: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password } = formFields
    const navigate = useNavigate()

    const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleClick = () => {
      navigate('/register')
    }

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const input = { username: username, password: password }
      await Axios.post('http://localhost:3000/user/login', input).then((response) => {
        if(response.data === "admin") {
          navigate('/admin')
        } else if (response.data === "user") {
          navigate('/home')
        } else {
          alert('User Sign In Failed')
        }
      })
    };
  
  return (
    <div className='App-header'>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <FormInput
            label="Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={handleFormFields}
          />
          <FormInput
            label="Password"
            type='password'
            required
            name='password'
            value={password}
            onChange={handleFormFields}
          />
          <div className="button-group">
            <button type="submit">Login</button>
            <span>
              <button type="button" onClick={handleClick} >Register</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;