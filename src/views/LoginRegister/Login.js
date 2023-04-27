import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import user from './icons/user.png'
import padlock from './icons/padlock.png'
export default function Login() {
    const navigate=useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = data
        console.log(email, password);
    }
    return (
        <div className='form'>
            <form className='loginForm' method='Post'>
                <h1>Login</h1>
                <div>
                    <img src={user} style={{ width: '1.5rem' }}></img>
                    <input className='loginAuth' type='email' value={data.email} name='email' onChange={handleInput} placeholder='Email Address.....'></input>
                </div>
                <div>
                    <img src={padlock} style={{ width: '1.5rem' }}></img>
                    <input className='loginAuth' type='password' name='password'placeholder='........'  value={data.password} onChange={handleInput}></input>
                </div>
                <button type='submit' onClick={handleSubmit} className='loginBtn'>Login</button>

                <span className='register'>Don't have an account! <b onClick={()=>{navigate('/register')}} > Register Here! </b></span>
            </form>
        </div>
    )
}
