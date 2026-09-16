"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Gem, Scissors, Truck, Heart, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroSlides = [
    {
      image: "/images/hero-bride-palace.jpg",
      tagline: "A CELEBRATION OF YOU",
      title: "Bridal Dreams\nBegin Here",
      subtitle: "Exclusive Wedding Collection\nfor the Modern Bride",
      accentQuote: "More\nThan an Outfit\nIt's a Feeling"
    },
    {
      image: "/images/hero-bride-pastel.jpg",
      tagline: "ROYAL HERITAGE & MODERN GRACE",
      title: "Timeless Elegance\nCrafted in Silk",
      subtitle: "Heirloom Bridal Couture\nfor Your Special Day",
      accentQuote: "A Legacy\nof Grandeur\nand Beauty"
    },
    {
      image: "/images/hero-bride-ivory.jpg",
      tagline: "THE MODERN ROYALTY",
      title: "A Vision in\nIvory & Gold",
      subtitle: "Handcrafted Zardozi Details\nfor the Discerning Bride",
      accentQuote: "Pure Grace\nin Every Single\nStitch"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const active = heroSlides[currentSlide];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            inset: 0,
            opacity: idx === currentSlide ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 1
          }}
        >
          <Image
            src={slide.image}
            alt="Indian Bride in Royal Lehenga"
            fill
            priority={idx === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(16, 12, 12, 0.75) 0%, rgba(16, 12, 12, 0.42) 50%, rgba(16, 12, 12, 0.25) 100%), linear-gradient(180deg, rgba(16, 12, 12, 0.5) 0%, transparent 35%, rgba(16, 12, 12, 0.65) 100%)"
            }}
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#FFFFFF",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(4px)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255, 255, 255, 0.25)"
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#FFFFFF",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(4px)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255, 255, 255, 0.25)"
        }}
      >
        <ChevronRight size={24} />
      </button>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 5,
          paddingTop: "6rem",
          paddingBottom: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <div
            style={{
              color: "#E5C88B",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "1rem"
            }}
          >
            {active.tagline}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5.5vw, 4.6rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
              whiteSpace: "pre-line",
              marginBottom: "1.4rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.35)"
            }}
          >
            {active.title}
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.5,
              color: "#E8DFD9",
              letterSpacing: "0.03em",
              whiteSpace: "pre-line",
              marginBottom: "2.4rem"
            }}
          >
            {active.subtitle}
          </p>

          <div>
            <Link href="/lehengas" prefetch={false} className="btn-gold">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        <div className="hero-quote-box" style={{ textAlign: "right", paddingRight: "2rem" }}>
          <div
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
              lineHeight: 1.25,
              color: "#FFFFFF",
              textShadow: "0 4px 18px rgba(0,0,0,0.5)",
              whiteSpace: "pre-line"
            }}
          >
            {active.accentQuote}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6.5rem",
          left: "2rem",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          fontSize: "0.78rem",
          letterSpacing: "0.15em",
          color: "#D8CCC2"
        }}
        className="hero-indicator-pos"
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: currentSlide === i ? "#FFFFFF" : "#A69B95",
              fontWeight: currentSlide === i ? 700 : 400,
              cursor: "pointer"
            }}
          >
            <span>0{i + 1}</span>
            <span
              style={{
                width: currentSlide === i ? "32px" : "14px",
                height: "2px",
                backgroundColor: currentSlide === i ? "#E5C88B" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease"
              }}
            />
          </button>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "rgba(18, 14, 14, 0.72)",
          backdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(197, 168, 105, 0.25)",
          padding: "1.2rem 0"
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)"
              }}
            >
              <Gem size={17} />
            </div>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#FFFFFF" }}>Premium Fabrics</div>
              <div style={{ fontSize: "0.72rem", color: "#B8AEA8" }}>100% Pure Mulberry Silks</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)"
              }}
            >
              <Scissors size={17} />
            </div>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#FFFFFF" }}>Custom Stitching</div>
              <div style={{ fontSize: "0.72rem", color: "#B8AEA8" }}>Bespoke Couture Fitting</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)"
              }}
            >
              <Truck size={17} />
            </div>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#FFFFFF" }}>Pan India Delivery</div>
              <div style={{ fontSize: "0.72rem", color: "#B8AEA8" }}>Insured Express Transit</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)"
              }}
            >
              <Heart size={17} />
            </div>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#FFFFFF" }}>Trusted by Brides</div>
              <div style={{ fontSize: "0.72rem", color: "#B8AEA8" }}>10,000+ Happy Celebrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
