import React, { useEffect, useRef } from "react";

const ColorPaletteCanvas: React.FC = () => {
    let canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasContext = canvas.getContext("2d");
        canvasContext.fillStyle = "#e2e2e2";
        canvasContext.fillRect(
            0,
            0,
            canvasContext.canvas.width,
            canvasContext.canvas.height
        );
    });
    return (
        <>
            <div>색상 팔레트</div>
            <canvas ref={canvasRef} width="400" height="50" />
        </>
    );
};

export default ColorPaletteCanvas;
