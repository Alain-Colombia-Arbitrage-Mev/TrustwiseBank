import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function RegistrationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/modal-send-money.png",
    // Add more image paths here for additional slides
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Image src="/logo-pdQUxRp5c2r7nrqWsydzae8apv86i8.svg" alt="TrustWise Logo" width={120} height={40} />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Personal</Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Business</Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Partners</Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Help & FAQ</Link>
        </nav>
        <Button variant="outline">Sign In</Button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-stretch">
        {/* Left Column - Registration Form */}
        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">Start your journey with TrustWise</p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                <Input type="text" placeholder="Full Name" required />
                <Input type="email" placeholder="Email Address" required />
                <Input type="password" placeholder="Password" required />
                <Input type="password" placeholder="Confirm Password" required />
              </div>
              <div>
                <Button className="w-full" type="submit">Sign Up</Button>
              </div>
            </form>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column - Image Slider and Text */}
        <div className="w-1/2 bg-gray-100 flex flex-col">
          <div className="relative flex-grow">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-8 bg-white">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Get better with money</h1>
            <p className="text-lg text-gray-700">
              TrustWise helps you set saving goals, earn cash back offers. Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t p-4">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
          </nav>
          <p className="text-sm text-gray-500">&copy; 2024 TrustWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}