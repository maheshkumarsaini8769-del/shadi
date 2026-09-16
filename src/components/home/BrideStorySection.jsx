"use client";

import React from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { Sparkles, Scissors, Crown, Heart, ArrowRight } from "lucide-react";

export default function BrideStorySection() {
  const { setIsAppointmentOpen } = useShop();

  return (
    <section
      style={{
        padding: "5.5rem 0",
        backgroundColor: "#FAF3EB",
        borderTop: "1px solid #ECE1D2",
        borderBottom: "1px solid #ECE1D2"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1.1fr",
            gap: "3rem",
            alignItems: "center"
          }}
          className="bride-story-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--maroon)"
                }}
              >
                BESPOKE ATELIER
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 3.6vw, 3.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  color: "var(--text-main)",
                  marginTop: "0.5rem"
                }}
              >
                Every Bride
                <br />
                Has a Story
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.45rem",
                  color: "var(--maroon-light)",
                  marginTop: "0.6rem"
                }}
              >
                Let Us Be a Part of Yours
              </p>
            </div>

            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Step into an intimate sanctuary where your wedding dreams are translated into reality.
              From handpicking royal zardozi threads to personalized drape consultations, our bridal specialists
              accompany you on every step of your bridal journey.
            </p>

            <div>
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="btn-blush"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "135%",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid rgba(197, 168, 105, 0.4)",
              boxShadow: "0 14px 40px rgba(0,0,0,0.08)"
            }}
          >
            <Image
              src="/images/bride-story-back.jpg"
              alt="Indian Bride Hair Styling and Jewelry Details"
              fill
              sizes="(max-width: 992px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DFD5C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--maroon)",
                  flexShrink: 0
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600 }}>
                  Personal Styling Support
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px", lineHeight: 1.5 }}>
                  Dedicated 1-on-1 consultations with senior bridal stylists to harmonize jewelry, dupatta, and veil.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DFD5C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--maroon)",
                  flexShrink: 0
                }}
              >
                <Scissors size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600 }}>
                  Custom Alterations
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px", lineHeight: 1.5 }}>
                  In-house master karigars provide precision bespoke tailoring and complimentary final fittings.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DFD5C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--maroon)",
                  flexShrink: 0
                }}
              >
                <Crown size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600 }}>
                  Exclusive Bridal Lounge
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px", lineHeight: 1.5 }}>
                  Private VIP suites for you and your family, accompanied by royal refreshments and trials.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DFD5C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--maroon)",
                  flexShrink: 0
                }}
              >
                <Heart size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600 }}>
                  Made with Love
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px", lineHeight: 1.5 }}>
                  Centuries of Rajasthani handcraft heritage poured into every thread, pearl, and zardozi motif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
