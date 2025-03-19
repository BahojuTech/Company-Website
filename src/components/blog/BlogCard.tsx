import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({title, titleImage, currentSlug}:any) => {
    return (
        <div className='bg-white border border-[#a3a3a3] rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] px-3 py-7'>
            <div className='relative w-full h-48'>
                <Image 
                    src={urlFor(titleImage).url()} 
                    fill
                    alt={title || 'Blog post image'} 
                    className='object-cover rounded-lg'
                />
            </div>
            {/* <div className='flex mt-3 mb-2 flex-wrap items-center justify-between'>
                <div className='bg-[#0089C3] mt-2 px-3 py-2 font-medium text-sm text-white rounded-lg'>UNCATEGORIZED</div>
                <div className='w-1/2 mt-2 ml-2 font-medium text-gray-500'>23 DEC 2024</div>
            </div> */}
            <Link href={`/blog/${currentSlug}`} className='font-bold mt-4 text-[#0089C3] text-xl block'>{title}</Link>
            <p className='mt-4 text-sm line-clamp-2'>In today's fast-paced digital world, traditional marketing methods alone no longer suffice. Businesses must adapt to ever-evolving technologies and customer </p>
            <Link href={`/blog/${currentSlug}`}>
                <button className='bg-primary w-full p-3 mt-7 font-bold text-white rounded-lg'>Read more</button>
            </Link>
        </div>
    )
}

export default BlogCard