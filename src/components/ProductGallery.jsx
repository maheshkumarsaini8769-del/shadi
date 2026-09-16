"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, name }) {
  const imageList = images && images.length > 0 ? images : [
    "/images/products/lehenga-royal-red.jpg",
    "/images/products/royal-red-thumb-1.jpg",
    "/images/products/royal-red-thumb-2.jpg",
    "/images/products/royal-red-thumb-3.jpg",
    "/images/products/royal-red-thumb-4.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "90px 1fr",
        gap: "1.25rem",
        alignItems: "start"
      }}
      className="product-gallery-grid"
    >
      {/* 5 Vertical Thumbnails */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}
        className="gallery-thumbnails"
      >
        {imageList.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "130%",
                borderRadius: "2px",
                overflow: "hidden",
                border: isActive ? "2px solid var(--maroon)" : "1px solid #DFD5C8",
                cursor: "pointer",
                backgroundColor: "#F7F2EB",
                transition: "all 0.2s ease"
              }}
            >
              <Image
                src={img}
                alt={`${name} view ${idx + 1}`}
                fill
                sizes="90px"
                style={{ objectFit: "cover" }}
              />
            </button>
          );
        })}
      </div>

      {/* Large Main Image with Zoom Effect */}
      <div
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "135%", // Match reference proportions
          overflow: "hidden",
          borderRadius: "2px",
          border: "1px solid #EAE0D4",
          backgroundColor: "#F7F2EB",
          cursor: "crosshair"
        }}
      >
        <Image
          src={imageList[activeIndex]}
          alt={name}
          fill
          priority
          sizes="(max-width: 992px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            transform: isZoomed ? "scale(1.75)" : "scale(1)",
            transition: isZoomed ? "none" : "transform 0.3s ease"
          }}
        />

        {/* Subtle Watermark or Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(4px)",
            padding: "0.3rem 0.75rem",
            borderRadius: "2px",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            pointerEvents: "none"
          }}
        >
          Hover to Zoom
        </div>
      </div>

      
    </div>
  );
}
