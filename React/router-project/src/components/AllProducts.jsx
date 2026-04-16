import React from 'react'
import productData from '../utils/productData'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div className='space-y-5'>
      <div>
        <h2 className='text-xl font-bold text-slate-900'>All Products</h2>
        <p className='text-sm text-slate-600'>Browse the product catalog and open detailed views.</p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {productData.map((product) => (
          <article key={product.id} className='rounded-xl border border-slate-200 p-4 shadow-sm'>
            <img
              src={product.image}
              alt={product.title}
              className='h-36 w-full rounded-lg border border-slate-100 object-cover'
            />
            <h3 className='mt-3 font-semibold text-slate-900'>{product.title}</h3>
            <p className='mt-1 text-sm text-slate-600'>{product.category}</p>
            <p className='mt-2 text-sm text-slate-700'>Price: ${product.price}</p>
            <p className='text-sm text-slate-700'>Stock: {product.stock}</p>

            <Link
              to={`/dashboard/ProductListing/${product.id}`}
              className='mt-3 inline-flex rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800'
            >
              View Details
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AllProducts