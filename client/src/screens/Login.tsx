import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import User from "../components/User"
import './login.css'

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
  <div className="container-fluid" >
    <div className="row g-5 justify-content-evenly">
      <div className="col-lg-10">
        <div className= "card">
          <div className="row g-0">
            <div className="col-9">
              <div className='App-header'>
                <div className="card">
                  <div className="sign-in">
                  <h2>Sign In</h2>
                  <form onSubmit={handleUserLogin}>
                    <FormInput
                          placeholder="Username"
                          type="text"
                          required
                          name="username"
                          value={username}
                          onChange={handleFormFields} label={""}                    />
                    <FormInput
                          placeholder="Password"
                          type='password'
                          required
                          name='password'
                          value={password}
                          onChange={handleFormFields} label={""}                    />
                    <div className="button-group">
                      <button type="submit">Logi.n</button>
                      <span>
                        <button type="button" className="btn btn-primary" onClick={handleClick} >Register</button>
                      </span>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <img src="" className="card-img img-fluid"/>
            </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;