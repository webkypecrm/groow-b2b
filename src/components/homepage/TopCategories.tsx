import Image from "next/image";
import Link from "next/link";

const categories = [
  { img: "/images/product-1.webp", title: "Electronics", href: "#" },
  { img: "/images/product-2.webp", title: "Clothings", href: "#" },
  { img: "/images/product-3.webp", title: "Computers", href: "#" },
  { img: "/images/product-4.webp", title: "Home & Kitchen", href: "#" },
  { img: "/images/product-1.webp", title: "Health & Beauty", href: "#" },
  { img: "/images/product-2.webp", title: "Health & Beauty", href: "#" },
  { img: "/images/product-3.webp", title: "Jewelry & Watch", href: "#" },
  { img: "/images/product-4.webp", title: "Technology Toys", href: "#" },
];

export default function TopCategories() {
  return (
    <div className="ps-top-categories">
      <div className="ps-container">
        <h3>Top categories of the month</h3>
        <div className="row">
          {categories.map((category, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
            >
              <div className="ps-block--category">
                <Link href={category.href} className="ps-block__overlay" />
                <Image
                  src={category.img}
                  alt={category.title}
                  width={300}
                  height={300}
                  className="img-fluid"
                />
                <p>{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
