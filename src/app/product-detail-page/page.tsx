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

function ProductDetailPage() {
  return (
    <>
      {" "}
      <BlueHeader />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Product", href: "/product" },
          { label: "Untitled Product" },
        ]}
      />
      <div className="ps-page--product">
        <div className="ps-container">
          <div className="ps-page__container">
            <div className="ps-page__left">
              <div className="ps-product--detail ps-product--fullwidth">
                <div className="ps-product__header">
                  <ImageGallery
                    images={[
                      "/images/products1.jpeg",
                      "/images/products1.jpeg",
                      "/images/products1.jpeg",
                      "/images/products1.jpeg",
                    ]}
                    thumbnails={[
                      "/images/products1.jpeg",
                      "/images/sub2.jpeg",
                      "/images/sub4.jpeg",
                      "/images/sub3.jpeg",
                    ]}
                  />

                  <ProductInfo />
                </div>
                {/* <InquiryOffcanvas /> */}
                <ProductTabs />
              </div>
            </div>
            <PageRightSidebar />
          </div>
          <div className="ps-section--default ps-related-products ">
            <div className="ps-section__header">
              <h3>Related products</h3>
            </div>
            <div className="ps-section__content">
              <p>No product found.</p>
            </div>
          </div>
        </div>
      </div>
      <InfoStrip />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
