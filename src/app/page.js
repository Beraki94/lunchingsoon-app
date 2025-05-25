import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import "../components/notifyMe.css"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}
