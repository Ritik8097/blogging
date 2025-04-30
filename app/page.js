// app/page.js
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

// Metadata (SEO)
export const metadata = {
  title: 'Gadget Insider - Latest Tech News, Reviews & Insights',
  description: 'Discover the latest gadget reviews, and expert tech insights. Stay informed with Gadget Insider, your trusted source for all things tech.',
}

// ✅ SERVER fetch — replaces static JSON!
async function getBlogPosts() {
  const res = await fetch(`https://ai-blogging-backend-production.up.railway.app/api/posts`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return res.json();
}

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text dark:from-blue-400 dark:to-purple-400">
            Welcome to Gadget Insider
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Your trusted source for the latest tech news, in-depth reviews, and expert insights into the world of technology.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <article key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
              <Link href={`/blog/${post.slug}`}>
                <img
                  src={post.imageUrl}
                  alt={post.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-[17rem] object-cover" 
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 dark:text-gray-400 line-clamp-3">{post.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author || 'Gadget Insider'}</span>
                    <time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleDateString()}</time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>

      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Gadget Insider",
            "url": "https://gadgetinsider.in",
            "description": "Your trusted source for the latest tech news, in-depth reviews, and expert insights into the world of technology.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gadgetinsider.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
    </>
  )
}
