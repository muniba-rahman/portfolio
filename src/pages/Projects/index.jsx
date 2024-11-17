import React from 'react'
import classes from "./Projects.module.css";
import { PROJECTS } from '../../data/app-data';
import ProjectCard from '../../components/ProjectCard';
import { Col } from 'react-bootstrap';

export default function Projects() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>My Projects</h1>
      <div className={classes.projects}>
        {PROJECTS?.map((e,i)=>{
          return(
            <Col key={i} md={3}><ProjectCard data={e}  /></Col>
          )
        })}
      </div>
    </div>
  )
}
