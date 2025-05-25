"use client";
import { useState } from "react";

const countries = [
  { name: "Nigeria", code: "+234", length: 10 },
  { name: "Ghana", code: "+233", length: 9 },
  { name: "Togo", code: "+228", length: 8 },
  { name: "Benin", code: "+229", length: 8 },
  { name: "Ivory Coast", code: "+225", length: 8 },
  { name: "Niger", code: "+227", length: 8 },
  { name: "Cameroon", code: "+237", length: 9 },
  { name: "Chad", code: "+235", length: 8 },
];

export default function NotifyForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+234",
    phone: "",
  });
  const [alert, setAlert] = useState(null);

  const fullPhone = `${formData.countryCode}${formData.phone}`;
  const selectedCountry = countries.find(c => c.code === formData.countryCode);
  const isPhoneValid = formData.phone.replace(/\s/g, "").length === selectedCountry?.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedNumbers = JSON.parse(localStorage.getItem("submittedNumbers") || "[]");
    if (submittedNumbers.includes(fullPhone)) {
      showAlert("error", "This phone number has already been registered.");
      return;
    }

    if (!isPhoneValid) {
      showAlert("error", "Invalid phone number length for selected country.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzrlgkk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, phone: fullPhone }),
      });

      if (response.ok) {
        localStorage.setItem(
          "submittedNumbers",
          JSON.stringify([...submittedNumbers, fullPhone])
        );
        showAlert("success", "Thank you! We'll notify you at launch.");
        setFormData({ name: "", countryCode: "+234", phone: "" });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch {
      showAlert("error", "Oops! Something went wrong. Please try again.");
    }
  };

  const handleJoinGroup = () => {
    window.location.href = "https://chat.whatsapp.com/FiWdZH9eBMfHjdY4YUqQr7";
  };

  return (
    <form onSubmit={handleSubmit} className="notify-form fade-in-up">
      {alert && <div className={`custom-alert ${alert.type}`}>{alert.message}</div>}

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Name"
          required
        />
      </div>

      <div className="form-group">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          aria-label="Country Code"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} ({c.code})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="812 345 6789"
          value={formData.phone}
          onChange={handleChange}
          pattern="^[0-9\s]{6,15}$"
          aria-label="Phone Number"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Notify Me
      </button>

      <button
        type="button"
        onClick={handleJoinGroup}
        className="btn btn--secondary mt-2"
      >
        Join WhatsApp Group
      </button>
    </form>
  );
}
