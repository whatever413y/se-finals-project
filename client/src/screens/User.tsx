import React, { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../components/form-input/FormInput";
import Axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import User from "../components/User"

const User: React.FC = () => {
    const location = useLocation()
    const defaultUser: User = location.state.user
    const defaultFormFields = {
        username: defaultUser.username,
        password: '',
        fullname: defaultUser.fullname
    }
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password, fullname } = formFields
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleLogout = () => {
        if(confirm("Confirm Logout?") == true) {
            navigate('/')
        }
    }

    const handleReturn = () => {
        if (user === undefined) {
            navigate('/home', {state: {user: defaultUser}})    
        } else {
            navigate('/home', {state: {user: user}})
        }
    }

    const handleUserUpdate = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const input = { username: username, password: password, fullname: fullname, id: defaultUser.id }
      await Axios.post('library-management-se2-server.netlify.app/user/update', input).then(handleLogin)
    };

    const handleLogin = async () => {
        const input = { username: username, password: password }
        await Axios.post('library-management-se2-server.netlify.app/user/login', input).then((response) => {
        const user: User = response.data
          setUser(user)
          alert('Your profile has been updated successfully!')
      })
    }

  return (
    <div className='App-header'>
      <div className="card">
        <h2>Update User</h2>
        <form onSubmit={handleUserUpdate}>
          <FormInput
            label="Full Name"
            type='text'
            name='fullname'
            value={fullname}
            onChange={handleFormFields}
          />
          <FormInput
            label="Username"
            type="text"
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
            <button type="submit">Update</button>
            <span>
              <button type="button" onClick={handleReturn} >Go back to Home</button>
              <button type="button" onClick={handleLogout} >Logout</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;