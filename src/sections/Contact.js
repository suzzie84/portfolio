import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Button, Paper, Grid, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import home_bg from "../assets/home_bg.jpg"; 
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const contactInfo = [
    { icon: <EmailIcon />, label: "Email", link: "mailto: susmithabaira@gmail.com" },
    { icon: <PhoneIcon />, label: "Phone", link: "tel:+919704713117" },
    { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://in.linkedin.com/in/baira-susmitha-b20054302" },
    { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/suzzie84" },
  ];

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        width:"100",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: "cover",
        padding: "0px 0px",
      }}
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
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)", 
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        Contact me
      </Typography>

      <Paper
        elevation={10}
        sx={{
          display: "flex",
          width:"100%",
          flexDirection: { xs: "column", md: "row" },
          padding: "50px 30px",
          borderRadius: "20px",
          bgcolor:"transparent",    
          boxShadow:"none",
          maxWidth: "90%",
          color: "#fff",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)", 
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >

        <Box sx={{ width: { xs: "100%", md: "55%", } }}>
        <Typography
          variant="h4"
          sx={{
            color:"#00d4ff",
            fontWeight: "bold",
            letterSpacing: "2px",
            mb: 3,
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {contactInfo.map((contact, index) => (
            <Grid item key={index}>
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(0, 212, 255, 0.2)",
                      boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.6)",
                    },
                  }}
                >
                  <IconButton sx={{ color: "#00d4ff", fontSize: "1.5rem" }}>{contact.icon}</IconButton>
                </Box>
              </motion.a>
            </Grid>
          ))}
        </Grid>
        <br/>
        <Typography sx={{color:"white",paddingBottom:"40px",maxWidth:"500px",margin:"auto"}}>I'm always excited to connect, collaborate, and create something amazing! 
        Whether it's a project idea, a job  opportunity, or just a friendly chat, feel free to reach out. 🚀</Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "45%" }, paddingRight: { md: "20px" } }}>
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "20px",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            maxWidth: "500px",
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#f6f4d2" }}>
            Mail To Me 
          </Typography>

          <TextField
            variant="outlined"
            label="Your Name"
            fullWidth
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(5px)",
                color: "#fff",
                "&:hover fieldset": { borderColor: "#FFA500" },
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
              },
              "& .MuiInputLabel-root": { color: "#f6f4d2" },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />

          <TextField
            variant="outlined"
            label="Your Email"
            fullWidth
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(5px)",
                color: "#fff",
                "&:hover fieldset": { borderColor: "#FFA500" },
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
              },
              "& .MuiInputLabel-root": { color: "#f6f4d2" },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />

          <TextField
            variant="outlined"
            label="Your Message"
            multiline
            rows={4}
            fullWidth
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(5px)",
                color: "#fff",
                "&:hover fieldset": { borderColor: "#FFA500" },
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
              },
              "& .MuiInputLabel-root": { color: "#f6f4d2" },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              mt: 2,
              bgcolor: "#FFA500",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "15px",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "#ff8c00" },
            }}
          >
            Send Message
          </Button>
        </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;
