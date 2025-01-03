import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MediaCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        gap: 2,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="/jnn.png" title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            J.N.N Institute of Engineering
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Bachelor's degree, Computer Science
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            'Grade A'
          </Typography>
          <Typography marginTop={2} variant="subtitle2">Aug 2020 - Jun 2024</Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/nxtwave.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nxt Wave Academy CCBP4.0
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            MERN Stack Web Development
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            '90% Course Completed'
          </Typography>
          <Typography marginTop={2} variant="subtitle2">Feb 2023 - Present</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
