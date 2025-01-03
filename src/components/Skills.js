import { Box, Paper, Typography } from "@mui/material";

const skillList = [
  { altText: "html", icon: "/html-icon.png", name: "HTML5" },
  { altText: "css", icon: "/css-icon.png", name: "CSS3" },
  { altText: "js", icon: "/js-icon.png", name: "JavaScript" },
  { altText: "bootstrap", icon: "/bootstrap-icon.png", name: "Bootstrap" },
  { altText: "tailwindcss", icon: "/tailwind-icon.png", name: "Tailwind CSS" },
  { altText: "vscode", icon: "/vscode-icon.png", name: "Visual Studio" },
  { altText: "mongodb", icon: "/mongodb-icon.png", name: "Mongo DB" },
  { altText: "nodejs", icon: "/nodejs-icon.png", name: "Node JS" },
  { altText: "react", icon: "/react-icon.png", name: "React JS" },
  { altText: "express", icon: "/express-icon.png", name: "Express JS" },
  { altText: "python", icon: "/python-icon.png", name: "Python" },
  { altText: "figma", icon: "/figma-icon.png", name: "Figma" },
  { altText: "git", icon: "/git-icon.png", name: "Git Version Control" },
  { altText: "github", icon: "/github-icon.png", name: "Git Hub" },
];

const Skills = () => {
  return (
    <Box
      sx={{ minHeight: "87vh", gap: { md: 2, xs: 0 } }}
      data-id={"Skills"}
      id={"skills"}
    >
      <Typography
        sx={{ textAlign: { xs: "center", sm: "left" } }}
        variant="h3"
        component={"h1"}
      >
        Skills
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", border:'1px solid gray', borderRadius:5, padding:2, marginTop:3, backgroundColor:"white" }}>
        {skillList.map((skill) => (
          <Paper
            sx={{
              width:'150px',
              padding:2,
              flexGrow:1,
              backdropFilter: "blur(5px)",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            elevation={8}
            key={skill.name}
          >
            <img
              style={{ width: "100px" }}
              src={skill.icon}
              alt={skill.altText}
            />
            <Typography variant="h6" sx={{ textAlign: "center", marginTop:2 }} color="#161f2d ">
              {skill.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
