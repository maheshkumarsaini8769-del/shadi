"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

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
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
        return false;
      }
      // Price filter
      if (p.price > priceRange) {
        return false;
      }
      // Color filter
      if (selectedColor) {
        const hasColor = p.colors && p.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }
      // Fabric filter
      if (selectedFabrics.length > 0 && !selectedFabrics.includes(p.fabric)) {
        return false;
      }
      // Size filter
      if (selectedSize && !p.sizes.includes(selectedSize)) {
        return false;
      }
      return true;
    });

    // Sorting
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
        {/* Breadcrumbs matching reference */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "1.5rem"
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

        {/* Page Title & Sort Bar matching reference */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid #ECE3D6",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-main)",
                lineHeight: 1.15
              }}
            >
              Lehengas
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
              Royal designs for your most special day
            </p>
            <div style={{ fontSize: "0.8rem", color: "var(--maroon)", fontWeight: 600, marginTop: "0.4rem" }}>
              {filteredProducts.length}+ Products Found
            </div>
          </div>

          {/* Sort Controls & Mobile Filter Trigger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="mobile-filter-trigger"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D6C9BC",
                borderRadius: "2px",
                fontSize: "0.84rem",
                fontWeight: 600
              }}
            >
              <SlidersHorizontal size={15} />
              <span>Filters</span>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "0.6rem 1rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D6C9BC",
                  borderRadius: "2px",
                  fontSize: "0.84rem",
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
          {/* Left Sidebar */}
          <div className={mobileFilterOpen ? "filter-sidebar-mobile-open" : "filter-sidebar-desktop"}>
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

          {/* Right Product Grid (4 Columns Desktop matching reference) */}
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

      
    </div>
  );
}
