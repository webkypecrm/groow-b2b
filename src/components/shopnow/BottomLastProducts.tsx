import React from "react";

const BottomLastProducts = () => {
  return (
    <div className="ps-shopping">
      <div className="ps-shopping__header">
        <p>
          <strong className="mr-2">81</strong>Products found
        </p>
        <div className="ps-shopping__actions">
          <select
            className="ps-select form-control"
            data-placeholder="Sort Items"
          >
            <option>Sort by latest</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
          <div className="ps-shopping__view">
            <p>View</p>
            <ul className="ps-tab-list">
              <li className="active">
                <a href="#">
                  <i className="icon-grid" />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <i className="icon-list4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ps-shopping__content">
        <div className="ps-shop-items">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/90">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-1.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <div className="ps-product__badge">-50%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/89">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-2.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/88">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-3.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/87">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-4.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/90">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-1.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <div className="ps-product__badge">-50%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/89">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-2.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/90">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-1.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <div className="ps-product__badge">-50%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/89">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-2.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/90">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-1.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <div className="ps-product__badge">-50%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/89">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-2.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      MariGold 100% Juice Milk 350ml
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>17.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/88">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-3.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/87">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-4.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/90">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-1.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <div className="ps-product__badge">-50%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      NYX Beauty Couton Pallete Makeup 12
                    </a>
                    <p className="ps-product__price sale">
                      <span>$</span>45.19
                      <del className="ml-2">
                        <span>$</span>67.99
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/88">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-3.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Tesco Eat Fresh Frozen Lamb Bone in Cube
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>99.99
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="/product/87">
                    <img
                      alt=""
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg={1}
                      sizes="100vw"
                      src="images/product-4.webp"
                      style={{
                        color: "transparent",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add To Cart"
                      >
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Compare"
                      >
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="/shop">
                    Young Shop
                  </a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <div className="ps-product__rating">
                      <span className="ps-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </span>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="/product/undefined">
                      Pineapple (Tropical Gold)
                    </a>
                    <p className="ps-product__price">
                      <span>$</span>82.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLastProducts;
