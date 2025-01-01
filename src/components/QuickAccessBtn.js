import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
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

export default function QuickAccessBtn() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <Backdrop open={open} />

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "absolute",
          bottom: 40,
          right: "10%",
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.url)}
          />
        ))}
      </SpeedDial>
    </>
  );
}
