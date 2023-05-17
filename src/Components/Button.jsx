import React, { useState } from "react";

const Button = ({ text, link, page }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: isHovered ? "#765510" : "#664800",
    color: "#fff",
    fontWeight: 600,
    padding: "10px",
    outline: "none",
    borderRadius: "5px",
    border: "none",
    position: "relative",
    display: "inline-block",
    transition: "all 0.3s ease",
    boxShadow:
      "inset 2px 2px 2px 0px #765510, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
    top: isHovered ? "2px" : "0",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <a
        style={buttonStyles}
        href={link}
        target={page}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
    </>
  );
};

export default Button;
