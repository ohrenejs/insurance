import React, { Component } from 'react';
import styles from './point.module.css';

class Point extends Component {
    render() {
        return (
            <div className={styles.point}>
                <div className={styles['i-box']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                    </svg>
                </div>
                <strong className={styles.title}>그러므로 그들은</strong>
                <span className={styles.description}>오아시스도 없는 사막이다 <br />보이는 끝까지 찾아다녀도</span>
            </div>
        );
    }
}

export default Point;