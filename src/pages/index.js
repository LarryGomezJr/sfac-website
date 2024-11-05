import Image from "next/image";
import localFont from "next/font/local";
import HeroSection from './components/HeroSection'; 


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <HeroSection />
      
      {/* Other content */}
    </div>
  );
}
