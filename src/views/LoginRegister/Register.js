import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Register.css'
import user from './icons/user.png'
import padlock from './icons/padlock.png'
import { registerApiCall } from '../../Actions/AuthActions'
export default function Register() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        password: "",
    })
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        dispatch(registerApiCall(data))
        setData({ ...data, ['name']: "",['age']:"", ['email']: "", ['password']: "" })
    }
    return (
        <div className='form'>
            <form className='registerForm' method='Post'>
                <h1>Sign Up</h1>
                <div>
                    <img src={user} style={{ width: '1.5rem' }}></img>
                    <input className='registerAuth' type='text' value={data.name} name='name' onChange={handleInput} placeholder='Name....'></input>
                </div>
                <div>
                    <img src={user} style={{ width: '1.5rem' }}></img>
                    <input className='registerAuth' type='number' value={data.age} name='age' onChange={handleInput} placeholder='Enter the pet age'></input>
                </div>
                <div>
                    <img src={user} style={{ width: '1.5rem' }}></img>
                    <input className='registerAuth' type='email' value={data.email} name='email' onChange={handleInput} placeholder='Email Address.....'></input>
                </div>
                <div>
                    <img src={padlock} style={{ width: '1.5rem' }}></img>
                    <input className='registerAuth' type='password' name='password' placeholder='........' value={data.password} onChange={handleInput}></input>
                </div>
                <button type='submit' onClick={handleSubmit} className='registerBtn'>Sign Up</button>
                <span className='register'>Already have an account! <b onClick={()=>{navigate('/login')}} > Login Here! </b></span>
            </form>
        </div>
    )
}
