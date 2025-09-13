"use client";

import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <section className="ps-download-app">
      <div className="ps-container">
        <div className="ps-block--download-app">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Image */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mb-lg-0 text-center text-lg-start">
                <div className="ps-block__thumbnail d-flex justify-content-center justify-content-lg-start">
                  <Image
                    src="/images/appp.png"
                    alt="Groow mobile shopping app preview"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="ps-block__content">
                  <h3>Download Groow App Now!</h3>
                  <p>
                    Shop faster and easier with our mobile app. Enter your email
                    to get the download link directly on your phone.
                  </p>

                  {/* Subscribe Form */}
                  <form
                    className="ps-form--download-app"
                    onSubmit={(e) => e.preventDefault()}
                    aria-label="Download Groow app form"
                  >
                    <div className="form-group--nest d-flex">
                      <input
                        className="form-control"
                        placeholder="Enter your email"
                        type="email"
                        required
                        aria-label="Email address"
                      />
                      <button type="submit" className="ps-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>

                  {/* Download Links */}
                  <p className="download-link d-flex flex-wrap gap-2 mt-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.groow">
                      <Image
                        src="/images/playstore.png"
                        alt="Download Groow app on Google Play"
                        width={160}
                        height={50}
                        loading="lazy"
                      />
                    </Link>
                    <Link href="https://apps.apple.com/app/id1234567890">
                      <Image
                        src="/images/app-store.png"
                        alt="Download Groow app on the Apple App Store"
                        width={160}
                        height={50}
                        loading="lazy"
                      />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
