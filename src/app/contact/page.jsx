"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { showroomData } from "@/data/showroom";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Bridal Styling Query",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "Bridal Styling Query", message: "" });
    }, 5000);
  };

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2.5rem 0 6rem" }}>
      <div className="container">
        {/* Breadcrumb */}
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
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>Showroom &amp; Contact</span>
        </div>

        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-main)"
            }}
          >
            Visit Our Showroom
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Experience the splendor in person or speak directly with our royal bridal concierge.
          </p>
          <div className="ornamental-divider">
            <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
          </div>
        </div>

        {/* Showroom & Form Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "3.5rem",
            alignItems: "start",
            marginBottom: "5rem"
          }}
          className="contact-layout-grid"
        >
          {/* Left: Showroom Details */}
          <div
            className="responsive-card-pad"
            style={{
              backgroundColor: "#FFFFFF",
              padding: "2.5rem",
              border: "1px solid #ECE3D6",
              borderRadius: "2px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", marginBottom: "0.3rem" }}>
              <Sparkles size={16} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                FLAGSHIP STORE
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 600,
                color: "var(--text-main)",
                marginBottom: "1.2rem"
              }}
            >
              Shadi Rajasthan Showroom
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <MapPin size={20} style={{ color: "var(--maroon)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-main)" }}>Address</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, marginTop: "2px" }}>
                    {showroomData.location}
                    <br />
                    <span style={{ color: "var(--maroon)", fontSize: "0.8rem" }}>({showroomData.landmark})</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <Phone size={20} style={{ color: "var(--maroon)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-main)" }}>Phone &amp; WhatsApp</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {showroomData.phone} (10:30 AM &ndash; 8:30 PM IST)
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <Mail size={20} style={{ color: "var(--maroon)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-main)" }}>Email</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {showroomData.email} &bull; {showroomData.conciergeEmail}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <Clock size={20} style={{ color: "var(--maroon)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-main)" }}>Showroom Hours</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    Mon &ndash; Sat: 10:30 AM &ndash; 8:30 PM
                    <br />
                    Sunday: 11:00 AM &ndash; 7:00 PM (By Appointment)
                  </div>
                </div>
              </div>
            </div>

            {/* Showroom Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "50%",
                borderRadius: "2px",
                overflow: "hidden",
                border: "1px solid #ECE3D6"
              }}
            >
              <Image
                src="/images/showroom-interior.jpg"
                alt="Shadi Flagship Showroom Interior"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="responsive-card-pad"
            style={{
              backgroundColor: "#FFFFFF",
              padding: "2.5rem",
              border: "1px solid #ECE3D6",
              borderRadius: "2px"
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "var(--text-main)",
                marginBottom: "0.5rem"
              }}
            >
              Send Us a Message
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.8rem" }}>
              Have questions regarding custom fittings, fabric samples, or international courier? We will respond within 4 hours.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--blush)",
                  borderRadius: "2px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.8rem"
                }}
              >
                <CheckCircle2 size={40} style={{ color: "var(--maroon)" }} />
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>Message Received</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Thank you, <strong>{formData.name}</strong>. Our head bridal stylist will get in touch shortly via WhatsApp/Phone.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Your Name *
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

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                      Phone / WhatsApp *
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

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                    <option>Bridal Styling Query</option>
                    <option>Custom Stitching / Alterations</option>
                    <option>Showroom Private Visit Booking</option>
                    <option>International Shipping &amp; Insurance</option>
                    <option>Other Inquiries</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Your Message / Wedding Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your wedding date, preferred colors, silhouette preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #DFD5C8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "0.85rem",
                      borderRadius: "2px",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: "0.95rem" }}>
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Section */}
        <div id="faq" style={{ borderTop: "1px solid #ECE3D6", paddingTop: "4rem" }}>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--maroon)", textTransform: "uppercase" }}>
              COMMON QUESTIONS
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 600, marginTop: "0.3rem" }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {showroomData.faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECE3D6",
                    borderRadius: "2px",
                    overflow: "hidden"
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "1.2rem 1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-main)"
                    }}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: "var(--maroon)"
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.2rem",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        borderTop: "1px solid #FAF3EB"
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </div>
  );
}
