// app/blog/[slug]/page.js
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Script from 'next/script'
import { marked } from 'marked';

// ✅ SERVER fetch — single post by slug
async function getBlogPost(slug) {
  const res = await fetch(`https://ai-blogging-backend-production.up.railway.app/api/posts/${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

function parseMarkdown(content) {
  return marked(content);
}

// ✅ Dynamic Metadata (SEO + OpenGraph)
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Gadget Insider',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title}`,
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
        publishedTime: post.createdAt,
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

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex gap-2 mb-4 whitespace-nowrap overflow-scroll">
          
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <span className="mr-4">{post.author}</span>
            <time dateTime={post.createdAt} className="mr-4">{new Date(post.createdAt).toLocaleDateString()}</time>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <img
          src={post.imageUrl} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="w-full h-96 object-cover rounded-xl shadow-lg mb-8" 
          priority
        />
        
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-img:rounded-lg prose-img:shadow">
  <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
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
            "datePublished": "${post.createdAt}",
            "dateModified": "${post.updatedAt || post.createdAt}",
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
