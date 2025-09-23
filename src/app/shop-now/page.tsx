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
      <div className="ps-page--product"></div>
      <InfoStrip />
      <Footer />
    </>
  );
}

export default ShopNow;
