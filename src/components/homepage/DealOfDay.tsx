"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function DealOfDay() {
  const products = [
    {
      id: 19,
      vendor: "Young Shop",
      title: "Apple Macbook Retina Display 12",
      price: "$10.99",
      img: "/images/product-1.webp",
      sold: 146,
      rating: 4,
    },
    {
      id: 78,
      vendor: "Young Shop",
      title: "Apple TV 4k – 32 GB (4th Generation)",
      price: "$96.99",
      img: "/images/product-2.webp",
      sold: 497,
      rating: 4,
    },
    {
      id: 20,
      vendor: "Young Shop",
      title: "Apple Macbook Retina Display 12",
      price: "$10.99",
      img: "/images/product-3.webp",
      sold: 146,
      rating: 4,
    },
    {
      id: 79,
      vendor: "Young Shop",
      title: "Apple TV 4k – 32 GB (4th Generation)",
      price: "$96.99",
      img: "/images/product-4.webp",
      sold: 497,
      rating: 4,
    },
    {
      id: 21,
      vendor: "Young Shop",
      title: "Apple Macbook Retina Display 12",
      price: "$10.99",
      img: "/images/product-5.jpeg",
      sold: 146,
      rating: 4,
    },
  ];

  return (
    <div className="ps-deal-of-day">
      <div className="ps-container">
        {/* Header */}
        <div className="ps-section__header">
          <div className="ps-block--countdown-deal">
            <div className="ps-block__left">
              <h3 style={{ fontWeight: 600 }}>Deal of the day</h3>
            </div>
            <div className="ps-block__right">
              <figure>
                <figcaption>End in:</figcaption>
                <ul className="ps-countdown">
                  <li>
                    <span className="days mr-1">-17</span>
                  </li>
                  <li>
                    <span className="hours ml-1 mr-1">-7</span>
                  </li>
                  <li>
                    <span className="minutes ml-1 mr-1">-30</span>
                  </li>
                  <li>
                    <span className="seconds ml-1">-21</span>
                  </li>
                </ul>
              </figure>
            </div>
          </div>
          <Link href="/deals">View all</Link>
        </div>

        {/* Content */}
        <div className="ps-section__content">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={5}
            loop
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="ps-product ps-product--inner">
                  <div className="ps-product__thumbnail">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.img}
                        alt={product.title}
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                    </Link>
                    <ul className="ps-product__actions">
                      <li>
                        <Link href="#" aria-label="Add To Cart">
                          <i className="icon-bag2"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-label="Quick View">
                          <i className="icon-eye"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-label="Add to Wishlist">
                          <i className="icon-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" aria-label="Compare">
                          <i className="icon-chart-bars"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ps-product__container">
                    <Link className="ps-product__vendor" href="/shop">
                      {product.vendor}
                    </Link>
                    <div className="ps-product__content">
                      <p className="ps-product__price">{product.price}</p>
                      <Link
                        className="ps-product__title"
                        href={`/product/${product.id}`}
                      >
                        {product.title}
                      </Link>
                      <div className="ps-product__rating">
                        <span className="ps-rating">
                          {Array.from({ length: 5 }, (_, i) => (
                            <i
                              key={i}
                              className={
                                i < product.rating
                                  ? "fa fa-star"
                                  : "fa fa-star-o"
                              }
                            ></i>
                          ))}
                        </span>
                      </div>
                      <div className="ps-product__progress-bar ps-progress">
                        <div className="ps-progress__value">
                          <span></span>
                        </div>
                        <p>Sold: {product.sold}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
