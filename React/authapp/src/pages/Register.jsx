import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../api/api'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
      name
    }

    const data = await registerUser(userData)

    if (data.success) {
      alert(data.message)
    }
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>

      <Link to="/login">Already have an account? Login here</Link>
    </div>
  )
}

export default Register


