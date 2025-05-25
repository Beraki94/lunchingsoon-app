"use client";
import Image from "next/image";
import Link from "next/link";
import NotifyForm from "./NotifyForm";

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/joemandilasgate.jpg"
        alt="Joe Mandilas Gate Background"
        fill
        style={{ objectFit: "cover", zIndex: 0, borderRadius: "2rem" }}
        className="hero__image"
        priority
      />
      <div className="hero__content">
        <h2 className="hero__heading">We're Launching Soon!</h2>
        <h4 className="hero__subheading mt-1">
          Get notified when we go live and enjoy exclusive offers.
        </h4>
        <NotifyForm />
      </div>
    </section>
  );
}