"use client";

import React from "react";
import { filterOptions } from "@/data/products";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";

export default function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  selectedColor,
  setSelectedColor,
  selectedFabrics,
  setSelectedFabrics,
  selectedSize,
  setSelectedSize,
  onReset
}) {
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleFabric = (fab) => {
    if (selectedFabrics.includes(fab)) {
      setSelectedFabrics(selectedFabrics.filter((f) => f !== fab));
    } else {
      setSelectedFabrics([...selectedFabrics, fab]);
    }
  };

  return (
    <aside
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #ECE3D6",
        borderRadius: "2px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.8rem"
      }}
    >
      {/* Title & Reset */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ECE3D6",
          paddingBottom: "0.85rem"
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "var(--text-main)"
          }}
        >
          Filters
        </h3>
        <button
          onClick={onReset}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            letterSpacing: "0.04em"
          }}
          title="Reset Filters"
        >
          <RotateCcw size={12} />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Category
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {filterOptions.categories.map((cat) => {
            const isChecked = selectedCategories.includes(cat.label);
            return (
              <label
                key={cat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  color: isChecked ? "var(--maroon)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontWeight: isChecked ? 600 : 400
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCategory(cat.label)}
                    style={{ accentColor: "var(--maroon)", cursor: "pointer" }}
                  />
                  <span>{cat.label}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  ({cat.count})
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div style={{ borderTop: "1px solid #F0E8DC", paddingTop: "1.4rem" }}>
        <h4
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.4rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Price Range
        </h4>
        <div
          style={{
            fontSize: "0.82rem",
            color: "var(--maroon)",
            fontWeight: 600,
            marginBottom: "0.8rem"
          }}
        >
          ₹5,000 — ₹{priceRange.toLocaleString("en-IN")}
        </div>
        <input
          type="range"
          min="5000"
          max="200000"
          step="5000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "var(--maroon)",
            cursor: "pointer"
          }}
        />
      </div>

      {/* Color Filter */}
      <div style={{ borderTop: "1px solid #F0E8DC", paddingTop: "1.4rem" }}>
        <h4
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Color
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          {filterOptions.colors.map((c) => {
            const isSelected = selectedColor === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setSelectedColor(isSelected ? null : c.name)}
                title={c.name}
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  backgroundColor: c.hex,
                  border: isSelected ? "2px solid var(--maroon)" : "1px solid #D1C5B7",
                  outline: isSelected ? "2px solid #FFFFFF" : "none",
                  outlineOffset: "-3px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              />
            );
          })}
        </div>
        {selectedColor && (
          <div style={{ fontSize: "0.75rem", color: "var(--maroon)", marginTop: "0.5rem" }}>
            Selected: <strong>{selectedColor}</strong>
          </div>
        )}
      </div>

      {/* Fabric Filter */}
      <div style={{ borderTop: "1px solid #F0E8DC", paddingTop: "1.4rem" }}>
        <h4
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Fabric
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {filterOptions.fabrics.map((fab) => {
            const isChecked = selectedFabrics.includes(fab.name);
            return (
              <label
                key={fab.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  color: isChecked ? "var(--maroon)" : "var(--text-secondary)",
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleFabric(fab.name)}
                    style={{ accentColor: "var(--maroon)", cursor: "pointer" }}
                  />
                  <span>{fab.name}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  ({fab.count})
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Size Filter */}
      <div style={{ borderTop: "1px solid #F0E8DC", paddingTop: "1.4rem" }}>
        <h4
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Size
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {filterOptions.sizes.map((sz) => {
            const isSelected = selectedSize === sz;
            return (
              <button
                key={sz}
                onClick={() => setSelectedSize(isSelected ? null : sz)}
                style={{
                  width: "36px",
                  height: "36px",
                  border: isSelected ? "1px solid var(--maroon)" : "1px solid #D6C9BC",
                  backgroundColor: isSelected ? "var(--maroon)" : "#FFFFFF",
                  color: isSelected ? "#FFFFFF" : "var(--text-main)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
