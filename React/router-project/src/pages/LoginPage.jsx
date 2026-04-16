import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        try{
            //set local storage
            localStorage.setItem('isLoggedIn', true);

            //redirect to dashboard page
            navigate('/dashboard');

        }
        catch(error){
            console.log(error)
        }
    }

  return (
        <section className='mx-auto mt-10 w-full max-w-md'>
            <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
                <h1 className='text-2xl font-bold text-slate-900'>Welcome Back</h1>
                <p className='mt-1 text-sm text-slate-600'>Demo login to access dashboard features.</p>

                <div className='mt-6 space-y-4'>
                    <div>
                        <label className='mb-1 block text-sm font-medium text-slate-700'>Email</label>
                        <input
                            type='email'
                            placeholder='demo@shopboard.com'
                            className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-sm font-medium text-slate-700'>Password</label>
                        <input
                            type='password'
                            placeholder='••••••••'
                            className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        className='w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800'
                    >
                        Login (Demo)
                    </button>
                </div>
            </div>
        </section>
  )
}

export default LoginPage