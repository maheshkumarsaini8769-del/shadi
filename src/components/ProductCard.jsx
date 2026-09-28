"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isFavorite = isInWishlist(product.id);

  // Format currency in Indian Rupees
  const formatPrice = (amt) => {
    return "₹" + amt.toLocaleString("en-IN");
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        border: "1px solid #ECE3D6",
        borderRadius: "2px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
      }}
      className="product-card"
    >
      {/* Image Container with 3:4 Aspect Ratio */}
      <Link
        href={`/product/${product.id}`}
        prefetch={false}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "132%",
          overflow: "hidden",
          backgroundColor: "#F7F2EB",
          display: "block"
        }}
      >
        <Image
          src={product.images ? product.images[0] : "/images/products/lehenga-royal-red.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          className="product-card-img"
        />

        {/* Discount Badge if present */}
        {product.discount && (
          <span
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              backgroundColor: "var(--maroon)",
              color: "#FFFFFF",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              padding: "0.22rem 0.5rem",
              borderRadius: "2px",
              zIndex: 2
            }}
          >
            {product.discount}
          </span>
        )}
      </Link>

      {/* Floating Wishlist Heart */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product);
        }}
        aria-label="Add to Wishlist"
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 3,
          backgroundColor: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(4px)",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isFavorite ? "var(--maroon)" : "#5A5250",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease"
        }}
      >
        <Heart
          size={16}
          strokeWidth={1.8}
          fill={isFavorite ? "var(--maroon)" : "none"}
        />
      </button>

      {/* Content */}
      <div
        className="product-card-body"
        style={{
          padding: "0.85rem 0.85rem 0.95rem",
          display: "flex",
          flexDirection: "column",
          flex: 1
        }}
      >
        <Link
          href={`/product/${product.id}`}
          prefetch={false}
          style={{ textDecoration: "none" }}
        >
          <h4
            className="product-card-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--text-main)",
              marginBottom: "0.35rem",
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {product.name}
          </h4>
        </Link>

        {/* Price Row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
          <span
            className="product-card-price"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--maroon)"
            }}
          >
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textDecoration: "line-through"
              }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Quick 1-Tap Add to Bag Button */}
        <button
          type="button"
          onClick={() => addToCart(product, product.sizes ? product.sizes[0] : "M")}
          style={{
            marginTop: "0.65rem",
            width: "100%",
            padding: "0.5rem 0.6rem",
            backgroundColor: "#FAF7F2",
            border: "1px solid #DFD5C8",
            borderRadius: "2px",
            color: "var(--maroon)",
            fontSize: "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem"
          }}
        >
          <ShoppingBag size={13} />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}
