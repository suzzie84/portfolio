import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import quizImg from "../assets/quiz.png"; 
import sortImg from "../assets/sort.png";
import foodImg from "../assets/sort.png";
import home_bg from "../assets/home_bg.jpg";

const projects = [
  {
    title: "🎯 Interactive Quiz App",
    description:
      "A web-based quiz application designed to provide an engaging and interactive quiz-taking experience. The app presents multiple-choice questions with real-time feedback and scoring.",
    features: [
      "✔️ Interactive UI",
      "✔️ Multiple-Choice Questions",
      "✔️ Real-Time Feedback",
      "✔️ Scoring System",
      "✔️ Responsive Design",
    ],
    tech: "🛠️ HTML, CSS, JavaScript",
    image: quizImg,
    live: "https://suzzie84.github.io/Quiz-app/index.html",
    github: "https://github.com/suzzie84/Quiz-app",
  },
  {
    title: "🔢 Sort Algorithm Visualizer",
    description:
      "An interactive sorting visualizer designed to help users grasp the inner workings of sorting algorithms through real-time animations. This tool provides a step-by-step breakdown of the sorting process",
    features: [
      "✔️ Real-Time Visualization",
      "✔️ Multiple Sorting Algorithms",
      "✔️ Step-by-Step Execution",
      "✔️ User-Friendly Interface",
      "✔️ Responsive Design",
    ],
    tech: "🛠️ HTML, CSS, JavaScript",
    image: sortImg,
    live: "https://suzzie84.github.io/Sort-visualizer/",
    github: "https://github.com/suzzie84/Sort-visualizer",
  },
  {
    title: "🍔 Fast & Fresh Food Delivery",
    description:
      "A modern and user-friendly food delivery web app designed to offer a seamless ordering experience. With an intuitive UI and real-time menu updates, users can effortlessly browse, select, and order their favorite dishes.",
    features: [
      "✔️ User-Friendly Interface",
      "✔️ Live Menu Updates",
      "✔️ Order Tracking",
      "✔️ Secure Payments",
      "✔️ Responsive Design",
    ],
    tech: "🛠️ MERN Stack (MongoDB, Express, React, Node.js)",
    image: foodImg,
    live: "https://your-food-delivery-live-link.com",
    github: "https://github.com/your-github-repo",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  return (
    <Box
      ref={ref}
      sx={{
        padding: "50px 20px",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        id="projects"
        variant="h4"
        gutterBottom
        sx={{
          color: "#FFA500",
          fontWeight: "bold",
          letterSpacing: 1,
          textTransform: "uppercase",
          fontSize: "2.5rem",
          mb: 2,
        }}
      >
        Projects 
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                textAlign: "left",
                boxShadow: 10,
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  fontWeight="bold" 
                  sx={{ fontSize: "1.3rem", color: "#FFA500" }} 
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ fontSize: "1rem", mt: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold", color: "#FFA500" }}>
                  Features:
                </Typography>
                {project.features.map((feature, idx) => (
                  <Typography key={idx} variant="body2" sx={{ color: "lightgray", fontSize: "0.9rem" }}>
                    {feature}
                  </Typography>
                ))}
                <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold", color: "#FFA500" }}>
                  {project.tech}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "tomato",
                    color: "white",
                    "&:hover": { backgroundColor: "rgba(255, 99, 71, 0.7)" },
                  }}
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "tomato",
                    borderColor: "tomato",
                    "&:hover": { backgroundColor: "tomato", color: "white" },
                  }}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  GitHub Code
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
