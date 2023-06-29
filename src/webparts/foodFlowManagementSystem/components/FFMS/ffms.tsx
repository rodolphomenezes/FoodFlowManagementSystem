import * as React from 'react';
import styles from './styles.module.scss';

const logo = require("../../assets/image.svg").toString();
const logout = require("../../assets/logout.svg").toString();

export const Ffms = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                    <p>Food Flow Management System</p>
                </div>
                <div className={styles.logout}>
                    <img src={logout} alt="logo" />
                </div>
            </div>
        </div>
    )
}