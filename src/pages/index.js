import Image from "next/image";
import localFont from "next/font/local";
import About from "./components/About";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <About />
    </div>
  );
}
