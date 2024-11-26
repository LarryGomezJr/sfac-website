import Image from "next/image";
import localFont from "next/font/local";
import HeroSection from './components/HeroSection'; 
import Testimonials from './components/Testimonials'; 
import Contacts from "./components/Contacts";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <HeroSection />
    <Testimonials />
    <Contacts />
      
      {/* Other content */}
    </div>
  );
}
