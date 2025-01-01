import { Box, Typography } from "@mui/material";
import AccordionUsage from "./ProjectAccordian";

const Projects = () => {
  return (
    <Box sx={{ minHeight: "87vh" }} data-id={"Projects"} id={"projects"}>
      <Typography
        sx={{ textAlign: { xs: "center", sm: "left" }, marginBottom: 3 }}
        variant="h3"
        component={"h1"}
      >
        Projects
      </Typography>
      <AccordionUsage />
    </Box>
  );
};

export default Projects;
