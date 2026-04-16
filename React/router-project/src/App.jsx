import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserListing from './components/UserListing'
import ProductListing from './components/ProductListing'
import PageNotFound from './pages/PageNotFound'
import AllProducts from './components/AllProducts'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} >
            <Route index element={<Navigate to='UserListing' replace />} />
            <Route path='UserListing' element={<UserListing />} />
            <Route path='AllProducts' element={<AllProducts />} />
            <Route path='ProductListing/:id' element={<ProductListing />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
   
  )
}

export default App
