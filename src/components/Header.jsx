"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header appearance: transparent overlay only on homepage when not scrolled
  const isOverlay = isHome && !isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Lehengas", href: "/lehengas" },
    { name: "Sarees", href: "/sarees" },
    { name: "Indo-Western", href: "/indo-western" },
    { name: "Accessories", href: "/accessories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const quickMobilePills = [
    { name: "All", href: "/collections" },
    { name: "Bridal Lehengas", href: "/lehengas" },
    { name: "Silk Sarees", href: "/sarees" },
    { name: "Indo-Western", href: "/indo-western" },
    { name: "Jewelry & Potlis", href: "/accessories" }
  ];

  return (
    <>
      <header
        style={{
          position: isHome ? "fixed" : "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.35s ease",
          backgroundColor: isOverlay ? "rgba(14, 10, 10, 0.62)" : "#FAF7F2",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: isOverlay
            ? "1px solid rgba(255, 255, 255, 0.16)"
            : "1px solid rgba(197, 168, 105, 0.28)",
          boxShadow: isOverlay ? "none" : "0 4px 20px rgba(22, 19, 19, 0.06)"
        }}
      >
        <div
          className="container header-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            height: isScrolled ? "66px" : "78px",
            transition: "height 0.3s ease"
          }}
        >
          {/* Left: Brand Wordmark with Mandala Icon */}
          <Link
            href="/"
            prefetch={false}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              textDecoration: "none",
              flexShrink: 0,
              whiteSpace: "nowrap"
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                color: isOverlay ? "#E5C88B" : "#C5A869",
                flexShrink: 0
              }}
            >
              <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <path d="M50 15 C55 30, 55 35, 50 38 C45 35, 45 30, 50 15 Z" fill="currentColor" />
              <path d="M50 85 C55 70, 55 65, 50 62 C45 65, 45 70, 50 85 Z" fill="currentColor" />
              <path d="M15 50 C30 55, 35 55, 38 50 C35 45, 30 45, 15 50 Z" fill="currentColor" />
              <path d="M85 50 C70 55, 65 55, 62 50 C65 45, 70 45, 85 50 Z" fill="currentColor" />
              <path d="M25 25 C40 35, 42 38, 41 41 C38 42, 35 40, 25 25 Z" fill="currentColor" />
              <path d="M75 75 C60 65, 58 62, 59 59 C62 58, 65 60, 75 75 Z" fill="currentColor" />
              <path d="M25 75 C35 60, 38 58, 41 59 C42 62, 40 65, 25 75 Z" fill="currentColor" />
              <path d="M75 25 C65 40, 62 42, 59 41 C58 38, 60 35, 75 25 Z" fill="currentColor" />
            </svg>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                  color: isOverlay ? "#FFFFFF" : "#1D1919"
                }}
              >
                Shadi
              </span>
              <span
                style={{
                  fontSize: "0.53rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: isOverlay ? "#E5C88B" : "#8A7347",
                  marginTop: "3px",
                  whiteSpace: "nowrap"
                }}
              >
                FOR HER BIG DAY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(0.9rem, 1.4vw, 1.65rem)",
              flexWrap: "nowrap"
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={false}
                  style={{
                    fontSize: "0.84rem",
                    fontWeight: active ? 600 : 500,
                    letterSpacing: "0.03em",
                    color: isOverlay
                      ? active ? "#E5C88B" : "#F3ECE8"
                      : active ? "var(--maroon)" : "var(--text-main)",
                    position: "relative",
                    padding: "0.4rem 0",
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.name}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "18px",
                        height: "2px",
                        backgroundColor: isOverlay ? "#E5C88B" : "var(--maroon)",
                        borderRadius: "1px"
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Shop Now Button */}
          <div
            className="header-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              flexShrink: 0
            }}
          >
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                display: "flex",
                alignItems: "center",
                padding: "0.25rem"
              }}
            >
              <Search size={19} strokeWidth={1.8} />
            </button>

            {/* Wishlist Icon with Counter */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: "0.25rem"
              }}
            >
              <Heart size={19} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-6px",
                    background: "var(--maroon)",
                    color: "#FFFFFF",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #FFFFFF"
                  }}
                >
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon with Counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: "0.25rem"
              }}
            >
              <ShoppingBag size={19} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-6px",
                    background: "var(--maroon)",
                    color: "#FFFFFF",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #FFFFFF"
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct "Shop Now" E-Commerce CTA Button */}
            <Link
              href="/lehengas"
              prefetch={false}
              className="appointment-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.52rem 1.15rem",
                fontSize: "0.76rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                borderRadius: "2px",
                border: isOverlay ? "1px solid #E5C88B" : "1px solid var(--maroon)",
                color: isOverlay ? "#1D1919" : "#FFFFFF",
                backgroundColor: isOverlay ? "#E5C88B" : "var(--maroon)",
                transition: "all 0.25s ease"
              }}
            >
              <span>Shop Now</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="mobile-menu-btn"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                display: "none",
                padding: "0.2rem"
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Quick Category Pill Strip (1-Tap Category Switching on Mobile) */}
        <div
          className="mobile-category-strip"
          style={{
            display: "none",
            overflowX: "auto",
            gap: "0.5rem",
            padding: "0.45rem 1.1rem 0.55rem",
            borderTop: isOverlay
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(197, 168, 105, 0.18)"
          }}
        >
          {quickMobilePills.map((pill) => {
            const active = pathname === pill.href;
            return (
              <Link
                key={pill.name}
                href={pill.href}
                prefetch={false}
                style={{
                  padding: "0.3rem 0.78rem",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: active ? 700 : 500,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  backgroundColor: active
                    ? isOverlay
                      ? "#E5C88B"
                      : "var(--maroon)"
                    : isOverlay
                    ? "rgba(255, 255, 255, 0.12)"
                    : "#FFFFFF",
                  color: active
                    ? isOverlay
                      ? "#1D1919"
                      : "#FFFFFF"
                    : isOverlay
                    ? "#F5EFEA"
                    : "var(--text-main)",
                  border: active
                    ? "none"
                    : isOverlay
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid #E2D7C8"
                }}
              >
                {pill.name}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            backgroundColor: "rgba(16, 13, 13, 0.78)",
            backdropFilter: "blur(6px)"
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "84%",
              maxWidth: "340px",
              height: "100%",
              backgroundColor: "#FAF7F2",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 25px rgba(0,0,0,0.25)",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "1.25rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid #ECE3D6"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", fontWeight: 600, lineHeight: 1 }}>
                  Shadi
                </span>
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)", marginTop: "4px" }}>
                  FOR HER BIG DAY
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--text-main)", padding: "0.25rem" }}>
                <X size={22} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.08rem",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.04em",
                    color: pathname === link.href ? "var(--maroon)" : "var(--text-main)",
                    fontWeight: pathname === link.href ? 600 : 500,
                    padding: "0.25rem 0"
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: "auto", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                href="/lehengas"
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", padding: "0.9rem", textAlign: "center" }}
              >
                <span>Shop Bridal Collection</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="btn-outline-dark"
                style={{ width: "100%", padding: "0.8rem" }}
              >
                View Shopping Bag ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
