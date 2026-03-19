"use client";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function MapPage() {
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lng = parseFloat(searchParams.get("lng") || "0");
  const address = searchParams.get("address") || "";

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Konumunuz İşaretlendi</h1>
      <p><b>Yazılan Adres:</b> {address}</p>
      <div style={{ height: "400px", marginTop: "20px" }}>
        <MapComponent lat={lat} lng={lng} address={address} />
      </div>
    </div>
  );
}