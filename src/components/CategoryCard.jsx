"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={category.link}
      prefetch={false}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        backgroundColor: "#FFFFFF",
        border: "1px solid #ECE3D6",
        borderRadius: "2px",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 4px 16px rgba(22, 19, 19, 0.04)"
      }}
      className="category-card-hover"
    >
      {/* Image Container with 4:5 Aspect Ratio */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "135%", // Tall portrait
          overflow: "hidden",
          backgroundColor: "#F3ECE8"
        }}
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          className="category-image"
        />
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "1.4rem 1rem 1.6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FFFFFF",
          flex: 1
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "var(--text-main)",
            marginBottom: "0.25rem",
            letterSpacing: "0.02em"
          }}
        >
          {category.name}
        </h3>
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "1.2rem",
            letterSpacing: "0.02em"
          }}
        >
          {category.tagline}
        </p>

        {/* Circular Maroon Arrow Button */}
        <div className="btn-circle-arrow">
          <ArrowRight size={16} strokeWidth={2.2} />
        </div>
      </div>

      
    </Link>
  );
}
