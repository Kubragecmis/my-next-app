"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!navigator.geolocation) {
      alert("Tarayıcı konum desteklemiyor");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        router.push(`/map?lat=${lat}&lng=${lng}&address=Cihaz Konumu`);
      },
      (error) => {
        alert("Konum alınamadı");
        console.error(error);
      }
    );
  };

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Konum & Harita</h1>

      <input 
        type="text" 
        placeholder="(Bu alan kullanılmıyor - GPS kullanılır)" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
      />

      <br />

      <button 
        onClick={handleSearch}
        style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Konumumu Bul ve Haritaya Git
      </button>

      <p style={{ fontSize: "12px", color: "#666" }}>
        * Konumunuz GPS üzerinden alınır.
      </p>
    </div>
  );
}