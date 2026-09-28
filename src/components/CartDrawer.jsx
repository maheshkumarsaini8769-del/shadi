"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateCartQuantity, clearCart, cartTotal } = useShop();
  const [step, setStep] = useState("bag"); // "bag" | "checkout" | "confirmed"
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "UPI / QR (GPay, PhonePe, Paytm)"
  });
  const [orderId, setOrderId] = useState("");
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 5000;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const remainingForFree = Math.max(0, freeShippingThreshold - cartTotal);

  const formatPrice = (amt) => "₹" + amt.toLocaleString("en-IN");

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setStep("bag");
    }, 300);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = "SHADI-ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setConfirmedTotal(cartTotal);
    clearCart();
    setStep("confirmed");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        backgroundColor: "rgba(16, 13, 13, 0.72)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "flex-end"
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "100%",
          backgroundColor: "#FAF7F2",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.22)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.35rem 1.5rem",
            borderBottom: "1px solid #ECE3D6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {step === "checkout" ? (
              <button
                onClick={() => setStep("bag")}
                style={{ color: "var(--text-main)", display: "flex", alignItems: "center", paddingRight: "0.25rem" }}
                aria-label="Back to bag"
              >
                <ArrowLeft size={19} />
              </button>
            ) : (
              <ShoppingBag size={20} style={{ color: "var(--maroon)" }} />
            )}
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600 }}>
              {step === "bag" && `Shopping Bag (${cart.reduce((a, b) => a + b.quantity, 0)})`}
              {step === "checkout" && "Express Bridal Checkout"}
              {step === "confirmed" && "Order Confirmed"}
            </h3>
          </div>
          <button
            onClick={handleClose}
            style={{ color: "var(--text-main)", padding: "0.3rem" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        {step === "bag" && (
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
        )}

        {/* Body Content */}
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
          {step === "confirmed" ? (
            <div
              style={{
                textAlign: "center",
                margin: "auto 0",
                padding: "1.5rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <CheckCircle2 size={58} style={{ color: "var(--maroon)" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 600 }}>
                Thank You for Your Order!
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Dear <strong>{orderDetails.name}</strong>, your bridal order has been placed and is being prepared by our Rajasthan atelier.
              </p>

              <div
                style={{
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px dashed var(--gold)",
                  padding: "1.1rem",
                  borderRadius: "2px",
                  fontSize: "0.84rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem"
                }}
              >
                <div>
                  <span style={{ color: "var(--text-secondary)" }}>Order ID: </span>
                  <strong style={{ color: "var(--maroon)" }}>{orderId}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-secondary)" }}>Total Amount: </span>
                  <strong>{formatPrice(confirmedTotal)}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-secondary)" }}>Payment Mode: </span>
                  <strong>{orderDetails.paymentMethod}</strong>
                </div>
                <div>
                  <span style={{ color: "var(--text-secondary)" }}>Delivering To: </span>
                  <strong>{orderDetails.address}, {orderDetails.city} - {orderDetails.pincode}</strong>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="btn-primary"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                Continue Shopping
              </button>
            </div>
          ) : step === "checkout" ? (
            <form id="checkout-form" onSubmit={handlePlaceOrder} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={orderDetails.name}
                  onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.86rem",
                    borderRadius: "2px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Phone / WhatsApp Number (for Order Tracking) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={orderDetails.phone}
                  onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.86rem",
                    borderRadius: "2px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Complete Delivery Address *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House/Flat No., Street, Landmark"
                  value={orderDetails.address}
                  onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.86rem",
                    borderRadius: "2px",
                    fontFamily: "inherit"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur"
                    value={orderDetails.city}
                    onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.86rem",
                      borderRadius: "2px"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="302001"
                    value={orderDetails.pincode}
                    onChange={(e) => setOrderDetails({ ...orderDetails, pincode: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.86rem",
                      borderRadius: "2px"
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Payment Method *
                </label>
                <select
                  value={orderDetails.paymentMethod}
                  onChange={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.86rem",
                    borderRadius: "2px"
                  }}
                >
                  <option value="UPI / QR (GPay, PhonePe, Paytm)">UPI / QR (GPay, PhonePe, Paytm)</option>
                  <option value="Credit / Debit Card / NetBanking">Credit / Debit Card / NetBanking</option>
                  <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                </select>
              </div>
            </form>
          ) : cart.length === 0 ? (
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
                Explore our royal wedding collections to buy your dream bridal outfit.
              </p>
              <Link
                href="/lehengas"
                onClick={handleClose}
                className="btn-primary"
                style={{ marginTop: "0.5rem" }}
              >
                Shop Bridal Lehengas
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
        {cart.length > 0 && step !== "confirmed" && (
          <div
            style={{
              padding: "1.35rem 1.5rem",
              borderTop: "1px solid #ECE3D6",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
              <span style={{ color: "var(--text-secondary)" }}>Order Total</span>
              <span style={{ fontWeight: 700, color: "var(--text-main)", fontSize: "1.15rem" }}>
                {formatPrice(cartTotal)}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)" }}>
              <span>Insured Pan-India Delivery</span>
              <span style={{ color: "#1D5236", fontWeight: 600 }}>FREE</span>
            </div>

            {step === "bag" ? (
              <button
                onClick={() => setStep("checkout")}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "1rem",
                  marginTop: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem"
                }}
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                form="checkout-form"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "1rem",
                  marginTop: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem"
                }}
              >
                <span>PLACE ORDER NOW ({formatPrice(cartTotal)})</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
