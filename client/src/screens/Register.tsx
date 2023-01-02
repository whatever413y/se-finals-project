import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
    fullname: '',
    username: '',
    password: '',
}

const Register: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { fullname, username, password } = formFields
    const navigate = useNavigate()

    const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleClick = () => {
      navigate('/')
    }

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const input = { fullname: fullname, username: username, password: password }
      await Axios.post('http://localhost:3000/user/register', input).then((response) => {
        if(response.data === "success") {
          alert('Registered Successfully!')
        } else {
          alert("Registration Failed. Username already taken.")
        }
      })
    };
  
  return (
    <div className='App-header'>
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
        <FormInput
            label="Name"
            type="text"
            required
            name="fullname"
            value={fullname}
            onChange={handleFormFields}
          />
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
            <button type="submit">Register</button>
            <span>
              <button type="button" onClick={handleClick} >Login</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;