import React, { useState, useEffect } from "react";
import { Fab, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 30; // Adjust step for slower scroll
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      window.scrollBy(0, scrollStep);
    }, 10); // Adjust interval for smoother effect
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: visible ? "block" : "none",
      }}
    >
      <Tooltip title="Back to Top" arrow>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="large"
          sx={{
            background: "#A44A3F",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 15px rgba(255, 77, 0, 0.5)",
            "&:hover": {
              background: "#F19C79",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </motion.div>
  );
};

export default ScrollToTop;
