"use client";
import Link from "next/link";
import Image from "next/image";
import "../../styles/info-strip.css";

export default function InfoStrip() {
  return (
    <div id="trademe-wrapper">
      {/* Notification Bar */}
      <div id="header-notification" className="bg-gray-100 py-2">
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
      <header id="main-header" className="border-b bg-white">
        <div className="container">
          <div
            id="header-container"
            className="flex items-center justify-between py-3"
          >
            {/* Logo */}
            <div id="header-logo">
              <Link href="/" className="ps-logo">
                <Image
                  src="/images/image__8_-removebg-preview.png"
                  alt="Logo"
                  width={180}
                  height={60}
                  style={{ maxWidth: "45%", height: "auto" }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              id="header-navigation"
              className="hidden items-center gap-6 md:flex"
            >
              <Link
                href="#"
                className="header-nav-item flex items-center gap-1"
              >
                <i className="fas fa-pen" />
                Start a listing
              </Link>
              <Link
                href="#"
                className="header-nav-item flex items-center gap-1"
              >
                <i className="fas fa-heart" />
                Watchlist
              </Link>
              <Link
                href="#"
                className="header-nav-item flex items-center gap-1"
              >
                <i className="fas fa-star" />
                Favourites
              </Link>
              <Link
                href="#"
                className="header-nav-item flex items-center gap-1"
              >
                <i className="fas fa-sign-in-alt" />
                Log in
              </Link>
              <Link
                href="#"
                className="header-nav-item flex items-center gap-1"
              >
                <i className="fas fa-user-plus" />
                Sign up
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
