import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export const HEADER_TAB = [
    {
        tab: "home",
        path: "/"
    },
    {
        tab: "about",
        path: "/about"
    },
    {
        tab: "projects",
        path: "/projects"
    },
    {
        tab: "contact",
        path: "/contact"
    },
];

export const HEADER_ICONS = [
    {
        icon: <RiGithubLine color="var(--white-color)" size={24} />,
        path: "https://github.com/muniba-rahman"
    },
    {
        icon: <FaLinkedinIn color="var(--white-color)" size={24} />,
        path: "https://www.linkedin.com/in/muniba-rahman/"
    },
]


export const HOME_CONTENT = {
    title: "Welcome to my portfolio",
    para: "Hi, I’m Muniba Rahman, a passionate Computer Systems Engineer dedicated to harnessing technology for innovative solutions. With a strong foundation in programming and a knack for problem-solving, I thrive in dynamic environments where creativity and collaboration lead to impactful outcomes. My goal is to contribute to projects that make a difference and continuously enhance my skills along the way."
}