import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SignIn() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/modal-send-money.png",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="TrustwiseBank Logo" width={120} height={30} />
        </div>
        <div className="flex items-center space-x-6">
         <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Personal</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Business</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Partners</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Help & FAQ</a>
        </div>
        <div>
          <Button variant="outline" className="mr-2">Sign Up</Button>
          <Button>Sign In</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left column */}
        <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Sign in</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full">
                <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} className="mr-2" />
                Sign in with Apple
              </Button>
            </div>
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="w-1/2 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{backgroundImage: "url('/background1.png')"}}
          ></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-96">
              <Image
                src={slides[currentSlide]}
                alt="Slider image"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 text-center text-white max-w-md">
              <h2 className="text-2xl font-bold mb-4">Get better with money</h2>
              <p className="text-sm">
                TrustWise helps you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}