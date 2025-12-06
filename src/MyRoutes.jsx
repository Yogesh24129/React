import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layouts/Layout'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Layout />} >
                    
                    <Route index element={<Home />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='contact' element={<Contact />} />  
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />

                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default MyRoutes