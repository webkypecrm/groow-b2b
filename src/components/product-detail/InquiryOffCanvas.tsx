"use client";
import { forwardRef } from "react";
import { useEffect } from "react";
import "../../styles/product-detail.css";
interface InquiryOffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryOffcanvas = forwardRef<HTMLDivElement, InquiryOffcanvasProps>(
  ({ isOpen, onClose }, ref) => {
    useEffect(() => {
      if (isOpen) {
        // Add class to show offcanvas
        document.body.classList.add("offcanvas-backdrop");
      } else {
        document.body.classList.remove("offcanvas-backdrop");
      }
    }, [isOpen]);

    return (
      <div
        ref={ref}
        className={`offcanvas new-offcanvas offcanvas-end ${
          isOpen ? "show" : ""
        }`}
        tabIndex={-1}
        id="inquiryOffcanvas"
        aria-labelledby="inquiryOffcanvasLabel"
        style={{ width: "900px", visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="inquiryOffcanvasLabel">
            Send Inquiry
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div
            id="alibaba-inquiry-wrapper"
            className="d-flex justify-content-center align-items-center p-3"
          >
            <div className="inquiry-modal">
              <div className="inquiry-body">
                {/* Supplier Info */}
                <div className="supplier-info">
                  <div className="supplier-avatar">F</div>
                  <div>
                    <span className="supplier-name">Jemypher Chiang</span>
                    <span className="supplier-name">
                      Xiamen Flyway Trading Co., Ltd.
                    </span>
                  </div>
                </div>

                {/* Product Preview */}
                <div className="product-preview">
                  <img
                    src="images/vendor-150x150.jpg"
                    alt="Product"
                    className="product-image"
                  />
                  <div className="product-details">
                    <h6>
                      Jogging Suits Wholesale 3XL Sport Cloth Women Sweatsuits
                      for Women Sets 2 Piece Sweatpants and Hoodie Set Women
                    </h6>
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="quantity-section">
                  <span className="quantity-label">Quantity</span>
                  <div>
                    <input type="number" value={1} className="quantity-input" />
                    <select className="unit-select">
                      <option>Ampere/Amp...</option>
                      <option>Pieces</option>
                      <option>Sets</option>
                    </select>
                  </div>
                </div>

                {/* Inquiry Text Area */}
                <textarea
                  className="inquiry-textarea"
                  placeholder="Describe your sourcing requirements for product attributes, quantity, or other supplier services. Or, write faster with our Smart Assistant below."
                ></textarea>

                {/* Smart Assistant */}
                <div className="smart-assistant">
                  <div className="assistant-label">
                    <div className="assistant-icon"></div>
                    Try inquiry questions suggested by Smart Assistant
                  </div>
                  <div className="suggestion-buttons">
                    <button className="suggestion-btn">
                      💡 Do you offer eco-friendly options?
                    </button>
                    <button className="suggestion-btn">
                      📏 Do you have size charts for all items?
                    </button>
                    <button className="suggestion-btn">
                      💰 Do you offer bulk order discounts?
                    </button>
                  </div>
                  <button className="custom-topic-btn">
                    <i className="fas fa-edit me-2"></i>
                    Enter other topics
                  </button>
                </div>

                {/* Attachment */}
                <div className="attachment-section">
                  <button className="attachment-btn">
                    <i className="fas fa-paperclip"></i> Add attachment
                  </button>
                </div>

                {/* Send Button */}
                <button className="ps-btn">Send inquiry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default InquiryOffcanvas;
