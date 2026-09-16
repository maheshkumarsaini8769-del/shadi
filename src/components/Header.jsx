"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsAppointmentOpen, setIsSearchOpen } = useShop();

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
          backgroundColor: isOverlay ? "rgba(10, 8, 8, 0.25)" : "#FAF7F2",
          backdropFilter: isOverlay ? "blur(4px)" : "blur(12px)",
          borderBottom: isOverlay
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : "1px solid rgba(197, 168, 105, 0.25)",
          boxShadow: isOverlay ? "none" : "0 4px 20px rgba(22, 19, 19, 0.05)"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: isScrolled ? "72px" : "86px",
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
              gap: "0.85rem",
              textDecoration: "none"
            }}
          >
            {/* Indian Floral/Sun Mandala Motif */}
            <svg
              width="36"
              height="36"
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
              {/* Petals */}
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
                  fontSize: "1.85rem",
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
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: isOverlay ? "#E5C88B" : "#8A7347",
                  marginTop: "3px"
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
              gap: "1.8rem"
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
                    fontSize: "0.85rem",
                    fontWeight: active ? 600 : 400,
                    letterSpacing: "0.04em",
                    color: isOverlay
                      ? active ? "#E5C88B" : "#F3ECE8"
                      : active ? "var(--maroon)" : "var(--text-main)",
                    position: "relative",
                    padding: "0.4rem 0"
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

          {/* Right Action Icons & Book Appointment */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Search size={19} strokeWidth={1.75} />
            </button>

            {/* Wishlist Icon with Counter */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                position: "relative",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Heart size={19} strokeWidth={1.75} />
              {wishlistCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-7px",
                    right: "-8px",
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

            {/* Account Icon */}
            <Link
              href="/contact"
              aria-label="Account"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                display: "flex",
                alignItems: "center"
              }}
            >
              <User size={19} strokeWidth={1.75} />
            </Link>

            {/* Shopping Bag Icon with Counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                position: "relative",
                display: "flex",
                alignItems: "center"
              }}
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-7px",
                    right: "-8px",
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

            {/* "Book an Appointment" Button (Exact reference style) */}
            <button
              onClick={() => setIsAppointmentOpen(true)}
              className="appointment-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.55rem 1.25rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderRadius: "2px",
                border: isOverlay ? "1px solid #E5C88B" : "1px solid #A67C46",
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                backgroundColor: isOverlay ? "rgba(229, 200, 139, 0.12)" : "rgba(197, 168, 105, 0.12)",
                transition: "all 0.25s ease"
              }}
            >
              Book an Appointment
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="mobile-menu-btn"
              style={{
                color: isOverlay ? "#FFFFFF" : "var(--text-main)",
                display: "none"
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "rgba(16, 13, 13, 0.8)",
            backdropFilter: "blur(6px)"
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "82%",
              maxWidth: "340px",
              height: "100%",
              backgroundColor: "#FAF7F2",
              padding: "2.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 25px rgba(0,0,0,0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", fontWeight: 600 }}>Shadi</span>
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--gold)" }}>FOR HER BIG DAY</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--text-main)" }}>
                <X size={22} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.04em",
                    color: pathname === link.href ? "var(--maroon)" : "var(--text-main)",
                    fontWeight: pathname === link.href ? 600 : 400
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAppointmentOpen(true);
                }}
                className="btn-primary"
                style={{ width: "100%", padding: "0.85rem" }}
              >
                Book Appointment
              </button>
              <div style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                Flagship Showroom: Sikar, Rajasthan
              </div>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
}
