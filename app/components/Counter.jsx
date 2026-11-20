"use client"; // บอก Next.js ว่าคอมโพเนนต์นี้ต้องทำงานในเบราว์เซอร์

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // State เก็บจำนวนครั้งที่กด

  return (
    <button onClick={() => setCount(count + 1)}>
      กดไปแล้ว {count} ครั้ง
    </button>
  );
}