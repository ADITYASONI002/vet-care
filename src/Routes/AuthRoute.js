import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../views/LoginRegister/Login'
import Register from '../views/LoginRegister/Register'
export default function AuthRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<Login />} />
            </Routes>
        </>
    )
}
