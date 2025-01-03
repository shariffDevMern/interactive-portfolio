import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import navItems from "../navItemsData";
import { Context } from "../Context";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function NavTabs() {
  const [value, setValue] = React.useContext(Context);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {navItems.map((item) => (
            <Tab
              href={item.url}
              key={item.name}
              value={item.name}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px;",
                    color: "white ",
                  }}
                >
                  {item.icon} {item.name}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
