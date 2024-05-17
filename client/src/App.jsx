import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

import men_banner from './assets/Assets/banner_mens.png'
import women_banner from './assets/Assets/banner_women.png'
import kids_banner from './assets/Assets/banner_kids.png'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/hijabs' element={<ShopCategory banner={men_banner} category="hijabs" />} />
          <Route path='/abaya' element={<ShopCategory banner={women_banner} category="abaya" />} />
          <Route path='/namaz-khimar' element={<ShopCategory banner={kids_banner} category="namaz-khimar" />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
