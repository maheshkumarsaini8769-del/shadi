"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const touchStartX = useRef(null);

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % imageList.length);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !e.changedTouches || e.changedTouches.length === 0) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "90px 1fr",
          gap: "1.25rem",
          alignItems: "start"
        }}
        className="product-gallery-grid"
      >
        {/* Vertical / Horizontal Thumbnails */}
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

        {/* Large Main Image with Touch-Swipe, Zoom & Fullscreen Lightbox */}
        <div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setLightboxOpen(true)}
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "135%",
            overflow: "hidden",
            borderRadius: "2px",
            border: "1px solid #EAE0D4",
            backgroundColor: "#F7F2EB",
            cursor: "zoom-in"
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

          {/* Fullscreen Lightbox Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            aria-label="View Fullscreen"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 10,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #DFD5C8",
              color: "var(--text-main)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <Maximize2 size={16} />
          </button>

          {imageList.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous Image"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #DFD5C8",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  flexShrink: 0
                }}
              >
                <ChevronLeft size={20} style={{ flexShrink: 0 }} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next Image"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #DFD5C8",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  flexShrink: 0
                }}
              >
                <ChevronRight size={20} style={{ flexShrink: 0 }} />
              </button>
            </>
          )}

          {/* Counter & Tap to Zoom Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              right: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(4px)",
              padding: "0.28rem 0.65rem",
              borderRadius: "2px",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              pointerEvents: "none"
            }}
          >
            {activeIndex + 1} / {imageList.length}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Mobile & Desktop */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,
            backgroundColor: "rgba(12, 10, 10, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Fullscreen"
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.2rem",
              zIndex: 1310,
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              height: "78vh",
              borderRadius: "2px",
              overflow: "hidden"
            }}
          >
            <Image
              src={imageList[activeIndex]}
              alt={name}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          {imageList.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                marginTop: "1rem"
              }}
            >
              <button
                type="button"
                onClick={prevImage}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.16)",
                  border: "1px solid var(--gold)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <span style={{ color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 600 }}>
                {activeIndex + 1} / {imageList.length}
              </span>
              <button
                type="button"
                onClick={nextImage}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.16)",
                  border: "1px solid var(--gold)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
