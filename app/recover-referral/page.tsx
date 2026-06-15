"use client";

import { useEffect, useState } from "react";

export default function RecoverReferralPage() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ");

    const referral = cookies.find((c) =>
      c.startsWith("referral_code=")
    );

    if (referral) {
      setCode(referral.split("=")[1]);
    }
  }, []);

  const copyToClipboard = async () => {
    if (!code) return;

    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>استرجاع كود الدعوة</h2>

        {code ? (
          <div style={styles.row}>
            <span style={styles.code}>{code}</span>

            <button onClick={copyToClipboard} style={styles.button}>
              {copied ? "تم النسخ ✓" : "نسخ"}
            </button>
          </div>
        ) : (
          <p style={styles.empty}>لم يتم العثور على كود دعوة</p>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    background: "#111827",
    padding: "30px",
    borderRadius: "16px",
    minWidth: "320px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  title: {
    color: "#fff",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    background: "#1f2937",
    padding: "12px",
    borderRadius: "10px",
  },
  code: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    wordBreak: "break-all",
  },
  button: {
    background: "#22c55e",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  empty: {
    color: "#9ca3af",
  },
};
