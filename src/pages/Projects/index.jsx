import React from 'react'
import classes from "./Projects.module.css";
import { PROJECTS } from '../../data/app-data';
import ProjectCard from '../../components/ProjectCard';
import { Col, Container, Row } from 'react-bootstrap';

export default function Projects() {
  return (
    <Container>
      <Row className='my-3 gy-4'>
        <Col md={12}>
        <h1 className={classes.title}>My Projects</h1>
        </Col>
        {PROJECTS?.map((e,i)=>{
           return(
             <Col key={i} lg={4} md={6} sm={12}><ProjectCard data={e}  /></Col>
           )
        })}
      </Row>
    </Container>
  )
}
