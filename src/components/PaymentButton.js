import React, { useEffect, useState } from "react";

const PaymentButton = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    button: {
      maxWidth: "100%",
      width: isMobile ? "347px" : "497px",
      height: isMobile ? "57px" : "81px",
      padding: "0 20px",
      backgroundColor: "rgba(235, 206, 49, 1)",
      color: "#000",
      border: "none",
      borderRadius: "10px",

      fontSize: "24px",
      fontWeight: "700",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: "16px",
    },
    divider: {
      height: "40px",
      width: "1px",
      backgroundColor: "#000",
    },
  };

  return (
    <div style={styles.button}>
      <p>Proceed to Pay</p>
      <div style={styles.divider}></div>
      <p>₹699/month</p>
    </div>
  );
};

export default PaymentButton;
