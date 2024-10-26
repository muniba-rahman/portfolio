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