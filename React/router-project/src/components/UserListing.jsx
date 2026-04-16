import React from 'react'
import userData from '../utils/userData'

const UserListing = () => {
  const statusBadgeClass = (status) =>
    status === 'Active'
      ? 'bg-emerald-100 text-emerald-700'
      : status === 'Pending'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-slate-200 text-slate-700'

  return (
    <div className='space-y-5'>
      <div>
        <h2 className='text-xl font-bold text-slate-900'>User Listing</h2>
        <p className='text-sm text-slate-600'>Overview of user profiles and account statuses.</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {userData.map((user) => (
        <div key={user.id} className='rounded-xl border border-slate-200 p-4 shadow-sm'>
          <div className='flex items-center gap-3'>
            <img src={user.avatar} alt={user.name} className='h-12 w-12 rounded-full border border-slate-200 object-cover' />
            <div>
              <h3 className='font-semibold text-slate-900'>{user.name}</h3>
              <p className='text-sm text-slate-600'>{user.email}</p>
            </div>
          </div>

          <div className='mt-4 grid grid-cols-2 gap-3 text-sm'>
            <p><span className='text-slate-500'>Role:</span> {user.role}</p>
            <p>
              <span className='text-slate-500'>Status:</span>{' '}
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusBadgeClass(user.status)}`}>
                {user.status}
              </span>
            </p>
            <p><span className='text-slate-500'>Orders:</span> {user.ordersCompleted}</p>
            <p><span className='text-slate-500'>Spent:</span> ${user.totalSpent.toFixed(2)}</p>
            <p className='col-span-2'><span className='text-slate-500'>City:</span> {user.city}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UserListing