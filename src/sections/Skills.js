import React, { useRef } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import home_bg from "../assets/home_bg.jpg";

const skills = {
  "Programming Skills": {
    description: "Proficient in multiple programming languages for software development.",
    items: ["C", "C++", "Java", "Python"],
  },
  "Database": {
    description: "Experience in database management and querying.",
    items: ["MySQL","MongoDB"],
  },
  "Web Technologies": {
    description: "Skilled in front-end and back-end web development.",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "NodeJs", "ExpressJs"],
  },
  "Tools": {
    description: "Familiar with essential tools for development and collaboration.",
    items: ["Canva", "Git", "GitHub"],
  },
  "Soft Skills": {
    description: "Key attributes for effective teamwork and problem-solving.",
    items: ["Self-learning", "Problem Solving", "Observation", "Multi-Tasking"],
  },
  "Coursework": {
    description: "Strong academic foundation in core CS subjects.",
    items: ["Operating Systems", "OOP", "DBMS", "DSA"],
  },
};

const popInVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  }),
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <Box
      ref={ref}
      id="skills"
      sx={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px 50px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#FFA500",
            textTransform: "uppercase",
            letterSpacing: 2,
            fontSize: "2.5rem",
          }}
        >
          Skills 
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {Object.entries(skills).map(([category, data], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <Paper
                elevation={6}
                sx={{
                  padding: "20px",
                  borderRadius: "20px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  color: "white",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1)",
                    boxShadow: "inset 8px 8px 16px rgba(0, 0, 0, 0.3), inset -8px -8px 16px rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#f19c79",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  {category}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#f6f4d2",
                    textAlign: "center",
                    fontStyle: "italic",
                    mb: 2,
                  }}
                >
                  {data.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  {data.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={popInVariant}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      custom={idx}
                    >
                      <Typography
                        sx={{
                          background: "rgba(255, 255, 255, 0.2)",
                          boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.3), inset -5px -5px 10px rgba(255, 255, 255, 0.1)",
                          padding: "8px 15px",
                          borderRadius: "10px",
                          fontSize: "0.9rem",
                          color: "#f6f4d2",
                          fontWeight: "500",
                          textAlign: "center",
                          cursor:"pointer"
                        }}
                      >
                        {item}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
