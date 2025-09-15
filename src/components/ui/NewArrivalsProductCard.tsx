import Image from "next/image";
import Link from "next/link";

export interface HorizontalProduct {
  id: number | string;
  img: string;
  title: string;
  price: number;
  link: string;
  rating?: number; // optional
}

export default function NewArrivalsProductCard({
  product,
}: {
  product: HorizontalProduct;
}) {
  return (
    <div className="ps-product--horizontal d-flex">
      {/* Thumbnail */}
      <div className="ps-product__thumbnail me-3 flex-shrink-0">
        <Link href={product.link} aria-label={product.title}>
          <Image
            src={product.img}
            alt={product.title}
            width={120}
            height={120}
            className="img-fluid rounded"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>

      {/* Content */}
      <div className="ps-product__content flex-grow-1">
        <Link className="ps-product__title d-block mb-2" href={product.link}>
          {product.title}
        </Link>

        {/* Rating */}
        <div
          className="ps-product__rating mb-0 mt-0"
          aria-label="Product rating"
        >
          <span className="ps-rating text-warning">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={
                  i < (product.rating ?? 4) ? "fa fa-star" : "fa fa-star-o"
                }
              />
            ))}
          </span>
        </div>

        {/* Price */}
        <p className="ps-product__price fw-bold mb-0">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
