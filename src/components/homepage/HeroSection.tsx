"use client";
import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section
      className="text-center position-relative"
      style={{ zIndex: -1 }}
      aria-label="Hero Section"
    >
      {/* Background Banner */}
      <Image
        src="/images/banner.avif"
        className="img-fluid w-100"
        style={{ height: "100vh", objectFit: "cover" }}
        alt="B2B ecommerce platform banner"
        width={1920}
        height={1080}
        priority
      />

      {/* Overlay Content */}
      <div className="container new-position-conatiner position-absolute top-50 start-50 translate-middle px-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11 col-12">
            <div className="banner-overlay text-center">
              {/* Responsive Heading */}
              <h1 className="fw-bold text-white mb-3 display-7 display-md-4 display-lg-3">
                The leading B2B ecommerce platform for{" "}
                <br className="d-none d-md-block" />
                global trade
              </h1>

              {/* Search Bar Placeholder */}
              <div id="custom-search">
                <div
                  className="search-wrapper mx-auto"
                  role="search"
                  style={{
                    maxWidth: "600px",
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
