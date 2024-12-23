import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("account created")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='sign-cont'>
        <form action="" className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <label htmlFor="email">Email
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>   
            </label>

            <label htmlFor="password">Password
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>   
            </label>
            
            <button type='submit'>Sign up</button>
            <p>Already have an account? <Link to="/login">Login</Link> </p>

        </form>
    </div>
  )
}

export default Signup