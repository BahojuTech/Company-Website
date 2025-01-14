import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
    return (
        <>
            <div className='bg-white border border-[#a3a3a3] lg:w-1/2 xl:w-1/3 w-full rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] px-3 py-10'>
                <img src='/dg-marketing.jpg' className='w-full' />
                <div className='flex mt-3 flex-wrap items-center justify-between'>
                    <button className='bg-[#0089C3] mt-2 px-3 py-2 font-medium text-white rounded-lg'>UNCATEGORIZED</button>
                    <a href="" className='w-1/2 mt-2 ml-2 font-medium text-gray-500'>23 DEC 2024</a>
                </div>
                <h2 className='font-bold mt-4 text-[#0089C3] text-2xl'>Transforming the Way Businesses Thrive in the Digital Age</h2>
                <p className='mt-4 text-lg'>In today's fast-paced digital world, traditional marketing methods alone no longer suffice. Businesses must adapt to ever-evolving technologies and customer </p>
                <span className='font-semibold text-lg mt-5 block'>Waracheleo</span>
            </div>
        </>
    )
}

export default BlogCard