import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zunaith-shariff-k-s-0bb145265/",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    url: "mailto:sheriffgaming926@gmail.com",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    url: "https://github.com/shariffDevMern",
  },
];

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        "& > *": {},
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        {actions.map((icons) => (
          <Button href={icons.url} target="_blank" sx={{ color: "white" }}>
            {icons.icon}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
