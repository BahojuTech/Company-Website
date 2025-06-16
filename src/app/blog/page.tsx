import HeroCarousel from '@/components/hero/HeroCarousel'
import React from 'react'
import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { blogType } from '@/lib/blogType';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog"
};

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
    smallDescription,
    'currentSlug': slug.current,
    titleImage,
  }`;

  const data = await client.fetch(query)
  return data;
}

const Page = async () => {
  const data = await getData()

  return (
    <>
      {/* Hero Section (Optional) */}
      {/* <HeroCarousel 
        image={'/hero/ServiceHero.png'} 
        title="Blogs" 
        description='Discover more insights and strategies to elevate your brand in the digital world with BAHOJU"' 
      /> */}

      {/* Blog Intro */}
      <div className='pt-36 bg-[#BFECFF] px-4'>
        <div className='max-w-[1300px] w-full mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-3'>Bahoju Blog</h2>
          <p className='text-sm sm:text-base mb-6'>Explore articles about tech, innovation trends, marketing tips, and updates from Bahoju Tech.</p>

          {/* Featured Blog */}
          <div className='flex flex-col lg:flex-row bg-[#005F87] py-10 px-6 sm:px-10 gap-6 rounded-lg'>
            {/* Text Section */}
            <div className='flex-1'>
              <p className='bg-[#BFEC] text-xs sm:text-sm px-2 py-1 w-fit mb-4'>November 12, 2024</p>
              <h5 className='text-white text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight'>
                Why Our Service Is the Perfect Fit for Your Business
              </h5>
              <p className='text-sm sm:text-base text-neutral-300 max-w-[500px] mb-6'>
                Your go-to space for insights, tips, and inspiration on smart living, thoughtful gifting, and exceptional service.
                Whether you're looking to elevate your personal celebrations or discover practical ways to show appreciation through curated gifts, we’re here to guide and inspire.
              </p>
              <Link 
                href='/' 
                className='text-neutral-300 border border-white rounded-full px-4 py-2 transition duration-300 hover:bg-white hover:text-[#005F87]'
              >
                Read More
              </Link>
            </div>

            {/* Image Section */}
            <div className='flex-1'>
              <Image 
                src={'/blog/blog.png'} 
                alt='blog-image' 
                width={576} 
                height={540} 
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </div>  
      </div>

      {/* All Blogs Section */}
      <div className='max-w-[1300px] w-full mx-auto px-4 py-10'>
        {/* Search + Filter */}
        <div className='mb-8'>
          <h4 className='text-2xl sm:text-3xl font-semibold mb-4'>All Blog Posts</h4>
          <div className='flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center'>

            {/* Search Input */}
            <div className='relative w-full sm:w-[300px]'>
              <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005F87]"
              />
            </div>

            {/* Search Button */}
            <button className='bg-[#005F87] text-white px-4 py-2 rounded-md hover:bg-[#004665] transition'>
              Search
            </button>

            {/* All Posts Button */}
            <button className='border border-[#005F87] text-[#005F87] px-4 py-2 rounded-md hover:bg-[#e6f8ff] transition'>
              All Posts
            </button>
          </div>
        </div>

        {/* Blog List */}
        {data.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {data.map((post: blogType) => (
              <BlogCard
                key={post.currentSlug}
                title={post.title}
                titleImage={post.titleImage}
                smallDescription={post.smallDescription}
                currentSlug={post.currentSlug}
              />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <h3 className='text-2xl font-bold text-gray-700 mb-4'>No blog posts yet</h3>
            <p className='text-gray-600'>Check back soon for new content!</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Page;
