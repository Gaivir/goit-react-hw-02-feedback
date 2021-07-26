import React from "react";
import styles from './Section.module.css';

const Section = ({ title, children }) => (
    <>
    <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
    </>
)

export default Section