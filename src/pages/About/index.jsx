import React from 'react';
import classes from "./About.module.css";
import Image from "../../images/About.jpg";
import { ABOUT_CONTENT, ICONS } from '../../data/app-data';
import HTMLReactParser from 'html-react-parser/lib/index';

export default function About() {
  return (
    <div className={classes.container}>
      <div className={classes.imageDiv}>
        <img src={Image} alt="..." className={classes.image} />
      </div>
      <h1 className={classes.title}>Let Me Introduce Myself...</h1>
      <div className={classes.aboutSection}>
        {ABOUT_CONTENT?.map((e,i)=>{
          return(
            <div key={i} className={classes.section}>
              <h2 className={classes.subTitle}>{e?.subTitle}</h2>
              <p className={classes.para}>{HTMLReactParser(e?.para)}</p>
            </div>
          )
        })}
        <div className={classes.section}>
          <h2 className={classes.subTitle}>{`My Expertise`}</h2>
          <div className={classes.iconDiv}>
            {ICONS?.map((icon,i)=>{
              return(
                <span className={classes.icon} key={i}>{icon?.icon}</span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
