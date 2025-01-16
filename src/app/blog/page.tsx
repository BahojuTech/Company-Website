import BlogBody from '@/components/blog/BlogBody'
import Hero from '@/components/blog/Hero'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero title={"Blogs"} body={"Discover more insights and strategies to elevate your brand in the digital world with BAHOJU"}/>
            <BlogBody/>
        </>
    )
}

export default page