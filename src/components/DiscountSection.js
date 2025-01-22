import React, { useState, useEffect } from "react";

const DiscountSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    root: {
      backgroundColor: "rgba(18, 19, 19, 1)",
      padding: "22px",
      width: isMobile ? "347px" : "497px",
      borderRadius: "10px",
    },
    header: {
      background:
        "linear-gradient(to right, rgba(225, 234, 0, 1), rgba(125, 193, 8, 1))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "16px",
    },
    couponCode: {
      color: "#FFB800",
      fontWeight: "600",
    },
    savingsInfo: {
      display: "flex",
      alignItems: "center",
      color: "rgba(25, 26, 25, 1)",
      fontSize: "14px",
      marginTop: "4px",
      backgroundColor: "rgba(25, 26, 25, 1)",
      padding: "8px",
      borderRadius: "10px",
    },
    amount: {
      color: "#fff",
      marginRight: "4px",
      marginLeft: "2px",
      fontWeight: "700",
      fontSize: "18px",
    },
    appliedTag: {
      color: "rgba(116, 201, 40, 1)",
      marginLeft: "auto",
    },
  };

  return (
    <div style={style.root}>
      <div style={style.header}>
        <span style={style.couponCode}>"YEAR25"</span> Applied & unlocked 83%
        OFF
      </div>
      <div style={style.savingsInfo}>
        <img src="/icon/coupon.svg" alt="coupon icon" />
        <span style={style.amount}>
          ₹5000 <span style={{ fontWeight: "400" }}>saved with YEAR25</span>
        </span>

        <span style={style.appliedTag}>✓ Applied</span>
      </div>
    </div>
  );
};

export default DiscountSection;
