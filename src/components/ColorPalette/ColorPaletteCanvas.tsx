import React, { useEffect, useRef, useState } from "react";

interface IColorPaletteCanvasProps {
    colors: number[][];
}

const ColorPaletteCanvas: React.FC<IColorPaletteCanvasProps> = ({ colors }) => {
    let canvasRef = useRef(null);
    let [canvasHref, setCanvasHref] = useState("");
    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasContext = canvas.getContext("2d");
        let i = 0;
        for (let color of colors) {
            canvasContext.fillStyle = `hsl(${color[0]},${color[1]}%,${color[2]}%)`;
            canvasContext.fillRect(i * 50, 0, 50, canvasContext.canvas.height);
            i += 1;
        }
        setCanvasHref(canvas.toDataURL());
    }, [colors]);
    return (
        <div className="mb-8">
            <div className="border-b-2 border-gray-400 my-4 w-fit-content">
                색상 팔레트
            </div>
            <canvas ref={canvasRef} width={50 * colors.length} height="50" />
            <button
                type="button"
                className="inline-flex justify-center w-fit-content rounded-lg border border-gray-400 px-2 py-1 mt-2 bg-white leading-5 text-sm text-gray-700 focus:outline-none hover:text-gray-500 border-gray-300 transition ease-in-out duration-150 shadow-sm"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
            >
                <a href={canvasHref} download="palette.png">
                    이미지로 저장하기
                </a>
            </button>
        </div>
    );
};

export default ColorPaletteCanvas;
