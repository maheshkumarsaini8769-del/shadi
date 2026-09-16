"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, Clock, MapPin, Calendar } from "lucide-react";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "11:00 AM - 01:00 PM",
    serviceType: "Flagship Showroom Visit (Sikar)",
    budget: "₹1,00,000 - ₹2,00,000",
    weddingDate: "",
    guestCount: "2-3 Guests",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2.5rem 0 6rem" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "2rem"
          }}
        >
          <Link href="/" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Home
          </Link>
          <span>&gt;</span>
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>Book Bridal Appointment</span>
        </div>

        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", marginBottom: "0.5rem" }}>
            <Sparkles size={16} />
            <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              PRIVATE BRIDAL SUITE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-main)"
            }}
          >
            Book Your Exclusive Consultation
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Reserve your private fitting session with our senior master stylists.
          </p>
          <div className="ornamental-divider">
            <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
          </div>
        </div>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            padding: "3rem",
            border: "1px solid #ECE3D6",
            borderRadius: "2px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.04)"
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <CheckCircle2 size={56} style={{ color: "var(--maroon)" }} />
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--text-main)" }}>
                Bridal Suite Confirmed!
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "460px", lineHeight: 1.6 }}>
                Dear <strong>{formData.name}</strong>, our concierge has locked your private appointment for{" "}
                <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
              </p>
              <div style={{ padding: "1rem 1.8rem", backgroundColor: "var(--blush)", borderRadius: "2px", fontSize: "0.85rem", color: "var(--maroon-dark)" }}>
                Booking ID: <strong>SHADI-BRIDE-{Math.floor(100000 + Math.random() * 900000)}</strong>
                <br />
                Location: Palace Road, Near Heritage Clock Tower, Sikar, Rajasthan
              </div>
              <Link href="/lehengas" prefetch={false} className="btn-primary" style={{ marginTop: "1rem" }}>
                Browse Bridal Lehengas Meanwhile
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Consultation Setting *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.88rem",
                    borderRadius: "2px",
                    outline: "none"
                  }}
                >
                  <option value="Flagship Showroom Visit (Sikar)">
                    Flagship Showroom VIP Lounge &mdash; Sikar, Rajasthan
                  </option>
                  <option value="Virtual Video Consultation">
                    Virtual HD Video Styling Session (Worldwide &amp; NRI Brides)
                  </option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }} className="form-row-2">
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Bride&apos;s Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    WhatsApp / Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }} className="form-row-2">
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Preferred Consultation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  >
                    <option>11:00 AM - 01:00 PM</option>
                    <option>01:30 PM - 03:30 PM</option>
                    <option>04:00 PM - 06:00 PM</option>
                    <option>06:30 PM - 08:30 PM</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }} className="form-row-2">
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Wedding / Ceremony Date
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Anticipated Bridal Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.88rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  >
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹2,00,000</option>
                    <option>₹2,00,000 - ₹3,50,000</option>
                    <option>Above ₹3,50,000 (Custom Couture)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Special Styling Requests / Silhouette Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Looking for heavy red zardozi lehenga, double dupatta styling, matching groom coordination..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.88rem",
                    borderRadius: "2px",
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ padding: "1.1rem", fontSize: "0.88rem", marginTop: "0.5rem" }}>
                RESERVE BRIDAL SUITE
              </button>
            </form>
          )}
        </div>
      </div>

      
    </div>
  );
}
