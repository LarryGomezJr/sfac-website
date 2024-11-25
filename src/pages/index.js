// pages/index.js
import Image from "next/image";
import Navbar from './components/Navbar';
import BsComputerEngineering from './components/BsComputerEngineering';  // Updated import for HeroSection

export default function Home() {
  return (
    <div>
      <Navbar />  
      <BsComputerEngineering />
    </div>
  );
}
