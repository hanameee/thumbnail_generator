import React, { useState, useEffect } from "react";
import ColorCircle from "../ColorCircle/ColorCircle";
ColorCircle;
interface IColorPaletteProps {
    color: Array<number>;
}
const ColorPalette: React.FC<IColorPaletteProps> = ({ color }) => {
    const getMonochromatic = () => {
        const origin_lightness = color[2];
        const base = origin_lightness % 20;
        const monochromatic_hsl_arr = [];
        for (let i = 4; i >= 0; i--) {
            monochromatic_hsl_arr.push(
                color.slice(0, 2).concat([base + i * 20])
            );
        }
        return monochromatic_hsl_arr;
    };
    const getAnalogous = () => {
        const origin_hue = color[0];
        const base = origin_hue;
        const analogous_hsl_arr = [];
        for (let i = -2; i < 3; i++) {
            analogous_hsl_arr.push(
                [
                    base + i * 30 < 0 ? base + i * 30 + 360 : base + i * 30,
                ].concat(color.slice(1, 3))
            );
        }
        return analogous_hsl_arr;
    };
    const getComplementary = () => {
        const origin_hue = color[0];
        const complementary_hsl_arr = [];
        for (let i = 0; i < 2; i++) {
            complementary_hsl_arr.push(
                [
                    origin_hue + i * 180 < 0
                        ? color[0] - i * 180
                        : color[0] + i * 180,
                ].concat(color.slice(1, 3))
            );
        }
        return complementary_hsl_arr;
    };

    const monochromatic_hsl_arr = getMonochromatic();
    const analogus_hsl_arr = getAnalogous();
    const complementary_hsl_arr = getComplementary();
    return (
        <div className="w-full h-full" style={{ backgroundColor: `${color}` }}>
            <h2 className="text-xl font-bold leading-tight text-gray-900">
                보색
                <div className="flex">
                    {complementary_hsl_arr.map((hsl) => (
                        <div
                            className={`h-16 w-16 m-1 rounded-full shadow-inner shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
                            style={{
                                backgroundColor: `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`,
                            }}
                        ></div>
                    ))}
                </div>
            </h2>
            <h2 className="text-xl font-bold leading-tight text-gray-900">
                단색
                <div className="flex">
                    {monochromatic_hsl_arr.map((hsl) => (
                        <div
                            className={`h-16 w-16 m-1 rounded-full shadow-inner shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
                            style={{
                                backgroundColor: `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`,
                            }}
                        ></div>
                    ))}
                </div>
            </h2>
            <h2 className="text-xl font-bold leading-tight text-gray-900">
                유사색
                <div className="flex">
                    {analogus_hsl_arr.map((hsl) => (
                        <div
                            className={`h-16 w-16 m-1 rounded-full shadow-inner shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
                            style={{
                                backgroundColor: `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`,
                            }}
                        ></div>
                    ))}
                </div>
            </h2>
        </div>
    );
};

export default ColorPalette;
