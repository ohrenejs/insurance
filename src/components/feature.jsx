import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ApplyBtn from './applyBtn';
import featureImg from '../imgs/feature01.jpg';
import styles from './feature.module.css';

class Feature extends Component {
    render() {
        console.log(this.props.classNames);
        return (
            <section className={styles.section}>
                <Container>
                    <Row
                        className={`${styles.row} ${styles[this.props.classNames]}`}>
                        <Col>
                            <div className={styles.info}>
                                <h2 className={styles.title}>도레미파 솔라시도 도시라솔 파미 레도시라솔파</h2>
                                <p className={styles.description}>뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바</p>
                                <ApplyBtn></ApplyBtn>
                            </div>
                        </Col>
                        <Col>
                            <img src={featureImg} alt="" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Feature;