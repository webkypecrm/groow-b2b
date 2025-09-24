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
          { label: "Shopping Cart" },
          { label: "Checkout Information" },
        ]}
      />

      <div className="ps-checkout ps-section--shopping">
        <div className="container">
          <div className="ps-section__header">
            <h1>Checkout Information</h1>
          </div>
          <div className="ps-section__content">
            <div className="ps-form--checkout">
              <div className="ps-form__content">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <form className="ant-form ant-form-horizontal css-djtmh8 ps-form__billing-info">
                      <h3 className="ps-form__heading">Contact information</h3>
                      <div className="form-group">
                        <div className="ant-form-item css-djtmh8">
                          <div className="ant-row ant-form-item-row css-djtmh8">
                            <div className="ant-col ant-form-item-control css-djtmh8">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    type="text"
                                    placeholder="Email or phone number"
                                    id="name"
                                    className="ant-input css-djtmh8 ant-input-outlined form-control"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="ps-checkbox">
                          <input
                            className="form-control"
                            type="checkbox"
                            id="keep-update"
                          />
                          <label htmlFor="keep-update" className="fs-14">
                            Keep me up to date on news and exclusive offers?
                          </label>
                        </div>
                      </div>
                      <h3 className="ps-form__heading">Shipping address</h3>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="ant-form-item css-djtmh8">
                              <div className="ant-row ant-form-item-row css-djtmh8">
                                <div className="ant-col ant-form-item-control css-djtmh8">
                                  <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                      <input
                                        type="text"
                                        placeholder="First Name"
                                        id="firstName"
                                        className="ant-input css-djtmh8 ant-input-outlined form-control"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="ant-form-item css-djtmh8">
                              <div className="ant-row ant-form-item-row css-djtmh8">
                                <div className="ant-col ant-form-item-control css-djtmh8">
                                  <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                      <input
                                        type="text"
                                        placeholder="Last Name"
                                        id="lastName"
                                        className="ant-input css-djtmh8 ant-input-outlined form-control"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="ant-form-item css-djtmh8">
                          <div className="ant-row ant-form-item-row css-djtmh8">
                            <div className="ant-col ant-form-item-control css-djtmh8">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    type="text"
                                    placeholder="Address"
                                    id="address"
                                    className="ant-input css-djtmh8 ant-input-outlined form-control"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="ant-form-item css-djtmh8">
                          <div className="ant-row ant-form-item-row css-djtmh8">
                            <div className="ant-col ant-form-item-control css-djtmh8">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    type="text"
                                    placeholder="Apartment, suite, etc. (optional)"
                                    id="apartment"
                                    className="ant-input css-djtmh8 ant-input-outlined form-control"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="ant-form-item css-djtmh8">
                              <div className="ant-row ant-form-item-row css-djtmh8">
                                <div className="ant-col ant-form-item-control css-djtmh8">
                                  <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                      <input
                                        type="city"
                                        placeholder="City"
                                        id="city"
                                        className="ant-input css-djtmh8 ant-input-outlined form-control"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="ant-form-item css-djtmh8">
                              <div className="ant-row ant-form-item-row css-djtmh8">
                                <div className="ant-col ant-form-item-control css-djtmh8">
                                  <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                      <input
                                        type="postalCode"
                                        placeholder="Postal Code"
                                        id="postalCode"
                                        className="ant-input css-djtmh8 ant-input-outlined form-control"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="ps-checkbox">
                          <input
                            className="form-control"
                            type="checkbox"
                            id="save-information"
                          />
                          <label htmlFor="save-information" className="fs-14">
                            Save this information for next time
                          </label>
                        </div>
                      </div>
                      <div className="ps-form__submit">
                        <a href="cart.html" className="fs-14">
                          <i className="icon-arrow-left mr-2" /> Return to
                          shopping cart
                        </a>
                        <div className="ps-block__footer">
                          <button className="ps-btn">
                            Continue to shipping
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                    <div className="ps-form__orders">
                      <h3>Your order</h3>
                      <div className="ps-block--checkout-order">
                        <div className="ps-block__content">
                          <figure>
                            <figcaption>
                              <strong>Product</strong>
                              <strong>total</strong>
                            </figcaption>
                          </figure>
                          <figure className="ps-block__items">
                            <a href="/" className="fs-16">
                              <strong>
                                Apple iPhone 7 Plus 128 GB – Red Color
                                <span>x1</span>
                              </strong>
                              <small>$90.99</small>
                            </a>
                          </figure>
                          <figure>
                            <figcaption>
                              <strong>Subtotal</strong>
                              <small>${/* */}90.99</small>
                            </figcaption>
                          </figure>
                          <figure className="ps-block__total">
                            <h3>
                              Total
                              <strong>
                                ${/* */}90{/* */}.00
                              </strong>
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
        </div>
      </div>

      <InfoStrip />
      <Footer />
    </>
  );
}

export default page;
