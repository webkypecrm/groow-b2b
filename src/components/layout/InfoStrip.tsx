"use client";
import Link from "next/link";
import Image from "next/image";
import "../../styles/info-strip.css";
import { useState } from "react";
export default function InfoStrip() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [deptOpen, setDeptOpen] = useState(false);

      const toggleDepartmentMenuSticky = () => {
    setDeptOpen(!deptOpen);
  };


  const toggleTradeMenuMobile = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="trademe-wrapper">
      {/* Notification Bar */}
      <div id="header-notification" className="bg-gray-100 py-2" style={{fontSize:"15px"}}>
        <div className="container d-flex flex-wrap items-center justify-content-center text-sm">
          <div className="notification-text">
            We are upgrading some of our systems
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="notification-link flex items-center gap-1"
            >
              <i className="fas fa-info-circle" /> Learn more
            </Link>
            <Link
              href="#"
              className="notification-link flex items-center gap-1"
            >
              <i className="fas fa-comment" /> Tell us what you think
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
   <header id="main-header" className="border-bottom bg-white">
      <div className="container">
        <div
          id="header-container"
          className="d-flex align-items-center justify-content-between py-3"
        >
          {/* Logo */}
          <div id="header-logo">
            <Link href="/" className="ps-logo">
              <Image
                src="/images/image__8_-removebg-preview.png"
                alt="Logo"
                width={180}
                height={60}
                style={{ maxWidth: "45%", height: "auto",  backgroundColor:"blue" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            id="header-navigation"
            className="d-none d-md-flex align-items-center gap-3"
          >
            <Link href="#" className="text-dark text-decoration-none">
              <i className="fas fa-pen me-1" />
              Start a listing
            </Link>
            <Link href="#" className="text-dark text-decoration-none">
              <i className="fas fa-heart me-1" />
              Watchlist
            </Link>
            <Link href="#" className="text-dark text-decoration-none">
              <i className="fas fa-star me-1" />
              Favourites
            </Link>
            <Link href="#" className="text-dark text-decoration-none">
              <i className="fas fa-sign-in-alt me-1" />
              Log in
            </Link>
            <Link href="#" className="text-dark text-decoration-none">
              <i className="fas fa-user-plus me-1" />
              Sign up
            </Link>
          </nav>

          {/* Mobile Toggles */}
          <div className="d-flex gap-2 d-md-none">
            {/* Shop by Department */}
            <div
              className="menu__toggle btn btn-outline-secondary"
              onClick={toggleDepartmentMenuSticky}
              aria-controls="offcanvasRight"
              aria-expanded={deptOpen ? "true" : "false"}
                style={{backgroundColor:"blue"}} 
            >
              <i className="icon-menu"></i>
              <span className="d-sm-block d-none">Shop by Department</span>
            </div>

            {/* Main Mobile Menu */}
            <button
              id="mobile-menu-toggle"
              className="btn btn-outline-dark"
              onClick={toggleTradeMenuMobile}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <i className="fas fa-times"  style={{backgroundColor:"blue"}} />
            </button>

              <button
    id="mobile-menu-toggle"
    className="btn btn-outline-dark d-md-none"
    onClick={toggleTradeMenuMobile}
  >
    <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
  </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Collapse */}
      <div
        id="mobile-menu"
        className={`collapse ${menuOpen ? "show" : ""} mt-2`}
      >
        <nav className="d-flex flex-column p-3 bg-light">
          <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-plus me-2" />
            Start a listing
          </a>
          <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-heart me-2" />
            Watchlist
          </a>
          <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-star me-2" />
            Favourites
          </a>
          <a href="#" className="btn btn-light text-start">
            <i className="fas fa-user-plus me-2" />
            Sign up
          </a>
        </nav>
      </div>

      {/* Shop by Department Offcanvas */}
      <div
        className={`offcanvas offcanvas-end ${deptOpen ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ visibility: deptOpen ? "visible" : "hidden",  marginTop:"80px" }}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={() => setDeptOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
           <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-plus me-2" />
            Start a listing
          </a>
            </li>
            <li>
                  <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-heart me-2" />
            Watchlist
          </a>
            </li>
            <li>
           <a href="#" className="btn btn-light text-start mb-2">
            <i className="fas fa-star me-2" />
            Favourites
          </a>
            </li>
              <li>
          <a href="#" className="btn btn-light text-start">
            <i className="fas fa-user-plus me-2" />
            Sign up
          </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    </div>
  );
}
