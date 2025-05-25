'use client';
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "../components/notifyMe.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., 2 seconds) - replace with actual logic if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="container">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}
