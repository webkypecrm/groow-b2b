"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageRightSidebar() {
  const sameBrandProducts = [
    {
      id: 81,
      img: "/images/product-1.webp",
      vendor: "Young Shop",
      title: "Acrylic Cover Case for iPhone X- (Clear)",
      price: 16.99,
      rating: 4,
      reviews: 2,
    },
    {
      id: 70,
      img: "/images/product-2.webp",
      vendor: "Young Shop",
      title: "Anna Sui Putty Mask Perfection",
      price: 89.99,
      rating: 4,
      reviews: 2,
    },
    {
      id: 78,
      img: "/images/product-3.webp",
      vendor: "Young Shop",
      title: "Apple TV 4k – 32 GB (4th Generation)",
      price: 96.99,
      rating: 4,
      reviews: 2,
    },
  ];

  return (
    <div className="ps-page__right">
      <section>
        <Image
          src="/images/images (1).jpg"
          alt="Banner"
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />

        <aside className="widget widget_sell-on-site mt-5">
          <p>
            <i className="icon-store"></i> Sell on Groow?
            <Link href="/account/register">Register Now !</Link>
          </p>
        </aside>

        <aside className="widget widget_same-brand">
          <h3>Same Brand</h3>
          <div className="widget__content">
            {sameBrandProducts.map((product) => (
              <div key={product.id} className="ps-product mb-4">
                <div className="ps-product__thumbnail position-relative">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={200}
                      height={200}
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </Link>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" title="Add To Cart">
                        <i className="icon-bag2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Quick View">
                        <i className="icon-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Add to wishlist">
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Compare">
                        <i className="icon-chart-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="ps-product__container">
                  <Link className="ps-product__vendor" href="/shop">
                    {product.vendor}
                  </Link>

                  <div className="ps-product__content">
                    <Link
                      className="ps-product__title"
                      href={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < product.rating ? "fa fa-star" : "fa fa-star-o"
                            }
                          ></i>
                        ))}
                      </span>
                      <span>{product.reviews.toString().padStart(2, "0")}</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>
                      {product.price}
                    </p>
                  </div>

                  <div className="ps-product__content hover">
                    <Link
                      className="ps-product__title"
                      href={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                    <p className="ps-product__price">
                      <span>$</span>
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
