import React from 'react'

export default function Createlisting() {
  return (
    <main className='p-3 max-w-4xl mx-auto'> 
        <h1 className='text-3xl font semibold text-center my-7'>Create a List</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
            <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required/>
            <input type='text' placeholder='Description' className='border p-3 rounded-lg' id='description' required/>
            <input type='text' placeholder='Address' className='border p-3 rounded-lg' id='address' required/>
            <div className='flex gap-4 flex-wrap'>
                <div className='flex gap-2'>
                <input type="checkbox" id='sale' className='w-5'/><span> Sell stuff </span>
                </div>
            
                <div className='flex gap-2'>
                <input type="checkbox" id='rent' className='w-5'/><span> Rent </span>
                </div>
            
            
                <div className='flex gap-2'>
                <input type="checkbox" id='parkingArea' className='w-5'/><span> Parking </span>
                </div>
            
            
                <div className='flex gap-2'>
                <input type="checkbox" id='furnished' className='w-5'/><span> Furnished </span>
                </div>
            
        
                <div className='flex gap-2'>
                <input type="checkbox" id='offer' className='w-5'/><span> Offer </span>
                </div>
            
            </div>
            <div className='flex flex-wrap gap-6'>
                <div className='flex items-center gap-3'>
                    <input type="number" id='bedrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/><p>Beds</p>
                </div>
                <div className='flex items-center gap-3'>
                    <input type="number" id='bathrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/><p>Baths</p>
                </div>
                <div className='flex items-center gap-3'>
                    <input type="number" id='originalPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <div className='flex flex-col items-center'>
                    <p>Original Prices</p>
                    <span className='text-xs'>( $ / month )</span>
                    </div>
                </div>
                    <div className='flex items-center gap-2'>
                    <input type="number" id='discountPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                    <div className='flex flex-col items-center'>
                    <p>Discount Prices</p>
                    <span className='text-xs'>( $ / month )</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-mono'>Images:
                <span className='font-normal text-black ml-2'>First image is cover ( max 6)</span>
                </p>
                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-500 rounded w-full' type="file" id='image' accept='image/*' multiple/>
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload Image</button>
                </div>
            </div>
            <button className='p-3 bg-slate-900 text-white rounded-lg uppercase hover:opacity-80 disabled:opacity-80'>Create House</button>
            </div>
            
        </form>
    </main>
  )
}
