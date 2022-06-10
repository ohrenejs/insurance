import React, { Component } from 'react';
import Card from './card';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Container>
                    <Row>
                        <Col><Card></Card></Col>
                        <Col><Card></Card></Col>
                        <Col><Card></Card></Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;