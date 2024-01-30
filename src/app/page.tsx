import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p> Criando link para acessar a página AboutPage</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      
    </main>
  );
}
