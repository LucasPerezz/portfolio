"use client"
import React from 'react'
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';


export default function ParticlesBackgorund() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className='-z-50'
            options={{
                background: {
                    color: {
                        value: "#2c2f33",
                    },
                },
                fpsLimit: 30,
                interactivity: {
                    events: {
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#99aab5",
                    },
                    links: {
                        color: "#99aab5",
                        distance: 150,
                        enable: true,
                        opacity: 0.8,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                
            }}
        />
    );
}