import React, { Component } from 'react';
import logo from '../imgs/logo.png';
import styles from './navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <header className={styles.navbar}>
                <h1 className={styles.title}>
                    <img src={logo} alt="incar" className={styles.logo} />
                </h1>
                <ul className={styles.list}>
                    <li className={styles.li}><a href="#">특징</a></li>
                    <li className={styles.li}><a href="#">추천사</a></li>
                    <li className={styles.li}><a href="#">게시판</a></li>
                    <li className={`${styles.li}`}><button className={`${styles['login-btn']}`}>로그인</button></li>
                </ul>
            </header>
        );
    }
}

export default Navbar;