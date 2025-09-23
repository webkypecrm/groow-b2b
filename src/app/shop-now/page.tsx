// "use client";
import React from "react";
import Footer from "@/components/layout/Footer";
import InfoStrip from "@/components/layout/InfoStrip";
import ImageGallery from "@/components/product-detail/ImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";
import ProductTabs from "@/components/product-detail/product-tabs/ProductTabs";
//import InquiryOffcanvas from "@/components/product-detail/InquiryOffCanvas";
import PageRightSidebar from "@/components/product-detail/PageRightSidebar";
import Breadcrumb from "@/components/layout/BreadCrumb";
import BlueHeader from "@/components/layout/BlueHeader";

import SliderSection from "@/components/shopnow/SliderSection";
import BrandBannerSection from "@/components/shopnow/BrandBannerSection";
import CategoriesBasedItemThree from "@/components/shopnow/CategoriesBasedItemThree";
import LeftSideFilter from "@/components/shopnow/LeftSideFilter";
import BestSellerItem from "@/components/shopnow/BestSellerItem";
import BottomLastProducts from "@/components/shopnow/BottomLastProducts";

function ShopNow() {
  return (
    <>
      {" "}
      <BlueHeader />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          //   { label: "Product", href: "/product" },
          { label: "Shop Default" },
        ]}
      />
      <div className="ps-container">
        <SliderSection />

        <BrandBannerSection />

        <CategoriesBasedItemThree />

        <div className="ps-layout--shop">
          <LeftSideFilter />

          <div className="ps-layout__right">
            <div className="ps-block--shop-features">
              <div className="ps-block__header">
                <h3>Best Sale Items</h3>
                <div className="ps-block__navigation">
                  <a className="ps-carousel__prev">
                    <i className="icon-chevron-left" />
                  </a>
                  <a className="ps-carousel__next">
                    <i className="icon-chevron-right" />
                  </a>
                </div>
              </div>

              <BestSellerItem />

              <div className="ps-block__header">
                <h3>Recommended Items</h3>
                <div className="ps-block__navigation">
                  <a className="ps-carousel__prev">
                    <i className="icon-chevron-left" />
                  </a>
                  <a className="ps-carousel__next">
                    <i className="icon-chevron-right" />
                  </a>
                </div>
              </div>
              <BestSellerItem />
            </div>

            <BottomLastProducts />
          </div>
        </div>
      </div>
      <InfoStrip />
      <Footer />
    </>
  );
}

export default ShopNow;
