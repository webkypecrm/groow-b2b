"use client";

import Link from "next/link";
import { useState } from "react";
import InquiryOffcanvas from "./InquiryOffCanvas";

export default function ProductInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ps-product__info">
      <header>
        <h1>Sound Intone I65 Earphone White Version</h1>
        <div className="ps-product__meta">
          <p>
            Brand:
            <Link className="ml-2 text-capitalize" href="/shop">
              No Brand
            </Link>
          </p>
          <div className="ps-product__rating">
            <span className="ps-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </span>
            <span>(1 review)</span>
          </div>
        </div>
        <h4 className="ps-product__price">$21.99</h4>
      </header>

      <div className="ps-product__desc">
        <p>
          Sold By:
          <Link href="/shop">
            <strong> No Vendor</strong>
          </Link>
        </p>
        <ul className="ps-list--dot">
          <li>Unrestrained and portable active stereo speaker</li>
          <li>Free from the confines of wires and chords</li>
          <li>20 hours of portable capabilities</li>
          <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
          <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
        </ul>
      </div>

      <h3 className="mb-4">Quantity vs Price</h3>
      <table className="table table-bordered text-center align-middle w-100 privceVquan">
        <thead className="table-primary">
          <tr>
            <th>Quantity</th>
            <th>0 – 5</th>
            <th>5 – 10</th>
            <th>10 – 15</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Price</th>
            <td>$20</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>

      <div className="ps-product__shopping">
        <div>
          <p className="fw-bold mb-1">Quantity</p>
          <div className="form-group--number">
            <select className="form-control rounded-0" defaultValue="">
              <option disabled value="">
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>
        <Link className="ps-btn ps-btn--black" href="#">
          Add to cart
        </Link>
        <button className="ps-btn" onClick={() => setIsOpen(true)}>
          Request Quote
        </button>
        {isOpen && (
          <div
            className="offcanvas-backdrop fade show"
            style={{ zIndex: 1040 }}
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <InquiryOffcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="ps-product__actions">
          <Link href="#">
            <i className="icon-heart"></i>
          </Link>
          <Link href="#">
            <i className="icon-chart-bars"></i>
          </Link>
        </div>
      </div>

      <div className="ps-product__specification">
        <Link className="report" href="/page/blank">
          Report Abuse
        </Link>
        <p>
          <strong>SKU:</strong> SF1133569600-1
        </p>
        <p className="categories">
          <strong>Categories:</strong>
        </p>
        <p className="tags">
          <strong>Tags:</strong>
          <Link href="/shop">sofa</Link>
          <Link href="/shop">technologies</Link>
          <Link href="/shop">wireless</Link>
        </p>
      </div>

      <div className="ps-product__sharing">
        <Link className="facebook" href="#">
          <i className="fa fa-facebook"></i>
        </Link>
        <Link className="twitter" href="#">
          <i className="fa fa-twitter"></i>
        </Link>
        <Link className="google" href="#">
          <i className="fa fa-google-plus"></i>
        </Link>
        <Link className="linkedin" href="#">
          <i className="fa fa-linkedin"></i>
        </Link>
        <Link className="instagram" href="#">
          <i className="fa fa-instagram"></i>
        </Link>
      </div>
      <div className="ps-product__actions-mobile">
        <Link className="ps-btn ps-btn--black" href="#">
          Add to cart
        </Link>
        <Link className="ps-btn" href="#">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
