import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/api/auth/login", inputs)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='username' placeholder='username' onChange={handleChange} />
        <input required type="password" name='password' placeholder='password' onChange={handleChange} />
        <button type='submit'>Login</button>
        {error && <p>{error} !</p>}
        <span>Don't you have an account?
          <Link to="/register"> Register </Link>
        </span>
      </form>
    </div>
  )
}

export default Login