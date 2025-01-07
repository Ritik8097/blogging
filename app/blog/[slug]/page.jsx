import { notFound } from 'next/navigation'
import Image from 'next/image'
import Script from 'next/script'
import blogPosts from '../../../data/blog-posts.json'

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Gadget Insider',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} `,
    description: post.excerpt,
    alternates: {
      canonical: `https://gadgetinsider.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://gadgetinsider.in/blog/${post.slug}`,
      type: 'article',
      article: {
        publishedTime: post.date,
        authors: [post.author],
        tags: post.categories,
      },
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find(function(post) {
    return post.slug === params.slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex gap-2 mb-4 whitespace-nowrap overflow-scroll">
            {post.categories.map(category => (
              <span 
                key={category} 
                className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <span className="mr-4">{post.author}</span>
            <time dateTime={post.date} className="mr-4">{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Image 
          src={post.imageUrl} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="w-full h-64 object-cover rounded-xl shadow-lg mb-8" 
          priority
        />
        
        <div className="prose max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
      <Script id="blog-post-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "${post.imageUrl}",
            "author": {
              "@type": "Person",
              "name": "${post.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gadget Insider",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gadgetinsider.in/logo.png"
              }
            },
            "datePublished": "${post.date}",
            "dateModified": "${post.date}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gadgetinsider.in/blog/${post.slug}"
            },
            "keywords": ${JSON.stringify(post.categories)}
          }
        `}
      </Script>
    </>
  );
}

