"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { SlidersHorizontal, X } from "lucide-react";

export default function LehengasPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(200000);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter lehengas only
  const lehengaList = useMemo(() => {
    return products.filter((p) => p.section === "lehenga");
  }, []);

  const filteredProducts = useMemo(() => {
    let list = lehengaList.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
        return false;
      }
      if (p.price > priceRange) {
        return false;
      }
      if (selectedColor) {
        const hasColor = p.colors && p.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }
      if (selectedFabrics.length > 0 && !selectedFabrics.includes(p.fabric)) {
        return false;
      }
      if (selectedSize && !p.sizes.includes(selectedSize)) {
        return false;
      }
      return true;
    });

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return list;
  }, [lehengaList, selectedCategories, priceRange, selectedColor, selectedFabrics, selectedSize, sortBy]);

  const handleReset = () => {
    setSelectedCategories([]);
    setPriceRange(200000);
    setSelectedColor(null);
    setSelectedFabrics([]);
    setSelectedSize(null);
    setSortBy("popular");
  };

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2rem 0 6rem" }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "1.25rem"
          }}
        >
          <Link href="/" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Home
          </Link>
          <span>&gt;</span>
          <Link href="/collections" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Collections
          </Link>
          <span>&gt;</span>
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>Lehengas</span>
        </div>

        {/* Page Title & Sort Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid #ECE3D6",
            paddingBottom: "1.25rem",
            marginBottom: "1.75rem",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-main)",
                lineHeight: 1.15
              }}
            >
              Lehengas
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
              Royal designs for your most special day &bull;{" "}
              <strong style={{ color: "var(--maroon)" }}>{filteredProducts.length} Designs</strong>
            </p>
          </div>

          {/* Sort Controls & Mobile Filter Trigger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="mobile-filter-trigger"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.55rem 0.95rem",
                backgroundColor: "var(--maroon)",
                color: "#FFFFFF",
                borderRadius: "2px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.04em"
              }}
            >
              <SlidersHorizontal size={14} />
              <span>Filter</span>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "0.55rem 0.85rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D6C9BC",
                  borderRadius: "2px",
                  fontSize: "0.82rem",
                  color: "var(--text-main)",
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                <option value="popular">Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Layout: Left Sidebar + Right Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "2.2rem",
            alignItems: "start"
          }}
          className="listing-layout-grid"
        >
          {/* Desktop Left Sidebar */}
          <div className="filter-sidebar-desktop">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedFabrics={selectedFabrics}
              setSelectedFabrics={setSelectedFabrics}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              onReset={handleReset}
            />
          </div>

          {/* Right Product Grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "4rem 2rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #ECE3D6",
                  borderRadius: "2px"
                }}
              >
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  No matching lehengas found
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Try resetting your selected filters or choosing a wider price range.
                </p>
                <button onClick={handleReset} className="btn-primary">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1.25rem"
                }}
                className="lehenga-product-grid"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide-Up Mobile Filter Bottom Sheet Drawer */}
      {mobileFilterOpen && (
        <div
          onClick={() => setMobileFilterOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1200,
            backgroundColor: "rgba(16, 13, 13, 0.72)",
            backdropFilter: "blur(5px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxHeight: "84vh",
              backgroundColor: "#FAF7F2",
              borderRadius: "14px 14px 0 0",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 -10px 35px rgba(0,0,0,0.25)"
            }}
          >
            <div
              style={{
                padding: "1.1rem 1.25rem",
                backgroundColor: "#FFFFFF",
                borderBottom: "1px solid #ECE3D6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600 }}>
                Filter &amp; Refine
              </span>
              <button onClick={() => setMobileFilterOpen(false)} style={{ padding: "0.25rem" }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedFabrics={selectedFabrics}
                setSelectedFabrics={setSelectedFabrics}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                onReset={handleReset}
              />
            </div>

            <div
              style={{
                padding: "0.9rem 1.25rem",
                backgroundColor: "#FFFFFF",
                borderTop: "1px solid #ECE3D6",
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: "0.75rem"
              }}
            >
              <button
                type="button"
                onClick={handleReset}
                className="btn-outline-dark"
                style={{ padding: "0.85rem", fontSize: "0.78rem" }}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="btn-primary"
                style={{ padding: "0.85rem", fontSize: "0.78rem" }}
              >
                Apply ({filteredProducts.length} Designs)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
