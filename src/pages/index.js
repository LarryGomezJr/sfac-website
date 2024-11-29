import Image from "next/image";
import localFont from "next/font/local";
import Blog from "./components/Blog";
import Hero2 from "./components/Hero2";
import Location from "./components/Location";
import Directory from "./components/Directory";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero2 />
      <Blog />
      <Location />
      {/* Other content */}
    </div>
  );
}
