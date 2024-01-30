import Link from "next/link";
import Header from "@/app/_components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p> Criando link para acessar a página AboutPage</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      
    </main>
  );
}
