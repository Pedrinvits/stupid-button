import Donate from "@/components/donate";
import Donut from "@/components/donut";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col col container mx-auto items-center">
      <div className="absolute self-end font-mono font-semibold">R$ 0,00</div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Donut/>
        <Donate/>
      </div>
    </main>
    
  );
}
