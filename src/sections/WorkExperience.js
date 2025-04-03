import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Scroll trigger hook
import WorkIcon from "@mui/icons-material/Work";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"; 
import home_bg from "../assets/home_bg.jpg";

const experiences = [
  {
    title: "ServiceNow (Admin)",
    icon: <WorkIcon sx={{ color: "#00a8e8", fontSize: 40 }} />,
    projects: [
      {
        name: "Automated Workflow for Ordering WiFi Router",
        icon: <AutoGraphIcon sx={{ color: "#f6f4d2", fontSize: 30 }} />,
        description: [
          "Created a Service Catalog item for WiFi router requests, making the order process simple and efficient.",
          "Designed an automated approval workflow, streamlining the request and approval process, eliminating manual tasks, and ensuring faster fulfillment.",
          "Integrated the workflow with Asset Management, allowing IT teams to track ordered routers and ensuring proper inventory management.",
          "The implementation resulted in a 40% reduction in processing time for requests, improving overall user experience and efficiency.",
        ],
      },
      {
        name: "Incident Management Customization for Multinational Operations",
        icon: <AutoGraphIcon sx={{ color: "#f6f4d2", fontSize: 30 }} />,
        description: [
          "Developed real-time reporting dashboards to provide global teams with up-to-date insights on incident trends, resolution times, and SLA compliance.",
          "Automated the categorization and assignment of incidents based on priority, ensuring faster response and resolution times.",
          "Integrated ServiceNow with third-party monitoring systems, enabling automatic creation of incidents when system failures were detected, further improving incident response times.",
          "The customization led to a 30% improvement in incident resolution speed and significantly enhanced SLA compliance across multinational operations.",
        ],
      },
    ],
  },
];

const WorkExperience = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); 

  return (
    <Box
      ref={ref}
      id="work-experience"
      sx={{
        minHeight: "100vh",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${home_bg}) center center fixed`,
        backgroundSize: "cover",
        padding: "10px 5%",
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              color: "#FFA500",
              marginBottom: "20px",
            }}
          >
            WORK EXPERIENCE
          </Typography>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card
                sx={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  padding: "20px",
                  marginBottom: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    {exp.icon}
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00a8e8" }}>
                      {exp.title.toUpperCase()}
                    </Typography>
                  </Box>

                  {exp.projects.map((project, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        marginTop: "15px",
                        padding: "15px",
                        borderRadius: "10px",
                        background: "rgba(0, 170, 232, 0.3)",
                      }}
                    >
                      <Box display="flex" gap={1}>
                        {project.icon}
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                          {project.name}
                        </Typography>
                      </Box>

                      {/* Custom Bullet Points */}
                      <Box sx={{ marginTop: "10px" }}>
                        {project.description.map((point, index) => (
                          <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            gap={1}
                            sx={{
                              marginBottom: "8px",
                              color: "#ffffff",
                              fontSize: "1rem",
                              textAlign: "left",
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon sx={{ color: "#f6f4d2", fontSize: 20 }} />
                            <Typography variant="body1">{point}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkExperience;
