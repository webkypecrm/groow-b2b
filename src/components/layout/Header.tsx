"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "../../styles/header.css";

const Header: React.FC = () => {
  const [isStickyHeaderVisible, setIsStickyHeaderVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDepartmentMenuOpen, setIsDepartmentMenuOpen] = useState(false);
  const [isDepartmentMenuOpenSticky, setIsDepartmentMenuOpenSticky] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsStickyHeaderVisible(true);
      } else {
        setIsStickyHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDepartmentMenu = () => {
    setIsDepartmentMenuOpen(!isDepartmentMenuOpen);
  };

  const toggleDepartmentMenuSticky = () => {
    setIsDepartmentMenuOpenSticky(!isDepartmentMenuOpenSticky);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tenor+Sans&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Header */}
      <header
        className={`header header--1 ${isStickyHeaderVisible ? "hidenn" : ""}`}
        id="header1"
      >
        <div className="header__top new-header0tip">
          <div className="ps-container">
            <div className="header__left">
              <Link className="ps-logo" href="/">
                <img
                  src="/images/image__8_-removebg-preview.png"
                  alt=""
                  style={{ maxWidth: "45%" }}
                />
              </Link>

              <div className="menu--product-categories">
                <div className="menu__toggle" onClick={toggleDepartmentMenu}>
                  <i className="icon-menu"></i>
                  <span>Shop by Department</span>
                </div>
                {isDepartmentMenuOpen && (
                  <div className="menu__content">
                    <ul className="menu--dropdown new-menu-dropdown">
                      <li>
                        <Link href="/shop">
                          <i className="icon-star"></i>Hot Promotions
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-laundry"></i>Consumer Electronic
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Home Audio & Theathers</Link>
                              </li>
                              <li>
                                <Link href="/shop">TV & Videos</Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Camera, Photos & Videos
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Cellphones & Accessories
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">Headphones</Link>
                              </li>
                              <li>
                                <Link href="/shop">Videosgames</Link>
                              </li>
                              <li>
                                <Link href="/shop">Wireless Speakers</Link>
                              </li>
                              <li>
                                <Link href="/shop">Office Electronic</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories & Parts</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Digital Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Audio & Video Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Batteries</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-shirt"></i>Clothing & Apparel
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-lampshade"></i>Home, Garden &
                          Kitchen
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-heart-pulse"></i>Health & Beauty
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-diamond2"></i>Yewelry & Watches
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-desktop"></i>Computer & Technology
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer & Technologies</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Computer & Tablets</Link>
                              </li>
                              <li>
                                <Link href="/shop">Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Monitors</Link>
                              </li>
                              <li>
                                <Link href="/shop">Networking</Link>
                              </li>
                              <li>
                                <Link href="/shop">Drive & Storages</Link>
                              </li>
                              <li>
                                <Link href="/shop">Computer Components</Link>
                              </li>
                              <li>
                                <Link href="/shop">Security & Protection</Link>
                              </li>
                              <li>
                                <Link href="/shop">Gaming Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baby-bottle"></i>Babies & Moms
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baseball"></i>Sport & Outdoor
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-smartphone"></i>Phones &
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-book2"></i>Books & Office
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-car-siren"></i>Cars & Motocycles
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-wrench"></i>Home Improvements
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-tag"></i>Vouchers & Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="header__center new-search-bar">
              <form className="ps-form--quick-search" method="get">
                <div className="form-group--nest new-form-group--nest">
                  <input
                    className="form-control"
                    placeholder="Search something..."
                    type="text"
                  />
                  <button>
                    <i className="icon-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="header__right">
              <div className="header__actions new-header__actions">
                <Link className="header__extra" href="/compare">
                  <i className="fa-solid fa-chart-bar compare-icon"></i>
                  <span>
                    <i>0</i>
                  </span>
                </Link>
                <Link className="header__extra" href="/wishlist">
                  <i className="icon-heart"></i>
                  <span>
                    <i>0</i>
                  </span>
                </Link>

                <div className="ps-cart--mini">
                  <Link className="header__extra" href="/cart">
                    <i className="icon-bag2"></i>
                    <span>
                      <i>0</i>
                    </span>
                  </Link>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <span>No products in cart</span>
                    </div>
                  </div>
                </div>

                <div className="ps-block--user-header">
                  <div className="ps-block__left">
                    <i className="icon-user"></i>
                  </div>
                  <div className="ps-block__right new-ps-block__right">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navigation">
          <div className="ps-container">
            <div className="navigation__left">
              <div className="menu--product-categories">
                <div className="menu__toggle" onClick={toggleDepartmentMenu}>
                  <i className="icon-menu"></i>
                  <span>Shop by Department</span>
                </div>
                {isDepartmentMenuOpen && (
                  <div className="menu__content">
                    <ul className="menu--dropdown new-menu-dropdown">
                      <li>
                        <Link href="/shop">
                          <i className="icon-star"></i>Hot Promotions
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-laundry"></i>Consumer Electronic
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Home Audio & Theathers</Link>
                              </li>
                              <li>
                                <Link href="/shop">TV & Videos</Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Camera, Photos & Videos
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Cellphones & Accessories
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">Headphones</Link>
                              </li>
                              <li>
                                <Link href="/shop">Videosgames</Link>
                              </li>
                              <li>
                                <Link href="/shop">Wireless Speakers</Link>
                              </li>
                              <li>
                                <Link href="/shop">Office Electronic</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories & Parts</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Digital Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Audio & Video Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Batteries</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-shirt"></i>Clothing & Apparel
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-lampshade"></i>Home, Garden &
                          Kitchen
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-heart-pulse"></i>Health & Beauty
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-diamond2"></i>Yewelry & Watches
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-desktop"></i>Computer & Technology
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer & Technologies</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Computer & Tablets</Link>
                              </li>
                              <li>
                                <Link href="/shop">Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Monitors</Link>
                              </li>
                              <li>
                                <Link href="/shop">Networking</Link>
                              </li>
                              <li>
                                <Link href="/shop">Drive & Storages</Link>
                              </li>
                              <li>
                                <Link href="/shop">Computer Components</Link>
                              </li>
                              <li>
                                <Link href="/shop">Security & Protection</Link>
                              </li>
                              <li>
                                <Link href="/shop">Gaming Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baby-bottle"></i>Babies & Moms
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baseball"></i>Sport & Outdoor
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-smartphone"></i>Phones &
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-book2"></i>Books & Office
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-car-siren"></i>Cars & Motocycles
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-wrench"></i>Home Improvements
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-tag"></i>Vouchers & Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="navigation__right">
              <ul className="menu">
                <li className="menu-list">
                  <Link href="/product-detail-page">Products</Link>
                </li>
                <li className="menu-list">
                  <Link href="/services">Services</Link>
                </li>
                <li className="menu-list">
                  <Link href="/listings">Listings</Link>
                </li>
                <li className="menu-list">
                  <Link href="/media">Media</Link>
                </li>
              </ul>

              <ul className="navigation__extra new-nwigation-for-extra">
                <li>
                  <Link href="/become-a-vender">Join as a supplier</Link>
                </li>
                <li>
                  <Link href="/start-listing">Start a listing</Link>
                </li>
                <li>
                  <Link href="/help">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Sticky Header */}
      <header
        className={`header header--1 header--sticky ${
          isStickyHeaderVisible ? "show" : ""
        }`}
        id="header2"
      >
        <div className="header__top new-headre-top-srticy">
          <div className="ps-container">
            <div className="header__left">
              <Link className="ps-logo" href="/">
                <img src="/static/img/logo_light.png" alt="" />
              </Link>
              <div className="menu--product-categories">
                <div
                  className="menu__toggle"
                  onClick={toggleDepartmentMenuSticky}
                >
                  <i className="icon-menu"></i>
                  <span>Shop by Department</span>
                </div>
                {isDepartmentMenuOpenSticky && (
                  <div className="menu__content">
                    <ul className="menu--dropdown new-menu-dropdown">
                      <li>
                        <Link href="/shop">
                          <i className="icon-star"></i>Hot Promotions
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-laundry"></i>Consumer Electronic
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Home Audio & Theathers</Link>
                              </li>
                              <li>
                                <Link href="/shop">TV & Videos</Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Camera, Photos & Videos
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Cellphones & Accessories
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">Headphones</Link>
                              </li>
                              <li>
                                <Link href="/shop">Videosgames</Link>
                              </li>
                              <li>
                                <Link href="/shop">Wireless Speakers</Link>
                              </li>
                              <li>
                                <Link href="/shop">Office Electronic</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories & Parts</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Digital Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Audio & Video Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Batteries</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-shirt"></i>Clothing & Apparel
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-lampshade"></i>Home, Garden &
                          Kitchen
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-heart-pulse"></i>Health & Beauty
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-diamond2"></i>Yewelry & Watches
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-desktop"></i>Computer & Technology
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer & Technologies</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Computer & Tablets</Link>
                              </li>
                              <li>
                                <Link href="/shop">Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Monitors</Link>
                              </li>
                              <li>
                                <Link href="/shop">Networking</Link>
                              </li>
                              <li>
                                <Link href="/shop">Drive & Storages</Link>
                              </li>
                              <li>
                                <Link href="/shop">Computer Components</Link>
                              </li>
                              <li>
                                <Link href="/shop">Security & Protection</Link>
                              </li>
                              <li>
                                <Link href="/shop">Gaming Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baby-bottle"></i>Babies & Moms
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baseball"></i>Sport & Outdoor
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-smartphone"></i>Phones &
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-book2"></i>Books & Office
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-car-siren"></i>Cars & Motocycles
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-wrench"></i>Home Improvements
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-tag"></i>Vouchers & Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="header__center new-search-bar">
              <form className="ps-form--quick-search" method="get">
                <div className="form-group--nest new-form-group--nest">
                  <input
                    className="form-control"
                    placeholder="Search something..."
                    type="text"
                  />
                  <button>
                    <i className="icon-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="header__right">
              <div className="header__actions new-header__actions-2">
                <Link className="header__extra" href="/compare">
                  <i className="fa-solid fa-chart-bar compare-icon"></i>
                  <span>
                    <i>0</i>
                  </span>
                </Link>
                <Link className="header__extra" href="/wishlist">
                  <i className="icon-heart"></i>
                  <span>
                    <i>0</i>
                  </span>
                </Link>

                <div className="ps-cart--mini">
                  <Link className="header__extra" href="/cart">
                    <i className="icon-bag2"></i>
                    <span>
                      <i>0</i>
                    </span>
                  </Link>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <span>No products in cart</span>
                    </div>
                  </div>
                </div>

                <div className="ps-block--user-header new-ps-block--user-header-2">
                  <div className="ps-block__left">
                    <i className="icon-user"></i>
                  </div>
                  <div className="ps-block__right new-ps-block__right">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation new-navigation-display">
          <div className="ps-container">
            <div className="navigation__left">
              <div className="menu--product-categories">
                <div
                  className="menu__toggle"
                  onClick={toggleDepartmentMenuSticky}
                >
                  <i className="icon-menu"></i>
                  <span>Shop by Department</span>
                </div>
                {isDepartmentMenuOpenSticky && (
                  <div className="menu__content">
                    <ul className="menu--dropdown">
                      <li>
                        <Link href="/shop">
                          <i className="icon-star"></i>Hot Promotions
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-laundry"></i>Consumer Electronic
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Home Audio & Theathers</Link>
                              </li>
                              <li>
                                <Link href="/shop">TV & Videos</Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Camera, Photos & Videos
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">
                                  Cellphones & Accessories
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop">Headphones</Link>
                              </li>
                              <li>
                                <Link href="/shop">Videosgames</Link>
                              </li>
                              <li>
                                <Link href="/shop">Wireless Speakers</Link>
                              </li>
                              <li>
                                <Link href="/shop">Office Electronic</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories & Parts</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Digital Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Audio & Video Cables</Link>
                              </li>
                              <li>
                                <Link href="/shop">Batteries</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-shirt"></i>Clothing & Apparel
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-lampshade"></i>Home, Garden &
                          Kitchen
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-heart-pulse"></i>Health & Beauty
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-diamond2"></i>Yewelry & Watches
                        </Link>
                      </li>
                      <li className="menu-item-has-children has-mega-menu">
                        <Link href="/shop">
                          <i className="icon-desktop"></i>Computer & Technology
                        </Link>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer & Technologies</h4>
                            <ul className="mega-menu__list">
                              <li>
                                <Link href="/shop">Computer & Tablets</Link>
                              </li>
                              <li>
                                <Link href="/shop">Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Monitors</Link>
                              </li>
                              <li>
                                <Link href="/shop">Networking</Link>
                              </li>
                              <li>
                                <Link href="/shop">Drive & Storages</Link>
                              </li>
                              <li>
                                <Link href="/shop">Computer Components</Link>
                              </li>
                              <li>
                                <Link href="/shop">Security & Protection</Link>
                              </li>
                              <li>
                                <Link href="/shop">Gaming Laptop</Link>
                              </li>
                              <li>
                                <Link href="/shop">Accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baby-bottle"></i>Babies & Moms
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-baseball"></i>Sport & Outdoor
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-smartphone"></i>Phones &
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-book2"></i>Books & Office
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-car-siren"></i>Cars & Motocycles
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-wrench"></i>Home Improvements
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <i className="icon-tag"></i>Vouchers & Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="navigation__right">
              <ul className="menu">
                <li className="menu-item-has-children">
                  <Link href="/">Home</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children dropdown">
                      <Link href="/">Marketplace Full Width</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/auto-part">Home Auto Parts</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/technology">Home Technology</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/market-place">Home Marketplace V1</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/market-place-2">
                        Home Marketplace V2
                      </Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/market-place-3">
                        Home Marketplace V3
                      </Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/market-place-4">
                        Home Marketplace V4
                      </Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/electronic">Home Electronic</Link>
                    </li>
                    <li className="menu-item-has-children dropdown">
                      <Link href="/home/furniture">Home Furniture</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children has-mega-menu">
                  <Link href="/shop">Shop</Link>
                  <div className="mega-menu">
                    <div className="mega-menu__column">
                      <h4>Catalog Pages</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/shop">Shop Default</Link>
                        </li>
                        <li>
                          <Link href="/shop/shop-fullwidth">
                            Shop Fullwidth
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/shop-categories">
                            Shop Categories
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/shop-sidebar">Shop Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/shop/shop-sidebar-without-banner">
                            Shop Without Banner
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/shop-carousel">Shop Carousel</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>Product Layout</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/product/15">Default</Link>
                        </li>
                        <li>
                          <Link href="/product/extended/15">Extended</Link>
                        </li>
                        <li>
                          <Link href="/product/full-content/15">
                            Full Content
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/boxed/15">Boxed</Link>
                        </li>
                        <li>
                          <Link href="/product/sidebar/15">Sidebar</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>Product Types</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/product/3">Simple</Link>
                        </li>
                        <li>
                          <Link href="/product/image-swatches/11">
                            Image swatches
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/countdown/10">Countdown</Link>
                        </li>
                        <li>
                          <Link href="/product/affiliate/7">Affiliate</Link>
                        </li>
                        <li>
                          <Link href="/product/on-sale/7">On sale</Link>
                        </li>
                        <li>
                          <Link href="/product/groupped/22">Grouped</Link>
                        </li>
                        <li>
                          <Link href="/product/out-of-stock/7">
                            Out Of Stock
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>Ecomerce Pages</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/account/shopping-cart">
                            Shopping Cart
                          </Link>
                        </li>
                        <li>
                          <Link href="/account/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link href="/account/wishlist">Whishlist</Link>
                        </li>
                        <li>
                          <Link href="/account/compare">Compare</Link>
                        </li>
                        <li>
                          <Link href="/account/order-tracking">
                            Order Tracking
                          </Link>
                        </li>
                        <li>
                          <Link href="/account/login">My Account</Link>
                        </li>
                        <li>
                          <Link href="/account/login">Login / Register</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children has-mega-menu">
                  <Link href="/">Pages</Link>
                  <div className="mega-menu">
                    <div className="mega-menu__column">
                      <h4>Basic Page</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/page/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="/page/contact-us">Contact</Link>
                        </li>
                        <li>
                          <Link href="/page/faqs">Faqs</Link>
                        </li>
                        <li>
                          <Link href="/page/page-404">404 Page</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>Vendor Pages</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/vendor/become-a-vendor">
                            Become a Vendor
                          </Link>
                        </li>
                        <li>
                          <Link href="/store/global-office">Vendor Store</Link>
                        </li>
                        <li>
                          <Link href="/stores">Store List</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children has-mega-menu">
                  <Link href="/blog">Blogs</Link>
                  <div className="mega-menu">
                    <div className="mega-menu__column">
                      <h4>Blog Layout</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/blog">Grid</Link>
                        </li>
                        <li>
                          <Link href="/blog/blog-small-thumbnail">
                            Small Thumb
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog/blog-left-sidebar">
                            Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog/blog-right-sidebar">
                            Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>Single Blog</h4>
                      <ul className="mega-menu__list">
                        <li>
                          <Link href="/post/default">Single 1</Link>
                        </li>
                        <li>
                          <Link href="/post/detail-2">Single 2</Link>
                        </li>
                        <li>
                          <Link href="/post/detail-3">Single 3</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navigation__extra">
                <li>
                  <Link href="/vendor/become-a-vendor">Sell on Martfury</Link>
                </li>
                <li>
                  <Link href="/account/order-tracking">Track your order</Link>
                </li>
                <li>
                  <div className="ps-dropdown">
                    USD
                    <ul className="ps-dropdown-menu">
                      <li>
                        <Link href="/">USD</Link>
                      </li>
                      <li>
                        <Link href="/">EURO</Link>
                      </li>
                      <li>
                        <Link href="/">GBP</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="ps-dropdown language">
                    <Link href="#">
                      <img src="/static/img/flag/en.png" alt="martfury" />
                      English
                    </Link>
                    <ul className="ps-dropdown-menu">
                      <li>
                        <Link href="#">
                          <img
                            src="/static/img/flag/germany.png"
                            alt="martfury"
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <img src="/static/img/flag/fr.png" alt="martfury" />
                          France
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="header header--mobile">
        <div className="header__top">
          <div className="header__left">
            <p>Welcome to Grow Online Shopping Store !</p>
          </div>
          <div className="header__right">
            <ul className="navigation__extra">
              <li>
                <Link href="/become-vendor">Sell on Grow</Link>
              </li>
              <li>
                <Link href="/order-tracking">Track your order</Link>
              </li>
              <li>
                <div className="ps-dropdown">
                  USD
                  <ul className="ps-dropdown-menu">
                    <li>
                      <Link href="/">USD</Link>
                    </li>
                    <li>
                      <Link href="/">EURO</Link>
                    </li>
                    <li>
                      <Link href="/">GBP</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="ps-dropdown language">
                  <Link href="#">
                    <img src="/static/img/flag/en.png" alt="grow" />
                    English
                  </Link>
                  <ul className="ps-dropdown-menu">
                    <li>
                      <Link href="#">
                        <img src="/static/img/flag/germany.png" alt="grow" />
                        Germany
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img src="/static/img/flag/fr.png" alt="grow" />
                        France
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation--mobile d-flex">
          <div className="navigation__left text-start">
            <Link className="ps-logo text-start d-flex" href="/">
              <img src="/images/image.png" alt="" style={{ maxWidth: "40%" }} />
            </Link>
          </div>
          <div className="navigation__right navigation__right-2">
            <Link className="header__extra" href="/cart">
              <i className="icon-bag2"></i>
              <span>
                <i>0</i>
              </span>
            </Link>
            <div className="header__extra">
              <i className="icon-user"></i>
            </div>
          </div>
        </div>
        <div className="ps-search--mobile ps-search--mobile-2">
          <form className="ps-form--search-mobile" method="get">
            <div className="form-group--nest">
              <input
                className="form-control"
                type="text"
                placeholder="Search something..."
              />
              <button>
                <i className="icon-magnifier"></i>
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
