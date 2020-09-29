import React from "react";
import ColorChart from "../ColorChart/ColorChart";

export default function Sidebar() {
    return (
        <div className="p-5">
            <h2>1.어떤 느낌을 원하시나요?</h2>
            <input
                className="bg-white focus:outline-none border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal shadow-sm"
                type="email"
                placeholder="따뜻한"
            />
            <ColorChart />
            <h2 className="pt-5">2.어떤 기능이 필요하신가요?</h2>
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
