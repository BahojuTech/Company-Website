import React from 'react'
import BlogCard from './BlogCard'

const BlogBody = () => {
    return (
        <section className='w-full bg-[#D5E5EC]'>
            <main className='max-w-[95rem] w-full mx-auto px-5 md:px-20 py-24'>
                <BlogCard />
            </main>
        </section>
    )
}

export default BlogBody