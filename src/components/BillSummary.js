import { useState, useEffect } from "react";

const BillSummary = () => {
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
      padding: "20px",
      width: isMobile ? "347px" : "497px",
      borderRadius: "11px",
      backgroundColor: "rgba(18, 19, 18, 1)",
    },
    title: {
      color: "#999",
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "16px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "4px",
      fontWeight: "400",
    },
    coupon: {
      
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "4px",
        fontWeight: "400",
        color: 'rgba(116, 201, 40, 1)',
    },
    subtext: {
      color: "#666",
      fontSize: "12px",
      marginTop: "4px",
      marginBottom: "16px",
    },
    discount: {
      color: "#25CF5E",
    },
    total: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "16px",
      fontSize: "24px",
      fontWeight: "700",
      paddingTop: "16px",
      borderTop: "1px solid #333",
    },
  };
  
  return (
  <div style={style.root}>
    <div style={style.title}>BILL SUMMARY</div>
    <div style={style.row}>
      <span>12 Month Subscription</span>
      <span>₹5,999</span>
    </div>
    <div style={style.subtext}>₹599 x 12 Months</div>
    <div style={style.coupon}>
      <span>Coupon Applied</span>
      <span style={style.discount}>-₹5000</span>
    </div>
    <div style={style.total}>
      <span>To Pay</span>
      <span>₹999</span>
    </div>
  </div>
);
}

export default BillSummary;