import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import productData from '../utils/productData'

const ProductListing = () => {
  const { id } = useParams()
  const selectedProduct = productData.find((product) => product.id === Number(id))

  useEffect(()=>{
    console.log('API call to fetch product details with id: ', id)
  },[id])

  return (
    <div className='space-y-4'>
        {selectedProduct ? (
          <article className='rounded-xl border border-slate-200 p-4 shadow-sm sm:p-6'>
            <Link
              to='/dashboard/AllProducts'
              className='mb-3 inline-flex rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100'
            >
              Back to Products
            </Link>

            <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Product ID: {selectedProduct.id}</p>
            <h2 className='mt-2 text-2xl font-bold text-slate-900'>{selectedProduct.title}</h2>

            <div className='mt-4 grid gap-6 md:grid-cols-[260px,1fr]'>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className='h-56 w-full rounded-xl border border-slate-200 object-cover'
              />

              <div className='space-y-2 text-sm text-slate-700'>
                <p>{selectedProduct.description}</p>
                <p><span className='text-slate-500'>Category:</span> {selectedProduct.category}</p>
                <p><span className='text-slate-500'>Rating:</span> {selectedProduct.rating}</p>
                <p><span className='text-slate-500'>Stock:</span> {selectedProduct.stock}</p>
                <p className='pt-1 text-lg font-bold text-slate-900'>${selectedProduct.price}</p>
              </div>
            </div>
          </article>
        ) : (
          <p className='rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700'>
            Product not found.
          </p>
        )}
    </div>

  )
}

export default ProductListing