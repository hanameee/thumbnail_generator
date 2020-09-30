import React, { useState } from "react";
import ColorChart from "../ColorChart/ColorChart";
import Dropdown from "../Dropdown/Dropdown";
import colorData from "@/data/colorData";

export default function Sidebar() {
    const [selectedWord, setSelectedWord] = useState("");
    return (
        <div className="p-5">
            <h2 className="my-2">1. 어떤 느낌을 원하시나요?</h2>
            <Dropdown
                selectedData={selectedWord}
                setSelectedData={setSelectedWord}
                menus={Object.keys(colorData.chartWordPosition)}
            />
            <h2 className="pt-5">2. 선호하는 색상을 골라주세요</h2>
            <div className="flex flex-col">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox checked:bg-green-500 h-4 w-4"
                    />
                    <span className="ml-2">색상 팔레트</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                    <span className="ml-2">폰트 팔레트</span>
                </label>
            </div>
            <div className="pt-5 flex justify-center">
                <button className="bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm">
                    띰 생성하기
                </button>
            </div>
        </div>
    );
}
