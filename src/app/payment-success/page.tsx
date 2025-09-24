import BlueHeader from "@/components/layout/BlueHeader";
import Breadcrumb from "@/components/layout/BreadCrumb";
import Footer from "@/components/layout/Footer";
import InfoStrip from "@/components/layout/InfoStrip";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <BlueHeader />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          //   { label: "Product", href: "/product" },
          { label: "Shopping Cart" },
          { label: "Payment Success" },
        ]}
      />

      <div className="ps-checkout ps-section--shopping">
        <div className="container">
          <div className="ps-section__header">
            <h1>Payment Success</h1>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className="ps-block--payment-success">
                  <div className="ps-block__content">
                    <h3>Thank you! Your order is processing.</h3>
                    <p>
                      Your order number is <strong>123</strong>
                    </p>
                    <p>
                      An email will be sent containing information about your
                      purchase. If you have any questions about your purchase,
                      email us at{" "}
                      <Link
                        href="mailto@contact@martfury.com"
                        className="ps-highlight"
                      >
                        <strong>contact@martfury.com</strong>
                      </Link>
                    </p>
                  </div>
                  <div className="ps-block__bottom">
                    <Link className="ps-btn" href="/">
                      <i className="icon-arrow-left mr-2" />
                      Back to shop
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                <div className="ps-form__orders">
                  <div className="ps-block--checkout-order">
                    <div className="ps-block__content">
                      <figure>
                        <figcaption>
                          <strong>Product</strong>
                          <strong>total</strong>
                        </figcaption>
                      </figure>
                      <figure className="ps-block__items fs-16">
                        <Link href="/">
                          <strong>
                            Apple iPhone 7 Plus 128 GB – Red Color
                            <span>x1</span>
                          </strong>
                          <small>$90.99</small>
                        </Link>
                      </figure>
                      <figure>
                        <figcaption>
                          <strong>Subtotal</strong>
                          <small>$90.99</small>
                        </figcaption>
                      </figure>
                      <figure className="ps-block__total">
                        <h3>
                          Total<strong>$90.00</strong>
                        </h3>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoStrip />
      <Footer />
    </>
  );
}

export default page;
