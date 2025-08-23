"use client";
import { useEffect } from 'react';
import styles from './glitch-background.module.css';

export function GlitchBackground() {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.classList.add('imgloaded');
        }
        return () => {
            document.body.classList.remove('imgloaded');
        };
    }, []);
    return (
        <div className={styles.wrapper} aria-hidden>
            <div className={styles.glitch}>
                <div className={styles.img} />
                <div className={styles.img} />
                <div className={styles.img} />
                <div className={styles.img} />
                <div className={styles.img} />
            </div>
        </div>
    );
}
export default GlitchBackground;
