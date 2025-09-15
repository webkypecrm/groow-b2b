import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number | string;
  img: string;
  title: string;
  price: string;
  vendor: string;
  rating: number;
  sold: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="ps-product ps-product--inner">
      {/* Thumbnail */}
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

        {/* Action Buttons */}
        <ul className="ps-product__actions">
          <li>
            <Link href="#" title="Add To Cart">
              <i className="icon-bag2"></i>
            </Link>
          </li>
          <li>
            <Link href="#" title="Quick View">
              <i className="icon-eye"></i>
            </Link>
          </li>
          <li>
            <Link href="#" title="Add to Wishlist">
              <i className="icon-heart"></i>
            </Link>
          </li>
          <li>
            <Link href="#" title="Compare">
              <i className="icon-chart-bars"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="ps-product__container">
        <Link className="ps-product__vendor" href="/shop">
          {product.vendor}
        </Link>

        <div className="ps-product__content">
          <p className="ps-product__price">{product.price}</p>

          <Link className="ps-product__title" href={`/product/${product.id}`}>
            {product.title}
          </Link>

          {/* Rating */}
          <div className="ps-product__rating">
            <span className="ps-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={i < product.rating ? "fa fa-star" : "fa fa-star-o"}
                ></i>
              ))}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="ps-product__progress-bar ps-progress">
            <div className="ps-progress__value">
              <span></span>
            </div>
            <p>Sold: {product.sold}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
