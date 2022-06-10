import React, { Component } from 'react';
import styles from './card.module.css';
import ApplyBtn from './applyBtn';
import bg from '../imgs/feature01.jpg';

class Card extends Component {
    render() {
        return (
            <div className={styles.card}>
                <img src={bg} alt="" className={styles.img} />
                <div className={styles.description}>
                    <h3>용기가 있다 그러므로 그들은 이상의</h3>
                    <p>기관과 같이 힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 </p>
                    <ApplyBtn></ApplyBtn>
                </div>
            </div>
        );
    }
}

export default Card;