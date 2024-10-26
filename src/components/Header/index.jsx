import React from 'react';
import classes from "./Header.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import { HEADER_ICONS, HEADER_TAB } from '../../data/app-data';

export default function Header() {
  return (
    <Container fluid>
        <Row className={classes.rowClass}>
            <Col md={4}>
                <h1>Muniba Rahman</h1>
            </Col>
            <Col md={4}>
                <div className={classes.tabDiv}>
                    {HEADER_TAB?.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e?.tab}</p>
                            </div>
                        )
                    })}
                </div>
            </Col>
            <Col md={4}>
                    {HEADER_ICONS?.map((e,i)=>{
                        return(
                            <a href={e?.path} target='_blank' key={i}>{e?.icon}</a>
                        )
                    })}
            </Col>
        </Row>
    </Container>
  )
}
