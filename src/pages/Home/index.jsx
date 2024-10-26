import React from 'react';
import classes from "./Home.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import Image from "../../images/home-pic.jpeg";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3>Hi there,</h3>
                    <h1 className={classes.title}>Welcome to my portfolio</h1>
                </Col>
                <Col md={6}>
                    <img src={Image} alt="..." />
                </Col>
            </Row>
        </Container>
    )
}
