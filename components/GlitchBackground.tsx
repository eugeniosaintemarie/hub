"use client";
import { useEffect } from 'react';

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
        <div className="glitch-wrapper" aria-hidden>
                <div className="glitch">
                    <div className="glitch__img" />
                    <div className="glitch__img" />
                    <div className="glitch__img" />
                    <div className="glitch__img" />
                    <div className="glitch__img" />
            </div>
        </div>
    );
}
export default GlitchBackground;
