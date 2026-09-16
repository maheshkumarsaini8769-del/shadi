"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShowroomSection() {
  return (
    <section style={{ padding: "6.5rem 0", backgroundColor: "var(--cream)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="showroom-section-grid"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "65%",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid #ECE3D6",
              boxShadow: "0 12px 35px rgba(0,0,0,0.06)"
            }}
          >
            <Image
              src="/images/showroom-interior.jpg"
              alt="Luxury Bridal Showroom Interior with Chandeliers"
              fill
              sizes="(max-width: 992px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div style={{ color: "var(--gold)" }}>
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <path d="M50 15 C55 30, 55 35, 50 38 C45 35, 45 30, 50 15 Z" fill="currentColor" />
                <path d="M50 85 C55 70, 55 65, 50 62 C45 65, 45 70, 50 85 Z" fill="currentColor" />
                <path d="M15 50 C30 55, 35 55, 38 50 C35 45, 30 45, 15 50 Z" fill="currentColor" />
                <path d="M85 50 C70 55, 65 55, 62 50 C65 45, 70 45, 85 50 Z" fill="currentColor" />
                <path d="M25 25 C40 35, 42 38, 41 41 C38 42, 35 40, 25 25 Z" fill="currentColor" />
                <path d="M75 75 C60 65, 58 62, 59 59 C62 58, 65 60, 75 75 Z" fill="currentColor" />
                <path d="M25 75 C35 60, 38 58, 41 59 C42 62, 40 65, 25 75 Z" fill="currentColor" />
                <path d="M75 25 C65 40, 62 42, 59 41 C58 38, 60 35, 75 25 Z" fill="currentColor" />
              </svg>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-main)"
              }}
            >
              Visit Our Showroom
            </h2>

            <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              Experience our exclusive collections in person.
              Get expert styling advice and find your perfect look.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.86rem",
                color: "var(--text-secondary)",
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "1rem",
                margin: "0.5rem 0"
              }}
            >
              <div>
                <strong>Location:</strong> Palace Road, Near Heritage Clock Tower, Sikar, Rajasthan
              </div>
              <div>
                <strong>Timings:</strong> 10:30 AM &ndash; 8:30 PM (All 7 Days)
              </div>
            </div>

            <div>
              <Link href="/contact" prefetch={false} className="btn-outline-dark">
                <span>FIND A STORE</span>
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
