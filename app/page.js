import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import blogPosts from '../data/blog-posts.json'

export const metadata = {
  title: 'Gadget Insider - Latest Tech News, Reviews & Insights',
  description: 'Discover the latest technology news, in-depth gadget reviews, and expert tech insights. Stay informed with Gadget Insider, your trusted source for all things tech.',
}

export default function Home() {
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
          {blogPosts.map(function(post) {
            return (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.categories.map(category => (
                      <span 
                        key={category} 
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 whitespace-nowrap  text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    <Link href={"/blog/" + post.slug}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 dark:text-gray-400">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    <Link 
                      href={"/blog/" + post.slug} 
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Read more 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </>
  )
}

