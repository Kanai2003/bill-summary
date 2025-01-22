import React from "react";

const Footer = () => {
  const styles = {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      marginTop: "24px",
      backgroundColor: "rgba(73, 208, 67, 0.1)",
      padding: "2rem",
    },
    image: {
      
    },
  };

  return (
    <div style={styles.root}>
      <img src="/image/secure.svg" alt="Secure" style={styles.image} />
      <img src="/image/razorpay.svg" alt="Razorpay" style={styles.image} />
      <img src="/image/secure-payment.svg" alt="Secure Payment" style={styles.image} />
    </div>
  );
};

export default Footer;