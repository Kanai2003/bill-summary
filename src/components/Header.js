import React, { useState, useEffect } from "react";

const Header = () => {
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
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      height: "100px",
      backgroundColor: "rgba(21, 21, 21, 1)",
      gap: "2rem",
      color: "white",
      
      padding: "20px",
    },
    image: {},
    divider: {
      height: "50%",
      width: "1px",
      backgroundColor: "gray",
    },
    text: {
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={style.root}>
      <img src="/image/logo.svg" alt="UpskillMedia Logo" style={style.image} />
      <div style={style.divider}></div>
      <span style={style.text}>Order Summary</span>
    </div>
  );
};

export default Header;
