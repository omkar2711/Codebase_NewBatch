import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/dashboard/AllProducts')
  }

  return (
    <section className='mx-auto mt-10 w-full max-w-lg'>
      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
        <h1 className='text-2xl font-bold text-slate-900'>Create Your Account</h1>
        <p className='mt-1 text-sm text-slate-600'>This is a demo registration form for the ecommerce dashboard.</p>

        <div className='mt-6 grid gap-4 sm:grid-cols-2'>
          <div className='sm:col-span-1'>
            <label className='mb-1 block text-sm font-medium text-slate-700'>First Name</label>
            <input
              type='text'
              placeholder='Aarav'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
            />
          </div>
          <div className='sm:col-span-1'>
            <label className='mb-1 block text-sm font-medium text-slate-700'>Last Name</label>
            <input
              type='text'
              placeholder='Mehta'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
            />
          </div>
          <div className='sm:col-span-2'>
            <label className='mb-1 block text-sm font-medium text-slate-700'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
            />
          </div>
          <div className='sm:col-span-2'>
            <label className='mb-1 block text-sm font-medium text-slate-700'>Password</label>
            <input
              type='password'
              placeholder='Create password'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          className='mt-6 w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700'
        >
          Register (Demo)
        </button>
      </div>
    </section>
  )
}

export default RegisterPage