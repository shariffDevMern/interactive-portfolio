import { Box, Button, Card, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Chip from "@mui/material/Chip";

const certificateData = [
  {
    id: "certificate1",
    title: "Javascript Essentials",
    techStack: [{ tech: "Javascript", id: "tech1" }],
    link: "https://drive.google.com/file/d/1ZBa6JzjOoCmL5SUnH7IzPYqWj2YhfDpP/view?usp=sharing",
  },
  {
    id: "certificate2",
    title: "Data Analytics Project Completion",
    techStack: [
      { tech: "Power Bi", id: "tech1" },
      { tech: "MS Excel", id: "tech2" },
      { tech: "Kaggle", id: "tech3" },
    ],
    link: "https://drive.google.com/file/d/1XBqsKLYre4lf2fnjtS1M3l_pMehdpQsl/view?usp=sharing",
  },
  {
    id: "certificate3",
    title: "SQL Course Completion",
    techStack: [
      { tech: "SQL", id: "tech1" },
      { tech: "Database", id: "tech2" },
    ],
    link: "https://drive.google.com/file/d/1l-HO42sD4SnJUOzd4CyTjJB60v7OnpR1/view?usp=sharing",
  },
  {
    id: "certificate4",
    title: "Programming Foundations With Python",
    techStack: [{ tech: "Python", id: "tech1" }],
    link: "https://drive.google.com/file/d/1nrvziiGKePdVuHzpc1SwMNDH2ETucjQh/view?usp=sharing",
  },
  {
    id: "certificate4",
    title: "XPM 4.0 Course Completion",
    techStack: [
      { tech: "Interpersonal Skill", id: "tech1" },
      { tech: "Decison Making", id: "tech2" },
      { tech: "Communication", id: "tech3" },
    ],
    link: "https://drive.google.com/file/d/1whlgJEmaDgf_TQbYFVWyHFjLYGTnjGQS/view?usp=sharing",
  },
  {
    id: "certificate4",
    title: "Gen AI Mega Workshop 2.0",
    techStack: [
      { tech: "ChatGpt", id: "tech1" },
      { tech: "Ms Copilot", id: "tech2" },
      { tech: "UserPersona.dev", id: "tech3" },
      { tech: "Namelix", id: "tech4" },
      { tech: "MS Designer", id: "tech5" },
      { tech: "5+ AI Tools", id: "tech6" },
    ],
    link: "https://drive.google.com/file/d/1VzPfvwfgHdwoAPFetT0q4vai3GwMefqn/view?usp=sharing",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CertifcateCarousel = () => (
  <Carousel
    autoPlay={true}
    autoPlaySpeed={4000}
    infinite={true}
    responsive={responsive}
  >
    {certificateData.map((certificate) => (
      <Card
        key={certificate.id}
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginX: 2,
          height: "300px",
          padding: 3,
          backgroundImage: "linear-gradient(to top,#161f2d,#3a5378 )",
        }}
      >
        <img
          alt="certifcate"
          style={{ width: "50px" }}
          src="/certificate-icon.png"
        />
        <Typography color="white" variant="h6">
          {certificate.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginTop: 1,
            flexWrap: "wrap",
          }}
        >
          {certificate.techStack.map((techItem) => (
            <Chip
              key={techItem.id}
              sx={{ color: "white" }}
              label={techItem.tech}
            />
          ))}
        </Box>
        <Button
          sx={{
            marginTop: "auto",
            background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderColor: "#ff7eb3",
          }}
          href={certificate.link}
          target="_blank"
          variant="outlined"
        >
          View Certifcate
        </Button>
      </Card>
    ))}
  </Carousel>
);

export default CertifcateCarousel;
