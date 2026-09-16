"use client";

import React from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedSection() {
  return (
    <section style={{ padding: "6rem 0 5rem" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--maroon)", textTransform: "uppercase" }}>
              CURATED SELECTION
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--text-main)",
                marginTop: "0.3rem"
              }}
            >
              Iconic Bridal Lehengas
            </h2>
          </div>

          <Link
            href="/lehengas"
            prefetch={false}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--maroon)",
              fontWeight: 600,
              fontSize: "0.86rem",
              letterSpacing: "0.05em"
            }}
          >
            <span>View All 120+ Designs</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem"
          }}
          className="featured-products-grid"
        >
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
