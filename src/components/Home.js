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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          display={"flex"}
          sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
              ...animations.slideLeft,
            }}
            variant="h1"
            component={"h1"}
          >
            Hello
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
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
            textAlign: { xs: "center", md: "left" },
            background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant="h2"
          component="h2"
        >
          I'm Zunaith Shariff
        </Typography>

        <Typography
          sx={{ textAlign: { xs: "center", md: "left" } }}
          variant="h4"
          color="white"
          component={"h4"}
        >
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
            alignSelf: { md: "flex-start"   },
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
          marginTop: { xs: 3, md: 0 },
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
