import React from "react";
import { ColorTranslator } from "colortranslator";

interface IColorPaletteBlock {
    block_title: string;
    color_arr: Array<number>[];
}

const ColorPaletteBlock: React.FC<IColorPaletteBlock> = ({
    block_title,
    color_arr,
}) => {
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
                        <div className="inline-flex flex-row items-center w-full rounded-lg border border-gray-400 text-gray-700 hover:text-gray-500 border-gray-300 transition ease-in-out duration-150 shadow-sm my-2">
                            <div className="inline-block h-full font-medium border-r border-gray-400 w-12 flex justify-center items-center">
                                RGB
                            </div>
                            <div className="px-4 py-2 my-0 mx-auto">
                                {
                                    new ColorTranslator(
                                        `hsl(${color[0]},${color[1]}%,${color[2]}%)`
                                    ).RGB
                                }
                            </div>
                        </div>
                        <div className="inline-flex flex-row justify-center items-center w-full rounded-lg border border-gray-400 bg-white leading-5 text-gray-700 hover:text-gray-500 focus:outline-none border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 shadow-sm">
                            <div className="inline-block h-full font-medium border-r border-gray-400 w-12 flex justify-center items-center">
                                HSL
                            </div>
                            <div className="px-4 py-2 my-0 mx-auto">
                                {`hsl(${color[0]},${color[1]}%,${color[2]}%)`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPaletteBlock;
