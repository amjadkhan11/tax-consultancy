import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916207822029?text=Hello%20Arpit%20Ji,%20I%20visited%20your%20website%20and%20need%20help%20with%20tax%20filing.%20Please%20guide%20me."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
};

export default WhatsAppButton;