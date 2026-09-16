"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQuantity, cartTotal } = useShop();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 5000;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const remainingForFree = Math.max(0, freeShippingThreshold - cartTotal);

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
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
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
            <ShoppingBag size={20} style={{ color: "var(--maroon)" }} />
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600 }}>
              Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ color: "var(--text-main)", padding: "0.3rem" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div
          style={{
            padding: "0.85rem 1.5rem",
            backgroundColor: "var(--blush)",
            fontSize: "0.8rem",
            color: "var(--maroon-dark)"
          }}
        >
          {remainingForFree > 0 ? (
            <div>
              Add <strong>{formatPrice(remainingForFree)}</strong> more to get{" "}
              <strong>FREE Insured Pan-India Delivery</strong>
            </div>
          ) : (
            <div style={{ fontWeight: 600 }}>
              🎉 Congratulations! You have unlocked <strong>FREE Insured Shipping</strong>
            </div>
          )}
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "rgba(115, 26, 43, 0.15)",
              borderRadius: "2px",
              marginTop: "0.4rem",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                backgroundColor: "var(--maroon)",
                transition: "width 0.4s ease"
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
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
          {cart.length === 0 ? (
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
                <ShoppingBag size={28} />
              </div>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", maxWidth: "260px" }}>
                Explore our royal wedding collections to discover your dream outfit.
              </p>
              <Link
                href="/lehengas"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
                style={{ marginTop: "0.5rem" }}
              >
                Explore Lehengas
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartItemId}
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
                      <h4
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.98rem",
                          fontWeight: 600,
                          lineHeight: 1.3
                        }}
                      >
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        style={{ color: "var(--text-muted)", padding: "2px" }}
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "3px" }}>
                      Size: <strong>{item.size}</strong> &bull; Color: <strong>{item.color}</strong>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.6rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #DFD5C8",
                        borderRadius: "2px"
                      }}
                    >
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                        style={{ padding: "0.2rem 0.5rem", color: "var(--text-main)" }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: "0.82rem", fontWeight: 600, padding: "0 0.4rem" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                        style={{ padding: "0.2rem 0.5rem", color: "var(--text-main)" }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--maroon)" }}>
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && (
          <div
            style={{
              padding: "1.5rem",
              borderTop: "1px solid #ECE3D6",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Subtotal</span>
              <span style={{ fontWeight: 700, color: "var(--text-main)", fontSize: "1.1rem" }}>
                {formatPrice(cartTotal)}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span>Taxes &amp; Pan-India Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <button
              onClick={() => {
                alert("Proceeding to secure checkout! In live production, this connects to Razorpay/Stripe.");
              }}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "1.1rem",
                marginTop: "0.4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem"
              }}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      
    </div>
  );
}
