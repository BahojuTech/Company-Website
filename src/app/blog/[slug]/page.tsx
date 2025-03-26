import { Metadata } from 'next';
import { client, urlFor } from '@/lib/sanity';
import { fullBlog } from '@/lib/blogType';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

interface BlogPageProps {
  params: { slug: string };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const query = `*[_type == 'blog']{ 'slug': slug.current }`;
  
  try {
    const blogs = await client.fetch(query);
    
    return blogs.map((blog: { slug: string }) => ({
      slug: blog.slug
    }));
  } catch (error) {
    console.error('Failed to fetch blog slugs:', error);
    return [];
  }
}

export async function generateMetadata({
  params: { slug }
}: BlogPageProps): Promise<Metadata> {
  const blog = await getData(slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }

  return {
    title: blog.title,
    description: blog.smallDescription,
    openGraph: {
      title: blog.title,
      description: blog.smallDescription,
      type: 'article',
      images: [
        {
          url: urlFor(blog.titleImage).url(),
          width: 1200,
          height: 630,
          alt: blog.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.smallDescription,
      images: [urlFor(blog.titleImage).url()]
    },
    alternates: {
      canonical: `/blog/${blog.currentSlug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
      'currentSlug': slug.current,
      title,
      content,
      smallDescription,
      titleImage
    }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  if (!data) {
    return <div>Blog post not found</div>;
  }

  return (
    <main className='w-full bg-gray-200 pb-8'>
      <section className='lg:px-20 md:px-10 px-5 md:pb-12 pt-16 w-full max-w-[95rem] mx-auto'>
        <h2 className='text-center text-3xl font-bold text-primary leading-8 tracking-tight mb-5'>
          {data.title}
        </h2>
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