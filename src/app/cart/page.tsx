import BlueHeader from "@/components/layout/BlueHeader";
import Breadcrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import InfoStrip from "@/components/layout/InfoStrip";
import React from "react";

function page() {
  return (
    <>
      <BlueHeader />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          //   { label: "Product", href: "/product" },
          { label: "Shop Default" },
        ]}
      />
      <div className="ps-section--shopping ps-shopping-cart">
        <div className="container">
          <div className="ps-section__header">
            <h1>Shopping Cart</h1>
          </div>
          <section>
            <div className="ps-section__footer">
              <div className="row justify-space-between">
                <div className=" col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="ps-section__content">
                    <table className="table  ps-table--shopping-cart ps-table--responsive">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="ps-product--cart">
                              <div className="ps-product__thumbnail">
                                <a href="/product/68">
                                  <img
                                    src="https://placehold.co/400x400"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="ps-product__content">
                                Apple iPhone 7 Plus 128 GB – Red Color
                              </div>
                            </div>
                          </td>
                          <td data-label="price" className="price">
                            $90.99
                          </td>
                          <td data-label="quantity">
                            <div className="form-group--number">
                              <button className="up">+</button>
                              <button className="down">-</button>
                              <input
                                className="form-control"
                                placeholder={1}
                                disabled=""
                                type="text"
                              />
                            </div>
                          </td>
                          <td data-label="total">
                            <strong>$90.99</strong>
                          </td>
                          <td>
                            <a href="#">
                              <i className="icon-cross" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="ps-section__cart-actions">
                      <a className="ps-btn" href="/shop">
                        Back to Shop
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <figure>
                        <figcaption>Coupon Discount</figcaption>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Enter coupon here..."
                            type="text"
                          />
                        </div>
                        <div className="form-group">
                          <button className="ps-btn ps-btn--outline">
                            Apply
                          </button>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="ps-block--shopping-total">
                    <div className="ps-block__header">
                      <p>
                        Subtotal <span>$90.99</span>
                      </p>
                    </div>
                    <div className="ps-block__content">
                      <ul className="ps-block__product">
                        <li>
                          <span className="ps-block__estimate">
                            <a className="ps-product__title" href="/product/68">
                              Apple iPhone 7 Plus 128 GB – Red Color
                              <br />
                              x1
                            </a>
                          </span>
                        </li>
                      </ul>
                      <h3>
                        Total <span>$90.99</span>
                      </h3>
                    </div>
                  </div>
                  <a
                    className="ps-btn ps-btn--fullwidth"
                    href="/account/checkout"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <InfoStrip />
      <Footer />
    </>
  );
}

export default page;
