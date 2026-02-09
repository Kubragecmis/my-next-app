export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Hoş Geldiniz
        </h1>

        <p style={{ fontSize: "18px" }}>
          Bu sayfa Next.js ile oluşturulmuş basit bir karşılama sayfasıdır.
        </p>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Proje geliştirme aşamasındadır.
        </p>
      </div>
    </div>
  );
}
