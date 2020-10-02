import React from "react";
import ColorPaletteBlock from "./ColorPaletteBlock";

interface IColorPaletteProps {
    color: Array<number>;
}
const ColorPalette: React.FC<IColorPaletteProps> = ({ color }) => {
    const getMonochromatic = () => {
        const origin_lightness = color[2];
        const base = parseFloat((origin_lightness % 20).toFixed(1));
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
        <div className="flex flex-col">
            <ColorPaletteBlock
                block_title="보색"
                color_arr={complementary_hsl_arr}
            />
            <ColorPaletteBlock
                block_title="유사색"
                color_arr={analogus_hsl_arr}
            />
            <ColorPaletteBlock
                block_title="단색"
                color_arr={monochromatic_hsl_arr}
            />
        </div>
    );
};

export default ColorPalette;
