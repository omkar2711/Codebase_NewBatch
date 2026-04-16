import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('isLoggedIn') !== 'true'){
            navigate('/login')
        }
    },[navigate])

  const sidebarLinkClass = (isActive) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`


  return (
    <section className='mt-6'>
      <div className='flex min-h-[calc(100vh-180px)] flex-col gap-5 lg:flex-row'>
        <aside className='w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit lg:w-64'>
          <p className='mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Dashboard</p>
          <h1 className='text-lg font-bold tracking-tight text-slate-900'>Ecommerce Admin</h1>
          <p className='mt-1 text-xs text-slate-500'>Manage users and products</p>

          <nav className='mt-5 space-y-2'>
            <NavLink to='/dashboard/UserListing' className={({ isActive }) => sidebarLinkClass(isActive)}>
              User Listing
            </NavLink>
            <NavLink to='/dashboard/AllProducts' className={({ isActive }) => sidebarLinkClass(isActive)}>
              All Products
            </NavLink>
          </nav>
        </aside>

        <div className='min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
          <Outlet />
        </div>
      </div>
    </section>
 
  )
}

export default DashboardPage