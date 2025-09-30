import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSection from "@/components/homepage/HeroSection";
import HomeBanner from "@/components/homepage/HomeBanner";
import SiteFeatures from "@/components/homepage/SiteFeature";
import DealOfDay from "@/components/homepage/DealOfDay";
import HomeAds from "@/components/homepage/HomeAds";
import TopCategories from "@/components/homepage/TopCategories";
import ProductList from "@/components/homepage/ProductList";
import HomeAds2 from "@/components/homepage/HomeAds2";
import DownloadApp from "@/components/homepage/DownloadApp";
import NewArrival from "@/components/homepage/NewArrival";
import InfoStrip from "@/components/layout/InfoStrip";
import ClothingList from "@/components/homepage/ClothingList";
import KitchenAndGarden from "@/components/homepage/KitchenAndGarden";

function HomePage() {
  return (
    <>
      <Header />
      {/*Hero section*/}
      <HeroSection />
      <main id="homepage-1">
        {/* Home banner */}
        <HomeBanner />
        {/* Site Feature */}
        <SiteFeatures />
        {/* Deals of the Day */}
        <DealOfDay />
        {/* HomeAds */}
        <HomeAds />
        {/* top-category */}
        <TopCategories />
        {/* product list */}
        <ProductList />
        {/* product list */}
        {/* <ProductList /> */}
        <ClothingList />
        {/* product list */}
        <KitchenAndGarden />
        {/* Home-add2 */}
        <HomeAds2 />
        {/* Download APP */}
        <DownloadApp />
        {/* New Arrival */}
        <NewArrival />
        {/* Mobile Navigation */}
      </main>
      <InfoStrip />
      <Footer />
    </>
  );
}

export default HomePage;
