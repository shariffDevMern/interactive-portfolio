import { Box, Typography } from "@mui/material";
import VariantButtonGroup from "./SocialIcons";
import { ContributionCalendar } from "react-contribution-calendar";
import scrollstyles from "./scrollStyles";
import MediaCard from "./EducationCard";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";

const data = [
  { "2024-01-01": { level: 3 } },
  { "2024-01-05": { level: 2 } },
  { "2024-01-08": { level: 1 } },
  { "2024-01-12": { level: 4 } },
  { "2024-01-15": { level: 5 } },
  { "2024-01-18": { level: 2 } },
  { "2024-01-21": { level: 3 } },
  { "2024-01-24": { level: 4 } },
  { "2024-01-27": { level: 1 } },
  { "2024-01-30": { level: 5 } },

  { "2024-02-02": { level: 4 } },
  { "2024-02-05": { level: 1 } },
  { "2024-02-09": { level: 3 } },
  { "2024-02-12": { level: 2 } },
  { "2024-02-15": { level: 5 } },
  { "2024-02-18": { level: 2 } },
  { "2024-02-21": { level: 3 } },
  { "2024-02-24": { level: 4 } },
  { "2024-02-27": { level: 1 } },
  { "2024-02-12": { level: 5 } },

  { "2024-03-01": { level: 2 } },
  { "2024-03-03": { level: 5 } },
  { "2024-03-06": { level: 3 } },
  { "2024-03-09": { level: 4 } },
  { "2024-03-12": { level: 1 } },
  { "2024-03-15": { level: 2 } },
  { "2024-03-18": { level: 4 } },
  { "2024-03-21": { level: 5 } },
  { "2024-03-24": { level: 1 } },
  { "2024-03-27": { level: 3 } },

  { "2024-04-02": { level: 3 } },
  { "2024-04-05": { level: 2 } },
  { "2024-04-08": { level: 4 } },
  { "2024-04-11": { level: 1 } },
  { "2024-04-14": { level: 5 } },
  { "2024-04-17": { level: 3 } },
  { "2024-04-20": { level: 2 } },
  { "2024-04-23": { level: 4 } },
  { "2024-04-26": { level: 1 } },
  { "2024-04-29": { level: 5 } },

  { "2024-05-01": { level: 2 } },
  { "2024-05-04": { level: 5 } },
  { "2024-05-07": { level: 3 } },
  { "2024-05-10": { level: 4 } },
  { "2024-05-13": { level: 1 } },
  { "2024-05-16": { level: 2 } },
  { "2024-05-19": { level: 4 } },
  { "2024-05-22": { level: 3 } },
  { "2024-05-25": { level: 5 } },
  { "2024-05-28": { level: 1 } },

  { "2024-06-02": { level: 4 } },
  { "2024-06-05": { level: 1 } },
  { "2024-06-08": { level: 3 } },
  { "2024-06-12": { level: 2 } },
  { "2024-06-15": { level: 5 } },
  { "2024-06-18": { level: 4 } },
  { "2024-06-21": { level: 1 } },
  { "2024-06-24": { level: 3 } },
  { "2024-06-27": { level: 2 } },
  { "2024-06-30": { level: 5 } },

  { "2024-07-02": { level: 4 } },
  { "2024-07-05": { level: 1 } },
  { "2024-07-08": { level: 3 } },
  { "2024-07-12": { level: 2 } },
  { "2024-07-15": { level: 5 } },
  { "2024-07-18": { level: 4 } },
  { "2024-07-21": { level: 1 } },
  { "2024-07-24": { level: 3 } },
  { "2024-07-27": { level: 2 } },
  { "2024-07-30": { level: 5 } },

  { "2024-08-01": { level: 3 } },
  { "2024-08-04": { level: 2 } },
  { "2024-08-07": { level: 5 } },
  { "2024-08-11": { level: 4 } },
  { "2024-08-14": { level: 1 } },
  { "2024-08-17": { level: 2 } },
  { "2024-08-20": { level: 5 } },
  { "2024-08-23": { level: 3 } },
  { "2024-08-26": { level: 4 } },
  { "2024-08-29": { level: 1 } },

  { "2024-09-01": { level: 2 } },
  { "2024-09-04": { level: 3 } },
  { "2024-09-07": { level: 5 } },
  { "2024-09-10": { level: 4 } },
  { "2024-09-13": { level: 1 } },
  { "2024-09-16": { level: 2 } },
  { "2024-09-19": { level: 4 } },
  { "2024-09-22": { level: 3 } },
  { "2024-09-25": { level: 5 } },
  { "2024-09-28": { level: 1 } },

  { "2024-10-01": { level: 4 } },
  { "2024-10-04": { level: 3 } },
  { "2024-10-07": { level: 2 } },
  { "2024-10-10": { level: 5 } },
  { "2024-10-13": { level: 4 } },
  { "2024-10-16": { level: 1 } },
  { "2024-10-19": { level: 3 } },
  { "2024-10-22": { level: 2 } },
  { "2024-10-25": { level: 5 } },
  { "2024-10-28": { level: 4 } },

  { "2024-11-01": { level: 2 } },
  { "2024-11-04": { level: 5 } },
  { "2024-11-07": { level: 1 } },
  { "2024-11-10": { level: 3 } },
  { "2024-11-13": { level: 4 } },
  { "2024-11-16": { level: 2 } },
  { "2024-11-19": { level: 5 } },
  { "2024-11-22": { level: 3 } },
  { "2024-11-25": { level: 4 } },
  { "2024-11-28": { level: 1 } },

  { "2024-12-01": { level: 5 } },
  { "2024-12-04": { level: 2 } },
  { "2024-12-07": { level: 3 } },
  { "2024-12-10": { level: 4 } },
  { "2024-12-13": { level: 1 } },
  { "2024-12-16": { level: 5 } },
  { "2024-12-19": { level: 2 } },
  { "2024-12-22": { level: 3 } },
  { "2024-12-25": { level: 4 } },
  { "2024-12-28": { level: 1 } },

  // Add more months in the same pattern
];

