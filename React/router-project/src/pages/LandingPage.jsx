import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 text-white shadow-lg sm:p-12'>
      <p className='inline-flex rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wider text-slate-200'>
        Ecommerce Admin Demo
      </p>
      <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
        Simple Dashboard for Users and Products
      </h1>
      <p className='mt-4 max-w-2xl text-sm text-slate-200 sm:text-base'>
        Explore a modern React dashboard with demo authentication, user management, and product listing pages.
      </p>

      <div className='mt-7 flex flex-wrap gap-3'>
        <Link
          to='/login'
          className='rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'
        >
          Demo Login
        </Link>
        <Link
          to='/register'
          className='rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10'
        >
          Demo Register
        </Link>
        <Link
          to='/dashboard/AllProducts'
          className='rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10'
        >
          View Dashboard
        </Link>
      </div>
    </section>
  )
}

export default LandingPage