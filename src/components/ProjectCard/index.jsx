import React from 'react';
import classes from "./ProjectCard.module.css";

export default function ProjectCard({data}) {
  return (
    <div className={classes.card}>
        <img src={data?.image} alt="..." className={classes.image} />
        <div className={classes.cardBody}>
            <h2 className={classes.title}>{data?.title}</h2>
            <div className={classes.tech}>
                {data?.tech?.map((e,i)=>{
                    return(
                        <span key={i} className={classes.span}>{e}</span>
                    )
                })}
            </div>
            <a href={data?.demo} target='_blank' className={classes.anchor}>Show Demo</a>
        </div>
    </div>
  )
}
