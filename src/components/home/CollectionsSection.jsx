"use client";

import React from "react";
import { collections } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";

export default function CollectionsSection() {
  return (
    <section style={{ padding: "6.5rem 0 5rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4vw, 3.2rem)",
              fontWeight: 600,
              color: "var(--text-main)",
              letterSpacing: "0.02em"
            }}
          >
            Our Collections
          </h2>

          <p
            style={{
              fontSize: "0.96rem",
              color: "var(--text-secondary)",
              marginTop: "0.6rem",
              lineHeight: 1.6
            }}
          >
            From timeless traditions to modern elegance, find the perfect look for every celebration.
          </p>

          <div className="ornamental-divider">
            <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.25rem"
          }}
          className="collections-grid"
        >
          {collections.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
