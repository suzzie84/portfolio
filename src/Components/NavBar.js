import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setVisible(window.scrollY <= 30); // Only visible at the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 0; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        transition: "opacity 0.3s ease-in-out",
        opacity: visible ? 1 : 0, // Hide when scrolling down
        pointerEvents: visible ? "auto" : "none", // Disable interactions when hidden
      }}
    >
      <Toolbar>
        <Box>
          {["Education", "Skills", "Projects", "Contact"].map((section, index) => (
            <React.Fragment key={section}>
              <Button
                disableRipple
                onClick={() => handleScrollToSection(section.toLowerCase())}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  color: "#FFA500",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": { color: "tomato" },
                }}
              >
                {section}
              </Button>
              {index < 3 && (
                <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#f1faee", padding: "0px 20px " }}>
                </span>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
