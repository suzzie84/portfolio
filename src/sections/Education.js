import React, { useState, useRef } from "react";
import { Box, Typography, Card, CardContent, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion, useInView } from "framer-motion";
import education_bg from "../assets/home_bg.jpg";

const educationData = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies-Basar",
    duration: "2021-2025",
    degree: "Computer Science and Engineering",
    cgpa: "8.4",
    description: "Developed strong problem-solving and programming skills. Worked on multiple projects in full-stack development, cloud computing, and machine learning. Participated in hackathons and coding competitions.",
  },
  { 
    institution: "Rajiv Gandhi University of Knowledge Technologies-Basar",
    duration: "2019-2021",
    degree: "Pre-University Course",
    cgpa: "8.6",
    description: "After my SSC, I pursued MPC (Mathematics, Physics, and Chemistry) in my intermediate. This helped me develop strong analytical and problem-solving skills, especially in logical reasoning and numerical concepts. It laid the foundation for my technical knowledge and prepared me for higher studies in engineering.",
  },
  {
    institution: "ZPHS Raghunathpur",
    duration: "2018-2019",
    degree: "Secondary School Education",
    cgpa: "10",
    description: "During my SSC, I learned important subjects like Mathematics, Physics, Biology, Social Studies, and Languages. These subjects helped me build a strong foundation in logical thinking, problem-solving, and communication skills. SSC played a crucial role in shaping my future academic journey.",
  },
];

const Education = () => {
  const [open, setOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  // Ref for animation
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  const handleOpen = (edu) => {
    setSelectedEducation(edu);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEducation(null);
  };

  return (
    <Box
      id="education"
      ref={ref}
      sx={{
        padding: "30px 20px 40px 20px",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${education_bg}) center center fixed`,
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{color:"#FFA500", fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase", fontSize: "2.5rem", mb: 4 }}
      >
        Education
      </Typography>

      <Timeline position="alternate">
        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0; 
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    color: "#00a8e8",
                    backgroundColor: "rgba(0, 170, 232, 0.4)",
                    border: "1px solid rgba(0, 170, 232, 0.5)",
                    height: "45px",
                    width: "45px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SchoolIcon />
                </TimelineDot>
                {index !== educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOpen(edu)}
                >
                  <Card
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                      textAlign: "left",
                      boxShadow: 10,
                      padding: "0px 20px",
                      cursor: "pointer",
                      backdropFilter: "blur(10px)",
                      borderRadius: "10px",
                      "&:hover": {
                        boxShadow:
                          "3px 3px 8px rgba(0, 0, 0, 0.3), -3px -3px 8px rgba(255, 255, 255, 0.1), inset 1px 1px 3px rgba(255, 255, 255, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="gray" sx={{ fontSize: "1rem" }}>
                        {edu.duration}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1, fontSize: "1.1rem" }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold", color: "tomato", fontSize: "1rem" }}>
                        CGPA: {edu.cgpa}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 2, color: "lightgray", fontStyle: "italic" }}>
                        Click for more details
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>

      {/* Dialog Box */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{ "& .MuiPaper-root": { borderRadius: "16px", border: "transparent" } }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            background: "#003459",
            fontSize: "1.5rem",
            color: "#FFFFFF",
            textAlign: "center",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          {selectedEducation?.institution}
        </DialogTitle>

        <DialogContent sx={{ padding: "30px", background: "#00171F", color: "#FFFFFF" }}>
          <Typography sx={{ mt: 2, color: "#00A8E8", fontWeight: "bold" }}>
            <b>Course:</b> {selectedEducation?.degree}
          </Typography>
          <Typography sx={{ color: "#00A8E8", fontWeight: "bold" }}>
            <b>Duration:</b> {selectedEducation?.duration}
          </Typography>
          <Typography sx={{ color: "#00A8E8", fontWeight: "bold" }}>
            <b>CGPA:</b> {selectedEducation?.cgpa}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", mt: 2 }}>
            {selectedEducation?.description}
          </Typography>

          <Button onClick={handleClose} sx={{ mt: 3, background: "#007EA7", color: "#FFFFFF", "&:hover": { background: "#00A8E8", color: "#00171F" } }}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Education;
