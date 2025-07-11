import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
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
import AdminOnlyRoute from './components/AdminOnlyRoute';
function App() {


  return (

    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            

            {/* Protected (Logged-in Users) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/gagets" element={<ProductFilter />} />
              <Route path="/product" element={<TotalPrice />} />             
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<ProfileData />} />
            </Route>

            {/* Admin-only Routes */}
            <Route element={<AdminOnlyRoute />}>
              <Route path="/orders" element={<Orders />} />
              <Route path="/profiletable" element={<ProfileTable />} />
              <Route path="/contactTable" element={<ContactTable />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </AuthProvider>

  )
}

export default App
