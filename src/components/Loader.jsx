'use client';
import "./notifyMe.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
