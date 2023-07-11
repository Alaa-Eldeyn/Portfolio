import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaNpm,
  FaFigma,
  FaMobile,
  FaWordpress,
} from "react-icons/fa";
import { BiLogoJquery, BiLogoRedux, BiLogoGit } from "react-icons/bi";
import { GoCommandPalette } from "react-icons/go";
import { TbMobiledata } from "react-icons/tb";

export const navPages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Skills", link: "/skills" },
  { id: 3, name: "Projects", link: "/projects" },
  // { id: 4, name: "Certificates", link: "/certificates" },
  { id: 5, name: "About me", link: "/about_me" },
  { id: 6, name: "Contact", link: "/contact" },
];

export const social = [
  { id: 1, icon: <FaInstagram />, link: "https://www.instagram.com/3lwa88/" },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/alaa-eldeyn/",
  },
  { id: 3, icon: <FaGithub />, link: "https://github.com/Alaa-Eldeyn" },
];

export const skills = [
  { id: 1, icon: <FaHtml5 />, text: "HTML5" },
  { id: 2, icon: <FaCss3 />, text: "CSS3" },
  { id: 3, icon: <FaJsSquare />, text: "JavaScript (ES6)" },
  { id: 4, icon: <BiLogoJquery />, text: "jQuery" },
  { id: 5, icon: <FaReact />, text: "React.js" },
  { id: 6, icon: <BiLogoRedux />, text: "Redux Toolkit" },
  { id: 7, icon: <BiLogoGit />, text: "Git" },
  { id: 8, icon: <FaGithub />, text: "Github" },
  { id: 9, icon: <TbMobiledata />, text: "RESTful API's" },
  { id: 10, icon: <GoCommandPalette />, text: "Command line" },
  { id: 11, icon: <FaMobile />, text: "Responsive Designs" },
  { id: 12, icon: <FaNpm />, text: "Package managers" },
  { id: 13, icon: <FaFigma />, text: "Figma" },
  { id: 14, icon: <FaWordpress />, text: "Wordpress" },
];
