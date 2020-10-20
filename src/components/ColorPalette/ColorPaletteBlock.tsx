import React, { useState } from "react";
import { ColorTranslator } from "colortranslator";
import ColorPaletteLabel from "./ColorPaletteLabel";

interface IColorPaletteBlock {
    block_title: string;
    color_arr: Array<number>[];
}

const ColorPaletteBlock: React.FC<IColorPaletteBlock> = ({
    block_title,
    color_arr,
}) => {
    const [checkedIdx, setCheckedIdx] = useState();
    const handleClick = (value: string, idx: number) => {
        navigator.clipboard.writeText(value);
        setCheckedIdx;
    };
    return (
        <div className="py-6 ml-6 border-b border-gray-400">
            <div className="inline-block text-lg font-medium bg-gray-600 text-white rounded-md px-2 py-1">
                {block_title}
            </div>
            <div className="flex flex-wrap">
                {color_arr.map((color, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col flex items-center justify-center mr-4 mt-4 font-smaller"
                    >
                        <div
                            className={`h-16 w-24 m-1 rounded-md shadow-inner shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
                            style={{
                                backgroundColor: `hsl(${color[0]},${color[1]}%,${color[2]}%)`,
                            }}
                        />
                        <ColorPaletteLabel
                            labelTitle="RGB"
                            labelValue={
                                new ColorTranslator(
                                    `hsl(${color[0]},${color[1]}%,${color[2]}%)`
                                ).RGB
                            }
                            handleClick={handleClick}
                            idx={idx}
                        />
                        <ColorPaletteLabel
                            labelTitle="HSL"
                            labelValue={`hsl(${color[0]},${color[1]}%,${color[2]}%)`}
                            handleClick={handleClick}
                            idx={idx}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPaletteBlock;
