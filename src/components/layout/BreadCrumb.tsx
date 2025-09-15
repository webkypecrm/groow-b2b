"use client";

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string; // optional because the last item usually doesn't have a link
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="ps-breadcrumb py-4" aria-label="breadcrumb">
      <ul className="breadcrumb flex gap-2 text-sm text-gray-600 px-4">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2"></span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
