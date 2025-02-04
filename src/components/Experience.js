import { Box, Paper, Typography } from "@mui/material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import React from "react";

const Experience = () => {
  return (
    <Box id="experience">
      <Typography
        sx={{
          textAlign: { xs: "center", sm: "left" },
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 2,
        }}
        variant="h3"
        component={"h1"}
      >
        <span>
          <MapsHomeWorkIcon sx={{ width: "50px", height: "50px" }} />
        </span>
        Experience
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          gap: 2,
          bgcolor: "transparent",
          backdropFilter: "blur(100px)",
          border: "1px solid gray ",
          borderRadius: 5,
          p: 4,
          maxWidth: 500,
        }}
      >
        <Paper sx={{ height: 50, border: "3px solid gray" }}>
          <a
            href="https://www.linkedin.com/company/appilite/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              style={{ height: "100%" }}
              src="/appilite_logo.jpeg"
              alt="appilite-logo"
            />
          </a>
        </Paper>
        <Box sx={{ color: "white" }}>
          <Typography variant="h6">Associate Software Devloper</Typography>
          <a
            href="https://www.linkedin.com/company/appilite/"
            rel="noreferrer"
            target="_blank"
          >
            <Typography
              sx={{ "&:hover": { textDecoration: "underline" } }}
              variant="subtitle1"
            >
              <span
                style={{
                  color: "skyblue",
                  cursor: "pointer",
                }}
              >
                {" "}
                Appilite Inc
              </span>{" "}
              . Full-Time
            </Typography>
          </a>
          <Typography variant="body2">Jan 2025 - Present</Typography>
          <Typography variant="body2">Chennai, Tamil Nadu, India</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
