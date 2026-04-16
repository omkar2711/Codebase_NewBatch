import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false')
        navigate('/login')
    }

    const navLinkClass = (isActive) =>
      `rounded-lg px-3 py-2 text-sm font-medium transition ${
        isActive
          ? 'bg-slate-900 text-white'
          : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
      }`

  return (
   <header className='sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur'>
     <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
       <Link to='/' className='text-xl font-bold tracking-tight text-slate-900'>
         ShopBoard
       </Link>

       <nav className='flex items-center gap-2'>
         <Link to='/' className={navLinkClass(location.pathname === '/')}>
           Home
         </Link>
         {!isLoggedIn && (
           <>
             <Link to='/login' className={navLinkClass(location.pathname === '/login')}>
               Login
             </Link>
             <Link to='/register' className={navLinkClass(location.pathname === '/register')}>
               Register
             </Link>
           </>
         )}
         <Link to='/dashboard' className={navLinkClass(location.pathname.startsWith('/dashboard'))}>
           Dashboard
         </Link>
         {isLoggedIn && (
           <button
             onClick={handleLogout}
             className='rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-600'
           >
             Logout
           </button>
         )}
       </nav>
     </div>
   </header>
  )
}

export default Navbar
