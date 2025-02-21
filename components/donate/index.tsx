"use client";
/* eslint-disable */
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <Suspense fallback={<Button disabled>Carregando...</Button>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      alert("Pagamento realizado com sucesso! ✅");
    } else if (status === "cancel") {
      alert("Pagamento cancelado ❌");
    }
  }, [status]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data: { url?: string } = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error : any) {
      alert("Erro ao processar o pagamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      disabled={loading}
    >
      {loading ? "Redirecionando..." : "Pagar com Stripe"}
    </Button>
  );
}
