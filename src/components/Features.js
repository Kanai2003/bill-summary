import { useState, useEffect } from "react";

const Features = () => {
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
      backgroundColor: "rgba(37, 207, 94, 0.05)",
      borderRadius: "24px",
      padding: "20px",
      width: isMobile ? "347px" : "536px",
      maxWidth: "100%",
    },
    title: {
      background:
        "linear-gradient(to right, rgba(116, 201, 40, 1), rgba(225, 185, 18, 1))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "16px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "16px",
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#E5E5E5",
      fontSize: "18px",
      fontWeight: "500",
      fontFamily: "popins",
    },
    checkmark: {
      width: "24px",
      height: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(41, 191, 18, 1)",
      color: "black",
      borderRadius: "50%",
      opacity: "0.3",
    },
  };

  const features = [
    "Access To 25+ Professional Courses",
    "Guaranteed Jobs And Internships",
    "Hackathons & Competitions",
    "Clubs & Certifications",
    "Practice Mock Interviews",
    "Personalized Mentorship",
  ];

  return (
    <div style={style.root}>
      <h2 style={style.title}>Learn, Build, Network & Earn</h2>
      <div style={style.grid}>
        {features.map((feature, index) => (
          <div key={index} style={style.item}>
            <span style={style.checkmark}>✓</span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
