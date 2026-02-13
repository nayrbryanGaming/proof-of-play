"use client";

import React, { useEffect, useRef } from 'react';

interface VisualizerProps {
    hash: number[]; // 32 bytes from player.lastEvent
    isFighting: boolean;
}

export const ProceduralVisualizer: React.FC<VisualizerProps> = ({ hash, isFighting }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Helper to get a stable value from hash bytes
    const getHashValue = (index: number, max: number) => {
        if (!hash || hash.length === 0) return 0;
        return hash[index % hash.length] % max;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Use internal 4K resolution (3840x2160) for sharp procedural lines
        // but the displayed size is controlled by CSS
        canvas.width = 3840;
        canvas.height = 2160;

        let animationFrame: number;
        let time = 0;

        const render = () => {
            time += 0.01;
            const w = canvas.width;
            const h = canvas.height;

            // 1. Clear background with procedural "vibe"
            const hueBase = getHashValue(10, 360);
            ctx.fillStyle = `hsl(${hueBase}, 20%, 5%)`;
            ctx.fillRect(0, 0, w, h);

            // 2. Draw Background Grid / Matrix
            ctx.strokeStyle = `hsla(${hueBase}, 50%, 40%, 0.1)`;
            ctx.lineWidth = 2;
            const gridSize = 100 + getHashValue(5, 200);
            for (let x = 0; x < w; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            for (let y = 0; y < h; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }

            // 3. Generate Monster / Entity Geometry
            // Center coordinates
            const cx = w / 2;
            const cy = h / 2;

            const sides = 3 + getHashValue(0, 8); // 3 to 11 sides
            const radius = 400 + getHashValue(1, 400);
            const complexity = 1 + getHashValue(2, 5);
            const secondaryHue = (hueBase + 180) % 360;

            ctx.save();
            ctx.translate(cx, cy);
            // Continuous rotation based on time + hash
            const rotSpeed = (getHashValue(3, 100) / 1000) * (isFighting ? 5 : 1);
            ctx.rotate(time * rotSpeed);

            // Draw iterative geometry
            for (let i = 0; i < complexity; i++) {
                const currentRadius = radius * (1 - i * 0.2);
                const currentSides = sides + i;
                const opacity = 1 - (i * 0.2);

                ctx.beginPath();
                ctx.strokeStyle = `hsla(${secondaryHue}, 80%, 60%, ${opacity})`;
                ctx.lineWidth = 10;
                ctx.shadowBlur = 40;
                ctx.shadowColor = `hsla(${secondaryHue}, 80%, 50%, 0.5)`;

                for (let j = 0; j <= currentSides; j++) {
                    const angle = (j / currentSides) * Math.PI * 2;
                    // Add some procedural noise to the points
                    const noise = Math.sin(time + j * getHashValue(4, 10)) * 20;
                    const r = currentRadius + noise;
                    const x = Math.cos(angle) * r;
                    const y = Math.sin(angle) * r;

                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }

            // Inner core pulse
            const pulse = Math.sin(time * 2) * 50;
            ctx.beginPath();
            ctx.arc(0, 0, 50 + pulse, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hueBase}, 100%, 70%, 0.8)`;
            ctx.fill();

            ctx.restore();

            // UI Text Overlay (Procedural Data)
            ctx.fillStyle = "#00ff00";
            ctx.font = "bold 40px monospace";
            ctx.fillText(`ENTROPY_HASH: ${hash.slice(0, 4).map(b => b.toString(16).padStart(2, '0')).join('')}...`, 50, 80);
            ctx.fillText(`GEOM_SIDES: ${sides}`, 50, 140);
            ctx.fillText(`RAD_SCALE: ${radius.toFixed(0)}`, 50, 200);

            if (isFighting) {
                ctx.fillStyle = "#ff0000";
                ctx.font = "bold 80px monospace";
                ctx.fillText(">> COMBAT LOGIC ACTIVE <<", w / 2 - 400, 150);
            }

            animationFrame = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrame);
    }, [hash, isFighting]);

    return (
        <div className="w-full aspect-[9/16] bg-black border-2 border-green-900 rounded-xl overflow-hidden shadow-2xl relative group">
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="absolute top-2 right-2 px-2 py-1 bg-green-900/50 text-[10px] text-green-400 rounded-md pointer-events-none">
                MURNI CODING: 4K CANVAS RENDERING
            </div>
        </div>
    );
};
