import Blog from "@/components/Blog";
import StatsCountUp from "@/components/CountUp";
import HomeHero from "@/components/HomeHero";
import HomeService from "@/components/HomeServices";
import HowWeWork from "@/components/HowWeWork";
import ImageGallery from "@/components/ImageGallery";


export default function Home() {
  return <div className="">
    <HomeHero />
    <StatsCountUp />
    <HomeService />
    <HowWeWork />
    <ImageGallery />
    <Blog />
  </div>;
}
