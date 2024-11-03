import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

export const ICONS = [
    {
        icon: <BsFiletypeHtml color="var(--orange-color)" size={100} />,
    },
    {
        icon: <BsFiletypeCss color="var(--blue-color)" size={100} />,
    },
    {
        icon: <SiJavascript color="#F3C623" size={100} />,
    },
    {
        icon: <FaReact color="#0D92F4" size={100} />,
    },
    {
        icon: <TbBrandNextjs color="var(--black-color)" size={100} />,
    },
    {
        icon: <TbBrandRedux color="#BF2EF0" size={100} />,
    },
    {
        icon: <SiPython color="#0D92F4" size={100} />,
    },
    {
        icon: <FaPhp color="#295F98" size={100} />,
    },
    {
        icon: <SiMysql color="#295F98" size={100} />,
    },
    {
        icon: <TbBrandDjango color="#06D001" size={100} />,
    },
];

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

export const ABOUT_CONTENT = [
    {
        subTitle: "Hello! I’m Muniba Rahman",
        para: "I'm a passionate Computer Systems Engineer with expertise in front-end development and a focus on user-centered applications. My approach combines functionality with seamless design, using tools like React, Redux, and Next.js to deliver optimized, responsive experiences."
    },
    {
        subTitle: "Professional Experience",
        para: `
            <ul>
                <li><strong>React.js Intern at Tafsol Technologies:</strong> As a React.js Intern at Tafsol Technologies, I have contributed to 9+ projects, working closely with backend teams to enhance API functionality, reduce load times, and elevate the overall user experience. My responsibilities have included developing responsive interfaces, implementing efficient state management using Redux Toolkit, and optimizing front-end performance, which has sharpened my problem-solving abilities and collaborative skills in agile environments.</li>
                
                <li><strong>Python Developer Intern at NCL-NED:</strong> During my internship with the Python development team at NCL-NED, I focused on using Raspberry Pi for motor control and optimizing Python code for enhanced efficiency. This project involved improving motor operations by 25% in performance, contributing to key research goals. My time here strengthened my technical foundation in Python and introduced me to effective testing and debugging practices essential for precise project outcomes.</li>
            </ul>`
    },
    {
        subTitle: "Academic Background",
        para: `I graduated from <strong>NED University Of Engineering & Technology</strong> in <strong>B.E Computer and Information Systems Engineering</strong>, where I built a solid foundation in software principles such as Object-Oriented Programming (OOP) and Agile methodologies. My coursework and projects allowed me to explore the latest in software and machine learning technologies, preparing me for a dynamic career in tech.`
    },
    {
        subTitle: "Key Projects",
        para: "One of my most impactful projects is Sentix, a sentiment analysis system aimed at reducing cyberbullying on social media. This project achieved over 85% accuracy in sentiment detection and decreased harmful interactions by 30%, using deep learning models and robust backend support with Django. Projects like Sentix reflect my commitment to leveraging technology for social good."
    },
    {
        subTitle: "Always Learning",
        para: "I'm continually expanding my technical skills, with a focus on new tools and methodologies such as Python, Django, and Angular. Alongside technical growth, I prioritize soft skills in communication, collaboration, and adaptability, ensuring I bring value in both team-based and independent settings."
    },
];