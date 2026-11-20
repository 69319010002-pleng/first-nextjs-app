"use client";
import { useState } from "react";
import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = [
    {
      text: "🎉 ยินดีต้อนรับสู่เว็บไซต์ของ ปริณ สิงห์มัจฉา 🚀 คลิกที่แถบนี้เพื่อเปลี่ยนข้อความ!",
      bg: "linear-gradient(90deg, #fef08a 0%, #fbcfe8 50%, #bae6fd 100%)",
      color: "#581c87",
    },
    {
      text: "💻 กำลังพัฒนาโปรเจกต์ด้วย Next.js + React + Docker Container ✨ คลิกอีกครั้ง!",
      bg: "linear-gradient(90deg, #bbf7d0 0%, #a5f3fc 50%, #c7d2fe 100%)",
      color: "#064e3b",
    },
    {
      text: "🔥 เรียนรู้ Git Workflow, Branching และ Merge Conflict สำเร็จแล้ว! 🎯",
      bg: "linear-gradient(90deg, #fed7aa 0%, #fecaca 50%, #f5d0fe 100%)",
      color: "#7c2d12",
    },
  ];

  const skills = [
    {
      name: "HTML",
      bg: "#ffedd5",
      text: "#c2410c",
      border: "#fdba74",
      desc: "โครงสร้างหลักของหน้าเว็บไซต์ (HyperText Markup Language)",
    },
    {
      name: "CSS",
      bg: "#dbeafe",
      text: "#1d4ed8",
      border: "#93c5fd",
      desc: "จัดวางเลย์เอาต์ ตกแต่งสีสัน และทำ Animation สวยๆ",
    },
    {
      name: "JavaScript",
      bg: "#fef9c3",
      text: "#a16207",
      border: "#fde047",
      desc: "ภาษาเขียนโปรแกรมที่ทำให้หน้าเว็บโต้ตอบและกดใช้งานได้",
    },
    {
      name: "Git",
      bg: "#fee2e2",
      text: "#b91c1c",
      border: "#fca5a5",
      desc: "ระบบควบคุมเวอร์ชันโค้ด แตก Branch และทำงานร่วมกับ GitHub",
    },
    {
      name: "Docker",
      bg: "#cffafe",
      text: "#0e7490",
      border: "#67e8f9",
      desc: "จำลองสภาพแวดล้อม Container ให้รันแอปได้เหมือนกันทุกเครื่อง",
    },
  ];

  const activeSkillObj = skills.find((s) => s.name === selectedSkill);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
        padding: "48px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 12s linear infinite;
        }
        .marquee-box:hover .marquee-text {
          animation-play-state: paused;
        }
        .skill-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .skill-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.12);
        }
      `}</style>

      <main
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* 1. แถบตัวหนังสือวิ่งที่กดเปลี่ยนข้อความและสีได้ */}
        <div
          onClick={() => setBannerIndex((bannerIndex + 1) % banners.length)}
          title="คลิกเพื่อเปลี่ยนข้อความและสี"
          className="marquee-box"
          style={{
            overflow: "hidden",
            background: banners[bannerIndex].bg,
            padding: "10px 0",
            borderRadius: "999px",
            marginBottom: "20px",
            border: "2px solid #e9d5ff",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <div
            className="marquee-text"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              color: banners[bannerIndex].color,
            }}
          >
            {banners[bannerIndex].text}
          </div>
        </div>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1e1b4b",
            marginBottom: "8px",
          }}
        >
          ยินดีต้อนรับสู่เว็บไซต์ของ ปริณ สิงห์มัจฉา
        </h1>
        <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px" }}>
          เว็บไซต์นี้สร้างด้วย Next.js และรันอยู่ภายใน Docker Container
        </p>

        {/* 2. ป้ายทักษะที่กดเพื่อดูคำอธิบายได้ */}
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#312e81", marginBottom: "10px" }}>
          ทักษะที่กำลังเรียน <span style={{ fontSize: "13px", fontWeight: "normal", color: "#64748b" }}>(ลองกดที่ป้ายทักษะดูสิ!)</span>
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
          {skills.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            return (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                className="skill-btn"
                style={{
                  backgroundColor: isSelected ? skill.text : skill.bg,
                  color: isSelected ? "#ffffff" : skill.text,
                  border: `2px solid ${skill.border}`,
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {skill.name} {isSelected ? "▼" : ""}
              </button>
            );
          })}
        </div>

        {/* กล่องแสดงรายละเอียดเมื่อกดเลือกทักษะ */}
        {activeSkillObj && (
          <div
            style={{
              backgroundColor: activeSkillObj.bg,
              color: activeSkillObj.text,
              border: `1px solid ${activeSkillObj.border}`,
              padding: "12px 16px",
              borderRadius: "12px",
              fontSize: "14px",
              marginBottom: "20px",
              fontWeight: "500",
            }}
          >
            💡 <strong>{activeSkillObj.name}:</strong> {activeSkillObj.desc}
          </div>
        )}

        {/* 3. ปุ่มกดนับจำนวน */}
        <Counter />

        {/* 4. ปุ่มกดเปลี่ยนหน้า (เกี่ยวกับฉัน / ติดต่อเรา) */}
        <div style={{ marginTop: "28px", display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#10b981",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            📞 หน้าติดต่อเรา
          </Link>

          <Link
            href="/about"
            style={{
              display: "inline-block",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            ไปหน้าเกี่ยวกับฉัน -&gt;
          </Link>
        </div>
      </main>
    </div>
  );
}