"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    // 1. Durum: Eğer kullanıcı bir adres yazdıysa (Örn: İstanbul)
    if (address.trim() !== "") {
      try {
        // Ücretsiz bir servis olan Nominatim'i kullanarak adresi koordinata çeviriyoruz
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        const data = await response.json();

        if (data.length > 0) {
          const lat = data[0].lat;
          const lng = data[0].lon;
          router.push(`/map?lat=${lat}&lng=${lng}&address=${encodeURIComponent(address)}`);
        } else {
          alert("Adres bulunamadı!");
        }
      } catch (error) {
        alert("Adres aranırken bir hata oluştu.");
      }
    } 
    // 2. Durum: Eğer kutu boşsa, cihazın GPS konumunu al (Eski sistem)
    else {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        router.push(`/map?lat=${lat}&lng=${lng}&address=Cihaz Konumu`);
      });
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Konum & Harita</h1>
      <input 
        type="text" 
        placeholder="Bir şehir veya adres yazın (Örn: İstanbul)" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
      />
      <br />
      <button 
        onClick={handleSearch}
        style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Konumu Bul ve Haritaya Git
      </button>
      <p style={{ fontSize: "12px", color: "#666" }}>* Adres yazarsanız oraya, boş bırakırsanız GPS konumunuza gider.</p>
    </div>
  );
}