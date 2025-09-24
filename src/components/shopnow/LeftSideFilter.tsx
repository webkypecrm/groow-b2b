import React from "react";

const LeftSideFilter = () => {
  return (
    <div className="ps-layout__left">
      <aside className="widget widget_shop">
        <h4 className="widget-title">Categories</h4>
        <ul className="ps-list--categories">
          <li>
            <a href="/category/fruits">Fruits</a>
          </li>
          <li>
            <a href="/category/cars-and-motocycles">Cars &amp; Motocycles</a>
          </li>
          <li>
            <a href="/category/books-and-office">Books &amp; Office</a>
          </li>
          <li>
            <a href="/category/babies-and-moms">Babies and Moms</a>
          </li>
          <li>
            <a href="/category/sport-and-outdoor">Sport &amp; Outdoor</a>
          </li>
          <li>
            <a href="/category/phones-and-accessories">
              Phones &amp; Accessories
            </a>
          </li>
          <li>
            <a href="/category/jewelry-and-watches">Jewelry &amp; Watches</a>
          </li>
          <li>
            <a href="/category/computers-and-technologies">
              Computers &amp; Technologies
            </a>
          </li>
          <li>
            <a href="/category/health-and-beauty">Health &amp; Beauty</a>
          </li>
          <li>
            <a href="/category/garden-and-kitchen">Garden &amp; Kitchen</a>
          </li>
        </ul>
      </aside>

      <aside className="widget widget_shop widget_shop--brand">
        <h4 className="widget-title">By Brands</h4>
        <ul className="ps-list--brands">
          <li>
            <a href="/brand/unilever">Unilever</a>
          </li>
          <li>
            <a href="/brand/gopro"> Gopro</a>
          </li>
          <li>
            <a href="/brand/yamaha">Yamaha</a>
          </li>
          <li>
            <a href="/brand/lg-electronics">LG Electronics</a>
          </li>
          <li>
            <a href="/brand/samsung"> Samsung</a>
          </li>
          <li>
            <a href="/brand/asus"> Asus</a>
          </li>
          <li>
            <a href="/brand/gucci">Gucci</a>
          </li>
          <li>
            <a href="/brand/flat-funiture">Flat Funiture</a>
          </li>
          <li>
            <a href="/brand/sony">Sony</a>
          </li>
          <li>
            <a href="/brand/mega-system">Mega System</a>
          </li>
        </ul>
      </aside>

      <aside className="widget widget_shop">
        <figure>
          <h4 className="widget-title">By Price</h4>
          <div className="ant-slider css-djtmh8 ant-slider-horizontal">
            <div className="ant-slider-rail" />
            <div
              className="ant-slider-track ant-slider-track-1"
              style={{ left: "0%", width: "100%" }}
            />
            <div className="ant-slider-step" />
            <div
              className="ant-slider-handle ant-slider-handle-1"
              tabIndex={0}
              role="slider"
              aria-valuemin={0}
              aria-valuemax={2000}
              aria-valuenow={0}
              aria-disabled="false"
              aria-orientation="horizontal"
              style={{ left: "0%", transform: "translateX(-50%)" }}
            />
            <div
              className="ant-slider-handle ant-slider-handle-2"
              tabIndex={0}
              role="slider"
              aria-valuemin={0}
              aria-valuemax={2000}
              aria-valuenow={2000}
              aria-disabled="false"
              aria-orientation="horizontal"
              style={{ left: "100%", transform: "translateX(-50%)" }}
            />
          </div>
          <p>Price: $0 - $ 2000</p>
        </figure>
      </aside>
    </div>
  );
};

export default LeftSideFilter;
