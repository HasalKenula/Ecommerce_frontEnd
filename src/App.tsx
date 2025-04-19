import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Login from './pages/auth/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Student from './pages/Student'
import ProductFilter from './pages/ProductFilter'

function App() {


  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/*Protected routes - need login to access */}



          {/*Open routes  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/category" element={<Category />} />
            <Route path="/student" element={<Student />} />
            <Route path="/" element={<Home />} />
            <Route path="/gagets" element={<ProductFilter/>}/>
          </Route>
          <Route path='/auth/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
