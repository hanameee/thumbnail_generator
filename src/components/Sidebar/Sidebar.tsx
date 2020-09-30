import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import colorData from "@/data/colorData";
import ColorCircle from "../ColorCircle/ColorCircle";
import { colorType } from "@/type/scheme";

export default function Sidebar() {
    const [selectedWord, setSelectedWord] = useState("");
    const data = colorData.colorNameOptions;
    return (
        <div className="p-5">
            <h2 className="my-2">1. 어떤 느낌을 원하시나요?</h2>
            <Dropdown
                selectedData={selectedWord}
                setSelectedData={setSelectedWord}
                menus={Object.keys(colorData.chartWordPosition)}
            />
            <h2 className="pt-5 my-2">2. 선호하는 색상을 골라주세요</h2>
            <div className="flex flex-wrap justify-center">
                {Object.keys(data).map((colorName: colorType) => (
                    <ColorCircle
                        key={colorName}
                        colorName={colorName}
                        color={data[colorName]}
                    />
                ))}
            </div>
            <div className="pt-5 flex justify-center">
                <button className="bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm">
                    띰 생성하기
                </button>
            </div>
        </div>
    );
}
