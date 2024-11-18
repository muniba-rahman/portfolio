import React from 'react';
import classes from "./Home.module.css";
import Image from "../../images/Home.webp";
import { BsArrowRightSquare } from "react-icons/bs";
import { HOME_CONTENT } from '../../data/app-data';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
    const downloadResume = () => {
        window.open('/Muniba_Rahman_Resume.pdf', '_blank');
    };

    const data = HOME_CONTENT;

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className={classes.content}>
                        <h1 className={classes.title}>{data?.title}</h1>
                        <p>{data?.para}</p>
                        <button className={classes.btn} onClick={downloadResume} >View Resume <BsArrowRightSquare color='var(--white-color)' size={20} /></button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={classes.image}>
                        <img src={Image} alt="..." className={classes.pic} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
