import { Box, Typography, Avatar, Button } from "@mui/material";
import animations from "./animations";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const Home = () => {
  return (
    <Box
      data-id={"Home"}
      id={"home"}
      sx={{
        display: "flex",
        minHeight: { xs: "100vh", md: "87vh" },
        flexDirection: {
          xs: "column",
          md: "row",
        },
        paddingY: "10%",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "5%", md: "20%" },
      }}
    >
      <Box>
        <Box display={"flex"}>
          <Typography
            sx={{
              ...animations.slideLeft,
            }}
            variant="h1"
            component={"h1"}
          >
            Hello
          </Typography>
          <Typography
            sx={{
              ...animations.wobble,
            }}
            variant="h1"
            component={"h1"}
          >
            🖐️
          </Typography>
        </Box>
        <Typography
          sx={{
            background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant="h2"
          component="h2"
        >
          I'm Zunaith Shariff
        </Typography>

        <Typography variant="h4" color="white" component={"h4"}>
          MERN Stack Devloper
          <span>
            {" "}
            <PrecisionManufacturingIcon />
          </span>
        </Typography>

        <Button
          href="https://drive.google.com/file/d/1gmEwL4Cgrk9GLW42HAoXCR4t8mF1hxqv/view?usp=sharing"
          target="_blank"
          sx={{
            marginTop: 2,
            background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderColor: "#ff7eb3",
          }}
          color="#433937
        "
          variant="outlined"
        >
          Download Resume
        </Button>
      </Box>
      <Avatar
        sx={{
          ...animations.scale,
          height: 250,
          width: 250,
        }}
        alt="profile"
        src="/profile-pic.jpg"
      />
    </Box>
  );
};

export default Home;
