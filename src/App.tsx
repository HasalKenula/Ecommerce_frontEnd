// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Login from './pages/auth/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Student from './pages/Student'
import ProductFilter from './pages/ProductFilter'
import TotalPrice from './pages/TotalPrice'
import { CartProvider } from './components/CartContext'
import Orders from './pages/Orders'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import ProfileData from './pages/ProfileData'
import ProfileTable from './pages/ProfileTable'
import ContactTable from './pages/ContactTable'
function App() {


  return (

    <AuthProvider>
       <CartProvider>
      <BrowserRouter>
        <Routes>
          {/*Protected routes - need login to access */}



          {/*Open routes  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/category" element={<Category />} />
            <Route path="/student" element={<Student />} />
            <Route path="/" element={<Home />} />
            <Route path="/gagets" element={<ProductFilter/>}/>
            <Route path="/product" element={<TotalPrice />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<ProfileData/>}/>
            <Route path="/profiletable" element={<ProfileTable/>}/>
            <Route path="/contactTable" element={<ContactTable/>}/>
          </Route>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
        </Routes>

      </BrowserRouter>
      </CartProvider>
    </AuthProvider>

  )
}

export default App
