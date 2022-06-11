import React, { Component } from 'react';
import logo from '../imgs/logo.png';
import styles from './navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <h1 className={styles.title}>
                    <a href='#home'><img src={logo} alt="incar" className={styles.logo} /></a>
                </h1>
                <ul className={styles.list}>
                    <li className={styles.li}><a href="#feature">특징</a></li>
                    <li className={styles.li}><a href="#points">추천사</a></li>
                    <li className={styles.li}><a href="#">게시판</a></li>
                    <li className={`${styles.li}`}><button className={`${styles['login-btn']}`}>로그인</button></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;