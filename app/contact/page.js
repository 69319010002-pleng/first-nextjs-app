import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>📞 หน้าติดต่อเรา</h1>
      <p>ติดต่อ: ปริณ สิงห์มัจฉา</p>
      <Link href="/">กลับหน้าหลัก</Link>
    </div>
  );
}