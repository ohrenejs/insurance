import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Point from './point';
import styles from './points.module.css';

class Points extends Component {
    render() {
        return (
            <section className={styles.points}>
                <Container>
                    <div className={styles.info}>
                        <h2>내 거친 생각과</h2>
                        <p>인간이 얼마나 쓸쓸하랴? 얼음에 싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고</p>
                    </div>
                    <Row>
                        <Col><Point></Point></Col>
                        <Col><Point></Point></Col>
                        <Col><Point></Point></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Points;