import React, { useState } from "react";
import ColorChart from "../ColorChart/ColorChart";
import FontChart from "../FontChart/FontChart";

const Result = () => {
    const [tab, setTab] = useState("Color");
    return (
        <>
            <nav>
                <ul>
                    <li onClick={() => setTab("Color")}>색상</li>
                    <li onClick={() => setTab("Font")}>폰트</li>
                </ul>
            </nav>
            {tab === "Color" ? <ColorChart /> : <FontChart />}
        </>
    );
};

export default Result;
