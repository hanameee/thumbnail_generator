import React, { useState } from "react";
import FontChart from "../FontChart/FontChart";
import Color from "./Color";

const Result = () => {
    const [tab, setTab] = useState("color");
    return (
        <>
            <nav className="shadow">
                <ul className="flex text-white h-10 bg-gray-500">
                    <li
                        className={`flex flex-row items-center px-6 hover:bg-gray-600 ${
                            tab == "color" ? "bg-gray-600" : ""
                        } cursor-pointer`}
                        onClick={() => {
                            setTab("color");
                        }}
                    >
                        색상
                    </li>
                    <li
                        className={`flex flex-row items-center px-6 hover:bg-gray-600 ${
                            tab == "font" ? "bg-gray-600" : ""
                        } cursor-pointer`}
                        onClick={() => setTab("font")}
                    >
                        폰트
                    </li>
                </ul>
            </nav>
            {tab === "color" ? <Color /> : <FontChart />}
        </>
    );
};

export default Result;
