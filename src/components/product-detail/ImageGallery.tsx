"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductImageCarouselProps {
  images: string[];
  thumbnails: string[];
}

export default function ImageGallery({
  images,
  thumbnails,
}: ProductImageCarouselProps) {
  return (
    <div className="ps-product__thumbnail" data-vertical="true">
      <figure>
        <div className="ps-wrapper carousel--productImages">
          <div className="swiper--custom-avigation">
            <button>
              <i className="icon-chevron-left"></i>
            </button>
            <button>
              <i className="icon-chevron-right"></i>
            </button>
          </div>

          {/* Main Swiper */}
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(0px, 0px, 0px)",
                transitionDelay: "0ms",
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`swiper-slide item ${
                    index === 0 ? "swiper-slide-active" : ""
                  }`}
                  style={{ width: "337px" }}
                >
                  <Link href="/" className="carousel-image-link">
                    <div className="lg-react-element">
                      <Image
                        src={src}
                        alt={src}
                        width={337}
                        height={337}
                        data-lg-id={`image-${index}`}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </figure>

      {/* Thumbnail Images */}
      <div className="product__thumbnailImages">
        <div className="swiper swiper-carousel--variants swiper-initialized swiper-vertical swiper-backface-hidden">
          <div className="swiper-wrapper">
            {thumbnails.map((src, index) => (
              <div
                key={index}
                className={`swiper-slide item ${
                  index === 0 ? "swiper-slide-active" : ""
                }`}
                style={{ height: "63px", marginBottom: "12px" }}
              >
                <Image
                  src={src}
                  alt={src}
                  width={63}
                  height={63}
                  className={`swiper-slide-image ${
                    index === 0 ? "active" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
