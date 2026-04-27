import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Lifestyle from "@/components/Lifestyle";
import Social from "@/components/Social";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Experience />
        <Journey />
        <Lifestyle />
        <Social />
      </main>
    </>
  );
}
