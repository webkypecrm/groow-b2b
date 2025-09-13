import React from "react";
import "../../styles/footer.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer id="main-footer">
        <div className="container" id="footer-content">
          {/* Main Categories Section */}
          <div id="footer-categories">
            <div className="row">
              {/* Marketplace */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-store category-icon"></i>
                  Marketplace
                </h6>
                <ul>
                  <li>
                    <Link href="#">Latest deals</Link>
                  </li>
                  <li>
                    <Link href="#">Stores</Link>
                  </li>
                  <li>
                    <Link href="#">Closing soon</Link>
                  </li>
                  <li>
                    <Link href="#">$1 reserve</Link>
                  </li>
                  <li>
                    <Link href="#">Home & Living</Link>
                  </li>
                </ul>
              </div>

              {/* Property */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-home category-icon"></i>
                  Property
                </h6>
                <ul>
                  <li>
                    <Link href="#">International property</Link>
                  </li>
                  <li>
                    <Link href="#">News & guides</Link>
                  </li>
                  <li>
                    <Link href="#">Sold Properties</Link>
                  </li>
                  <li>
                    <Link href="#">OneHub for agents</Link>
                  </li>
                  <li>
                    <Link href="#">Find/Link Real Estate Agent</Link>
                  </li>
                </ul>
              </div>

              {/* Motors */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-car category-icon"></i>
                  Motors
                </h6>
                <ul>
                  <li>
                    <Link href="#">Browse all cars</Link>
                  </li>
                  <li>
                    <Link href="#">Other vehicles</Link>
                  </li>
                  <li>
                    <Link href="#">Buying & Selling</Link>
                  </li>
                  <li>
                    <Link href="#">Dealer news & info</Link>
                  </li>
                  <li>
                    <Link href="#">Sell my car</Link>
                  </li>
                </ul>
              </div>

              {/* Jobs */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-briefcase category-icon"></i>
                  Jobs
                </h6>
                <ul>
                  <li>
                    <Link href="#">Browse categories</Link>
                  </li>
                  <li>
                    <Link href="#">Careers advice</Link>
                  </li>
                  <li>
                    <Link href="#">JobSmart</Link>
                  </li>
                  <li>
                    <Link href="#">Advertisers advice</Link>
                  </li>
                  <li>
                    <Link href="#">Salary guide</Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-tools category-icon"></i>
                  Services
                </h6>
                <ul>
                  <li>
                    <Link href="#">Trades</Link>
                  </li>
                  <li>
                    <Link href="#">Domestic services</Link>
                  </li>
                  <li>
                    <Link href="#">Events & entertainment</Link>
                  </li>
                  <li>
                    <Link href="#">Health & wellbeing</Link>
                  </li>
                  <li>
                    <Link href="#">List my services</Link>
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div className="col-md-2 col-sm-6 footer-category-column">
                <h6>
                  <i className="fas fa-users category-icon"></i>
                  Community
                </h6>
                <ul>
                  <li>
                    <Link href="#">Help</Link>
                  </li>
                  <li>
                    <Link href="#">Announcements</Link>
                  </li>
                  <li>
                    <Link href="#">Trust & safety</Link>
                  </li>
                  <li>
                    <Link href="#">Seller information</Link>
                  </li>
                  <li>
                    <Link href="#">Help center community</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brands Section */}
          <div id="footer-brands">
            <div id="footer-brands-list">
              <Link href="#">Trade Me Insurance</Link>
              <Link href="#">homes.co.nz</Link>
              <Link href="#">MotorWeb</Link>
              <Link href="#">Holiday Houses</Link>
              <Link href="#">FindSomeone</Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div id="footer-bottom">
            <div className="d-flex flex-column flex-md-row justify-content-between w-100 align-items-center">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div id="footer-copyright">© 2005 Trade Me Limited</div>
                <div id="footer-links" className="ms-md-4">
                  <Link href="#">Desktop site</Link>
                  <Link href="#">About Us</Link>
                  <Link href="#">Careers</Link>
                  <Link href="#">Advertise</Link>
                  <Link href="#">Privacy policy</Link>
                  <Link href="#">Terms & conditions</Link>
                  <Link href="#">Contact Us</Link>
                </div>
              </div>
              <div id="footer-social">
                <Link href="#" aria-label="Volume">
                  <i className="fas fa-volume-up"></i>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
