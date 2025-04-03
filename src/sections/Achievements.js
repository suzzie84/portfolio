import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_bg from "../assets/home_bg.jpg"; 
import nmms1 from "../assets/nmms.jpg"; 
import nmms2 from "../assets/work_exp.jpg"; 

const images = [nmms1, nmms2];

const Achievements = () => {
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

  // State to track if section is in view
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 30% of the section is visible
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
      id="achievements"
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: "cover",
        padding: "50px 30px",
      }}
    >
      {/* Section Title with Slide-Up Animation */}
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
          transform: isVisible ? "translateY(0)" : "translateY(50px)", // Slide up from bottom
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        Achievements
      </Typography>

      <Paper
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "50px 30px",
          borderRadius: "20px",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          maxWidth: "90%",
          color: "#fff",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)", // Slide up from bottom
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Left: Image Slider */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, paddingRight: { md: "20px" } }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={img}
                  alt={`NMMS ${index + 1}`}
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    borderRadius: "15px",
                    objectFit: "fill",
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Right: Text Content */}
        <Box sx={{ width: { xs: "100%", md: "55%" }, textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#FFA500", letterSpacing: 1 }}>
            🏆 National Means-cum-Merit Scholarship (NMMS)
          </Typography>

          <Typography sx={{ fontSize: "1rem", color: "#f6f4d2", lineHeight: 1.6, mb: 2 }}>
            In 8th grade, I had the <b>incredible opportunity</b> to participate in the <b>National Means-cum-Merit Scholarship (NMMS)</b> Exam, 
            a prestigious scholarship program designed to recognize and support <b>academically talented students</b>.  
            After securing an <b>exceptional score</b>, I was <b>awarded this scholarship</b>, given to only a <b>select number of students</b> across the country.
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: "#FFA500", mb: 1 }}>
              ✨ Highlights of My Achievement:
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#f6f4d2", lineHeight: 1.6 }}>
              📖 <b>Competitive Examination:</b> Cleared the NMMS exam with <b>outstanding marks</b>. <br />
              🏅 <b>Merit-Based Selection:</b> Ranked among the <b>top students</b> based on <b>academic excellence</b>. <br />
              🎓 <b>Nationwide Recognition:</b> Recognized as a <b>high-achieving student</b> at a young age. <br />
              💡 <b>Scholarship Awarded:</b> Provided with <b>financial support</b> as a reward for my <b>dedication</b>. <br />
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "1rem", color: "#f6f4d2", fontStyle: "italic" }}>
            This scholarship not only boosted my <b>confidence</b> but also fueled my <b>passion for continuous learning</b> and <b>academic excellence</b>. 🌟📚
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Achievements;
