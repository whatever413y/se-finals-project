import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import User from "../components/User"

const defaultFormFields = {
    username: '',
    password: '',
}

const Login: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password } = formFields
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleClick = () => {
      navigate('/register')
    }

    const handleUserLogin = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const input = { username: username, password: password }
      await Axios.post('http://localhost:3000/user/login', input).then((response) => {
        const user: User = response.data
        if(user.role === "admin") {
          setUser(user)
          navigate('/admin')
        } else if (user.role === "user") {
          setUser(user)
          navigate('/home', {state: {user: user}})
        } else {
          alert('User Sign In Failed')
        }
      })
    };

  return (
    <div className='App-header'>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleUserLogin}>
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