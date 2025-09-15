"use client";

import React from "react";
import Link from "next/link";
import NewArrivalsProductCard from "../ui/NewArrivalsProductCard";

const products = [
  {
    id: 20,
    img: "/images/product-1.webp",
    title: "Marshall Kilburn Portable Wireless Speaker",
    price: 12.99,
    link: "/product/20",
  },
  {
    id: 21,
    img: "/images/product-2.webp",
    title: "Sound Intone I65 Earphone White Version",
    price: 21.99,
    link: "/product/21",
  },
  {
    id: 68,
    img: "/images/product-3.webp",
    title: "Apple iPhone 7 Plus 128 GB – Red Color",
    price: 90.99,
    link: "/product/68",
  },
  {
    id: 39,
    img: "/images/product-4.webp",
    title: "Grand Slam Indoor Of Show Jumping Novel",
    price: 93.99,
    link: "/product/39",
  },
  {
    id: 84,
    img: "/images/product-1.webp",
    title: "Package 2 iClever Bootscube Mini Chargers",
    price: 79.99,
    link: "/product/84",
  },
  {
    id: 25,
    img: "/images/product-2.webp",
    title: "Xbox One Wireless Controller Black Color",
    price: 59.99,
    link: "/product/25",
  },
  {
    id: 22,
    img: "/images/product-3.webp",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: 30.99,
    link: "/product/22",
  },
  {
    id: 31,
    img: "/images/product-4.webp",
    title: "Aroma Rice Cooker",
    price: 11.99,
    link: "/product/31",
  },
];

const NewArrival = () => {
  return (
    <section className="ps-product-list ps-new-arrivals py-5">
      <div className="ps-container container">
        {/* Header */}
        <div className="ps-section__header d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Hot New Arrivals</h3>
          <ul className="ps-section__links list-inline mb-0">
            <li className="list-inline-item">
              <Link href="/shop">View All</Link>
            </li>
          </ul>
        </div>

        {/* Products Grid */}
        <div className="ps-section__content">
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
              >
                <NewArrivalsProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
