"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../ui/ProductCard";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
    {
    id: 78,
    vendor: "Young Shop",
    title: "Apple TV 4k – 32 GB (4th Generation)",
    price: "$96.99",
    img: "/images/product-2.webp",
    sold: 497,
    rating: 4,
  },
];

export default function ClothingList() {
  return (
    <div className="ps-product-list">
      <div className="ps-container">
        {/* Header */}
        <div className="ps-section__header">
          <h3>Clothings</h3>
          <ul className="ps-section__links">
            <li>
              <Link href="#">New arrivals</Link>
            </li>
            <li>
              <Link href="#">Best sellers</Link>
            </li>
            <li>
              <Link href="#">Most popular</Link>
            </li>
            <li>
              <Link href="/shop">View All</Link>
            </li>
          </ul>
        </div>

        {/* Product Swiper */}
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
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
