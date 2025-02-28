import HeaderSection from "@/componenets/headerSection";
import HeroSection from "@/componenets/heroSection";
import Navbar from "@/componenets/navbar";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar/>
      <HeaderSection/>
      <HeroSection/>
    </div>
  );
}