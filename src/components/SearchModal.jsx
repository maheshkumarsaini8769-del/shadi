"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [searchTerm, setSearchTerm] = useState("");

  if (!isSearchOpen) return null;

  const filtered = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const formatPrice = (amt) => "₹" + amt.toLocaleString("en-IN");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(16, 13, 13, 0.8)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1.5rem"
      }}
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "#FAF7F2",
          borderRadius: "2px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            padding: "1.2rem 1.5rem",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #ECE3D6",
            display: "flex",
            alignItems: "center",
            gap: "0.85rem"
          }}
        >
          <Search size={22} style={{ color: "var(--maroon)" }} />
          <input
            type="text"
            placeholder="Search bridal lehengas, banarasi sarees, velvets, jewelry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "1.05rem",
              fontFamily: "inherit",
              backgroundColor: "transparent"
            }}
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            style={{ color: "var(--text-main)", padding: "0.4rem" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: "60vh", overflowY: "auto", padding: "1.2rem 1.5rem" }}>
          {searchTerm.trim() && filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-secondary)" }}>
              No bridal outfits found for &quot;{searchTerm}&quot;. Try searching for &quot;Red&quot;, &quot;Silk&quot;, or &quot;Lehenga&quot;.
            </div>
          ) : filtered.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.6rem",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECE3D6",
                    borderRadius: "2px",
                    textDecoration: "none"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "55px",
                      height: "70px",
                      backgroundColor: "#F7F2EB",
                      borderRadius: "2px",
                      overflow: "hidden",
                      flexShrink: 0
                    }}
                  >
                    <Image
                      src={item.images ? item.images[0] : "/images/products/lehenga-royal-red.jpg"}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-main)" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                      {item.category} &bull; {item.fabric}
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--maroon)", fontSize: "0.95rem" }}>
                    {formatPrice(item.price)}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ padding: "1rem 0" }}>
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                Trending Searches
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["Royal Red Lehenga", "Velvet Lehenga", "Banarasi Saree", "Kundan Jewelry", "Pastel Pink"].map((trend) => (
                  <button
                    key={trend}
                    onClick={() => setSearchTerm(trend)}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #D6C9BC",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      color: "var(--text-main)",
                      cursor: "pointer"
                    }}
                  >
                    {trend}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
