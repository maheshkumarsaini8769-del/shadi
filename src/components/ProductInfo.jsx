"use client";

import React, { useState } from "react";
import { Star, Heart, Truck, RotateCcw, ShieldCheck, Sparkles, Scissors, Feather, Gem } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { reviewsData } from "@/data/products";

export default function ProductInfo({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, setIsSizeGuideOpen } = useShop();

  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : "Royal Red"
  );
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  const isFavorite = isInWishlist(product.id);

  const formatPrice = (amt) => "₹" + amt.toLocaleString("en-IN");

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Title & Wishlist */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2.35rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "var(--text-main)",
              lineHeight: 1.2
            }}
          >
            {product.name}
          </h1>
          {product.subtitle && (
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.35rem" }}>
              {product.subtitle}
            </p>
          )}
        </div>

        <button
          onClick={() => toggleWishlist(product)}
          aria-label="Wishlist"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "1px solid #DFD5C8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isFavorite ? "var(--maroon)" : "var(--text-secondary)",
            backgroundColor: "#FFFFFF",
            flexShrink: 0
          }}
        >
          <Heart size={20} fill={isFavorite ? "var(--maroon)" : "none"} strokeWidth={1.8} />
        </button>
      </div>

      {/* Price & Discount */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.9rem",
            fontWeight: 700,
            color: "var(--maroon)"
          }}
        >
          {formatPrice(product.price)}
        </span>

        {product.originalPrice && (
          <span
            style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              textDecoration: "line-through"
            }}
          >
            {formatPrice(product.originalPrice)}
          </span>
        )}

        {product.discount && (
          <span
            style={{
              backgroundColor: "rgba(115, 26, 43, 0.1)",
              color: "var(--maroon)",
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "0.25rem 0.6rem",
              borderRadius: "2px",
              letterSpacing: "0.05em"
            }}
          >
            ({product.discount})
          </span>
        )}
      </div>

      {/* Rating & Reviews */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <div style={{ display: "flex", color: "#D4AF37" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="#D4AF37" strokeWidth={0} />
          ))}
        </div>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)" }}>
          {product.rating || 4.8}
        </span>
        <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
          ({product.reviews || 120} reviews)
        </span>
      </div>

      {/* Short Description */}
      <p
        style={{
          fontSize: "0.92rem",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
          borderTop: "1px solid #ECE3D6",
          paddingTop: "1.2rem"
        }}
      >
        {product.description}
      </p>

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-main)" }}>
            <span style={{ color: "var(--text-secondary)" }}>Color: </span>
            <strong>{selectedColor}</strong>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {product.colors.map((c) => {
              const active = selectedColor === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  title={c.name}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: c.hex,
                    border: active ? "2px solid var(--maroon)" : "1px solid #D6C9BC",
                    outline: active ? "2px solid #FFFFFF" : "none",
                    outlineOffset: "-3px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease"
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Size Selector + Size Guide */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-main)" }}>
            <span style={{ color: "var(--text-secondary)" }}>Size: </span>
            <strong>{selectedSize}</strong>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(true)}
            style={{
              fontSize: "0.82rem",
              color: "var(--maroon)",
              textDecoration: "underline",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            📏 Size Guide
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap" }}>
          {product.sizes.map((sz) => {
            const active = selectedSize === sz;
            return (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                style={{
                  minWidth: "44px",
                  height: "44px",
                  padding: "0 0.8rem",
                  border: active ? "1.5px solid var(--maroon)" : "1px solid #D8CCBE",
                  backgroundColor: active ? "var(--maroon)" : "#FFFFFF",
                  color: active ? "#FFFFFF" : "var(--text-main)",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity & CTA Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "0.5rem" }}>
        <div style={{ display: "flex", gap: "0.85rem" }} className="product-cta-row">
          <button
            onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
            className="btn-primary"
            style={{
              flex: 1,
              padding: "1.1rem 1.5rem",
              fontSize: "0.88rem",
              letterSpacing: "0.14em"
            }}
          >
            ADD TO CART
          </button>

          <button
            onClick={handleBuyNow}
            className="btn-outline-dark"
            style={{
              flex: 1,
              padding: "1.1rem 1.5rem",
              fontSize: "0.88rem",
              letterSpacing: "0.14em",
              borderColor: "var(--maroon)",
              color: "var(--maroon)"
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Trust Badges Strip (Reference match) */}
      <div
        className="trust-badges-strip"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.75rem",
          padding: "1.2rem 0",
          borderTop: "1px solid #ECE3D6",
          borderBottom: "1px solid #ECE3D6",
          marginTop: "0.5rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Truck size={20} style={{ color: "var(--maroon)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-main)" }}>Free Shipping</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>on orders above ₹5,000</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <RotateCcw size={20} style={{ color: "var(--maroon)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-main)" }}>Easy Returns</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>7 days return policy</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <ShieldCheck size={20} style={{ color: "var(--maroon)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-main)" }}>Secure Payment</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>100% safe &amp; secure</div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div style={{ marginTop: "0.5rem" }}>
        <div
          className="product-tabs-row"
          style={{
            display: "flex",
            gap: "2rem",
            borderBottom: "1px solid #ECE3D6",
            paddingBottom: "0.6rem",
            flexWrap: "wrap"
          }}
        >
          {["details", "fabric & care", "delivery", "reviews"].map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontSize: "0.88rem",
                  fontWeight: active ? 700 : 500,
                  textTransform: "capitalize",
                  letterSpacing: "0.04em",
                  color: active ? "var(--maroon)" : "var(--text-secondary)",
                  position: "relative",
                  paddingBottom: "0.6rem",
                  marginBottom: "-0.6rem"
                }}
              >
                {tab}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "var(--maroon)"
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div style={{ padding: "1.2rem 0", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {activeTab === "details" && (
            <div>
              <p style={{ marginBottom: "1rem" }}>{product.description}</p>
              {product.details && (
                <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {product.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === "fabric & care" && (
            <div>
              <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {product.fabricCare ? (
                  product.fabricCare.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <>
                    <li>Fabric: 100% Pure Raw Silk &amp; Hand-worked net</li>
                    <li>Embroidery: Authentic gold and antique zari work</li>
                    <li>Specialist dry clean only. Preserve in cotton bags.</li>
                  </>
                )}
              </ul>
            </div>
          )}

          {activeTab === "delivery" && (
            <div>
              <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {product.delivery ? (
                  product.delivery.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <>
                    <li>Standard dispatch: 5 to 7 business days</li>
                    <li>Custom sizing stitching: 12 to 14 business days</li>
                    <li>Free Express delivery with insurance across India</li>
                  </>
                )}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {reviewsData.map((rev) => (
                <div
                  key={rev.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "1rem",
                    border: "1px solid #ECE3D6",
                    borderRadius: "2px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <strong style={{ color: "var(--text-main)" }}>{rev.name}</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{rev.date}</span>
                  </div>
                  <div style={{ display: "flex", color: "#D4AF37", marginBottom: "0.4rem" }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="#D4AF37" strokeWidth={0} />
                    ))}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 4 Feature Badges at Bottom (Reference match) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          backgroundColor: "var(--cream-surface)",
          border: "1px solid #ECE3D6",
          padding: "1.2rem 1rem",
          borderRadius: "2px"
        }}
        className="feature-badges-grid"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Scissors size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
            Hand Embroidered
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Gem size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
            Premium Fabric
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Sparkles size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
            Custom Stitching
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Feather size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
            Lightweight Comfort
          </span>
        </div>
      </div>

      {/* Sticky Mobile Add to Bag / Buy Now Bar (Visible on Mobile <= 992px) */}
      <div
        className="mobile-sticky-buy-bar"
        style={{
          position: "fixed",
          bottom: "64px",
          left: 0,
          right: 0,
          zIndex: 880,
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #ECE3D6",
          padding: "0.65rem 1rem",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
          display: "none",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem"
        }}
      >
        <div>
          <div style={{ fontSize: "0.68rem", color: "var(--text-secondary)", textTransform: "uppercase" }}>
            Price ({selectedSize})
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--maroon)", lineHeight: 1.1 }}>
            {formatPrice(product.price)}
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flex: 1, maxWidth: "240px" }}>
          <button
            type="button"
            onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
            className="btn-primary"
            style={{
              flex: 1,
              padding: "0.7rem 0.6rem",
              fontSize: "0.74rem",
              letterSpacing: "0.08em"
            }}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}
