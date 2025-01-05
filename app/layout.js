import './globals.css'
import Link from 'next/link'
import Script from 'next/script'
import Header from "@/components/Header";




export const metadata = {
  title: {
    default: 'Gadget Insider - Your Ultimate Tech News & Reviews Destination',
    template: '%s | Gadget Insider'
  },
  description: 'Stay ahead with the latest technology news, gadget reviews, and tech insights. Gadget Insider brings you expert analysis and breaking news from the world of technology.',
  keywords: ['tech news', 'gadget reviews', 'smartphones', 'laptops', 'consumer electronics', 'tech insights', 'technology updates'],
  authors: [{ name: 'Gadget Insider Team' }],
  canonical: 'https://gadgetinsider.in',
  metadataBase: new URL('https://gadgetinsider.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-in',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gadgetinsider.in',
    siteName: 'Gadget Insider',
    images: [
      {
        url: 'https://gadgetinsider.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gadget Insider - Tech News & Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gadgetinsider',
    creator: '@gadgetinsider',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  googleSiteVerification: 'l0qvZtRQt9BgEasMkESdqw32hirSgGrqFaqlmkswYm4',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en" className="light">
      <head>
        <meta name="google-site-verification" content="l0qvZtRQt9BgEasMkESdqw32hirSgGrqFaqlmkswYm4" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
       

     <Header/>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:border-slate-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">About Gadget Insider</h3>
                <p className="text-gray-600 dark:text-gray-400">Your trusted source for the latest tech news, in-depth reviews, and expert insights into the world of technology.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Contact</Link></li>
                  <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  
                  <a href="https://www.linkedin.com/in/ritik-patel9152/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="LinkedIn">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 dark:border-slate-700 dark:text-gray-400">
              <p>© {new Date().getFullYear()} Gadget Insider. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
      </body>
    </html>
  )
} i have this layout structure but it failed owenership in google search console
