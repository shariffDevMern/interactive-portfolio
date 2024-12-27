import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import animations from "./animations";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid paddingBottom={2} marginTop={"100px"} container>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            gap: { md: 20, xs: 5 },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
          item
        >
          <Box
            sx={{
              ...animations.fade,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography color="#7b2f20" variant="h1" component={"h1"}>
                Hello{" "}
              </Typography>
              <Typography
                variant="h2"
                component={"h2"}
                sx={{
                  ...animations.wobble,
                }}
              >
                🖐
              </Typography>
            </Box>

            <Typography
              component={"h3"}
              sx={{
                ...animations.slideRight,
              }}
              variant="h2"
            >
              I'm Zunaith Shariff
            </Typography>
            <Typography
              component={"h5"}
              color="#7b2f20"
              marginBottom={1}
              sx={{
                ...animations.slideLeft,
              }}
              variant="h6"
            >
              MERN STACK DEVELOPER
            </Typography>
            <Button
              onClick={() => {
                navigate("/contact", { replace: true });
              }}
              variant="outlined"
              color="#7b2f20"
            >
              Contact Me
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
