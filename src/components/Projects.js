import { Box, Typography } from "@mui/material";
import AccordionUsage from "./ProjectAccordian";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CertifcateCarousel from "./CertificateCardCarousel";
import { WorkspacePremium } from "@mui/icons-material";

const Projects = () => {
  return (
    <Box sx={{ minHeight: "87vh" }} data-id={"Projects"} id={"projects"}>
      <Typography
        sx={{
          textAlign: { xs: "center", sm: "left" },
          marginBottom: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 2,
        }}
        variant="h3"
        component={"h1"}
      >
        <span>
          <EventNoteIcon sx={{ width: "50px", height: "50px" }} />
        </span>
        Projects
      </Typography>
      <AccordionUsage />
      <Typography
        sx={{
          marginY: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-start" },
          gap: 1,
        }}
        color="white"
        variant="h6"
      >
        <span>
          <WorkspacePremium />
        </span>
        Certifications & Awards
      </Typography>
      <CertifcateCarousel />
    </Box>
  );
};

export default Projects;
