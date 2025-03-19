import { fullBlog } from '@/lib/blogType';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';

type Section = {
    head?: ReactNode;
    body?: ReactNode;
    list?: ReactNode[];
};

type Params = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const blog = await getData(params?.slug);
    return {
        title: blog.title,
        description: blog.title,
    };
}

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
    title,
    content,
    titleImage
    }[0]`;

    const data = await client.fetch(query);
    return data;
}

export default async function BlogPost({ params }: Params) {
    const data: fullBlog = await getData(params.slug);

    return (
        <main className='w-full bg-gray-200 pb-8'>
            <section className='lg:px-20 md:px-10 px-5 md:pb-12 pt-16 w-full max-w-[95rem] mx-auto'>
                <h2 className='text-center text-3xl font-bold text-primary leading-8 tracking-tight mb-5'>{data.title}</h2>
                <div className='relative w-full max-w-4xl h-96 mx-auto'>
                    <Image 
                        src={urlFor(data.titleImage).url()}
                        alt={data.title || "Blog post image"}
                        fill
                        priority
                        className='object-cover rounded-xl'
                    />
                </div>
            </section>
            <div className='prose prose-xl prose-a:text-primary m-auto px-3 mt-8 max-w-4xl'>
                <PortableText value={data.content} />
            </div>
        </main>
    );
}