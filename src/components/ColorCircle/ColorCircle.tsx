import React from "react";

interface IColorCircleProps {
    rgb: Array<number>;
    idx: number;
    selectedColor: number;
    setSelectedColor: Function;
}

const ColorCircle: React.FC<IColorCircleProps> = ({
    rgb,
    idx,
    selectedColor,
    setSelectedColor,
}) => {
    const RGBString = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    return (
        <div
            className={`h-16 w-16 m-1 rounded-full shadow-inner shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
            onClick={() => setSelectedColor(idx)}
            style={{
                backgroundColor: RGBString,
            }}
        >
            {selectedColor === idx ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-12 w-12 stroke-2 text-white border-gray-500"
                    filter="drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2))"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            ) : (
                ""
            )}
        </div>
    );
};

export default ColorCircle;
