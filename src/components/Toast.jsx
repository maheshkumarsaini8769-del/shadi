"use client";

import React from "react";
import { useShop } from "@/context/ShopContext";
import { CheckCircle2 } from "lucide-react";

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="toast-notification" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <CheckCircle2 size={18} style={{ color: "var(--gold)" }} />
      <span>{toastMessage}</span>
    </div>
  );
}
