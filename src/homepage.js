import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import home_bg from "./assets/home_bg.jpg";

const HomePage = () => {
  return (
    <Box
      sx={{
        padding:"0px 16px",
        display: 'flex',
        alignItems: 'center',
        textAlign:"left",
        height: '100vh',
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        paddingLeft: { xs: 2, md: 10 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ color: "white", letterSpacing: '2px',margin:"0px" }}
        >
          <b>Hello, I’m</b> <b style={{color:"#FFA500"}}>Susmitha Baira</b>
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Typography variant="h6" color="white" paragraph sx={{ fontWeight: '300',marginTop:"0px" }}>
            Computer Science Student | Front-End Developer | DSA Enthusiast
          </Typography>

          <Typography color="#cbdfbd" paragraph sx={{ lineHeight: '1.7', maxWidth: '1000px' }}>
          A skilled Computer Science student proficient in front-end development, DSA, and competitive coding, eager to apply and expand my skills in real-world projects. Passionate about problem-solving, software design, and optimizing performance. Focused on creating user-centric, scalable solutions while continuously learning new technologies. Enthusiastic about full-stack development, exploring modern frameworks, and contributing to open-source projects.
          <br/>
          </Typography>

          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.999 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
          download="susmitha.pdf"
          href="/susmitha.pdf"
          style={{
            display: "inline-block",
            marginTop: "16px",
            backgroundColor: "#ef233c",
            color: "white",
            padding: "12px 32px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d90429")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ef233c")}
        >
          VIEW MY WORK
        </a>
            
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HomePage;
