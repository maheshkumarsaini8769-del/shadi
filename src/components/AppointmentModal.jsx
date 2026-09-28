"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function AppointmentModal() {
  const { isAppointmentOpen, setIsAppointmentOpen } = useShop();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "11:00 AM - 01:00 PM",
    serviceType: "Flagship Showroom Visit (Sikar)",
    weddingDate: "",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isAppointmentOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsAppointmentOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 400);
  };

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
      onClick={handleClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          backgroundColor: "#FAF7F2",
          borderRadius: "2px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "1.8rem 2rem 1.4rem",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #ECE3D6",
            position: "relative"
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.2rem",
              color: "var(--text-main)",
              padding: "0.4rem"
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", marginBottom: "0.2rem" }}>
            <Sparkles size={16} />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Bespoke Bridal Experience
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "var(--text-main)",
              lineHeight: 1.2
            }}
          >
            Book Your Bridal Consultation
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
            Reserve a private suite with our senior bridal stylists at our Rajasthan flagship showroom.
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "1.8rem 2rem 2rem", maxHeight: "75vh", overflowY: "auto" }}>
          {isSubmitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <CheckCircle size={54} style={{ color: "var(--maroon)" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--text-main)" }}>
                Appointment Confirmed!
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "400px", lineHeight: 1.6 }}>
                Dear <strong>{formData.name}</strong>, our bridal concierge has reserved your private suite for{" "}
                <strong>{formData.date || "your selected date"}</strong> at <strong>{formData.time}</strong>.
              </p>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "1rem 1.4rem",
                  border: "1px dashed var(--gold)",
                  borderRadius: "2px",
                  fontSize: "0.82rem",
                  color: "var(--text-main)"
                }}
              >
                Appointment Code: <strong>SHADI-BRIDE-{(Math.random() * 9000 + 1000).toFixed(0)}</strong>
                <br />
                A confirmation SMS &amp; WhatsApp has been sent to <strong>{formData.phone}</strong>.
              </div>
              <button
                onClick={handleClose}
                className="btn-primary"
                style={{ marginTop: "1rem", padding: "0.85rem 2rem" }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Consultation Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.85rem",
                    borderRadius: "2px",
                    outline: "none"
                  }}
                >
                  <option value="Flagship Showroom Visit (Sikar)">
                    Flagship Showroom Visit — Palace Road, Sikar
                  </option>
                  <option value="Virtual Video Consultation">
                    Virtual HD Video Styling Consultation (Worldwide)
                  </option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row-2">
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Bride&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.85rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.85rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row-2">
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.85rem",
                      borderRadius: "2px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.85rem",
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

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Wedding / Function Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #DFD5C8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "0.85rem",
                    borderRadius: "2px",
                    outline: "none"
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "1rem",
                  marginTop: "0.5rem",
                  fontSize: "0.86rem"
                }}
              >
                CONFIRM APPOINTMENT
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
