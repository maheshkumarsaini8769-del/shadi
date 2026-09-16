"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialBanner() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#161313",
        color: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          minHeight: "440px"
        }}
        className="editorial-banner-grid"
      >
        <div style={{ position: "relative", minHeight: "360px" }}>
          <Image
            src="/images/editorial-bride.jpg"
            alt="Indian Bride in Blush Veil"
            fill
            sizes="(max-width: 992px) 100vw, 55vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, transparent 60%, #161313 100%)"
            }}
          />
        </div>

        <div
          style={{
            padding: "4rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#161313"
          }}
        >
          <div style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            HAUTE COUTURE EDITORIAL
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#FFFFFF",
              marginBottom: "1.2rem"
            }}
          >
            Every Detail Tells
            <br />
            a Beautiful Story
          </h2>

          <div
            style={{
              fontSize: "0.88rem",
              letterSpacing: "0.14em",
              color: "var(--gold-light)",
              textTransform: "uppercase",
              marginBottom: "1.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap"
            }}
          >
            <span>Bridal Couture</span>
            <span>&bull;</span>
            <span>Designer Wear</span>
            <span>&bull;</span>
            <span>Timeless Elegance</span>
          </div>

          <p style={{ fontSize: "0.92rem", color: "#B8AEA8", lineHeight: 1.7, maxWidth: "440px", marginBottom: "2rem" }}>
            Crafted in the heart of royal Rajasthan, each piece represents the pinnacle of Indian needlework,
            hand-selected pure silks, and silhouettes that celebrate the individuality of every bride.
          </p>

          <div>
            <Link href="/about" prefetch={false} className="btn-outline-gold">
              <span>OUR CRAFTSMANSHIP</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
