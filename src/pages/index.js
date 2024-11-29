import Image from "next/image";
import localFont from "next/font/local";
import HeroSection from './components/HeroSection'; 
import Testimonials from './components/Testimonials'; 
import Blog from "./components/Blog";
import Location from "./components/Location";
import Hero2 from "./components/Hero2";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <HeroSection />
    <Hero2 />
    <Blog />
    <Testimonials />
    <Location />
      
      {/* Other content */}
    </div>
  );
}
