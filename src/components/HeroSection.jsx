import NotifyForm from "./NotifyForm";

export default function HeroSection() {
  return (
    <section className="hero">
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
