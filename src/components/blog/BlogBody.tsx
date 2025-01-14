import React from 'react'
import BlogCard from './BlogCard'

const BlogBody = () => {
    return (
        <section className='w-full bg-cyan-100'>
            <main className='max-w-7xl w-full mx-auto px-5 md:px-10 py-20'>
                <BlogCard />
            </main>
        </section>
    )
}

export default BlogBody