"use client";

import { useEffect, useState } from "react";

export default function RecoverReferralPage() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ");

    const referral = cookies.find((c) =>
      c.startsWith("referral_code=")
    );

    if (referral) {
      setCode(referral.split("=")[1]);
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>استرجاع كود الدعوة</h2>

      {code ? (
        <>
          <p>رمز الدعوة المخزن:</p>
          <h3>{code}</h3>
        </>
      ) : (
        <p>لم يتم العثور على كود دعوة</p>
      )}
    </div>
  );
}
