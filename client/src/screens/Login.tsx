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

    const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const input = { username: username, password: password }
      await Axios.post('http://localhost:3000/user/login', input).then((response) => {
        if(response.data === "fail") {
          alert('User Sign In Failed')
        } else {
          navigate('/home')
        }
      })
    };
  
  return (
    <div className='App-header'>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={loginHandler}>
          <FormInput
            label="Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={formHandler}
          />
          <FormInput
            label="Password"
            type='password'
            required
            name='password'
            value={password}
            onChange={formHandler}
          />
          <div className="button-group">
            <button type="submit">Log In</button>
            <span>
              <button type="button">Register</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;