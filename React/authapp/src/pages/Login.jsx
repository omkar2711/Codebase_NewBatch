import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {loginUser} from '../api/api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()

    const userData = {
        email,
        password
    };

    const data = await loginUser(userData)
    console.log(data)

    if (data.success) {
        navigate('/');
    }



    
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  )
}

export default Login


