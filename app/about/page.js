import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Gadget Insider',
  description: 'Learn about Gadget Insider, our mission, and our team of tech enthusiasts dedicated to bringing you the latest in technology news and reviews.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Gadget Insider</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At Gadget Insider, we're passionate about technology and its impact on our daily lives. Our mission is to provide our readers with accurate, insightful, and engaging content about the latest gadgets, tech trends, and digital innovations.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We strive to be your trusted source for in-depth reviews, breaking news, and expert analysis in the ever-evolving world of technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image 
              src="/placeholder.svg?height=150&width=150" 
              alt="Ritik Patel" 
              width={150} 
              height={150} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Ritik Patel</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Founder</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image 
              src="/placeholder.svg?height=150&width=150" 
              alt="Ankit Prajapati" 
              width={150} 
              height={150} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Ankit Prajapati</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Tech Reviewer</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Unbiased and honest reviews of the latest gadgets and technologies</li>
          <li>Timely and accurate reporting on breaking tech news</li>
          <li>In-depth analysis of emerging trends in the tech industry</li>
          <li>Helpful guides and how-tos for making the most of your devices</li>
          <li>Engaging and informative content for tech enthusiasts of all levels</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We love hearing from our readers! Whether you have a question, suggestion, or just want to say hello, don't hesitate to reach out.
        </p>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Contact Us
        </Link>
      </section>
    </div>
  )
}

