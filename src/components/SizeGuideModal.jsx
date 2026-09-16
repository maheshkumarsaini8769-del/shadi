"use client";

import React, { useState } from "react";
import { X, Ruler } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState("inches");

  if (!isSizeGuideOpen) return null;

  const measurementsInches = [
    { size: "XS", bust: "32", waist: "26", hips: "36", length: "42", blouse: "13.5" },
    { size: "S", bust: "34", waist: "28", hips: "38", length: "42", blouse: "14.0" },
    { size: "M", bust: "36", waist: "30", hips: "40", length: "43", blouse: "14.5" },
    { size: "L", bust: "38", waist: "32", hips: "42", length: "43", blouse: "15.0" },
    { size: "XL", bust: "40", waist: "34", hips: "44", length: "44", blouse: "15.5" },
    { size: "XXL", bust: "42", waist: "36", hips: "46", length: "44", blouse: "16.0" }
  ];

  const measurementsCm = [
    { size: "XS", bust: "81", waist: "66", hips: "91", length: "107", blouse: "34" },
    { size: "S", bust: "86", waist: "71", hips: "96", length: "107", blouse: "35" },
    { size: "M", bust: "91", waist: "76", hips: "102", length: "109", blouse: "37" },
    { size: "L", bust: "96", waist: "81", hips: "107", length: "109", blouse: "38" },
    { size: "XL", bust: "102", waist: "86", hips: "112", length: "112", blouse: "39" },
    { size: "XXL", bust: "107", waist: "91", hips: "117", length: "112", blouse: "41" }
  ];

  const data = unit === "inches" ? measurementsInches : measurementsCm;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(16, 13, 13, 0.75)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}
      onClick={() => setIsSizeGuideOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "#FAF7F2",
          borderRadius: "2px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "1.5rem 2rem",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #ECE3D6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Ruler size={20} style={{ color: "var(--maroon)" }} />
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600 }}>
              Indian Bridal Sizing Chart
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            style={{ color: "var(--text-main)", padding: "0.3rem" }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              All lehengas include generous 3-to-4 inch internal margins for easy alteration.
            </p>
            <div style={{ display: "flex", border: "1px solid #D6C9BC", borderRadius: "2px", overflow: "hidden" }}>
              <button
                onClick={() => setUnit("inches")}
                style={{
                  padding: "0.3rem 0.8rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  backgroundColor: unit === "inches" ? "var(--maroon)" : "#FFFFFF",
                  color: unit === "inches" ? "#FFFFFF" : "var(--text-main)"
                }}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit("cm")}
                style={{
                  padding: "0.3rem 0.8rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  backgroundColor: unit === "cm" ? "var(--maroon)" : "#FFFFFF",
                  color: unit === "cm" ? "#FFFFFF" : "var(--text-main)"
                }}
              >
                CM
              </button>
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#FFFFFF",
                fontSize: "0.85rem",
                border: "1px solid #ECE3D6"
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F7F2EB", color: "var(--text-main)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Size</th>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Bust</th>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Waist</th>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Hip</th>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Skirt Length</th>
                  <th style={{ padding: "0.75rem", borderBottom: "1px solid #ECE3D6" }}>Blouse Length</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.size} style={{ borderBottom: "1px solid #F0E8DC" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700, color: "var(--maroon)" }}>{row.size}</td>
                    <td style={{ padding: "0.75rem" }}>{row.bust}</td>
                    <td style={{ padding: "0.75rem" }}>{row.waist}</td>
                    <td style={{ padding: "0.75rem" }}>{row.hips}</td>
                    <td style={{ padding: "0.75rem" }}>{row.length}</td>
                    <td style={{ padding: "0.75rem" }}>{row.blouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "1.2rem", padding: "0.85rem 1rem", backgroundColor: "var(--blush)", borderRadius: "2px" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--maroon-dark)", fontWeight: 600 }}>
              Need Bespoke Custom Stitching?
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Our master karigars can hand-tailor your outfit to your exact measurements. Select &quot;Custom Stitching&quot; at checkout or contact our bridal concierge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
