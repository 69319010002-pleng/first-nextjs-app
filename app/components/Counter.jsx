"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        margin: "24px 0",
        padding: "22px",
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(192, 132, 252, 0.35)",
        textAlign: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <p style={{ margin: "0 0 14px 0", fontSize: "17px", fontWeight: "600" }}>
        กดให้กำลังใจแล้ว{" "}
        <span
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            color: "#ffffff",
            padding: "4px 16px",
            borderRadius: "999px",
            fontSize: "22px",
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(236, 72, 153, 0.4)",
            margin: "0 6px",
          }}
        >
          {count}
        </span>{" "}
        ครั้ง
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
            color: "#ffffff",
            padding: "12px 26px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow: "0 6px 20px rgba(59, 130, 246, 0.45)",
          }}
        >
          🚀 กดเพิ่มพลัง +1
        </button>

        {count > 0 && (
          <button
            onClick={() => setCount(0)}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "inherit",
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(148, 163, 184, 0.4)",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            รีเซ็ต
          </button>
        )}
      </div>
    </div>
  );
}