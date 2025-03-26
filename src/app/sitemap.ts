import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/service`,
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/training`,
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      priority: 0.8,
    }
  ];

  // Fetch dynamic blog post URLs
  const blogPostsQuery = `
    *[_type == 'blog'] {
      'slug': slug.current,
    }
  `;

  try {
    const blogPosts = await client.fetch(blogPostsQuery);

    const dynamicBlogPages: MetadataRoute.Sitemap = blogPosts.map((post: { slug: string, _updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.7
    }));

    return [
      ...staticPages,
      ...dynamicBlogPages
    ];
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error);
    return staticPages;
  }
}