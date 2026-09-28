"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Search, Heart, ShoppingBag, MessageCircle } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();

  const isHomeActive = pathname === "/";
  const isShopActive =
    pathname.startsWith("/lehengas") ||
    pathname.startsWith("/sarees") ||
    pathname.startsWith("/indo-western") ||
    pathname.startsWith("/accessories") ||
    pathname.startsWith("/collections");

  return (
    <>
      {/* Floating WhatsApp Concierge / Quick Order Button on Mobile */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Shadi%20Team%2C%20I%20would%20like%20to%20order%20a%20bridal%20outfit."
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="mobile-whatsapp-fab"
        style={{
          position: "fixed",
          bottom: "78px",
          right: "14px",
          zIndex: 890,
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          backgroundColor: "#1FA855",
          color: "#FFFFFF",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(31, 168, 85, 0.38)",
          border: "2px solid #FFFFFF"
        }}
      >
        <MessageCircle size={22} fill="#FFFFFF" />
      </a>

      {/* Fixed Bottom App Navigation Bar (Mobile & Tablet) */}
      <nav
        className="mobile-bottom-nav"
        aria-label="Mobile Bottom Navigation"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "64px",
          backgroundColor: "rgba(253, 251, 247, 0.97)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(197, 168, 105, 0.35)",
          boxShadow: "0 -4px 20px rgba(22, 19, 19, 0.07)",
          zIndex: 900,
          display: "none",
          gridTemplateColumns: "repeat(5, 1fr)",
          alignItems: "center"
        }}
      >
        {/* 1. Home */}
        <Link
          href="/"
          prefetch={false}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            height: "100%",
            color: isHomeActive ? "var(--maroon)" : "var(--text-secondary)",
            fontWeight: isHomeActive ? 700 : 500,
            fontSize: "0.68rem",
            position: "relative"
          }}
        >
          {isHomeActive && (
            <span
              style={{
                position: "absolute",
                top: 0,
                width: "24px",
                height: "2.5px",
                backgroundColor: "var(--maroon)",
                borderRadius: "0 0 2px 2px"
              }}
            />
          )}
          <Home size={19} strokeWidth={isHomeActive ? 2.2 : 1.75} />
          <span>Home</span>
        </Link>

        {/* 2. Shop Lehengas */}
        <Link
          href="/lehengas"
          prefetch={false}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            height: "100%",
            color: isShopActive ? "var(--maroon)" : "var(--text-secondary)",
            fontWeight: isShopActive ? 700 : 500,
            fontSize: "0.68rem",
            position: "relative"
          }}
        >
          {isShopActive && (
            <span
              style={{
                position: "absolute",
                top: 0,
                width: "24px",
                height: "2.5px",
                backgroundColor: "var(--maroon)",
                borderRadius: "0 0 2px 2px"
              }}
            />
          )}
          <Sparkles size={19} strokeWidth={isShopActive ? 2.2 : 1.75} />
          <span>Shop</span>
        </Link>

        {/* 3. Search */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            height: "100%",
            color: "var(--text-secondary)",
            fontWeight: 500,
            fontSize: "0.68rem"
          }}
        >
          <Search size={19} strokeWidth={1.75} />
          <span>Search</span>
        </button>

        {/* 4. Wishlist */}
        <button
          type="button"
          onClick={() => setIsWishlistOpen(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            height: "100%",
            color: wishlistCount > 0 ? "var(--maroon)" : "var(--text-secondary)",
            fontWeight: wishlistCount > 0 ? 600 : 500,
            fontSize: "0.68rem",
            position: "relative"
          }}
        >
          <div style={{ position: "relative", display: "flex" }}>
            <Heart size={19} strokeWidth={1.75} fill={wishlistCount > 0 ? "rgba(115, 26, 43, 0.15)" : "none"} />
            {wishlistCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-8px",
                  backgroundColor: "var(--maroon)",
                  color: "#FFFFFF",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {wishlistCount}
              </span>
            )}
          </div>
          <span>Wishlist</span>
        </button>

        {/* 5. Bag */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            height: "100%",
            color: cartCount > 0 ? "var(--maroon)" : "var(--text-secondary)",
            fontWeight: cartCount > 0 ? 700 : 500,
            fontSize: "0.68rem",
            position: "relative"
          }}
        >
          <div style={{ position: "relative", display: "flex" }}>
            <ShoppingBag size={19} strokeWidth={1.85} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-8px",
                  backgroundColor: "var(--maroon)",
                  color: "#FFFFFF",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
          <span>Bag</span>
        </button>
      </nav>
    </>
  );
}
