import React from 'react';
import classes from "./Footer.module.css";
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid>
        <Row className={classes.rowClass}>
            <Col md={12}>
                <p className={classes.footerTitle}>All rights reserved</p>
                <p className={classes.footerTitle}>muniba.rahman02@gmail.com</p>
            </Col>
        </Row>
    </Container>
  )
}
