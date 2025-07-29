import React, { useEffect, useState } from 'react';

const GridBackground = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { width, height } = dimensions; // ✅ Fix here
    const gridSize = 50;
    const lines = [];

    // vertical lines
    for (let x = 0; x < width; x += gridSize) {
        lines.push(
            <line
                key={`v-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2={height}
                stroke="rgba(18, 48, 57, 0.07)"

            />
        );
    }

    // horizontal lines
    for (let y = 0; y < height; y += gridSize) {
        lines.push(
            <line
                key={`h-${y}`}
                x1="0"
                y1={y}
                x2={width}
                y2={y}
                stroke="rgba(18, 48, 57, 0.07)"

            />
        );
    }

    // dots
    const dots = [];
    for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
            dots.push(
                <circle
                    key={`dot-${x}-${y}`}
                    cx={x}
                    cy={y}
                    r="1"
                    fill="cyan"
                    filter="url(#glow)"
                    opacity="0.3"
                />
            );
        }
    }

    return (
        <>
                <svg
            width="100vw"
            height="100vh"
            viewBox={`0 0 ${width} ${height}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                background: "linear-gradient(to bottom, #123039, #000000)",

                pointerEvents: 'none',
            }}
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {lines}
            {dots}
        </svg>

        </>
    );
};

export default GridBackground;
