import React, { Component } from 'react';
import styles from './applyBtn.module.css';

class ApplyBtn extends Component {
    render() {
        return (
            <button type='button' className={styles.btn}>
                상담 신청하기
            </button>
        );
    }
}

export default ApplyBtn;