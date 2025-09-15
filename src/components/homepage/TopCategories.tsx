import CategoriesCard from "../ui/CategoriesCard";

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
          {categories.map((category) => (
            <CategoriesCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
