import React, { useEffect, useState } from "react";

const PricingPlan = () => {
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
      backgroundColor: "rgba(18, 19, 18, 1)",
      padding: "20px",
      borderRadius: "15px",
      width: isMobile ? "347px" : "537px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    price: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    originalPrice: {
      color: "#666",
      fontSize: "18px",
      fontWeight: "400",
      textDecoration: "line-through",
    },
    offerText: {
      color: "rgba(116, 201, 40, 1)",
      fontSize: "16px",
      marginTop: "4px",
      fontWeight: "500",
    },
  };

  return (
    <div style={style.root}>
      <div style={style.header}>
        <div style={style.title}>12 Month Plan</div>
        <div style={style.price}>₹999</div>
      </div>
      <div style={style.header}>
        <div style={style.offerText}>Offer Ending Soon</div>
        <div style={style.originalPrice}>₹5999/yearly</div>
      </div>
    </div>
  );
};

export default PricingPlan;
