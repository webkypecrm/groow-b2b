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
          { label: "Become a Vendor" },
        ]}
      />

      <>
        <div
          className="ps-vendor-banner bg--cover"
          style={{ backgroundImage: "url(images/vendor.jpg)" }}
        >
          <div className="ps-vendor-banner">
            <div className="container">
              <h2>
                Millions Of Shoppers Can&apos;t Wait To See What You Have In
                Store
              </h2>
              <a className="ps-btn ps-btn--lg" href="store-list.html">
                Start Selling
              </a>
            </div>
          </div>
        </div>
        <div className="ps-section--vendor ps-vendor-about">
          <div className="container">
            <div className="ps-section__header">
              <p>WHY SELL ON MARTFURY</p>
              <h4>
                Join a marketplace where nearly 50 million buyers around{/* */}{" "}
                <br /> the world shop for unique items
              </h4>
            </div>
            <div className="ps-section__content">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="ps-block--icon-box-2">
                    <div className="ps-block__thumbnail">
                      <img src="images/vendor-1.png" alt="martfury" />
                    </div>
                    <div className="ps-block__content">
                      <h4>Low Fees</h4>
                      <div className="ps-block__desc" data-mh="about-desc">
                        <p>
                          It doesn&apos;t take much to list your items and once
                          you make a sale, Martfury’s transaction fee is just
                          2.5%.
                        </p>
                      </div>
                      <a href="#">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="ps-block--icon-box-2">
                    <div className="ps-block__thumbnail">
                      <img src="images/vendor-2.png" alt="martfury" />
                    </div>
                    <div className="ps-block__content">
                      <h4>Powerful Tools</h4>
                      <div className="ps-block__desc" data-mh="about-desc">
                        <p>
                          Our tools and services make it easy to manage, promote
                          and grow your business.
                        </p>
                      </div>
                      <a href="#">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="ps-block--icon-box-2">
                    <div className="ps-block__thumbnail">
                      <img src="images/vendor-3.png" alt="martfury" />
                    </div>
                    <div className="ps-block__content">
                      <h4>Support 24/7</h4>
                      <div className="ps-block__desc" data-mh="about-desc">
                        <p>
                          Our tools and services make it easy to manage, promote
                          and grow your business.
                        </p>
                      </div>
                      <a href="#">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-section--vendor ps-vendor-milestone">
          <div className="container">
            <div className="ps-section__header">
              <p>How it works</p>
              <h4>
                Easy to start selling online on Martfury just 4 simple steps
              </h4>
            </div>
            <div className="ps-section__content">
              <div className="ps-block--vendor-milestone">
                <div className="ps-block__left">
                  <h4>Register and list your products</h4>
                  <ul>
                    <li>
                      Register your business for free and create a product
                      catalogue. Get free training on how to run your online
                      business
                    </li>
                    <li>
                      Our Martfury Advisors will help you at every step and
                      fully assist you in taking your business online
                    </li>
                  </ul>
                </div>
                <div className="ps-block__right">
                  <img src="images/milestone-1.png" alt="martfury" />
                </div>
                <div className="ps-block__number">
                  <span>1</span>
                </div>
              </div>
              <div className="ps-block--vendor-milestone reverse">
                <div className="ps-block__left">
                  <h4>Receive orders and sell your product</h4>
                  <ul>
                    <li>
                      Register your business for free and create a product
                      catalogue. Get free training on how to run your online
                      business
                    </li>
                    <li>
                      Our Martfury Advisors will help you at every step and
                      fully assist you in taking your business online
                    </li>
                  </ul>
                </div>
                <div className="ps-block__right">
                  <img src="images/milestone-2.png" alt="martfury" />
                </div>
                <div className="ps-block__number">
                  <span>2</span>
                </div>
              </div>
              <div className="ps-block--vendor-milestone">
                <div className="ps-block__left">
                  <h4>Package and ship with ease</h4>
                  <ul>
                    <li>
                      Register your business for free and create a product
                      catalogue. Get free training on how to run your online
                      business
                    </li>
                    <li>
                      Our Martfury Advisors will help you at every step and
                      fully assist you in taking your business online
                    </li>
                  </ul>
                </div>
                <div className="ps-block__right">
                  <img src="images/milestone-3.png" alt="martfury" />
                </div>
                <div className="ps-block__number">
                  <span>3</span>
                </div>
              </div>
              <div className="ps-block--vendor-milestone reverse">
                <div className="ps-block__left">
                  <h4>Package and ship with ease</h4>
                  <ul>
                    <li>
                      Register your business for free and create a product
                      catalogue. Get free training on how to run your online
                      business
                    </li>
                    <li>
                      Our Martfury Advisors will help you at every step and
                      fully assist you in taking your business online
                    </li>
                  </ul>
                </div>
                <div className="ps-block__right">
                  <img src="images/milestone-4.png" alt="martfury" />
                </div>
                <div className="ps-block__number">
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-section--vendor ps-vendor-best-fees">
          <div className="container">
            <div className="ps-section__header">
              <p>BEST FEES TO START</p>
              <h4>Affordable, transparent, and secure</h4>
            </div>
            <div className="ps-section__content">
              <h5>
                It doesn&apos;t cost a thing to list up to 50 items a month, and
                you only pay after your stuff sells. It&apos;s just a small
                percent of the money you earn
              </h5>
              <div className="ps-section__numbers">
                <figure>
                  <h3>$0</h3>
                  <span>List Fee</span>
                </figure>
                <figure>
                  <h3>5%</h3>
                  <span>Final Value Fee</span>
                </figure>
              </div>
              <div className="ps-section__desc">
                <figure>
                  <figcaption>Here what you get for your fee:</figcaption>
                  <ul>
                    <li>
                      A worldwide community of more than 160 million shoppers.
                    </li>
                    <li>
                      Shipping labels you can print at home, with big discounts
                      on postage.
                    </li>
                    <li>
                      Seller protection and customer support to help you sell
                      your stuff.
                    </li>
                  </ul>
                </figure>
              </div>
              <div className="ps-section__highlight">
                <img src="images/vendor-4.png" alt="martfury" />
                <figure>
                  <p>
                    We process payments with PayPal, an external payments
                    platform that allows you to process transactions with a
                    variety of payment methods. Funds from PayPal sales on
                    Martfury will be deposited into your PayPal account.
                  </p>
                </figure>
              </div>
              <div className="ps-section__footer">
                <p>
                  Listing fees are billed for 0.20 USD, so if your bank’s
                  currency is not USD, the amount in your currency may vary
                  based on changes in the exchange rate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-client-say">
          <div className="container">
            <div className="ps-section__header">
              <h3>What client say</h3>
              <div className="ps-section__nav">
                <a className="ps-carousel__prev" href="#">
                  <i className="icon-chevron-left" />
                </a>
                <a className="ps-carousel__next" href="#">
                  <i className="icon-chevron-right" />
                </a>
              </div>
            </div>
            <div className="ps-section__content">
              {/* Swiper Structure - keeping your existing classes */}
              <div className="swiper ps-carousel outside">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="ps-block--testimonial">
                      <div className="ps-block__header">
                        <img src="images/1.jpg" alt="martfury" />
                      </div>
                      <div className="ps-block__content">
                        <i className="icon-quote-close" />
                        <h4>
                          Kanye West<span>Head Chef at BBQ Restaurant</span>
                        </h4>
                        <p>
                          Sed elit quam, iaculis sed semper sit amet udin vitae
                          nibh. at magna akal semperFusce commodo molestie
                          luctus.Lorem ipsum Dolor tusima olatiup.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="ps-block--testimonial">
                      <div className="ps-block__header">
                        <img src="images/2.png" alt="martfury" />
                      </div>
                      <div className="ps-block__content">
                        <i className="icon-quote-close" />
                        <h4>
                          Anabella Kleva<span>Boss at TocoToco</span>
                        </h4>
                        <p>
                          Sed elit quam, iaculis sed semper sit amet udin vitae
                          nibh. at magna akal semperFusce commodo molestie
                          luctus.Lorem ipsum Dolor tusima olatiup.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="ps-block--testimonial">
                      <div className="ps-block__header">
                        <img src="images/3.jpg" alt="martfury" />
                      </div>
                      <div className="ps-block__content">
                        <i className="icon-quote-close" />
                        <h4>
                          William Roles<span>Head Chef at BBQ Restaurant</span>
                        </h4>
                        <p>
                          Sed elit quam, iaculis sed semper sit amet udin vitae
                          nibh. at magna akal semperFusce commodo molestie
                          luctus.Lorem ipsum Dolor tusima olatiup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add Pagination */}
                <div className="swiper-pagination" />
                {/* Add Navigation */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
              {/* Swiper JS */}
            </div>
          </div>
        </div>
        <div className="ps-section--vendor ps-vendor-faqs">
          <div className="container">
            <div className="ps-section__header">
              <p>FREQUENTLY ASKED QUESTIONS</p>
              <h4>Here are some common questions about selling on Martfury</h4>
            </div>
            <div className="ps-section__content">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <figure>
                    <figcaption>How do fees work on Martfury?</figcaption>
                    <p>
                      Joining and starting a shop on Martfury is free. There are
                      three basic selling fees: a listing fee, a transaction
                      fee, and a payment processing fee.
                    </p>
                    <p>
                      It costs USD 0.20 to publish a listing to the marketplace.
                      A listing lasts for four months or until the item is sold.
                      Once an item sells, there is a 3.5% transaction fee on the
                      sale price (not including shipping costs). If you accept
                      payments with PayPal, there is also a payment processing
                      fee based on their fee structure.
                    </p>
                    <p>
                      Listing fees are billed for $0.20 USD, so if your bank’s
                      currency is not USD, the amount may differ based on
                      changes in the exchange rate.
                    </p>
                  </figure>
                  <figure>
                    <figcaption>
                      What do I need to do to create a shop?
                    </figcaption>
                    <p>
                      It&apos;s easy to set up a shop on Martfury. Create an
                      Martfury account (if you don&apos;t already have one), set
                      your shop location and currency, choose a shop name,
                      create a listing, set a payment method (how you want to be
                      paid), and finally set a billing method (how you want to
                      pay your Martfuryfees).
                    </p>
                  </figure>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <figure>
                    <figcaption>How do I get paid?</figcaption>
                    <p>
                      If you accept payments with PayPal, funds from PayPal
                      sales on Martfury will be deposited into your PayPal
                      account. We encourage sellers to use a PayPal Business
                      account and not a Personal account, as personal accounts
                      are subject to monthly receiving limits and cannot accept
                      payments from buyers that are funded by a credit card.
                    </p>
                    <p>
                      It costs USD 0.20 to publish a listing to the marketplace.
                      A listing lasts for four months or until the item is sold.
                      Once an item sells, there is a 3.5% transaction fee on the
                      sale price (not including shipping costs). If you accept
                      payments with PayPal, there is also a payment processing
                      fee based on their fee structure.
                    </p>
                    <p>
                      Listing fees are billed for $0.20 USD, so if your bank’s
                      currency is not USD, the amount may differ based on
                      changes in the exchange rate.
                    </p>
                  </figure>
                  <figure>
                    <figcaption>
                      Do I need a credit or debit card to create a shop?
                    </figcaption>
                    <p>
                      No, a credit or debit card is not required to create a
                      shop. To be verified as a seller you have the choice to
                      use either a credit card or to register via PayPal. You
                      will not incur any charges until you open your shop and
                      publish your listings.
                    </p>
                  </figure>
                  <figure>
                    <figcaption>What can I sell on Martfury?</figcaption>
                  </figure>
                  <p>
                    Martfury provides a marketplace for crafters, artists and
                    collectors to sell their handmade creations, vintage goods
                    (at least 20 years old), and both handmade and non-handmade
                    crafting supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="ps-section__footer">
              <p>Still have more questions? Feel free to contact us.</p>
              <a className="ps-btn" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div
          className="ps-vendor-banner bg--cover"
          style={{ backgroundImage: "url(images/vendor.jpg)" }}
        >
          <div className="ps-vendor-banner">
            <div className="container">
              <h2>
                Millions Of Shoppers Can&apos;t Wait To See What You Have In
                Store
              </h2>
              <a className="ps-btn ps-btn--lg" href="store-list.html">
                Start Selling
              </a>
            </div>
          </div>
        </div>
      </>

      <InfoStrip />
      <Footer />
    </>
  );
}

export default page;
