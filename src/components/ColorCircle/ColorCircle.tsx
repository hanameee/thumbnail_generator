import React from "react";

interface IColorCircleProps {
    colorName: string;
    color: string;
}

const ColorCircle: React.FC<IColorCircleProps> = ({ colorName, color }) => {
    return (
        <div
            className={`h-16 w-16 m-1 rounded-full shadow-inner shadow-2xl bg-${color}-500 flex items-center justify-center hover:border-${color}-400 hover:bg-${color}-600 transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
        >
            <span className="m-1 text-white">{colorName}</span>
        </div>
    );
};

export default ColorCircle;
