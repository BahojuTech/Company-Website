import HeroCarousel from '@/components/hero/HeroCarousel'
import React from 'react'
import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import { blogType } from '@/lib/blogType';
import BlogCard from '@/components/blog/BlogCard';

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

const images: string[] = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
];

const Page = async () => {
  const data = await getData()

  return (
    <>
      <HeroCarousel 
        images={images} 
        title="Blogs" 
        description='Discover more insights and strategies to elevate your brand in the digital world with BAHOJU"' 
      />
      <div className='bg-[#D5E5EC] w-full mx-auto px-5 md:px-20 py-20'>
        {data.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
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

export default Page