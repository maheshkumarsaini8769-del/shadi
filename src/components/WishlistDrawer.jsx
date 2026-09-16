"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, Trash2, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;

  const formatPrice = (amt) => "₹" + amt.toLocaleString("en-IN");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(16, 13, 13, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "flex-end"
      }}
      onClick={() => setIsWishlistOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "100%",
          backgroundColor: "#FAF7F2",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.2)",
          animation: "slideLeft 0.3s ease forwards"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.5rem",
            borderBottom: "1px solid #ECE3D6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Heart size={20} style={{ color: "var(--maroon)" }} fill="var(--maroon)" />
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600 }}>
              Your Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            style={{ color: "var(--text-main)", padding: "0.3rem" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}
        >
          {wishlist.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                margin: "auto 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "var(--blush)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--maroon)"
                }}
              >
                <Heart size={28} />
              </div>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}>
                Your wishlist is empty
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", maxWidth: "260px" }}>
                Tap the heart icon on any bridal outfit to save your favorites here.
              </p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "75px 1fr",
                  gap: "1rem",
                  backgroundColor: "#FFFFFF",
                  padding: "0.85rem",
                  border: "1px solid #ECE3D6",
                  borderRadius: "2px"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "75px",
                    height: "95px",
                    backgroundColor: "#F7F2EB",
                    borderRadius: "2px",
                    overflow: "hidden"
                  }}
                >
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <Link
                        href={`/product/${item.id}`}
                        onClick={() => setIsWishlistOpen(false)}
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.98rem",
                          fontWeight: 600,
                          lineHeight: 1.3
                        }}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => toggleWishlist(item)}
                        style={{ color: "var(--text-muted)", padding: "2px" }}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--maroon)", marginTop: "4px" }}>
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(item, "M", null, 1);
                      toggleWishlist(item);
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--maroon)",
                      marginTop: "0.5rem"
                    }}
                  >
                    <ShoppingBag size={13} />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      
    </div>
  );
}
