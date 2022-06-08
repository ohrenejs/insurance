import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <span>사무실 주소</span>
                    <span>회사명</span>
                    <span>대표명</span>
                    <span>사업자등록번호</span>
                    <span>010-1234-5678</span>
                    <span>dobby@gmail.com</span>
                </div>
                <span className={styles.copyright}>&copy;Copyright 2022</span>
            </footer>
        );
    }
}

export default Footer;