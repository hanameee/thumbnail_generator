import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Result from "./Result/Result";

export default function Layout() {
    const [menus, setMenus] = useState(null);
    const [color, setColor] = useState(null);
    return (
        <div className="flex w-full min-h-screen">
            <div className="w-1/3 md:w-1/4 bg-gray-300 min-h-full shadow">
                <Sidebar setMenus={setMenus} setColor={setColor} />
            </div>
            <div className="w-2/3 md:w-3/4 min-h-full h-full">
                {menus && <Result menus={menus} color={color} />}
            </div>
        </div>
    );
}