const About = () => {
  return (
    <>
      <Box
        sx={{ minHeight: "87vh", gap: { md: 2, xs: 0 } }}
        data-id={"About"}
        id={"about"}
      >
        <Box>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "left" },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
            }}
            variant="h3"
            component={"h1"}
          >
            <span>
              <InfoIcon sx={{ width: "50px", height: "50px" }} />
            </span>
            About Me
          </Typography>
          <Box
            sx={{
              display: { sm: "none", xs: "flex", justifyContent: "center" },
              width: "100%",
              paddingY: 3,
            }}
          >
            <img
              alt="about-pic"
              style={{
                height: 300,
                borderRadius: 20,
              }}
              src="/about-pic-cartoon.jpeg"
            />
          </Box>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "left" },
              lineHeight: 1.7,
              borderRadius: "5px",
              paddingY: 2,
              color: "white",
            }}
            variant="body2"
          >
            By day, I'm a MERN stack developer, weaving magic with{" "}
            <span
              style={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MongoDB, Express.js, React.js, and Node.js
            </span>{" "}
            to bring ideas to life on the web. But by night, I trade code for
            choreography as a passionate dancer, moving to the rhythm like every
            beat is a line of perfect code. I thrive at the crossroads of
            innovation and creativity, where algorithms meet artistry. Whether
            I’m debugging a stubborn script or perfecting my latest dance
            routine, I bring the same energy and passion to both worlds. When
            I’m not spinning React components or spinning on the dance floor,
            you’ll find me experimenting with the latest tech, pushing
            boundaries, or brainstorming wild ideas. Life, after all, is just
            one big stage, and I’m here to perform! Let’s connect, collaborate,
            and maybe even bust a move together.{" "}
            <span
              style={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a63)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Who said developers can’t dance?
            </span>
            💃💻
          </Typography>
          <VariantButtonGroup />
          <Typography
            sx={{
              marginY: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,

              justifyContent: { xs: "center", md: "flex-start" },
            }}
            variant="h6"
            color="white"
          >
            <span>
              <CodeIcon />
            </span>
            Days I code
          </Typography>
          <Box
            sx={{
              width: { xs: "350px", sm: "500px", md: "100%" },
              overflowY: "auto",
              ...scrollstyles,
              transform: { xs: "scale(0.7)", md: "scale(1)" },
            }}
          >
            <ContributionCalendar
              data={data}
              start="2024-01-01"
              end="2024-12-31"
              daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
              textColor="white"
              startsOnSunday={true}
              includeBoundary={true}
              theme="cherry"
              cx={15}
              cy={15}
              cr={4}
              scroll={false}
              hideDescription={false}
              hideMonthLabels={false}
              hideDayLabels={false}
            />
          </Box>
          <Typography
            sx={{
              marginY: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
            variant="h6"
            color="white"
          >
            <span>
              <SchoolIcon />
            </span>
            Education
          </Typography>
          <MediaCard />
        </Box>
      </Box>
    </>
  );
};

export default About;
