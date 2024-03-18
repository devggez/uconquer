import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Welcome to main page</h1>
      <a href="/users">Go to users page</a>
      <ProductCard></ProductCard>
    </main>
  );
}
