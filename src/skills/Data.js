import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import BuildIcon from "@material-ui/icons/Build";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import CloudIcon from "@material-ui/icons/Cloud";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";

export const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", percentage: 100 },
      { name: "Java", percentage: 80 },
      { name: "Python", percentage: 100 },
    ],
    icon: <LanguageIcon />,
  },
  {
    category: "Java Frameworks",
    skills: [
      { name: "Java Swing", percentage: 75 },
      { name: "Java FX", percentage: 65 },
    ],
    icon: <SettingsEthernetIcon />,
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", percentage: 85 },
      { name: "CSS3", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "ReactJS", percentage: 95 },
      { name: "Redux", percentage: 90 },
    ],
    icon: <WebIcon />,
  },
  {
    category: "Web Frameworks",
    skills: [
      { name: "Django", percentage: 80 },
      { name: "Django rest frame work", percentage: 90 },
    ],
    icon: <CodeIcon />,
  },
  {
    category: "Database",
    skills: [{ name: "SQL", percentage: 90 }],
    icon: <StorageOutlinedIcon />,
  },
  {
    category: "Other Technologies",
    skills: [
      { name: "Swaggers", percentage: 90 },
      { name: "Celery", percentage: 80 },
      { name: "Redis", percentage: 75 },
      { name: "Google APIs", percentage: 90 },
      { name: "OpenAI API", percentage: 95 },
      { name: "Docker", percentage: 80 },
      { name: "Stripe API", percentage: 80 },
    ],
    icon: <CloudIcon />,
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", percentage: 90 },
      { name: "Data Structures & Algorithms", percentage: 85 },
      { name: "Problem Solving", percentage: 65 },
      { name: "Complexity Analysis", percentage: 95 },
    ],
    icon: <BuildIcon />,
  },
];
