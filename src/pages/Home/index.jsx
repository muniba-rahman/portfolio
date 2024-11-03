import React from 'react';
import classes from "./Home.module.css";
import Image from "../../images/Home.webp";
import { BsArrowRightSquare } from "react-icons/bs";
import { HOME_CONTENT } from '../../data/app-data';

export default function Home() {
    const downloadResume = () => {
        window.open('/Muniba_Rahman_Resume.pdf', '_blank');
    };

    const data = HOME_CONTENT;

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h1 className={classes.title}>{data?.title}</h1>
                <p>{data?.para}</p>
                <button className={classes.btn} onClick={downloadResume} >View Resume <BsArrowRightSquare color='var(--white-color)' size={20} /></button>
            </div>
            <div className={classes.image}>
                <img src={Image} alt="..." className={classes.pic} />
            </div>
        </div>
    )
}
