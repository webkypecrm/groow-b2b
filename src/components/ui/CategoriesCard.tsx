import React from "react";
import Link from "next/link";
import Image from "next/image";

type Category = {
  href: string;
  img: string;
  title: string;
};

function CategoriesCard({ category }: { category: Category }) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
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
  );
}

export default CategoriesCard;
