"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroBanner() {
  return (
    <section className="ps-home-banner ps-home-banner--1 py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Section (Carousel) */}
          <div className="col-12 col-lg-8">
            <Carousel
              showArrows
              showIndicators={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
            >
              {/* Slide 1 */}
              <div
                className="overflow-hidden"
                style={{ height: "250px", maxHeight: "400px" }}
              >
                <Link href="#">
                  <Image
                    src="/images/hero-baner3.jpg"
                    alt="Top trending B2B deals"
                    width={1200}
                    height={400}
                    priority
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>

              {/* Slide 2 */}
              <div
                className="overflow-hidden"
                style={{ height: "250px", maxHeight: "400px" }}
              >
                <Link href="#">
                  <Image
                    src="/images/hero-baner2.jpg"
                    alt="Global trade opportunities"
                    width={1200}
                    height={400}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>

              {/* Slide 3 */}
              <div
                className="overflow-hidden"
                style={{ height: "250px", maxHeight: "400px" }}
              >
                <Link href="#">
                  <Image
                    src="/images/hero-baner1.jpg"
                    alt="Best suppliers for businesses"
                    width={1200}
                    height={400}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </Carousel>
          </div>

          {/* Right Section (Collections) */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-3">
            <Link className="d-block" href="#">
              <Image
                src="/images/banne4.jpg"
                alt="Groow exclusive collection"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </Link>
            <Link className="d-block" href="#">
              <Image
                src="/images/banner5.jpg"
                alt="Latest B2B deals"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
